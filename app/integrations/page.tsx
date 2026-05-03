import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, CreditCard, BookOpen, Code, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Integrations | HMCTS LLC — Connected Hospitality Technology",
  description:
    "HMCTS integrates with the leading OTAs, payment gateways, and accounting platforms used by hotels in the US and UK — including Booking.com, Expedia, Stripe, Worldpay, Xero, and QuickBooks.",
}

const integrationCategories = [
  {
    icon: Globe,
    title: "Online Travel Agencies (OTAs)",
    description:
      "Two-way connectivity with the world's major booking platforms. Rates and availability sync in real time, eliminating double bookings and manual updates.",
    integrations: [
      {
        name: "Booking.com",
        detail: "Live availability and rate push with instant booking confirmation pull",
        badge: "US & UK",
      },
      {
        name: "Expedia / Hotels.com",
        detail: "Full two-way connectivity across the Expedia Group network",
        badge: "US & UK",
      },
      {
        name: "Airbnb",
        detail: "Sync short-stay availability for properties listed on Airbnb",
        badge: "US & UK",
      },
      {
        name: "Agoda",
        detail: "Connectivity to the Asia-Pacific and global Agoda network",
        badge: "Global",
      },
      {
        name: "Google Hotel Ads",
        detail: "Direct rate bidding and availability display on Google Search",
        badge: "US & UK",
      },
      {
        name: "Vrbo / HomeAway",
        detail: "For properties offering short-term rental alongside hotel rooms",
        badge: "US & UK",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    description:
      "Secure payment processing in USD and GBP with the leading gateway providers in both the US and UK markets. All integrations are PCI DSS compliant.",
    integrations: [
      {
        name: "Stripe",
        detail: "Card processing in USD and GBP. Used across the US and UK",
        badge: "US & UK",
      },
      {
        name: "Worldpay",
        detail: "A leading payment gateway widely adopted across UK hospitality",
        badge: "UK",
      },
      {
        name: "Adyen",
        detail: "Multi-currency processing for global and enterprise hotel groups",
        badge: "US & UK",
      },
      {
        name: "Authorize.net",
        detail: "Popular US payment gateway for independent hotels",
        badge: "US",
      },
      {
        name: "Braintree",
        detail: "PayPal-backed gateway with strong US and international coverage",
        badge: "US & UK",
      },
      {
        name: "Square",
        detail: "For properties using Square at point of sale or front desk",
        badge: "US",
      },
    ],
  },
  {
    icon: BookOpen,
    title: "Accounting & Finance",
    description:
      "Export financial data directly to your accounting software. Automate invoice generation, reconciliation, and reporting for both USD and GBP transactions.",
    integrations: [
      {
        name: "Xero",
        detail: "The most widely used accounting platform in UK hospitality",
        badge: "UK",
      },
      {
        name: "QuickBooks",
        detail: "The leading accounting solution for US small businesses and hotels",
        badge: "US",
      },
      {
        name: "Sage",
        detail: "Enterprise accounting integration for larger property groups",
        badge: "UK & Global",
      },
      {
        name: "FreeAgent",
        detail: "Popular with smaller UK hospitality businesses",
        badge: "UK",
      },
    ],
  },
  {
    icon: Code,
    title: "API & Custom Integrations",
    description:
      "HMCTS provides a documented REST API for custom integrations, third-party development, and enterprise system connections. Build bespoke workflows tailored to your operation.",
    integrations: [
      {
        name: "REST API",
        detail: "Full read/write access to reservations, guests, rates, and availability",
        badge: "All Plans",
      },
      {
        name: "Webhooks",
        detail: "Real-time event notifications for booking changes, check-ins, and more",
        badge: "Professional+",
      },
      {
        name: "GDS Connectivity",
        detail: "Global Distribution System access via Amadeus, Sabre, and Travelport",
        badge: "Enterprise",
      },
      {
        name: "Custom Integrations",
        detail: "Our team will scope and deliver bespoke integration projects",
        badge: "Enterprise",
      },
    ],
  },
]

const roadmap = [
  "Door lock system integration (ASSA ABLOY, Onity)",
  "POS integration (Lightspeed, Square, Toast)",
  "Review management (TrustYou, ReviewPro)",
  "Revenue management system (IDeaS, Duetto)",
  "CRM and email marketing (Mailchimp, HubSpot)",
  "Contactless check-in and digital key",
]

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=2064&auto=format&fit=crop"
              alt="Connected technology network"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32 max-w-7xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
              Integrations
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight max-w-3xl">
              Connected to the tools
              <span className="text-teal-400"> your hotel already uses</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              HMCTS integrates with the leading OTAs, payment gateways, and accounting platforms across both the US and UK markets — plus a REST API for custom connections.
            </p>
          </div>
        </section>

        {/* Integration Categories */}
        {integrationCategories.map((category, catIndex) => (
          <section key={category.title} className={`py-20 ${catIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">{category.description}</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900">{integration.name}</h3>
                      <span className="text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-2.5 py-0.5 whitespace-nowrap ml-2">
                        {integration.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{integration.detail}</p>
                    <div className="flex items-center gap-1.5 mt-4">
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      <span className="text-xs text-teal-700 font-medium">Fully integrated</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Integration Roadmap */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-5 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full">Coming Soon</Badge>
                <h2 className="text-4xl font-bold mb-5">Integration roadmap</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Our integration library is continuously expanding. The following integrations are in development or planned for upcoming releases. If you require a specific integration not listed, contact us — our API allows for custom development.
                </p>
                <ul className="space-y-3">
                  {roadmap.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <Zap className="w-4 h-4 text-teal-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Need a custom integration?</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  HMCTS provides a fully documented REST API with webhook support. Our enterprise team can scope, build, and deliver custom integrations for your specific technology stack.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full API documentation provided",
                    "Sandbox environment for testing",
                    "Dedicated integration support",
                    "Available on Professional and Enterprise plans",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-full w-full">
                  <Link href="/contact">Discuss a Custom Integration</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-teal-500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to connect your tech stack?</h2>
            <p className="text-xl text-teal-50 mb-10 leading-relaxed">
              Book a demonstration and our team will confirm every integration relevant to your property and explain the setup process.
            </p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-full shadow-lg font-semibold">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
