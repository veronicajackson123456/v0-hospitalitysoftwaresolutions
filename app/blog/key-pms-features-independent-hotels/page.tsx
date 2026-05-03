import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Key Features Every Independent Hotel Needs in a PMS | HMCTS LLC Blog",
  description:
    "A practical guide to evaluating property management system features for independent hotels — what matters, what is marketing, and what to prioritise when choosing a PMS.",
}

const mustHaveFeatures = [
  {
    title: "Reservation and availability management",
    detail:
      "The core function of any PMS. Your system must provide a real-time view of availability across all room types, allow bookings to be created and modified quickly, and prevent double bookings from occurring regardless of the booking source.",
  },
  {
    title: "Two-way OTA channel management",
    detail:
      "This should be built into the PMS, not a third-party connector that adds cost and introduces synchronisation lag. When a room is booked on Booking.com, your PMS availability should update instantly — and vice versa.",
  },
  {
    title: "Check-in and check-out workflow",
    detail:
      "Front desk operations need to be fast and reliable. The check-in process should take seconds, not minutes. Room assignment, key card handling notes, and departure billing should all be accessible from a single screen.",
  },
  {
    title: "Reporting and financial summaries",
    detail:
      "Daily reports, occupancy summaries, and revenue breakdowns must be available without needing to export data into a spreadsheet. Look for systems that provide the figures your accountant and bank manager will ask for.",
  },
  {
    title: "Payment processing integration",
    detail:
      "Your PMS should integrate directly with your payment gateway. Manual card processing and reconciliation is time-consuming and error-prone. USD and GBP processing should both be supported if you serve guests from both markets.",
  },
  {
    title: "Guest profile and history",
    detail:
      "The ability to store guest preferences, previous stay history, and contact details is valuable for both operational efficiency and guest satisfaction. This does not need to be a complex CRM system at the outset, but the data should be accessible and searchable.",
  },
  {
    title: "Housekeeping status management",
    detail:
      "Real-time room status — clean, dirty, inspected, out of order — should be visible to the front desk team without a phone call to housekeeping. This is a basic operational requirement that some lower-cost systems still do not handle well.",
  },
]

const niceToHaveFeatures = [
  "Dynamic pricing rules and revenue optimisation",
  "Online check-in and digital pre-arrival communications",
  "Multi-property management for groups",
  "GDS connectivity for corporate business",
  "Direct booking engine for the hotel website",
  "Accounting software integration (Xero, QuickBooks)",
  "Maintenance and work order management",
  "Guest-facing mobile experience",
]

