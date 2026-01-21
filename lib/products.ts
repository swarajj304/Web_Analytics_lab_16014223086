export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  image: string
  images: string[]
  category: string
  featured: boolean
  rating: number
  reviews: number
  inStock: boolean
  details: string[]
}

export const categories = [
  { id: "living", name: "Living Room", productCount: 24 },
  { id: "bedroom", name: "Bedroom", productCount: 18 },
  { id: "kitchen", name: "Kitchen", productCount: 32 },
  { id: "decor", name: "Decor", productCount: 45 },
  { id: "lighting", name: "Lighting", productCount: 15 },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton Throw Blanket",
    price: 89,
    originalPrice: 120,
    description: "Luxuriously soft organic cotton throw blanket, perfect for cozy evenings. Hand-woven with sustainable materials and natural dyes.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop",
    ],
    category: "living",
    featured: true,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    details: ["100% organic cotton", "Machine washable", "60\" x 50\" dimensions", "Ethically sourced"],
  },
  {
    id: "2",
    name: "Ceramic Artisan Vase",
    price: 65,
    description: "Handcrafted ceramic vase with a unique matte finish. Each piece is one-of-a-kind, crafted by skilled artisans.",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop",
    ],
    category: "decor",
    featured: true,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    details: ["Handcrafted ceramic", "Matte glaze finish", "8\" height", "Water-safe interior"],
  },
  {
    id: "3",
    name: "Minimalist Pendant Light",
    price: 195,
    description: "Modern pendant light with brass accents and frosted glass shade. Creates warm, ambient lighting for any space.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop",
    ],
    category: "lighting",
    featured: true,
    rating: 4.7,
    reviews: 56,
    inStock: true,
    details: ["Brass and glass construction", "E26 bulb compatible", "Adjustable cord length", "Dimmable"],
  },
  {
    id: "4",
    name: "Linen Bedding Set",
    price: 245,
    originalPrice: 310,
    description: "Premium French linen bedding set including duvet cover and two pillowcases. Gets softer with every wash.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049035634-7e2e6e5f9f4d?w=600&h=600&fit=crop",
    ],
    category: "bedroom",
    featured: true,
    rating: 4.9,
    reviews: 203,
    inStock: true,
    details: ["100% French linen", "Queen size", "OEKO-TEX certified", "Includes duvet cover + 2 pillowcases"],
  },
  {
    id: "5",
    name: "Wooden Serving Board",
    price: 48,
    description: "Live-edge walnut serving board, perfect for charcuterie and entertaining. Finished with food-safe mineral oil.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop",
    ],
    category: "kitchen",
    featured: false,
    rating: 4.6,
    reviews: 78,
    inStock: true,
    details: ["Solid walnut wood", "Live edge design", "Food-safe finish", "18\" x 8\" approximate size"],
  },
  {
    id: "6",
    name: "Scented Soy Candle",
    price: 32,
    description: "Hand-poured soy candle in a reusable ceramic vessel. Notes of sandalwood, amber, and vanilla.",
    image: "https://images.unsplash.com/photo-1602874801006-d5e6c7309792?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602874801006-d5e6c7309792?w=600&h=600&fit=crop",
    ],
    category: "decor",
    featured: false,
    rating: 4.8,
    reviews: 312,
    inStock: true,
    details: ["100% soy wax", "60+ hour burn time", "Cotton wick", "Reusable ceramic vessel"],
  },
  {
    id: "7",
    name: "Velvet Accent Chair",
    price: 425,
    description: "Mid-century modern accent chair with plush velvet upholstery and solid oak legs. A statement piece for any room.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop",
    ],
    category: "living",
    featured: true,
    rating: 4.7,
    reviews: 45,
    inStock: true,
    details: ["Velvet upholstery", "Solid oak frame", "28\"W x 30\"D x 32\"H", "350 lb weight capacity"],
  },
  {
    id: "8",
    name: "Stoneware Dinnerware Set",
    price: 158,
    description: "16-piece stoneware dinnerware set with reactive glaze finish. Microwave and dishwasher safe.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
    ],
    category: "kitchen",
    featured: false,
    rating: 4.5,
    reviews: 167,
    inStock: true,
    details: ["16-piece set", "Reactive glaze finish", "Microwave safe", "Dishwasher safe"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
