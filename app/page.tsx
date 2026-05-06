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
  DollarSign,
  Lock,
  RefreshCw,
  Hotel,
  Tent,
  Home,
  Coffee,
  BedDouble,
  Layers,
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
          <div className="relative container mx-auto px-4 py-28 md:py-40 max-w-7xl">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
                Modern PMS for Independent Hotels
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                The All-in-One PMS
                <br />
                <span className="text-teal-400">Built for Hospitality</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Simplify your hotel operations, maximize direct bookings, and grow revenue with enterprise-grade property management software — designed for independent hotels, boutique groups, and serviced apartments across the US and UK.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full">
                  <Link href="/contact">Request a Free Demo</Link>
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
                <DollarSign className="w-4 h-4 text-teal-400" />
                <span>Commission-Free Direct Booking Engine</span>
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

        {/* What is a PMS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
                  alt="Hotel front desk operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">
                  What is a PMS?
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 text-balance">
                  The operational hub of
                  <span className="text-teal-600"> every great hotel</span>
                </h2>
                <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                  A Property Management System (PMS) is the central hub of your entire hotel operation. It connects every department — front desk, housekeeping, revenue management, and guest communications — into one unified, cloud-based platform.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Without a modern PMS, hotels rely on disconnected tools and manual processes — leading to double bookings, missed revenue, and inconsistent guest experiences. HMCTS LLC eliminates these pain points and puts you in full control of your property.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Calendar, label: "Reservation Management" },
                    { icon: Users, label: "Front Desk Operations" },
                    { icon: ClipboardCheck, label: "Housekeeping Control" },
                    { icon: BarChart3, label: "Revenue Analytics" },
                    { icon: Globe, label: "OTA Channel Management" },
                    { icon: Smartphone, label: "Mobile Accessibility" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-7 h-7 bg-teal-50 rounded-md flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-teal-600" />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                  <Link href="/platform">See the Full Platform <ArrowRight className="w-4 h-4 ml-2 inline" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PMS Video Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">
                  See It in Action
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 text-balance">
                  Understanding Hotel Property
                  <span className="text-teal-600"> Management Systems</span>
                </h2>
                <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                  Watch our explainer to see exactly how a modern PMS transforms day-to-day hotel operations — from the moment a guest searches to the moment they check out.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Real-time availability synced across all channels",
                    "Automated check-in, check-out, and billing",
                    "Housekeeping assignments triggered automatically",
                    "Commission-free direct booking engine integration",
                    "Revenue dashboards and occupancy forecasting",
                    "Guest profiles built across every stay",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                    <Link href="/platform">Explore Our PMS</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6 border-gray-300">
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
                </div>
              </div>

              {/* Video */}
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  aria-label="Explainer video: What is a Hotel Property Management System"
                >
                  <source src="/pms-explainer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Booking Engine Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Commission-Free Bookings</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Turn your website into a direct booking machine</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Stop paying commissions to OTAs. Our integrated booking engine lets guests book directly through your website — keeping 100% of the revenue in your pocket.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: DollarSign,
                  title: "100% Commission-Free",
                  description: "Every direct booking means zero commission paid to OTAs. Keep all your revenue from bookings made through your website.",
                },
                {
                  icon: Lock,
                  title: "Secure Integrated Payments",
                  description: "Real-time payment processing built directly into the booking engine. Reduce manual errors and improve cash flow management.",
                },
                {
                  icon: RefreshCw,
                  title: "Real-Time PMS Sync",
                  description: "Availability, rates, and inventory sync instantly between your booking engine and PMS. No double bookings, ever.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First Design",
                  description: "Over 60% of travelers book on mobile. Our booking engine is fully optimised for any screen, any device.",
                },
                {
                  icon: Star,
                  title: "Upsells & Add-Ons",
                  description: "Increase revenue per booking by offering room upgrades, early check-in, late check-out, and custom add-on packages.",
                },
                {
                  icon: Users,
                  title: "Guest Self-Serve Hub",
                  description: "Guests can view, manage, and modify their reservations through a self-serve portal — reducing front desk workload.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-teal-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Direct Booking Stats */}
            <div className="bg-teal-500 rounded-2xl p-10 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">0%</div>
                  <div className="text-teal-100 font-medium">Commission on direct bookings</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">$519</div>
                  <div className="text-teal-100 font-medium">Average direct booking value vs. OTA average</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">60%+</div>
                  <div className="text-teal-100 font-medium">Of travelers now book on mobile devices</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Platform Overview</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Everything your property needs, in one place</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A complete property management platform covering every operational area — front desk, back office, and accounting — all working together seamlessly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Reservation Management",
                  description: "Handle bookings, cancellations, and modifications in real time with a clear tape chart availability view.",
                },
                {
                  icon: Users,
                  title: "Front Desk Operations",
                  description: "Streamline check-in, check-out, charges, payments, and guest services with an intuitive interface.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Housekeeping Management",
                  description: "Automatically assign cleaning tasks, track room status, and improve turnaround efficiency in real time.",
                },
                {
                  icon: BarChart3,
                  title: "Reporting & Analytics",
                  description: "Deep insights into occupancy, RevPAR, ADR, and financial performance across any date range.",
                },
                {
                  icon: Users,
                  title: "Guest Relationship Management",
                  description: "Build rich guest profiles, track preferences, and personalise every stay to drive loyalty.",
                },
                {
                  icon: Globe,
                  title: "Channel Management",
                  description: "Distribute availability and rates across Booking.com, Expedia, Airbnb, GDS, and more — all in sync.",
                },
                {
                  icon: Layers,
                  title: "150+ Integrations",
                  description: "Connect to payment gateways, POS systems, electronic locks, revenue management tools, and OTAs.",
                },
                {
                  icon: Headphones,
                  title: "Onboarding & Support",
                  description: "Dedicated onboarding specialists, training, and ongoing support ensure your team is always confident.",
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

        {/* Property Types */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Who We Serve</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Built for every type of property</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you run a boutique inn or a multi-property group, HMCTS LLC adapts to your exact operational needs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Hotel, label: "Hotels & Motels" },
                { icon: Coffee, label: "Inns & B&Bs" },
                { icon: BedDouble, label: "Serviced Apartments" },
                { icon: Home, label: "Vacation Rentals" },
                { icon: Tent, label: "Campgrounds" },
                { icon: Layers, label: "Multi-Property" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all text-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{label}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="rounded-full px-8 border-gray-300">
                <Link href="/solutions">See All Solutions <ArrowRight className="w-4 h-4 ml-2 inline" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Transparent Pricing</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Plans that scale with your property</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Available in USD and GBP. No hidden fees. No long-term lock-ins. Cancel anytime.
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
                    "Commission-free booking engine",
                    "Channel management",
                    "Housekeeping module",
                    "Advanced analytics",
                    "Priority support",
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
                    "150+ custom integrations",
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

            <p className="text-center text-sm text-gray-500 mt-10">
              All plans include a one-time setup fee. Pricing shown excludes applicable taxes.{" "}
              <Link href="/contact" className="text-teal-600 hover:underline">
                Contact us
              </Link>{" "}
              for a tailored quote.
            </p>
          </div>
        </section>

        {/* Why Choose HMCTS */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full">The HMCTS LLC Advantage</Badge>
              <h2 className="text-4xl font-bold mb-4">Why operators choose HMCTS LLC</h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Built by hospitality professionals, not just software engineers. We understand what it truly takes to run a hotel at pace.
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
                  description: "We understand the nuances of both markets — from US taxation to UK GDPR compliance and regional booking behaviour.",
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Platform",
                  description: "From a 10-room B&B to a 500-room property group — HMCTS LLC scales seamlessly with your ambition.",
                },
                {
                  icon: Zap,
                  title: "Rapid Implementation",
                  description: "Dedicated onboarding means you are operational quickly, with minimal disruption to your team or guests.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-teal-600 transition-colors">
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

        {/* Three Steps Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Getting Started</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Up and running in three simple steps</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We handle the heavy lifting so your team can focus on what matters — delivering exceptional guest experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Book a Free Demo",
                  description: "Schedule a no-obligation demonstration with one of our hospitality specialists. We will walk you through the platform tailored to your property type.",
                },
                {
                  step: "02",
                  title: "Onboarding & Setup",
                  description: "Our dedicated onboarding team configures your PMS, migrates your data, and trains your staff — with minimal disruption to operations.",
                },
                {
                  step: "03",
                  title: "Go Live & Grow",
                  description: "Launch with confidence. From day one, you benefit from real-time support, regular updates, and a platform that grows with your business.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-bold text-lg">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-teal-500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6 text-balance">
              Ready to modernise your property management?
            </h2>
            <p className="text-xl text-teal-50 mb-10 leading-relaxed">
              Book a free, no-obligation demonstration and see how HMCTS LLC can transform your hotel operations — from front desk to final report.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-full shadow-lg font-semibold">
                <Link href="/contact">Request a Free Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                <Link href="/platform">View the Platform</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
