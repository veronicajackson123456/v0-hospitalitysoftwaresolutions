import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Users,
  ClipboardCheck,
  BarChart3,
  Globe,
  Smartphone,
  Headphones,
  CreditCard,
  DollarSign,
  TrendingUp,
  Server,
  CheckCircle,
  Cloud,
  Shield,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Platform | HMCTS LLC — Hotel Property Management System",
  description:
    "Explore the HMCTS property management platform — reservation management, front desk operations, channel management, revenue optimisation, and full reporting. Available for US and UK hotels.",
}

const modules = [
  {
    icon: Calendar,
    title: "Reservation Management",
    description:
      "A real-time reservation engine giving your team a complete view of availability, bookings, and modifications. Handle direct reservations, OTA bookings, and group blocks from a single interface.",
    features: ["Real-time availability grid", "Group and block bookings", "Automated confirmation emails", "Waitlist management", "Booking source tracking"],
  },
  {
    icon: Users,
    title: "Front Desk Operations",
    description:
      "Streamline your arrival and departure experience. Check guests in and out in seconds, manage room assignments, handle early arrivals and late check-outs, and access complete guest history at a glance.",
    features: ["One-click check-in/check-out", "Room assignment and upgrades", "Guest profile and history", "ID verification workflow", "Key card integration ready"],
  },
  {
    icon: ClipboardCheck,
    title: "Housekeeping Management",
    description:
      "Keep your housekeeping team coordinated with real-time room status updates, task assignment, and priority management. Reduce room turnaround times and improve guest satisfaction.",
    features: ["Real-time room status board", "Housekeeper task assignment", "Maintenance request logging", "Priority and rush room flags", "Supervisor inspection workflow"],
  },
  {
    icon: Globe,
    title: "Channel Management",
    description:
      "Distribute your rates and availability across Booking.com, Expedia, Airbnb, and other OTAs in real time. Eliminate double bookings and manage your rate strategy from a single control panel.",
    features: ["Live two-way OTA connectivity", "Rate parity management", "Booking.com, Expedia, Airbnb", "GDS connectivity", "Direct booking promotion tools"],
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Make data-driven decisions with comprehensive reporting across occupancy, revenue, RevPAR, ADR, and guest satisfaction. Export reports in multiple formats for finance and ownership reporting.",
    features: ["Occupancy and ADR reports", "RevPAR and revenue analysis", "Source of business tracking", "Forecasting dashboards", "CSV and PDF export"],
  },
  {
    icon: DollarSign,
    title: "Revenue Optimisation",
    description:
      "Maximise your yield with dynamic pricing tools that adjust room rates based on demand, lead time, and competitive positioning. Set rules and let the system optimise rates automatically.",
    features: ["Demand-based dynamic pricing", "Seasonal and event rules", "Rate threshold management", "Competitor rate monitoring", "Revenue performance alerts"],
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description:
      "Process payments securely in both USD and GBP. Integrate with leading payment gateways including Stripe, Worldpay, and Adyen. Automate invoicing and handle complex billing scenarios.",
    features: ["USD and GBP processing", "Stripe, Worldpay, Adyen integration", "Automated invoice generation", "Split billing support", "Secure card tokenisation"],
  },
  {
    icon: Users,
    title: "Guest Relationship Management",
    description:
      "Build lasting guest relationships with rich guest profiles, stay history, and preference tracking. Send targeted communications and manage loyalty across multiple visits.",
    features: ["Comprehensive guest profiles", "Stay history and preferences", "Pre-arrival communications", "Post-stay follow-up", "VIP and loyalty flagging"],
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Access the full platform from any device. Whether you are on the front desk, in the back office, or off-site, the HMCTS platform is fully accessible via browser on mobile and tablet.",
    features: ["Responsive web application", "iOS and Android browser access", "No app download required", "Real-time push notifications", "Manager dashboard view"],
  },
]

const deploymentOptions = [
  {
    icon: Cloud,
    title: "Cloud-Hosted (SaaS)",
    description: "The recommended option for most properties. Fully managed, always up-to-date, with no server infrastructure required on your end. Access from any internet-connected device.",
    best: "Independent hotels, boutique groups",
  },
  {
    icon: Server,
    title: "On-Premise",
    description: "For properties requiring data to remain on-site. Installed on your own servers with our team managing deployment and ongoing updates. Suitable for larger operations with IT resource.",
    best: "Large hotels, groups with IT teams",
  },
  {
    icon: Shield,
    title: "Hybrid",
    description: "Core operational data on-premise for compliance or connectivity reasons, with cloud-based reporting and remote management capabilities. Tailored for specific regulatory requirements.",
    best: "Enterprise groups, regulated environments",
  },
]

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2025&auto=format&fit=crop"
              alt="Hotel front desk technology"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32 max-w-7xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
              The HMCTS Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight max-w-3xl">
              A complete property management system
              <span className="text-teal-400"> for modern hotels</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              Every module your operation needs — from reservations to revenue — in a single, integrated platform built for the US and UK hospitality market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent">
                <Link href="/integrations">View Integrations</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Platform Modules</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Everything in one place</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Nine fully integrated modules covering every aspect of hotel operations. No additional software required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-5">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{module.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section id="deployment" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Deployment Options</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Deployed the way you need it</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                HMCTS is available as a cloud-hosted SaaS platform, an on-premise installation, or a hybrid deployment — depending on your operational and compliance requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {deploymentOptions.map((opt, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
                  <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <opt.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{opt.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{opt.description}</p>
                  <div className="bg-teal-50 rounded-lg px-4 py-2">
                    <p className="text-xs font-semibold text-teal-700">Best for: {opt.best}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-5 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full">Why HMCTS</Badge>
                <h2 className="text-4xl font-bold mb-6 text-balance">
                  How we compare to the alternatives
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Unlike large PMS vendors such as Cloudbeds, Mews, or Apaleo, HMCTS is built specifically for independent operators and backed by hands-on hospitality experience. We offer enterprise-grade functionality without enterprise-level complexity or price.
                </p>
                <ul className="space-y-4">
                  {[
                    "Built and supported by people with real hotel operations experience",
                    "Dual-market US and UK expertise — not a US-only or UK-only product",
                    "Transparent pricing in both USD and GBP with no hidden OTA surcharges",
                    "Dedicated onboarding and ongoing account management",
                    "Flexible deployment: cloud, on-premise, or hybrid",
                    "Direct API access for custom integrations",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
                  alt="Hotel software on tablet"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-teal-500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">See the platform in action</h2>
            <p className="text-xl text-teal-50 mb-10 leading-relaxed">
              Book a personalised demonstration with our team and discover how HMCTS fits your specific property.
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
