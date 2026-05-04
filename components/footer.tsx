import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="7" height="7" />
                  <rect x="13" y="4" width="7" height="7" />
                  <rect x="4" y="13" width="7" height="7" />
                  <rect x="13" y="13" width="7" height="7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-lg">HMCTS LLC</div>
                <div className="text-xs text-gray-400">Hotel Management Consultants &amp; Technical Solutions</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Property management software built for independent hotels, boutique groups, and serviced apartments across the US and UK. Backed by 30+ years of collective hospitality industry expertise.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/platform" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Property Management System
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Channel Management
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Revenue Optimisation
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Resources &amp; Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Legal Hub
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@hospitalitysoftwaresolutions.com"
                  className="text-gray-400 hover:text-teal-400 transition-colors break-all"
                >
                  info@hospitalitysoftwaresolutions.com
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">UK Office</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <address className="text-gray-400 not-italic leading-relaxed">
                    84 Swinton Hall Road<br />
                    Swinton, Manchester<br />
                    M27 4BJ, United Kingdom
                  </address>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="tel:+443333355520" className="text-gray-400 hover:text-teal-400 transition-colors">
                    +44 (0)333 335 5520
                  </a>
                </div>
              </li>
              <li>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">US Office</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <address className="text-gray-400 not-italic leading-relaxed">
                    131 Continental Drive<br />
                    Newark, Delaware 19713<br />
                    United States
                  </address>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="tel:+13025991401" className="text-gray-400 hover:text-teal-400 transition-colors">
                    +1 (302) 599-1401
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="mailto:info@hospitalitysoftwaresolutions.com" className="text-gray-400 hover:text-teal-400 transition-colors break-all text-sm">
                    info@hospitalitysoftwaresolutions.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col gap-4">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-400">HMCTS LLC</strong> — Incorporated in the State of Delaware, United States. Authentication Number: 204421330, EIN: 37-2155102. Registered Agent Address: 131 Continental Drive, Newark, Delaware 19713, USA. UK Office (operational, not a registered office): 84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, UK. HMCTS LLC is not registered in the United Kingdom.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} HMCTS LLC &mdash; Hotel Management Consultants &amp; Technical Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
