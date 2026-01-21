import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"
import { products, getFeaturedProducts } from "@/lib/products"
import { Truck, RefreshCw, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% protected checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated assistance",
  },
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Features Bar */}
        <section className="border-y border-border py-8 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CategoriesSection />

        {/* Featured Products */}
        <section id="products" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  Featured Products
                </h2>
                <p className="text-muted-foreground">
                  Our most loved pieces, handpicked for you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                All Products
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Explore our complete collection of thoughtfully designed home goods.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Lumière, we believe that beautiful design should be accessible to everyone.
                Each piece in our collection is thoughtfully curated to bring warmth,
                functionality, and timeless style to your home. We partner with artisans
                and sustainable manufacturers who share our commitment to quality and ethics.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <p className="font-serif text-4xl text-foreground mb-2">50+</p>
                  <p className="text-muted-foreground text-sm">Artisan Partners</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-foreground mb-2">10k+</p>
                  <p className="text-muted-foreground text-sm">Happy Customers</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-foreground mb-2">100%</p>
                  <p className="text-muted-foreground text-sm">Sustainable</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