export default function ArticleKeyFeatures() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Article Hero */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Badge className="mb-5 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full">
              Best Practice
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
              Key Features Every Independent Hotel Needs in a PMS
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                28 January 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
              <span>By the HMCTS Team</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
            alt="Hotel front desk operations"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-gray max-w-none prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-gray-900">

              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10 border-l-4 border-teal-500 pl-6">
                Not all property management systems are created equal. For independent hotels operating without the IT resources of a branded chain, choosing the right feature set can make the difference between a system that helps and one that hinders.
              </p>

              <h2>The problem with PMS feature lists</h2>
              <p>
                Every PMS vendor will present you with an impressive feature list. Channel management, dynamic pricing, guest communications, mobile access, reporting dashboards — the language is consistent, the quality is not. When evaluating a property management system, the question is not whether a feature exists, but whether it works reliably, is easy for your team to use daily, and genuinely solves an operational problem.
              </p>
              <p>
                Independent hotel operators, whether managing a 15-room guest house in the Lake District or a 120-room boutique hotel in New York, share a common challenge: limited time, limited IT resource, and the need to get value from their technology investment quickly. The right PMS for an independent operator is not necessarily the one with the longest feature list — it is the one that does the most important things exceptionally well.
              </p>

              <h2>Must-have features: the non-negotiables</h2>
              <p>
                Before evaluating anything else, confirm that the systems you are considering provide these capabilities at a level of quality and reliability that meets your operational standard.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="my-10 space-y-5">
              {mustHaveFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-gray max-w-none prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-gray-900">

              <h2>Nice-to-have features: valuable but not essential on day one</h2>
              <p>
                The following features add genuine value but should not be the deciding factor in your PMS selection if the core functionality is strong. These are the features to evaluate once you have confirmed the must-haves are in place:
              </p>
              <ul>
                {niceToHaveFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h2>Features that are commonly oversold</h2>
              <p>
                Be cautious of the following features when they appear prominently in sales presentations, as they are frequently oversold relative to their practical value for independent operators:
              </p>
              <p>
                <strong>AI and machine learning.</strong> Most &ldquo;AI-powered&rdquo; features in the current PMS market are rule-based automation systems with a machine learning label applied for marketing purposes. Genuine AI-assisted pricing that is calibrated to your specific market and property type is valuable. Generic &ldquo;AI&rdquo; that sounds impressive in a demo but delivers minimal operational change is not.
              </p>
              <p>
                <strong>Mobile apps.</strong> A dedicated mobile app sounds appealing but adds complexity — updates, device compatibility, and staff training requirements. A well-designed, mobile-responsive web application often delivers the same functionality with less friction. Ask to use the mobile interface during your demo on your own phone, not the vendor&apos;s demonstration device.
              </p>
              <p>
                <strong>Marketplace integrations.</strong> &ldquo;Hundreds of integrations&rdquo; is a common selling point. What matters is whether the specific integrations you need — your payment gateway, your OTA connections, your accounting software — are live, reliable, and supported. A long list of available integrations that does not include Worldpay when that is your payment provider is irrelevant.
              </p>

              <h2>How to evaluate a PMS: a practical approach</h2>
              <p>
                Before committing to a PMS, the following evaluation process will give you a clearer picture of what you are buying:
              </p>
              <ol>
                <li>
                  <strong>Request a live demonstration using your own property data.</strong> Ask the vendor to demo the system using your room types, your rate structure, and your OTA channels. Generic demos with placeholder data hide the friction of real-world configuration.
                </li>
                <li>
                  <strong>Ask to speak with current clients who run a similar property to yours.</strong> Vendor-provided references are standard practice, but ask specifically for a client running a property of comparable size, type, and market. Their experience will be far more relevant than a reference from a 500-room chain.
                </li>
                <li>
                  <strong>Understand the full cost, including implementation.</strong> Monthly subscription costs are only part of the picture. Setup fees, OTA connectivity fees, payment gateway surcharges, and per-booking charges can significantly change the total cost of ownership. Ask for a fully itemised cost breakdown.
                </li>
                <li>
                  <strong>Evaluate the support model before you need it.</strong> How does the vendor handle problems during your busiest periods? Is support provided via live chat, phone, or email? What are the guaranteed response times? Support quality is invisible during a sales process and critical during an operational crisis.
                </li>
                <li>
                  <strong>Confirm the data migration and exit terms.</strong> If you ever need to change PMS, what data can you export, in what format, and at what cost? Proprietary data formats and expensive exit clauses are a significant risk for independent operators.
                </li>
              </ol>

              <h2>The bottom line</h2>
              <p>
                A property management system is not a software purchase — it is an operational infrastructure decision. The right choice gives your team the tools to work efficiently, your guests a seamless experience, and your ownership the reporting visibility to make informed decisions. The wrong choice costs you time, money, and team morale for years.
              </p>
              <p>
                Focus on operational reliability, the quality of core features, and the strength of the vendor relationship. Everything else is secondary.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">See how HMCTS handles the must-haves</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Book a live demonstration using your own property configuration. Our team will walk you through each core feature using your room types, rates, and channel mix.
                </p>
                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                  <Link href="/contact">Request a Demonstration</Link>
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between">
              <Link href="/blog/evolution-of-pms-2025-2026" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Previous Article
              </Link>
              <Link href="/blog/navigating-hospitality-technology-us-uk" className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors">
                Next Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
