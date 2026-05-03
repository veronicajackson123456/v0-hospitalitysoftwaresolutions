"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  TrendingUp,
  Building,
  Headphones,
  Zap,
  Users,
  Smartphone,
  BarChart3,
  Calendar,
  ClipboardCheck,
  Globe,
  Star,
  Shield,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury hotel lobby"
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-28 md:py-36 max-w-7xl">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
                Modern PMS for Independent Hotels
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                Property Management
                <br />
                <span className="text-teal-400">Built for Hospitality</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Enterprise-grade software designed for independent hotels, boutique groups, and serviced apartments across the United States and United Kingdom.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
                >
                  <Link href="/platform">Explore the Platform</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="bg-gray-800 py-5 border-b border-gray-700">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>30+ Years Collective Industry Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>Serving the US &amp; UK Markets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Cloud-Based &amp; On-Premise Options</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-teal-400" />
                <span>Dedicated Onboarding &amp; Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-teal-400" />
                <span>USD &amp; GBP Pricing Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* About the Company Intro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-96 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
                  alt="Hotel front desk operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">
                  Who We Are
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 text-balance">
                  Hospitality expertise meets
                  <span className="text-teal-600"> modern technology</span>
                </h2>
                <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                  HMCTS LLC is a US-incorporated software company delivering property management systems purpose-built for independent hospitality operators. With collective industry experience spanning more than three decades, our team understands the operational realities of running a hotel.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We operate across both the United States and United Kingdom, providing local expertise and support to hotel operators in both markets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                    <Link href="/about">About HMCTS</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6 border-gray-300">
                    <Link href="/solutions">Who We Serve</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Platform Overview</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Everything your property needs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A complete property management platform covering every operational area, from front desk to revenue strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Reservation Management",
                  description: "Handle bookings, cancellations, and modifications in real time with a clear availability view.",
                },
                {
                  icon: Users,
                  title: "Front Desk Operations",
                  description: "Streamline check-in, check-out, and guest services with an intuitive interface.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Housekeeping Management",
                  description: "Track room status and cleaning schedules in real time to improve turnaround efficiency.",
                },
                {
                  icon: BarChart3,
                  title: "Reporting & Analytics",
                  description: "Comprehensive insights into occupancy, RevPAR, and financial performance.",
                },
                {
                  icon: Users,
                  title: "Guest Relationship Management",
                  description: "Build guest profiles, track preferences, and manage loyalty across stays.",
                },
                {
                  icon: Globe,
                  title: "Channel Management",
                  description: "Distribute availability and rates across Booking.com, Expedia, Airbnb, and more.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Accessibility",
                  description: "Manage your property from any device, anywhere, at any time.",
                },
                {
                  icon: Headphones,
                  title: "Onboarding & Support",
                  description: "Dedicated onboarding, training, and ongoing support for your team.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-teal-200 transition-all"
                >
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full shadow-lg">
                <Link href="/platform">
                  View Full Platform <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Transparent Pricing</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Plans that scale with you</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Available in USD and GBP. No hidden fees. Flexible monthly or annual terms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  usd: "$50",
                  gbp: "£40",
                  period: "/month",
                  description: "Ideal for small independent hotels and B&Bs up to 20 rooms.",
                  features: [
                    "Reservation management",
                    "Front desk module",
                    "Basic reporting",
                    "Email support",
                    "Cloud-hosted",
                  ],
                  highlighted: false,
                },
                {
                  name: "Professional",
                  usd: "$200",
                  gbp: "£160",
                  period: "/month",
                  description: "For growing properties up to 100 rooms needing full operational control.",
                  features: [
                    "Everything in Starter",
                    "Channel management",
                    "Housekeeping module",
                    "Advanced analytics",
                    "Priority support",
                    "GDS connectivity",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  usd: "Custom",
                  gbp: "Custom",
                  period: "",
                  description: "For multi-property groups, large hotels, and serviced apartment operators.",
                  features: [
                    "Everything in Professional",
                    "Multi-property management",
                    "Custom integrations",
                    "Dedicated account manager",
                    "SLA guarantee",
                    "On-premise option",
                  ],
                  highlighted: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 border-2 flex flex-col ${
                    plan.highlighted
                      ? "border-teal-500 bg-teal-500 text-white shadow-xl scale-105"
                      : "border-gray-200 bg-white text-gray-900"
                  }`}
                >
                  <div className="mb-6">
                    {plan.highlighted && (
                      <Badge className="mb-3 bg-white/20 text-white border-white/30 rounded-full text-xs">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2 my-3">
                      <span className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-teal-600"}`}>
                        {plan.usd}
                      </span>
                      {plan.period && (
                        <span className={`text-sm ${plan.highlighted ? "text-teal-100" : "text-gray-500"}`}>
                          USD{plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs ${plan.highlighted ? "text-teal-100" : "text-gray-500"}`}>
                      {plan.gbp !== "Custom" ? `${plan.gbp} GBP${plan.period}` : "Contact us for GBP pricing"}
                    </p>
                    <p className={`text-sm mt-3 leading-relaxed ${plan.highlighted ? "text-teal-50" : "text-gray-600"}`}>
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle
                          className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-teal-200" : "text-teal-500"}`}
                        />
                        <span className={plan.highlighted ? "text-teal-50" : "text-gray-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`rounded-full w-full ${
                      plan.highlighted
                        ? "bg-white text-teal-600 hover:bg-teal-50"
                        : "bg-teal-500 hover:bg-teal-600 text-white"
                    }`}
                  >
                    <Link href="/contact">
                      {plan.name === "Enterprise" ? "Get a Quote" : "Get Started"}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              All plans include a one-time setup fee. Pricing shown excludes applicable taxes.{" "}
              <Link href="/contact" className="text-teal-600 hover:underline">
                Contact us
              </Link>{" "}
              for a tailored quote.
            </p>
          </div>
        </section>

        {/* Why Choose HMCTS */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full">The HMCTS Advantage</Badge>
              <h2 className="text-4xl font-bold mb-4">Why operators choose HMCTS</h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Built by hospitality professionals, not just software engineers. We understand what it takes to run a hotel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "30+ Years Experience",
                  description: "Our team brings over three decades of collective hospitality industry expertise to every implementation.",
                },
                {
                  icon: Building,
                  title: "US & UK Expertise",
                  description: "We understand the nuances of both markets — from US taxation to UK GDPR compliance.",
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Platform",
                  description: "From a 10-room B&B to a 500-room property group — HMCTS scales with your ambition.",
                },
                {
                  icon: Zap,
                  title: "Rapid Implementation",
                  description: "Dedicated onboarding means you are operational quickly, with minimal disruption to your team.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal-500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6 text-balance">
              Ready to modernise your property management?
            </h2>
            <p className="text-xl text-teal-50 mb-10 leading-relaxed">
              Book a no-obligation demonstration and see how HMCTS can transform your hotel operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-full shadow-lg font-semibold">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                <Link href="/platform">View Platform</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
