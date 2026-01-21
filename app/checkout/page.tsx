import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export const metadata: Metadata = {
  title: "Checkout | Lumière",
  description: "Complete your order",
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
            Checkout
          </h1>
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
