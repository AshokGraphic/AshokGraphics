/* ============================================================
 *  ASHOK GAWALI GRAFIX — CENTRAL EDITABLE SITE DATA
 *  --------------------------------------------------
 *  Edit text, image, YouTube ID, contact info, or category
 *  here and it updates everywhere automatically.
 *
 *  To add a YouTube video: copy the ID from the URL
 *      https://youtu.be/CWj1aLEuvK4  →  "CWj1aLEuvK4"
 *  and paste it as `youtubeId`.
 *
 *  Aspect:
 *    - "portrait" → 9:16 vertical Shorts/Reels (default for new agri shop ads)
 *    - "video"    → 16:9 landscape
 * ============================================================ */

export type VideoItem = {
  title: string;
  youtubeId: string;
  thumbnail?: string;
  duration?: string;
  /** "portrait" (9:16) or "video" (16:9). Defaults to "video". */
  aspect?: "portrait" | "video";
};

export type Category = {
  slug: string;
  title: string;
  emoji: string;
  iconKey: string;
  color: string;
  cover: string;
  short: string;
  long: string;
  videos: VideoItem[];
};

/* ------------- BUSINESS / CONTACT ------------- */
export const SITE = {
  brand: "Ashok Gawali Grafix",
  tagline: "AI Powered TV Commercials — For Every Business. Every Brand.",
  phone: "+91 9145026302",
  phoneRaw: "919145026302",
  email: "ashokgaming46790@gmail.com",
  address:
    "At Post Gangamasala, Tq. Majalgaon, Dist. Beed – 431131, Maharashtra, India",
  whatsappMessage: "Hi, I want to order an AI video ad for my business",
  socials: { youtube: "#", instagram: "#", facebook: "#" },
  heroFeaturedYoutubeId: "",
};

export const WA_URL = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

export const waUrlFor = (msg: string) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;

/* ------------- IMAGE POOL ------------- */
const IMG = {
  agri: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  agriShop: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
  mobile: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
  cloth: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
  jewel: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
  food: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  pet: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
  auto: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
  other: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  health: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  bank: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
};

const mk = (
  title: string,
  youtubeId: string,
  fallback: string,
  aspect: "portrait" | "video" = "portrait",
  duration = "0:30",
): VideoItem => ({ title, youtubeId, thumbnail: fallback, duration, aspect });

/* ============================================================
 *  CATEGORIES + REAL YOUTUBE VIDEOS
 * ============================================================ */
