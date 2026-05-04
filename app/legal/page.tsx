import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, FileText, Shield, Cookie, AlertTriangle, Eye, Mail, Phone, MapPin, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Legal | HMCTS - Hospitality Software Solutions",
  description:
    "Access all legal documents for HMCTS, including our Terms & Conditions, Privacy Policy, Cookie Policy, Refund Policy, Disclaimer, and Accessibility Statement.",
}

const legalPages = [
  {
    href: "/terms",
    icon: FileText,
    title: "Terms & Conditions",
    description:
      "The legally binding rules governing your use of the HMCTS website and services, including payments, cancellations, and user responsibilities.",
    lastUpdated: "April 5, 2025",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    href: "/privacy",
    icon: Shield,
    title: "Privacy Policy",
    description:
      "How we collect, use, store, and protect your personal information when you visit our Site or engage with our services.",
    lastUpdated: "April 5, 2025",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    href: "/refund",
    icon: DollarSign,
    title: "Refund Policy",
    description:
      "Our comprehensive refund policy outlining eligibility criteria, refund procedures, timelines, and exceptions for all HMCTS services.",
    lastUpdated: "April 5, 2025",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    href: "/cookies",
    icon: Cookie,
    title: "Cookie Policy",
    description:
      "A detailed explanation of the cookies and tracking technologies we use on our website, and how you can manage your preferences.",
    lastUpdated: "April 5, 2025",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    href: "/disclaimer",
    icon: AlertTriangle,
    title: "Disclaimer",
    description:
      "Important notices regarding the accuracy of the information on our Site, limitations of liability, and the professional nature of our content.",
    lastUpdated: "April 5, 2025",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    href: "/accessibility",
    icon: Eye,
    title: "Accessibility Statement",
    description:
      "Our commitment to digital accessibility, the standards we follow, known limitations, and how to report any accessibility barriers.",
    lastUpdated: "April 5, 2025",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="pt-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">HMCTS Legal</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-balance mb-4">
            Legal &amp; Compliance Documents
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Everything you need to know about how we operate, protect your data, and support your rights as a user of
            our website and services.
          </p>
        </div>
      </div>

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Legal documents grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {legalPages.map((page) => {
              const Icon = page.icon
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`group flex flex-col p-6 rounded-2xl border ${page.border} ${page.bg} hover:shadow-md transition-all duration-200`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm`}>
                      <Icon className={`w-5 h-5 ${page.color}`} />
                    </div>
                    <ChevronRight className={`w-5 h-5 ${page.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{page.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{page.description}</p>
                  <p className="text-xs text-gray-400 mt-4">Last updated: {page.lastUpdated}</p>
                </Link>
              )
            })}
          </div>

          {/* Company Info Panel */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-3">About HMCTS LLC</h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  HMCTS LLC &ndash; Hospitality Management Consultancy &amp; Technology Solutions is a US-registered
                  company (EIN: 37-2155102) specializing in hospitality software, consultancy, and training services.
                  We are committed to operating with transparency, integrity, and full compliance with applicable laws.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  All legal documents on this page are reviewed regularly and updated to reflect changes in our services
                  and applicable regulations. If you have any questions, please do not hesitate to contact us.
                </p>
              </div>
              <div className="md:w-72 shrink-0">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Contact Our Legal Team</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <a
                      href="mailto:info@hospitalitysoftwaresolutions.com"
                      className="text-sm text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      info@hospitalitysoftwaresolutions.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <a href="tel:+13025991401" className="text-sm text-gray-700 hover:text-orange-500 transition-colors">
                      +1 (302) 599-1401 (US)
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <a href="tel:+443333355520" className="text-sm text-gray-700 hover:text-orange-500 transition-colors">
                      +44 (0)333 335 5520 (UK)
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <address className="text-sm text-gray-700 not-italic">
                      131 Continental Drive<br />
                      Newark, Delaware 19713<br />
                      United States
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
