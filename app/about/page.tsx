import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Globe, Users, Target, Linkedin, MapPin, Building, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | HMCTS LLC",
  description:
    "Learn about HMCTS LLC LLC — a US-incorporated hospitality software company with UK operational presence and 30+ years of collective industry experience serving independent hotels in the US and UK.",
}

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We operate with complete transparency — from our pricing to our legal structure. Our clients always know who they are working with and on what terms.",
  },
  {
    icon: Target,
    title: "Hospitality First",
    description:
      "Every feature we build is informed by real operational experience. We have worked in hotels; we understand the pressure points and the priorities.",
  },
  {
    icon: Globe,
    title: "Dual-Market Expertise",
    description:
      "With an active presence in both the United States and the United Kingdom, we deliver solutions that work within the regulatory and operational context of both markets.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "We do not sell software and disappear. We partner with clients for the long term — providing ongoing support, training, and technology updates as your business evolves.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              alt="Hotel exterior at dusk"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32 max-w-7xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
              About HMCTS LLC
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight max-w-3xl">
              Built by hospitality people,
              <span className="text-teal-400"> for hospitality people</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              HMCTS LLC is a technology company founded to solve the real operational challenges facing independent hotel operators in the US and UK markets.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Our Story</Badge>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 text-balance">
                  Three decades of hospitality experience — in one platform
                </h2>
                <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                  HMCTS LLC was founded by hospitality professionals who had spent careers inside hotels — managing operations, driving revenue, and watching technology either help or hinder their teams. After decades working across properties in both the United States and the United Kingdom, we recognised a persistent gap: the property management software available to independent operators was either too complex for small teams, too limited for ambitious operators, or too expensive for the margins the industry operates on.
                </p>
                <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                  We built HMCTS to change that. Our platform combines enterprise-grade functionality with the practicality that independent hotel operators need — delivered with the support that smaller businesses deserve.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Incorporated in the State of Delaware, United States, with an operational base in Manchester, UK, we serve clients on both sides of the Atlantic. Our team brings more than 30 years of collective hospitality industry experience to every implementation.
                </p>
              </div>
              <div className="relative h-96 md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop"
                  alt="Hotel management professionals at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-teal-500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-100 mb-4">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed text-balance">
              &ldquo;To empower independent hotel operators with technology that matches the quality and capability of the largest hotel groups — at a price and with the support that independent businesses can rely on.&rdquo;
            </h2>
          </div>
        </section>

        {/* Company Structure */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Our Structure</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">US-incorporated, globally operational</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                HMCTS LLC is registered in the United States and maintains an active operational base in the United Kingdom.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">US Registration</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">—</span>
                    <span><strong>Legal Name:</strong> HMCTS LLC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">—</span>
                    <span><strong>State of Incorporation:</strong> Delaware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">—</span>
                    <span><strong>Authentication Number:</strong> 204421330</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">—</span>
                    <span><strong>EIN:</strong> 37-2155102</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <address className="not-italic">
                      131 Continental Drive, Newark,<br />Delaware 19713, United States
                    </address>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                    <a href="tel:+13025991401" className="text-teal-600 hover:text-teal-700 transition-colors">
                      +1 (302) 599-1401
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                    <a href="mailto:info@hospitalitysoftwaresolutions.com" className="text-teal-600 hover:text-teal-700 transition-colors break-all">
                      info@hospitalitysoftwaresolutions.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">UK Operations</h3>
                </div>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  HMCTS LLC maintains an active UK operational base and a UK-resident director. We are not registered as a UK company, but we operate in the UK market and hold a UK office address and telephone number.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <address className="not-italic">
                      84 Swinton Hall Road<br />
                      Swinton, Manchester<br />
                      M27 4BJ, United Kingdom<br />
                      <span className="text-gray-500 text-xs">(UK Office — not a registered office)</span>
                    </address>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                    <a href="tel:+443333355520" className="text-teal-600 hover:text-teal-700 transition-colors">
                      +44 (0)333 335 5520
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                    <a href="mailto:info@hospitalitysoftwaresolutions.com" className="text-teal-600 hover:text-teal-700 transition-colors break-all">
                      info@hospitalitysoftwaresolutions.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">Leadership</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The team behind HMCTS LLC</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our leadership brings decades of combined experience in hotel operations, hospitality technology, and business development across the US and UK markets.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-10 max-w-2xl mx-auto">
              {/* Thomas McHugh */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">TM</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Thomas McHugh</h3>
                    <p className="text-teal-600 font-medium">Chief Executive Officer</p>
                    <p className="text-sm text-gray-500 mt-0.5">UK-Resident Director</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Thomas brings extensive experience in hospitality operations and technology implementation across independent hotel groups in the United Kingdom. With a background spanning hotel management and consultancy, he founded HMCTS to address the technology gap he observed firsthand during his operational career. Thomas serves as a UK-resident director of HMCTS LLC.
                </p>
                <a
                  href="https://www.linkedin.com/in/thomas-mchugh-a0666527/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn Profile
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200 rounded-full">What We Stand For</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our values</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-7 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Book a demonstration and speak directly with our team about how HMCTS can work for your property.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg rounded-full bg-transparent">
                <Link href="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
