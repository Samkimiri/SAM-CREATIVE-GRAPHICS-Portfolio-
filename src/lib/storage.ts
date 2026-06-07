import { promises as fs } from "fs";
import path from "path";
import { MongoClient } from "mongodb";
import type { ContactPayload } from "@/lib/validation";

type ContactSubmission = ContactPayload & {
  id: string;
  createdAt: string;
};

let mongoClient: MongoClient | null = null;

async function getMongoClient() {
  if (!process.env.MONGODB_URI) return null;
  if (!mongoClient) mongoClient = new MongoClient(process.env.MONGODB_URI);
  await mongoClient.connect();
  return mongoClient;
}

export async function saveContactSubmission(payload: ContactPayload) {
  const submission: ContactSubmission = {
    ...payload,
    id: `scg_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
  };

  const client = await getMongoClient();
  if (client) {
    const dbName = process.env.MONGODB_DB || "sam_creative_graphics";
    await client.db(dbName).collection("contact_submissions").insertOne(submission);
    return submission;
  }

  const filePath = path.join(process.cwd(), "data", "contact-submissions.json");
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const current = await fs.readFile(filePath, "utf8").catch(() => "[]");
  const records = JSON.parse(current) as ContactSubmission[];
  records.unshift(submission);
  await fs.writeFile(filePath, JSON.stringify(records, null, 2));
  return submission;
}
