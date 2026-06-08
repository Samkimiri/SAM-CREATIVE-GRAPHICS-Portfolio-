import { promises as fs } from "fs";
import path from "path";
import { MongoClient } from "mongodb";
import { portfolioItems } from "@/data/portfolio";

export type ProjectRecord = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  featured?: boolean;
  createdAt: string;
};

let mongoClient: MongoClient | null = null;

function clean(value: unknown, maxLength: number) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

async function getMongoClient() {
  if (!process.env.MONGODB_URI) return null;
  if (!mongoClient) mongoClient = new MongoClient(process.env.MONGODB_URI);
  await mongoClient.connect();
  return mongoClient;
}

function fallbackProjects(): ProjectRecord[] {
  return portfolioItems.map((item, index) => ({
    id: `sample-${index + 1}`,
    title: item.title,
    category: item.category,
    description: item.description,
    featured: true,
    createdAt: new Date(0).toISOString(),
  }));
}

async function readLocalProjects() {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const current = await fs.readFile(filePath, "utf8").catch(() => "[]");
  return JSON.parse(current) as ProjectRecord[];
}

async function writeLocalProjects(projects: ProjectRecord[]) {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(projects, null, 2));
}

export async function getProjects() {
  const client = await getMongoClient();
  if (client) {
    const dbName = process.env.MONGODB_DB || "sam_creative_graphics";
    const projects = await client
      .db(dbName)
      .collection<ProjectRecord>("projects")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    return projects.length ? projects : fallbackProjects();
  }

  const localProjects = await readLocalProjects();
  return localProjects.length ? localProjects : fallbackProjects();
}

export async function createProject(input: Record<string, unknown>) {
  const project: ProjectRecord = {
    id: `project_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    title: clean(input.title, 120),
    category: clean(input.category, 90),
    description: clean(input.description, 700),
    imageUrl: clean(input.imageUrl, 1_500_000),
    featured: Boolean(input.featured ?? true),
    createdAt: new Date().toISOString(),
  };

  const errors: Record<string, string> = {};
  if (!project.title) errors.title = "Project title is required.";
  if (!project.category) errors.category = "Project category is required.";
  if (project.description.length < 12) errors.description = "Description should be at least 12 characters.";
  if (project.imageUrl && !project.imageUrl.startsWith("data:image/") && !project.imageUrl.startsWith("https://")) {
    errors.imageUrl = "Use an uploaded image or valid HTTPS image URL.";
  }

  if (Object.keys(errors).length) return { valid: false, errors, project };

  const client = await getMongoClient();
  if (client) {
    const dbName = process.env.MONGODB_DB || "sam_creative_graphics";
    await client.db(dbName).collection<ProjectRecord>("projects").insertOne(project);
    return { valid: true, errors: {}, project };
  }

  const projects = await readLocalProjects();
  projects.unshift(project);
  await writeLocalProjects(projects);
  return { valid: true, errors: {}, project };
}

export function isAuthorizedProjectAdmin(request: Request) {
  const expected = process.env.ADMIN_UPLOAD_PASSWORD;
  const provided = request.headers.get("x-admin-password") || "";
  return Boolean(expected && provided === expected);
}
