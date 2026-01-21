import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "living",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
    productCount: 24,
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop",
    productCount: 18,
  },
  {
    id: "decor",
    name: "Decor",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=600&fit=crop",
    productCount: 45,
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Explore our curated collections designed to transform every room in your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {category.productCount} products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
