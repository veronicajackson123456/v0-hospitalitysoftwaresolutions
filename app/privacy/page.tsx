import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy | HMCTS LLC — Hotel Management Consultants & Technical Solutions",
  description:
    "How HMCTS LLC collects, uses, and protects your personal information. Compliant with US state privacy law and UK GDPR.",
}

const sections = [
  { id: "data-controller", title: "Data Controller" },
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "lawful-basis", title: "Lawful Basis for Processing (UK GDPR)" },
  { id: "disclosure", title: "Disclosure of Your Information" },
  { id: "data-security", title: "Data Security" },
  { id: "retention", title: "Retention of Data" },
  { id: "your-rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "children", title: "Children&apos;s Privacy" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact the Data Controller" },
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="We are committed to protecting your personal information and your right to privacy."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="data-controller">
        <h2>Data Controller</h2>
        <p>
          The Data Controller responsible for your personal information is:
        </p>
        <p>
          <strong>HMCTS LLC</strong> (Hospitality Management Consultancy &amp; Technology Solutions)<br />
          Incorporated in the State of Delaware, United States. Authentication Number: 204421330. EIN: 37-2155102.<br />
          <br />
          <strong>US Office:</strong><br />
          131 Continental Drive, Newark, Delaware 19713, USA<br />
          Phone: <a href="tel:+13024696267">+1 (302) 469-6267</a><br />
          Email: <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a><br />
          <br />
          <strong>UK Office (operational):</strong><br />
          84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, United Kingdom<br />
          Phone: <a href="tel:+443333355520">+44 (0)333 335 5520</a><br />
          Email: <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a>
        </p>
      </section>

      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          The website located at hospitalitysoftwaresolutions.com (the &ldquo;Site&rdquo;) is operated by HMCTS LLC
          (&ldquo;Company&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, and &ldquo;we&rdquo;). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our Site or use our services.
        </p>
        <p>
          This policy applies to all users, including those in the United Kingdom. Users in the UK should also refer to
          the &ldquo;Lawful Basis for Processing (UK GDPR)&rdquo; and &ldquo;Your Rights&rdquo; sections below for information on your
          specific rights under the UK General Data Protection Regulation (UK GDPR) as administered by the
          Information Commissioner&apos;s Office (ICO).
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site. By
          accessing or using the Site, you agree to the practices described in this Privacy Policy.
        </p>
      </section>

      <section id="information-we-collect">
        <h2>Information We Collect</h2>
        <h3>Personal Data</h3>
        <p>
          Personally identifiable information that you voluntarily provide when contacting us, requesting a
          demonstration, or subscribing to our communications. This may include:
        </p>
        <ul>
          <li>Name, email address, and phone number</li>
          <li>Billing address and payment information (processed via our payment providers)</li>
          <li>Business name, property type, and other professional details</li>
          <li>Any other information you choose to provide</li>
        </ul>
        <h3>Usage Data</h3>
        <p>
          Information automatically collected when you visit the Site, including your IP address, browser type, device
          information, operating system, referring URLs, pages visited, and dates and times of visits.
        </p>
        <h3>Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking tools to enhance your experience, analyse trends, and administer the Site.
          For full details, please read our <a href="/cookies">Cookie Policy</a>.
        </p>
      </section>

      <section id="how-we-use">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the Site and our services.</li>
          <li>Process transactions and send related information, including purchase confirmations and invoices in USD or GBP as applicable.</li>
          <li>Improve your experience by personalising content and analysing usage trends.</li>
          <li>Communicate with you, including sending service-related notifications and, where you have given permission, marketing communications.</li>
          <li>Respond to your enquiries and provide customer service.</li>
          <li>Monitor and analyse usage of the Site to improve functionality and performance.</li>
          <li>Enforce our <a href="/terms">Terms &amp; Conditions</a> and protect the security of the Site.</li>
          <li>Comply with applicable legal obligations in the US and UK.</li>
        </ul>
      </section>

      <section id="lawful-basis">
        <h2>Lawful Basis for Processing (UK GDPR)</h2>
        <p>
          For users in the United Kingdom, we process personal data only where we have a lawful basis to do so under
          the UK GDPR. The lawful bases we rely on are:
        </p>
        <ul>
          <li>
            <strong>Contract:</strong> Processing is necessary to perform a contract with you, or to take steps at your
            request before entering into a contract (for example, when you request a product demonstration or sign up
            for a service).
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests in operating and
            improving our business, provided those interests are not overridden by your rights and interests.
          </li>
          <li>
            <strong>Compliance with a Legal Obligation:</strong> Processing is necessary to comply with a legal
            obligation to which we are subject in the UK or US.
          </li>
          <li>
            <strong>Consent:</strong> Where we rely on consent (for example, for optional marketing communications),
            you may withdraw consent at any time by contacting us or using the unsubscribe link in our emails.
          </li>
        </ul>
        <p>
          We do not use pre-ticked boxes or bundled consent for non-essential cookies or marketing. Consent is always
          obtained separately and explicitly.
        </p>
      </section>

      <section id="disclosure">
        <h2>Disclosure of Your Information</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> With trusted third parties who perform services on our behalf, such as
            web hosting, data analytics, payment processing, email delivery, and customer service. These providers are
            required to process data only on our instructions and in accordance with applicable law.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion
            of our assets, your information may be transferred as part of that transaction.
          </li>
          <li>
            <strong>Legal Requirements:</strong> To comply with applicable law, legal process, or enforceable governmental
            requests, or to protect the rights, property, and safety of HMCTS LLC, our users, or others.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
            explicit consent.
          </li>
        </ul>
        <p>
          We do not sell, trade, or rent your personal information to third parties for their own marketing purposes.
        </p>
      </section>

      <section id="data-security">
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organisational security measures to protect your personal information
          from unauthorised access, disclosure, alteration, or destruction. These measures include encryption in transit
          and at rest, secure servers, and role-based access controls.
        </p>
        <p>
          No method of transmission over the internet or electronic storage is 100% secure. While we apply
          industry-standard safeguards, we cannot guarantee absolute security. You are responsible for maintaining the
          confidentiality of any account credentials.
        </p>
      </section>

      <section id="retention">
        <h2>Retention of Data</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfil the purposes outlined in this
          Privacy Policy, or as required by applicable law. When we no longer require your information, we will securely
          delete or anonymise it. Specific retention periods vary depending on the nature of the data and the purpose
          for which it was collected.
        </p>
      </section>

      <section id="your-rights">
        <h2>Your Rights</h2>
        <p>
          Depending on your location, you have the following rights regarding your personal information. UK users have
          these rights under the UK GDPR:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
          <li><strong>Erasure:</strong> Request the deletion of your personal data, subject to certain exceptions (for example, where we are required to retain data by law).</li>
          <li><strong>Restriction:</strong> Request that we restrict the processing of your data in certain circumstances.</li>
          <li><strong>Portability:</strong> Request the transfer of your data to another controller in a structured, commonly used format, where technically feasible.</li>
          <li><strong>Objection:</strong> Object to our processing of your personal data for direct marketing or where we rely on legitimate interests.</li>
          <li><strong>Withdraw Consent:</strong> Where processing is based on your consent, withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal.</li>
        </ul>
        <p>
          To exercise any of these rights, please <a href="/contact">contact us</a>. We will respond within 30 days (or
          within one calendar month as required by UK GDPR). UK users also have the right to lodge a complaint with the
          Information Commissioner&apos;s Office (ICO) at <strong>ico.org.uk</strong>.
        </p>
      </section>

      <section id="cookies">
        <h2>Cookies &amp; Tracking</h2>
        <p>
          We use cookies and similar technologies to improve your experience on our Site. Non-essential cookies require
          your explicit consent before they are set. We do not use pre-ticked consent checkboxes. For full details of
          the cookies we use and how to manage your preferences, please read our{" "}
          <a href="/cookies">Cookie Policy</a>.
        </p>
      </section>

      <section id="third-party-links">
        <h2>Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites. This Privacy Policy does not apply to the privacy
          practices of those websites. We encourage you to review the privacy policies of any third-party sites you
          visit, as we have no control over and assume no responsibility for their content or practices.
        </p>
      </section>

      <section id="international-transfers">
        <h2>International Data Transfers</h2>
        <p>
          As a US-incorporated company with UK operations, your data may be transferred between the UK and the United
          States. Where we transfer personal data from the UK to a country not deemed adequate under UK data protection
          law (including the US), we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) as
          approved under UK GDPR, or other transfer mechanisms recognised by the ICO.
        </p>
        <p>
          If you would like further information about the specific safeguards in place, please{" "}
          <a href="/contact">contact us</a>.
        </p>
      </section>

      <section id="children">
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our Site and services are directed to business users and are not intended for individuals under the age of 18.
          We do not knowingly collect personal information from children. If you become aware that a child has provided
          us with personal information, please <a href="/contact">contact us</a> and we will take immediate steps to
          delete such information.
        </p>
      </section>

      <section id="governing-law">
        <h2>Governing Law</h2>
        <p>
          HMCTS LLC is incorporated in the State of Delaware, United States. This Privacy Policy and any disputes
          arising from it relating to US users shall be governed by the laws of the State of Delaware, without regard to
          its conflict of law provisions.
        </p>
        <p>
          For users in the United Kingdom, this Privacy Policy is also subject to the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018, as administered by the Information Commissioner&apos;s
          Office (ICO).
        </p>
      </section>

      <section id="changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we will update the
          &ldquo;Last updated&rdquo; date at the top of this page and, where appropriate, notify affected users directly.
          Your continued use of the Site after any changes constitutes your acceptance of the updated policy.
        </p>
      </section>

      <section id="contact">
        <h2>Contact the Data Controller</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
          contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+443333355520">+44 (0)333 335 5520</a></li>
          <li>
            <strong>UK Office:</strong> 84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, United Kingdom
          </li>
          <li>
            <strong>US Registered Agent:</strong> 131 Continental Drive, Newark, Delaware 19713, USA
          </li>
        </ul>
      </section>
    </LegalLayout>
  )
}
