import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Acceptable Use Policy | HMCTS LLC — Hotel Management Consultants & Technical Solutions",
  description:
    "Our Acceptable Use Policy outlines prohibited conduct and guidelines for appropriate use of HMCTS LLC services.",
}

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "permitted-use", title: "Permitted Use" },
  { id: "prohibited-use", title: "Prohibited Use" },
  { id: "api-usage", title: "API & Integration Usage" },
  { id: "data-handling", title: "Data Handling Obligations" },
  { id: "security", title: "Security Responsibilities" },
  { id: "content-standards", title: "Content Standards" },
  { id: "enforcement", title: "Enforcement & Consequences" },
  { id: "reporting", title: "Reporting Violations" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
]

export default function AcceptableUsePage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      subtitle="This policy governs how you may use the HMCTS LLC platform, API, and associated services."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          This Acceptable Use Policy (&ldquo;AUP&rdquo;) is issued by HMCTS LLC &ndash; Hospitality Management
          Consultancy &amp; Technology Solutions (&ldquo;HMCTS&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or
          &ldquo;we&rdquo;), incorporated in the State of Delaware, United States (Authentication Number: 204421330, EIN: 37-2155102).
        </p>
        <p>
          This AUP applies to all users of the HMCTS platform, website, API, and associated services
          (&ldquo;Services&rdquo;). By accessing or using our Services, you agree to comply with this policy. This AUP
          should be read alongside our <a href="/terms">Terms &amp; Conditions</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
        <p>
          We reserve the right to suspend or terminate access to any user who violates this policy, with or without
          prior notice, depending on the severity of the breach.
        </p>
      </section>

      <section id="permitted-use">
        <h2>Permitted Use</h2>
        <p>
          You may use the HMCTS platform and Services for legitimate business purposes directly related to the
          management of hotel, hospitality, or accommodation properties. Permitted uses include:
        </p>
        <ul>
          <li>Managing reservations, check-ins, check-outs, and guest records for your property or properties.</li>
          <li>Connecting to OTA channels (such as Booking.com, Expedia, and Airbnb) via our channel management tools for the properties you operate or manage.</li>
          <li>Processing guest payments through integrated payment gateways for legitimate accommodation transactions.</li>
          <li>Generating reports and analytics to support the management and operation of your property.</li>
          <li>Using the API to build integrations that connect HMCTS with other business tools used in your property operations, where such integrations are disclosed to and approved by HMCTS LLC.</li>
          <li>Accessing the platform on behalf of authorised employees or contractors of your organisation.</li>
        </ul>
      </section>

      <section id="prohibited-use">
        <h2>Prohibited Use</h2>
        <p>
          You must not use the HMCTS platform or Services in any manner that:
        </p>
        <ul>
          <li>
            <strong>Is unlawful or fraudulent.</strong> This includes processing payments for fraudulent transactions,
            creating false bookings, or using the platform to facilitate money laundering, tax evasion, or any other
            illegal activity.
          </li>
          <li>
            <strong>Violates the rights of others.</strong> Including the intellectual property, privacy, or other
            legal rights of guests, third-party software providers, or OTA partners.
          </li>
          <li>
            <strong>Compromises platform security.</strong> Including attempting to gain unauthorised access to other
            users&apos; accounts, probing or testing the security of our systems without written authorisation, or
            introducing malicious code, viruses, or other harmful software.
          </li>
          <li>
            <strong>Places excessive load on our systems.</strong> Including automated scraping, bulk data extraction,
            or API calls in volumes that exceed fair use or documented rate limits.
          </li>
          <li>
            <strong>Misrepresents your identity or organisation.</strong> Including providing false registration
            information, impersonating another person or business, or using another user&apos;s credentials.
          </li>
          <li>
            <strong>Facilitates spam or unsolicited communications.</strong> Including using guest contact data
            obtained through the platform to send unsolicited marketing without a valid legal basis and, where
            required, prior consent.
          </li>
          <li>
            <strong>Breaches data protection law.</strong> Including using personal data obtained through the platform
            in ways that are not permitted under UK GDPR, the Data Protection Act 2018, or applicable US state
            privacy law.
          </li>
          <li>
            <strong>Resells or sublicenses access.</strong> You may not resell, sublicense, or provide access to the
            HMCTS platform to third parties without our express prior written consent.
          </li>
        </ul>
      </section>

      <section id="api-usage">
        <h2>API &amp; Integration Usage</h2>
        <p>
          Access to the HMCTS API is subject to the following conditions in addition to those set out in this policy:
        </p>
        <ul>
          <li>
            <strong>Authentication credentials must be kept secure.</strong> API keys, tokens, and access credentials
            are issued to you personally and must not be shared with third parties outside your organisation. You are
            responsible for all activity carried out using your credentials.
          </li>
          <li>
            <strong>Rate limits must be respected.</strong> Our API applies rate limits to protect the availability of
            the service for all users. Making requests in excess of documented limits, or attempting to circumvent
            rate limiting, is prohibited.
          </li>
          <li>
            <strong>Third-party integrations must be disclosed.</strong> If you use the API to connect HMCTS to a
            third-party system that involves sharing guest data, you must ensure that such integration complies with
            applicable data protection law and that guests are informed where required.
          </li>
          <li>
            <strong>API access may be suspended for misuse.</strong> We reserve the right to suspend or revoke API
            access at any time if we have reasonable grounds to believe it is being used in violation of this policy.
          </li>
        </ul>
      </section>

      <section id="data-handling">
        <h2>Data Handling Obligations</h2>
        <p>
          The HMCTS platform processes personal data relating to hotel guests and staff. As a platform user, you have
          obligations regarding the personal data you access and process:
        </p>
        <ul>
          <li>
            You must have a lawful basis for collecting and processing guest personal data, and must inform guests
            of how their data will be used in accordance with applicable privacy law (including UK GDPR for UK
            properties).
          </li>
          <li>
            You must not export or transfer guest personal data obtained through the platform to countries without
            adequate data protection standards unless appropriate safeguards are in place.
          </li>
          <li>
            Guest data must be used only for the purposes for which it was collected. You must not use guest contact
            details for marketing purposes without a valid consent or other lawful basis.
          </li>
          <li>
            In the event of a data breach affecting personal data processed via the platform, you must notify us and,
            where required by law, the relevant supervisory authority, within the applicable legal timeframe.
          </li>
        </ul>
      </section>

      <section id="security">
        <h2>Security Responsibilities</h2>
        <p>
          You are responsible for the security of your own systems and the devices used to access the HMCTS platform.
          Your obligations include:
        </p>
        <ul>
          <li>Using strong, unique passwords for your HMCTS account and changing them promptly if you suspect a compromise.</li>
          <li>Ensuring that only authorised employees or contractors have access to your HMCTS account.</li>
          <li>Promptly notifying us if you become aware of any unauthorised access to your account or any security vulnerability in our Services.</li>
          <li>Not disabling, circumventing, or interfering with security features of the platform.</li>
        </ul>
        <p>
          Security vulnerabilities discovered in the HMCTS platform should be reported to us responsibly at{" "}
          <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a> before
          any public disclosure.
        </p>
      </section>

      <section id="content-standards">
        <h2>Content Standards</h2>
        <p>
          Any content you submit or upload to the HMCTS platform (including property descriptions, images, and guest
          communications) must:
        </p>
        <ul>
          <li>Be accurate and not misleading.</li>
          <li>Not infringe the intellectual property rights of any third party.</li>
          <li>Not contain defamatory, offensive, discriminatory, or otherwise unlawful material.</li>
          <li>Comply with applicable advertising and consumer protection standards in your jurisdiction.</li>
        </ul>
      </section>

      <section id="enforcement">
        <h2>Enforcement &amp; Consequences</h2>
        <p>
          We take violations of this AUP seriously. Depending on the nature and severity of the violation, we may take
          the following actions without prior notice:
        </p>
        <ul>
          <li>Suspend or terminate your access to the platform and Services.</li>
          <li>Remove or restrict access to specific content or features.</li>
          <li>Notify relevant regulatory authorities, law enforcement agencies, or affected third parties.</li>
          <li>Take legal action to recover any losses or damages suffered as a result of the violation.</li>
        </ul>
        <p>
          We will use our reasonable judgement in determining the appropriate response to any violation. A suspended
          account will not be reinstated until we are satisfied that the violation has been remedied and that future
          compliance can be assured.
        </p>
      </section>

      <section id="reporting">
        <h2>Reporting Violations</h2>
        <p>
          If you believe that another user of the HMCTS platform is violating this AUP, or if you have discovered a
          security vulnerability or data protection concern, please contact us promptly:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+443333355520">+44 (0)333 335 5520</a></li>
        </ul>
        <p>
          Reports submitted in good faith will be treated confidentially. We will investigate all credible reports and
          take appropriate action.
        </p>
      </section>

      <section id="governing-law">
        <h2>Governing Law</h2>
        <p>
          This Acceptable Use Policy is governed by the same law as our{" "}
          <a href="/terms">Terms &amp; Conditions</a>: the laws of the State of Delaware, United States for US users,
          and the laws of England and Wales for UK users. Nothing in this policy excludes your statutory rights under
          applicable law.
        </p>
      </section>

      <section id="changes">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Acceptable Use Policy from time to time to reflect changes in our Services, technology,
          or applicable law. Material changes will be communicated by updating the &ldquo;Last updated&rdquo; date at
          the top of this page and, where appropriate, by direct notification. Your continued use of the Services after
          any changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          For any questions about this Acceptable Use Policy, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a></li>
          <li><strong>UK Office Phone:</strong> <a href="tel:+443333355520">+44 (0)333 335 5520</a></li>
          <li><strong>UK Office:</strong> 84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, United Kingdom</li>
          <li><strong>US Office Phone:</strong> <a href="tel:+13025991401">+1 (302) 599-1401</a></li>
          <li><strong>US Office:</strong> 131 Continental Drive, Newark, Delaware 19713, USA</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
