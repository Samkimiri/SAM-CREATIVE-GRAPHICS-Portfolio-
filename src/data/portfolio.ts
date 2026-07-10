type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  colors: string;
  imageUrl?: string;
  imagePosition?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Brand Launch Identity",
    category: "Brand Identity",
    description: "A complete launch-ready visual system with bold campaign marks, color direction, and branded touchpoints.",
    colors: "from-skybrand to-rainbow",
  },
  {
    title: "Flash Sale Campaign",
    category: "Promotional Poster",
    description: "A bright retail promotion concept built for fast attention, clear offers, and social media conversion.",
    colors: "from-cobalt to-skybrand",
  },
  {
    title: "Creative Summit Poster",
    category: "Event Promotion",
    description: "A high-energy event poster direction with dramatic contrast, schedule blocks, and memorable visual rhythm.",
    colors: "from-rainbow to-aqua",
  },
  {
    title: "Restaurant Opening Promo",
    category: "Hospitality Design",
    description: "A warm food and lifestyle promotion layout designed for launches, menus, and location announcements.",
    colors: "from-aqua to-cobalt",
  },
  {
    title: "Open House Campaign",
    category: "Real Estate Flyer",
    description: "A clean property marketing concept with space for listing highlights, location cues, and premium visuals.",
    colors: "from-charcoal to-skybrand",
  },
  {
    title: "Concert Night Artwork",
    category: "Entertainment Poster",
    description: "A bold nightlife campaign layout with motion, contrast, and punchy visual elements for digital promotion.",
    colors: "from-skybrand to-rainbow",
  },
];
