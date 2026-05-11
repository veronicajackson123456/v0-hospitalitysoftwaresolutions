import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

interface Section {
  id: string
  title: string
}

interface LegalLayoutProps {
  title: string
  subtitle?: string
  lastUpdated: string
  sections: Section[]
  children: React.ReactNode
}

export function LegalLayout({ title, subtitle, lastUpdated, sections, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <div className="pt-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl py-14">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/legal" className="hover:text-orange-400 transition-colors">
              Legal
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-300">{title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-balance">{title}</h1>
          {subtitle && <p className="mt-3 text-gray-400 text-lg">{subtitle}</p>}
        </div>
      </div>

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Table of Contents */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">On this page</h2>
                <nav className="flex flex-col gap-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-teal-50 rounded-xl border border-teal-100">
                  <p className="text-sm font-semibold text-gray-800 mb-1">Need help?</p>
                  <p className="text-xs text-gray-600 mb-3">
                    If you have any questions about our policies, contact us.
                  </p>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Contact us &rarr;
                  </Link>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Other policies</p>
                <div className="flex flex-col gap-1">
                    <Link href="/terms" className="text-xs text-gray-600 hover:text-orange-500 px-3 py-1.5 rounded-md hover:bg-orange-50 transition-colors">Terms &amp; Conditions</Link>
                    <Link href="/privacy" className="text-xs text-gray-600 hover:text-orange-500 px-3 py-1.5 rounded-md hover:bg-orange-50 transition-colors">Privacy Policy</Link>
                    <Link href="/refund" className="text-xs text-gray-600 hover:text-orange-500 px-3 py-1.5 rounded-md hover:bg-orange-50 transition-colors">Refund Policy</Link>
                    <Link href="/cookies" className="text-xs text-gray-600 hover:text-orange-500 px-3 py-1.5 rounded-md hover:bg-orange-50 transition-colors">Cookie Policy</Link>
                    <Link href="/disclaimer" className="text-xs text-gray-600 hover:text-orange-500 px-3 py-1.5 rounded-md hover:bg-orange-50 transition-colors">Disclaimer</Link>
                    <Link href="/accessibility" className="text-xs text-gray-600 hover:text-orange-500 px-3 py-1.5 rounded-md hover:bg-orange-50 transition-colors">Accessibility</Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <article className="flex-1 min-w-0">
              <div className="prose prose-gray max-w-none
                prose-h2:text-xl prose-h2:font-bold prose-h2:text-gray-900 prose-h2:mt-10 prose-h2:mb-4 prose-h2:scroll-mt-28
                prose-h3:text-base prose-h3:font-semibold prose-h3:text-gray-800 prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-li:text-gray-700 prose-li:leading-relaxed
                prose-strong:text-gray-900
                prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline">
                {children}
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