export const CATEGORIES: Category[] = [
  {
    slug: "agriculture-products",
    title: "Fertilizer & Agri Products",
    emoji: "🌿",
    iconKey: "sprout",
    color: "#1F7A3D",
    cover: IMG.agri,
    short: "Fertilizers, Pesticides, Seeds & Nano Inputs",
    long: "Premium AI commercials for fertilizer, pesticide, seed, drip-irrigation and nano-input brands across India.",
    videos: [
      mk("Fertilizer Promo 07", "PsnazMziuz4", IMG.agri),
    ],
  },
  {
    slug: "agriculture-shops",
    title: "Agriculture Shops / Krishi Seva Kendra",
    emoji: "🌾",
    iconKey: "store",
    color: "#E48F45",
    cover: IMG.agriShop,
    short: "Krishi Seva Kendra promotional films",
    long: "Promotional AI videos for Krishi Seva Kendras and agri-input dealers across Maharashtra.",
    videos: [
      mk("Krishi Seva Promo 01", "CWj1aLEuvK4", IMG.agriShop),
      mk("Krishi Seva Promo 02", "NPF70e5HhS0", IMG.agriShop),
      mk("Krishi Seva Promo 03", "-Fb25t3Qqo8", IMG.agriShop),
      mk("Krishi Seva Promo 04", "HTECAyJ_TJc", IMG.agriShop),
      mk("Krishi Seva Promo 05", "Pxcgxww6GAE", IMG.agriShop),
      mk("Krishi Seva Promo 06", "fx5dttcLyQo", IMG.agriShop),
      mk("Krishi Seva Promo 07", "YEc18bKa0eI", IMG.agriShop),
      mk("Krishi Seva Promo 08", "DzR_jh6-Vvw", IMG.agriShop),
      mk("Krishi Seva Promo 09", "NT5NUNwN5tM", IMG.agriShop),
      mk("Krishi Seva Promo 10 — Landscape", "0491ZCMAa_k", IMG.agriShop, "video"),
      mk("Krishi Seva Promo 11", "bVWi56Djuj4", IMG.agriShop),
    ],
  },
  {
    slug: "mobile-shops",
    title: "Mobile Shops & Electronics",
    emoji: "📱",
    iconKey: "smartphone",
    color: "#2563EB",
    cover: IMG.mobile,
    short: "Mobile, accessories & festival promo ads",
    long: "New phone launches, festival sales and accessory promos for mobile retailers.",
    videos: [
      mk("Mobile Shop Promo 01", "AiVDJBVldUU", IMG.mobile),
      mk("Mobile Shop Promo 02", "fiUr8EOYaPA", IMG.mobile),
      mk("Mobile Shop Promo 03", "oz4MPfjb17E", IMG.mobile),
      mk("Mobile Shop Promo 04", "uJavBHKBb5M", IMG.mobile),
    ],
  },
  {
    slug: "automobile",
    title: "Vehicles & Automobile",
    emoji: "🚗",
    iconKey: "bike",
    color: "#0F766E",
    cover: IMG.auto,
    short: "Bike, EV & vehicle showroom commercials",
    long: "Showroom and product commercials for two-wheelers, cars and electric vehicles.",
    videos: [
      mk("Vehicle Showroom Promo", "6x8vQLZiA_o", IMG.auto),
    ],
  },
  {
    slug: "health-products",
    title: "Health & Wellness Products",
    emoji: "💊",
    iconKey: "heart",
    color: "#DC2626",
    cover: IMG.health,
    short: "Pain relief, ayurveda & wellness brand ads",
    long: "AI commercials for ayurveda, pain relief and wellness brands like Zandu Balm.",
    videos: [
      mk("Zandu Balm Product Ad", "oRTJIHOW09M", IMG.health),
    ],
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    emoji: "🏦",
    iconKey: "bank",
    color: "#0EA5A4",
    cover: IMG.bank,
    short: "Bank, loan & finance promotional films",
    long: "Promotional AI videos for banks, finance companies, loan products and digital banking services.",
    videos: [
      mk("Banking Promo Ad", "IDQjo1A8_ak", IMG.bank),
    ],
  },
  {
    slug: "clothing-stores",
    title: "Clothing & Fashion Store",
    emoji: "👔",
    iconKey: "shirt",
    color: "#B6453B",
    cover: IMG.cloth,
    short: "Men's, ladies, fashion & festival ads",
    long: "Conversion-ready ad films for textile shops, fashion brands and festival collections.",
    videos: [
      mk("Men's Wear Collection", "", IMG.cloth),
      mk("Ladies Wear Showcase", "", IMG.cloth),
      mk("Festival Offer Ad", "", IMG.cloth),
      mk("Wedding Wear Collection", "", IMG.cloth),
    ],
  },
  {
    slug: "jewellery",
    title: "Jewellery & Accessories",
    emoji: "💍",
    iconKey: "gem",
    color: "#9333EA",
    cover: IMG.jewel,
    short: "Gold, silver, diamond & wedding ads",
    long: "Cinematic jewellery commercials that make every piece shine on screen.",
    videos: [
      mk("Jewellery Store Showcase", "", IMG.jewel),
      mk("Gold Collection Reel", "", IMG.jewel),
      mk("Diamond Collection Ad", "", IMG.jewel),
      mk("Wedding Collection Film", "", IMG.jewel),
    ],
  },
  {
    slug: "hotel-restaurant",
    title: "Hotel & Restaurant",
    emoji: "🍽️",
    iconKey: "food",
    color: "#DC2626",
    cover: IMG.food,
    short: "Restaurant, hotel & food promo videos",
    long: "Mouth-watering AI commercials for hotels, restaurants and food businesses.",
    videos: [
      mk("Hotel Promo", "", IMG.food),
      mk("Restaurant Special", "", IMG.food),
      mk("Catering Service Promo", "", IMG.food),
    ],
  },
  {
    slug: "pet-business",
    title: "Pet Business",
    emoji: "🐕",
    iconKey: "paw",
    color: "#0EA5A4",
    cover: IMG.pet,
    short: "Pet shop & pet care promo films",
    long: "AI ads for pet shops, accessories, food brands and grooming services.",
    videos: [
      mk("Pet Shop Promo", "", IMG.pet),
      mk("Pet Food Brand", "", IMG.pet),
      mk("Pet Grooming Center", "", IMG.pet),
    ],
  },
  {
    slug: "other-businesses",
    title: "Other Businesses",
    emoji: "🏠",
    iconKey: "home",
    color: "#7C3AED",
    cover: IMG.other,
    short: "Real estate, interiors, retail & more",
    long: "Electronics, interiors, real estate, cold drinks, farsan & digital marketing ads.",
    videos: [
      mk("Real Estate Promo", "", IMG.other),
      mk("Interior Design Studio", "", IMG.other),
      mk("Digital Marketing Agency", "", IMG.other),
    ],
  },
];

