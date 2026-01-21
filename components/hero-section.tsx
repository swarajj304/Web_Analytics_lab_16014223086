import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop"
          alt="Modern living room interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight text-pretty">
            Design your space, define your style
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Discover curated home goods that blend timeless elegance with modern comfort.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base bg-white text-foreground hover:bg-white/90">
              <Link href="/#products">Shop Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-white text-white hover:bg-white hover:text-foreground bg-transparent">
              <Link href="/#about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
