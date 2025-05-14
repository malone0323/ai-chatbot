import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="ResearchGenie Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="font-medium">ResearchGenie</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-sm hover:text-primary">
            Home
          </Link>
          <Link href="/search" className="text-sm hover:text-primary">
            Search
          </Link>
          <Link href="/news" className="text-sm hover:text-primary">
            News (Brand)
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-serif mb-4">Your Personal Research Assistant</h1>
        <p className="max-w-2xl mx-auto mb-8 text-gray-600">
          Discover, analyze, and organize scholarly research with the power of AI. ResearchGenie helps you find relevant
          papers and insights with sophisticated precision.
        </p>
        <Button variant="default" size="lg" className="bg-black hover:bg-gray-800 text-white">
          Research Now
        </Button>
        <div className="mt-12 relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jzp6tQB0wGd9AjJbUPe4OFTJwk7IOQ.png"
            alt="Modern architecture"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif text-center mb-4">Our Mission</h2>
        <p className="max-w-4xl mx-auto text-center mb-16 text-gray-600">
          At ResearchGenie, our mission is to revolutionize the way researchers explore, source, and synthesize academic
          knowledge. We strive to empower researchers with an intelligent AI-driven search engine that simplifies the
          discovery of relevant papers, helping them navigate vast repositories of scholarly work with precision and
          ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4">*</div>
            <h3 className="font-medium mb-2">Smart Search</h3>
            <p className="text-gray-600">
              Helping experts around the world conduct their research with AI-powered discovery tools.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">*</div>
            <h3 className="font-medium mb-2">Academic Contribution Coming Soon</h3>
            <p className="text-gray-600">
              Setting up for success by providing research grants for winning papers and innovative studies.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">*</div>
            <h3 className="font-medium mb-2">Collaboration Coming Soon</h3>
            <p className="text-gray-600">
              Share your work and collaborate with other experts in your field through our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Research Community</h2>
          <p className="mb-8">Stay informed about the latest updates, features, and news from ResearchGenie!</p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input type="email" placeholder="Type your email..." className="bg-gray-800 border-gray-700 text-white" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif text-center mb-16">ResearchGenie in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">1 Million +</div>
            <div className="text-gray-600">Research Papers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50 Thousand +</div>
            <div className="text-gray-600">Researchers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100 +</div>
            <div className="text-gray-600">Universities</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image
            src="/placeholder.svg?height=30&width=30"
            alt="ResearchGenie Logo"
            width={30}
            height={30}
            className="rounded"
          />
          <span className="text-sm">© 2024 ResearchGenie</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-sm hover:text-primary">
            Home
          </Link>
          <Link href="/search" className="text-sm hover:text-primary">
            Search
          </Link>
          <Link href="/news" className="text-sm hover:text-primary">
            News (Brand)
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}
