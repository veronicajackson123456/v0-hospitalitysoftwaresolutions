"use client"

import type React from "react"
import { useState } from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    propertyType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full px-4 py-1.5">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight max-w-3xl">
              Let&apos;s talk about
              <span className="text-teal-400"> your property</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Whether you are evaluating a new PMS, replacing an existing system, or expanding to a new market, our team is ready to help. We respond within 24 hours on business days.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Left: Office Info */}
              <div className="space-y-8">

                {/* UK Office */}
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">UK Office</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <address className="not-italic text-sm text-gray-700 leading-relaxed">
                        84 Swinton Hall Road<br />
                        Swinton, Manchester<br />
                        M27 4BJ<br />
                        United Kingdom
                      </address>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                      <a
                        href="tel:+443333355520"
                        className="text-sm text-gray-700 hover:text-teal-600 transition-colors"
                      >
                        +44 (0)333 335 5520
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                      <a
                        href="mailto:info@hospitalitysoftwaresolutions.com"
                        className="text-sm text-gray-700 hover:text-teal-600 transition-colors break-all"
                      >
                        info@hospitalitysoftwaresolutions.com
                      </a>
                    </li>
                  </ul>
                </div>

                {/* US Office */}
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">US Office</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <address className="not-italic text-sm text-gray-700 leading-relaxed">
                        131 Continental Drive<br />
                        Newark, Delaware 19713<br />
                        United States
                      </address>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                      <a
                        href="tel:+13025991401"
                        className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        +1 (302) 599-1401
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                      <a
                        href="mailto:info@hospitalitysoftwaresolutions.com"
                        className="text-sm text-gray-700 hover:text-blue-600 transition-colors break-all"
                      >
                        info@hospitalitysoftwaresolutions.com
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Hours */}
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-teal-500" />
                    <p className="font-semibold text-gray-900">Office Hours</p>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-gray-800">09:00 – 17:30 GMT</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-gray-400">By appointment</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-5 border-t border-gray-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We respond to all enquiries within 24 hours on business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-teal-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">Message received</h2>
                      <p className="text-gray-600 max-w-sm leading-relaxed">
                        Thank you for reaching out. A member of our team will be in touch within one business day.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a demonstration</h2>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Tell us about your property and what you are looking for. Our team will arrange a personalised demonstration at a time that suits you.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                              id="fullName"
                              placeholder="Jane Smith"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              required
                              className="h-11"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="jane@yourhotel.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className="h-11"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+44 7700 000000"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="h-11"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Hotel / Company Name
                            </label>
                            <Input
                              id="company"
                              placeholder="The Grand Hotel"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="h-11"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Property Type
                          </label>
                          <select
                            id="propertyType"
                            value={formData.propertyType}
                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                            className="w-full h-11 px-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Select property type</option>
                            <option value="independent-hotel">Independent Hotel</option>
                            <option value="boutique-group">Boutique Hotel Group</option>
                            <option value="serviced-apartments">Serviced Apartments</option>
                            <option value="bnb-guesthouse">B&amp;B / Guest House</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Tell us about your requirements <span className="text-red-500">*</span>
                          </label>
                          <Textarea
                            id="message"
                            placeholder="For example: We are currently using [system] and are looking to switch. We have [X] rooms across [Y] properties in [location]..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={5}
                            className="resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full py-5 text-base"
                        >
                          Send Enquiry
                        </Button>

                        <p className="text-xs text-gray-400 text-center leading-relaxed">
                          By submitting this form you agree to our{" "}
                          <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
                          {" "}We will not share your information with third parties.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map embed — UK Office */}
        <section className="py-0">
          <div className="w-full h-72 bg-gray-100 border-t border-gray-200 overflow-hidden">
            <iframe
              title="HMCTS UK Office — 84 Swinton Hall Road, Swinton, Manchester M27 4BJ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.3!2d-2.3382!3d53.5136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c4d3f5f0f%3A0x1!2s84+Swinton+Hall+Rd%2C+Swinton%2C+Manchester+M27+4BJ!5e0!3m2!1sen!2suk!4v1704067200000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-14 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-wider">Prefer to just browse first?</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore the platform at your own pace</h2>
            <p className="text-gray-600 mb-7 max-w-xl mx-auto leading-relaxed">
              Review our full feature set, integration library, and pricing — then reach out when you are ready to talk.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="outline" className="rounded-full px-6 border-gray-300">
                <a href="/platform">Platform Overview</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 border-gray-300">
                <a href="/integrations">Integrations</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 border-gray-300">
                <a href="/pricing">Pricing</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
