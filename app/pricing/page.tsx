import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing | HMCTS LLC — Property Management Software",
  description:
    "Simple, transparent pricing for independent hotels, boutique groups, and serviced apartments. Plans available in USD and GBP. No hidden fees.",
}

const plans = [
  {
    name: "Starter",
    tagline: "For single-property operators",
    priceUSD: 99,
    priceGBP: 79,
    period: "per month",
    features: [
      "Up to 30 rooms",
      "Front desk & reservations",
      "Check-in / check-out workflow",
      "Daily reporting & revenue summaries",
      "Booking.com & Expedia connectivity",
      "One payment gateway integration",
      "Email support (business hours)",
      "Onboarding & data migration",
    ],
    cta: "Request a Demo",
    highlighted: false,
  },
  {
    name: "Professional",
    tagline: "For growing independent hotels",
    priceUSD: 249,
    priceGBP: 199,
    period: "per month",
    features: [
      "Up to 150 rooms",
      "Everything in Starter",
      "Full channel manager (all major OTAs)",
      "Revenue optimisation tools",
      "Direct booking engine",
      "Multi-rate plan management",
      "Accounting integration (Xero or QuickBooks)",
      "Guest profile & history",
      "Housekeeping status management",
      "Priority email & phone support",
    ],
    cta: "Request a Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For multi-property groups",
    priceUSD: null,
    priceGBP: null,
    period: "custom",
    features: [
      "Unlimited rooms & properties",
      "Everything in Professional",
      "Multi-property dashboard",
      "GDS connectivity for corporate travel",
      "Custom API integrations",
      "Dedicated account manager",
      "On-site implementation support",
      "SLA-backed support agreement",
      "Custom contract terms in USD or GBP",
    ],
    cta: "Contact Our Team",
    highlighted: false,
  },
]

const faqs = [
  {
    q: "Are prices available in both USD and GBP?",
    a: "Yes. US-based clients are invoiced in US Dollars (USD). UK-based clients are invoiced in Pounds Sterling (GBP). The GBP and USD prices shown reflect standard rates for each market. All pricing is exclusive of applicable taxes — US clients are responsible for any applicable state sales tax, and UK clients will be charged VAT at the prevailing UK rate.",
  },
  {
    q: "Is there a setup fee or long-term contract?",
    a: "There are no long-term lock-in contracts on Starter or Professional plans. Implementation support is included. Enterprise clients may have a minimum term, which will be specified in their service agreement.",
  },
  {
    q: "Can I switch plans as my property grows?",
    a: "Yes. You can upgrade your plan at any time. The new plan pricing takes effect from the next billing cycle. Our team will assist with any configuration changes required by the upgrade.",
  },
  {
    q: "What payment methods do you accept?",
    a: "US clients are processed via Stripe or Authorize.net. UK clients are processed via Stripe or Worldpay. We accept major credit and debit cards. Bank transfer is available for annual Enterprise agreements.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer personalised demonstrations rather than self-serve trials, so our team can configure the platform to match your property type and walk you through the features most relevant to your operation. Request a demo to get started.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
              Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight max-w-3xl">
              Simple, transparent
              <span className="text-teal-400"> pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              All plans include onboarding support, data migration, and access to our full feature set for your tier.
              Pricing available in USD and GBP.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-8 flex flex-col ${
                    plan.highlighted
                      ? "bg-gray-900 text-white border-teal-500 shadow-xl shadow-teal-500/10 relative"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-teal-500 text-white border-0 rounded-full px-4 py-1 text-xs font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-8">
                    <h2 className={`text-2xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                      {plan.name}
                    </h2>
                    <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                      {plan.tagline}
                    </p>

                    {plan.priceUSD !== null ? (
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                            ${plan.priceUSD}
                          </span>
                          <span className={`text-sm ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                            USD / month
                          </span>
                        </div>
                        <p className={`text-sm ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                          £{plan.priceGBP} GBP / month for UK clients
                        </p>
                      </div>
                    ) : (
                      <div>
                        <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                          Custom
                        </span>
                        <p className={`text-sm mt-1 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                          Quoted in USD or GBP
                        </p>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.highlighted ? "text-teal-400" : "text-teal-500"
                          }`}
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            plan.highlighted ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full rounded-full ${
                      plan.highlighted
                        ? "bg-teal-500 hover:bg-teal-600 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    <Link href="/contact">
                      {plan.cta} <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-8 leading-relaxed">
              All prices shown exclude VAT (UK) and applicable state sales tax (US). Pricing is subject to review annually.
              HMCTS LLC is incorporated in the State of Delaware, USA (Entity No. 204421330).
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 text-center">Pricing FAQs</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center text-balance">
              Common questions about pricing
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Not sure which plan is right for you?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Our team will recommend the right plan based on your property size, OTA mix, and operational requirements. No commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 rounded-full">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 bg-transparent px-8 rounded-full">
                <a href="tel:+443333355520">
                  <Phone className="w-4 h-4 mr-2 inline" />
                  +44 (0)333 335 5520
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Or email{" "}
              <a href="mailto:info@hospitalitysoftwaresolutions.com" className="text-teal-400 hover:text-teal-300">
                info@hospitalitysoftwaresolutions.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