/* Hero video showcase — 4 real picks playing on home page */
export const HERO_VIDEOS: VideoItem[] = [
  mk("Krishi Seva Kendra", "EXPom_K8JgY", IMG.agriShop),
  mk("Fertilizer Brand Ad", "RwFffATK-8k", IMG.agri),
  mk("Promo 3", "EAfIIESo0-Y", IMG.mobile),
  mk("Promo 4 ", "fejgI_vIIdk", IMG.auto),
];

/* ------------- TESTIMONIALS ------------- */
export const TESTIMONIALS = [
  { q: "Excellent technology. AI video quality is amazing, delivered within 24 hours. Bookings increased.", n: "Rahul Deshmukh", r: "Agri Business Owner" },
  { q: "Best AI video ads in Maharashtra. Our fertilizer brand reach grew very fast on social media.", n: "Sandeep Patil", r: "Fertilizer Dealer" },
  { q: "Professional, fast, and the quality is just like a TV commercial. Highly recommended for agri brands.", n: "Kiran Jadhav", r: "Seed Company Owner" },
  { q: "Mobile shop ad got us 3x walk-ins during the festival sale. Ashok bhai's team is the best!", n: "Mahesh Shinde", r: "Mobile Shop Owner" },
  { q: "Our jewellery collection looked stunning. Wedding-season sales boosted because of this video.", n: "Priya Kale", r: "Jewellery Shop Owner" },
];

/* Top trusted brands — real company logos via Clearbit logo API. */
export const BRANDS: { name: string; logo: string }[] = [
  { name: "Meghmani", logo: "https://logo.clearbit.com/meghmani.com" },
  { name: "Syngenta", logo: "https://logo.clearbit.com/syngenta.com" },
  { name: "UPL", logo: "https://logo.clearbit.com/upl-ltd.com" },
  { name: "Bayer", logo: "https://logo.clearbit.com/bayer.com" },
  { name: "Corteva", logo: "https://logo.clearbit.com/corteva.com" },
  { name: "Mahadhan", logo: "https://logo.clearbit.com/mahadhan.co.in" },
  { name: "Krishidhan Seeds", logo: "https://logo.clearbit.com/krishidhanseeds.com" },
  { name: "FMC", logo: "https://logo.clearbit.com/fmc.com" },
  { name: "Coromandel", logo: "https://logo.clearbit.com/coromandel.biz" },
];
