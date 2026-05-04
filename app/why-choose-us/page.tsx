import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Building, TrendingUp, Headphones, Sparkles } from "lucide-react"

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-300 rounded-full px-4 py-2">
              ✨ The HMCTS Advantage
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Why Choose
              <br />
              <span className="text-teal-600">HMCTS?</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions tailored to meet the needs of the hospitality industry. Our comprehensive offerings
              empower your business to thrive.
            </p>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-10 border border-teal-200">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Consultation Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Partnered with leading platforms like <span className="font-bold">Cloudbeds</span> to deliver the best
                  solutions.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our expert consultants work closely with you to understand your unique challenges and recommend the
                  perfect technology stack for your property.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tailored for Hospitality</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Designed specifically for the unique needs of hotels, resorts, and short-term rental properties.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every feature is crafted with hospitality in mind, from front desk operations to guest experience
                  management.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Perfect for small boutique hotels to large multi-property chains.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our systems grow with your business, whether you're managing one property or a hundred.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-10 border border-orange-200">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Support</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Offering dedicated assistance and training to ensure seamless integration and success.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  24/7 support, comprehensive training programs, and ongoing guidance from our expert team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Sets Us Apart</h2>
              <p className="text-lg text-gray-600">More reasons to choose HMCTS as your technology partner</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description:
                    "Years of experience in hospitality technology with deep understanding of property management challenges.",
                },
                {
                  title: "Proven Track Record",
                  description: "Hundreds of satisfied properties have transformed their operations with our solutions.",
                },
                {
                  title: "Continuous Innovation",
                  description:
                    "Regular updates and new features to keep you ahead of the competition in the hospitality industry.",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "Easy integration with existing systems and popular third-party platforms you already use.",
                },
                {
                  title: "Cost-Effective",
                  description:
                    "Flexible pricing plans that fit your budget without compromising on features or quality.",
                },
                {
                  title: "Data Security",
                  description: "Enterprise-grade security measures to protect your data and your guests' information.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8 text-teal-50">
              Join hundreds of properties who have already made the switch to HMCTS LLC and are experiencing exceptional
              results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                Start Your Journey with HMCTS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
