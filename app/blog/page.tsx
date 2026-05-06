import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog & Resources | HMCTS LLC — Hospitality Technology Insights",
  description:
    "Industry insights, best practices, and guidance for hotel operators in the US and UK. PMS advice, hospitality technology trends, and revenue management strategies from the HMCTS team.",
}

const articles = [
  {
    slug: "evolution-of-pms-2025-2026",
    title: "The Evolution of Property Management Systems in 2025–2026",
    excerpt:
      "Cloud migration, AI-assisted pricing, and API-first architecture are reshaping the PMS landscape. Here is what independent hotel operators need to know about the next generation of property management technology.",
    category: "Technology Trends",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2025&auto=format&fit=crop",
    imageAlt: "Modern hotel technology interface",
  },
  {
    slug: "key-pms-features-independent-hotels",
    title: "Key Features Every Independent Hotel Needs in a PMS",
    excerpt:
      "Not all property management systems are created equal. For independent hotels operating without the IT resources of a branded chain, choosing the right feature set can make the difference between a system that helps and one that hinders.",
    category: "Best Practice",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Hotel front desk operations",
  },
  {
    slug: "navigating-hospitality-technology-us-uk",
    title: "Navigating Hospitality Technology in the US & UK Markets",
    excerpt:
      "US and UK hotels share much in common, but the technology landscape — from payment gateways to OTA mix — differs considerably. A guide for operators managing properties in both markets, or expanding from one to the other.",
    category: "Market Insights",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Hotel lobby in the United Kingdom",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
              Resources &amp; Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight max-w-3xl">
              Hospitality technology
              <span className="text-teal-400"> insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Practical guidance for hotel operators navigating technology decisions in the US and UK markets. Written by our team, informed by 30+ years of collective industry experience.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Latest Article</p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={articles[0].image}
                  alt={articles[0].imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">
                  {articles[0].category}
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 text-balance leading-snug">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center gap-5 text-sm text-gray-500 mb-8">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                  <Link href={`/blog/${articles[0].slug}`}>
                    Read Article <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">All Articles</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-teal-200 transition-all"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-teal-50 text-teal-700 border-teal-200 rounded-full text-xs">
                      {article.category}
                    </Badge>
                    <h3 className="font-bold text-xl mb-3 text-gray-900 leading-snug text-balance">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1"
                      >
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to see HMCTS in action?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto">
              Book a personalised demonstration with our team. No commitment required.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-5 rounded-full">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
