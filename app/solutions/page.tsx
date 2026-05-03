import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Building, Home, Users, Star, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Solutions | HMCTS LLC — Who We Serve",
  description:
    "HMCTS LLC serves independent hotels, boutique hotel groups, serviced apartments, and B&Bs across the United States and United Kingdom with purpose-built property management software.",
}

const segments = [
  {
    icon: Building,
    title: "Independent Hotels",
    subtitle: "From 10 to 300 rooms",
    description:
      "Independent hotels are at the heart of what we do. Without the backing of a large brand's technology budget, independent operators often find themselves using outdated systems or stitching together software that was never designed to work together. HMCTS gives independent hotels access to a fully integrated PMS at a price point that makes commercial sense.",
    challenges: [
      "Competing against branded chains with superior technology",
      "Managing multiple OTA channels without double-booking",
      "Limited IT resource for complex implementations",
      "Need for clear reporting to satisfy owner and investor requirements",
    ],
    howWeHelp: [
      "All-in-one platform eliminating the need for multiple systems",
      "Automated channel management across Booking.com, Expedia, and Airbnb",
      "Simple implementation with dedicated onboarding support",
      "Owner-level reporting dashboards with RevPAR and ADR tracking",
    ],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Independent hotel lobby",
  },
  {
    icon: Star,
    title: "Boutique Hotel Groups",
    subtitle: "2 to 15 properties",
    description:
      "Boutique groups face unique complexity: each property has its own character and operational needs, but the group requires consolidated reporting, consistent brand standards, and efficient central oversight. HMCTS supports multi-property management with property-level flexibility and group-level visibility.",
    challenges: [
      "Consolidating reporting across multiple properties",
      "Maintaining brand consistency while allowing property-level flexibility",
      "Central revenue management across the portfolio",
      "Shared services teams serving multiple sites",
    ],
    howWeHelp: [
      "Multi-property dashboard with consolidated group reporting",
      "Property-level customisation within group-level controls",
      "Centralised rate and availability management",
      "Group-level guest profile linking across properties",
    ],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Boutique hotel property",
  },
  {
    icon: Home,
    title: "Serviced Apartments",
    subtitle: "Short and extended stay",
    description:
      "Serviced apartments operate differently to hotels. Longer stays, weekly rate structures, utility management, and a different check-in profile all require a PMS that can flex to match. HMCTS supports serviced apartment operators with the features that matter most to their model.",
    challenges: [
      "Rate structures that differ from standard nightly hotel rates",
      "Extended stay billing with weekly and monthly invoicing",
      "Housekeeping scheduling for longer-stay guests",
      "Corporate account management and direct billing",
    ],
    howWeHelp: [
      "Flexible rate periods: nightly, weekly, and monthly configurations",
      "Automated extended-stay billing and corporate invoice generation",
      "Housekeeping scheduling adapted for serviced apartment frequency",
      "Corporate direct billing with company account management",
    ],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Modern serviced apartment",
  },
  {
    icon: Users,
    title: "Bed & Breakfasts and Guest Houses",
    subtitle: "Small properties, big ambitions",
    description:
      "B&Bs and guest houses often operate with one or two staff members wearing multiple hats. They need technology that is fast to learn, easy to use daily, and does not require a dedicated IT team to maintain. HMCTS Starter is purpose-built for small accommodation operators who want professional tools without professional complexity.",
    challenges: [
      "Limited time for staff training and system administration",
      "Cost sensitivity — technology needs to justify its cost quickly",
      "OTA dependency and the need to drive more direct bookings",
      "Simple reporting sufficient for owner-operator decision making",
    ],
    howWeHelp: [
      "Intuitive interface designed for non-technical users",
      "Rapid setup and onboarding — typically operational within days",
      "Direct booking tools to reduce OTA commission costs",
      "Clear, owner-friendly reporting without complexity",
    ],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Cosy bed and breakfast",
  },
]

const markets = [
  {
    flag: "🇺🇸",
    country: "United States",
    detail:
      "We understand the US hospitality market — from STR regulations in major cities to the tax and payment requirements of operating across multiple states. Our USD pricing and US-based legal structure make us a natural fit for US hotel operators.",
    points: [
      "USD pricing as standard",
      "US payment gateways: Stripe US, Authorize.net",
      "US accounting integration: QuickBooks",
      "CCPA-compliant data handling",
      "US-incorporated company (Delaware)",
    ],
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    detail:
      "With a UK office in Manchester and a UK-resident director, we have genuine on-the-ground presence in the UK market. We understand the regulatory landscape, the seasonal demand patterns, and the OTA ecosystem as it operates in the UK.",
    points: [
      "GBP pricing available",
      "UK payment gateways: Worldpay, Adyen UK",
      "UK accounting integration: Xero",
      "UK GDPR-compliant data handling",
      "UK office and UK-resident director",
    ],
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              alt="Various hotel types"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32 max-w-7xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
              Who We Serve
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight max-w-3xl">
              Software built for every type of
              <span className="text-teal-400"> independent property</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              From a 12-room guest house to a 15-property boutique group, HMCTS is designed to match the operational realities of independent hospitality operators across the US and UK.
            </p>
          </div>
        </section>

        {/* Segments */}
        {segments.map((segment, index) => (
          <section
            key={segment.title}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <segment.icon className="w-5 h-5 text-white" />
                    </div>
                    <Badge className="bg-teal-50 text-teal-700 border-teal-200 rounded-full">
                      {segment.subtitle}
                    </Badge>
                  </div>
                  <h2 className="text-4xl font-bold mb-5 text-gray-900 text-balance">{segment.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{segment.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Common Challenges</h4>
                      <ul className="space-y-2">
                        {segment.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gray-400 mt-1">—</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-700 mb-3 text-sm uppercase tracking-wider">How HMCTS Helps</h4>
                      <ul className="space-y-2">
                        {segment.howWeHelp.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 md:h-[460px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={segment.image}
                    alt={segment.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* US & UK Markets */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full">Markets Served</Badge>
              <h2 className="text-4xl font-bold mb-4">US and UK expertise, in one platform</h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                HMCTS is one of the few PMS providers with genuine operational knowledge of both the US and UK hospitality markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {markets.map((market) => (
                <div key={market.country} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-5">
                    <Globe className="w-6 h-6 text-teal-400" />
                    <h3 className="text-2xl font-bold">{market.country}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">{market.detail}</p>
                  <ul className="space-y-2">
                    {market.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-teal-500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Not sure which plan fits your property?</h2>
            <p className="text-xl text-teal-50 mb-10 leading-relaxed">
              Speak with our team for a free, no-obligation consultation. We will recommend the right configuration for your operation.
            </p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-full shadow-lg font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
