import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Terms & Conditions | HMCTS LLC — Hotel Management Consultants & Technical Solutions",
  description:
    "The Terms and Conditions governing your use of the HMCTS LLC website and services. Applicable to users in the US and UK.",
}

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "accounts", title: "Accounts & User Responsibilities" },
  { id: "access", title: "Website Access & Restrictions" },
  { id: "payments", title: "Payments & Billing" },
  { id: "cancellation", title: "Cancellation & Refund Policy" },
  { id: "uk-consumer-rights", title: "UK Consumer Statutory Rights" },
  { id: "sla", title: "Service Levels & Support" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "privacy", title: "Privacy & Data Protection" },
  { id: "dispute", title: "Dispute Resolution & Governing Law" },
  { id: "changes", title: "Changes to These Terms" },
]

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms &amp; Conditions"
      subtitle="Please read these terms carefully before using our website or services."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          The website located at hospitalitysoftwaresolutions.com (the &ldquo;Site&rdquo;) is operated by HMCTS LLC
          &ndash; Hospitality Management Consultancy &amp; Technology Solutions (&ldquo;Company&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;, and &ldquo;we&rdquo;). HMCTS LLC is incorporated in the State of Delaware, United States
          (Company No. 5137554, EIN: 37-2155102). Certain features of the Site may be subject to additional guidelines, terms, or
          rules, which will be posted in connection with such features and are incorporated by reference into these Terms.
        </p>
        <p>
          These Terms of Use (the &ldquo;Terms&rdquo;) set out the legally binding conditions that govern your use of
          the Site. By accessing or using the Site, you accept these Terms on behalf of yourself or the entity you
          represent and confirm that you have the legal capacity to agree to them. If you do not agree with all
          provisions of these Terms, do not access or use the Site.
        </p>
        <p>
          These Terms apply to users in both the United States and the United Kingdom. UK users should refer to the
          &ldquo;UK Consumer Statutory Rights&rdquo; section below, which describes rights that apply to them in
          addition to these Terms.
        </p>
      </section>

      <section id="accounts">
        <h2>Accounts &amp; User Responsibilities</h2>
        <h3>1.1 Account Creation</h3>
        <p>
          To access certain features, you may be required to create an account. You must provide truthful and accurate
          information when registering and are responsible for maintaining the security of your account and password.
          You agree to notify us immediately of any unauthorised use of your account.
        </p>
        <h3>1.2 Account Suspension &amp; Termination</h3>
        <p>
          We reserve the right to suspend or terminate accounts that violate these Terms, at our sole discretion and
          without prior notice. You may close your account at any time by contacting us directly.
        </p>
        <h3>1.3 Responsibility for Activity</h3>
        <p>
          You are solely responsible for all activity that occurs under your account. HMCTS LLC is not liable for any
          loss or damage arising from your failure to comply with these requirements.
        </p>
      </section>

      <section id="access">
        <h2>Website Access &amp; Restrictions</h2>
        <h3>2.1 Permitted Use</h3>
        <p>
          You may access and use the Site for lawful purposes only. You agree to comply with all applicable laws and
          regulations when using the Site, including those applicable in your jurisdiction.
        </p>
        <h3>2.2 Prohibited Activities</h3>
        <p>Users agree not to:</p>
        <ul>
          <li>Copy, sell, rent, lease, or exploit any part of the Site for commercial gain without our written consent.</li>
          <li>Modify, reverse-engineer, or attempt to gain unauthorised access to the Site or its systems.</li>
          <li>Use the Site for fraudulent, illegal, or harmful activities.</li>
          <li>Transmit any harmful, offensive, or disruptive content through the Site.</li>
          <li>Use automated systems, bots, or scrapers to extract data from the Site without permission.</li>
        </ul>
        <p>
          Use of the platform API and software is subject to our <a href="/acceptable-use">Acceptable Use Policy</a>.
        </p>
        <h3>2.3 Site Modifications</h3>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the Site at any time, with or without
          notice. We will not be liable to you or any third party for any such modification, suspension, or
          discontinuation.
        </p>
      </section>

      <section id="payments">
        <h2>Payments &amp; Billing</h2>
        <p>
          All payments must be made in full according to the agreed terms before services are rendered. Late payments
          may result in additional fees or suspension of services. We reserve the right to update our pricing, and
          clients will be notified of any changes in advance.
        </p>
        <p>
          Fees are stated in US Dollars (USD) for US-based clients and in Pounds Sterling (GBP) for UK-based clients,
          unless otherwise agreed in writing. You are responsible for any applicable taxes, duties, VAT, or additional
          charges associated with your purchase. UK clients will be invoiced with VAT where applicable under UK law.
        </p>
        <p>
          Accepted payment methods include major credit and debit cards. US clients are processed via Stripe or
          Authorize.net. UK clients are processed via Stripe or Worldpay. All card transactions are subject to the
          applicable payment gateway&apos;s terms and conditions.
        </p>
      </section>

      <section id="cancellation">
        <h2>Cancellation &amp; Refund Policy</h2>
        <h3>Subscription Cancellation</h3>
        <p>
          You may cancel a subscription at any time by providing written notice. Cancellation will take effect at the
          end of the current billing period. No refunds are provided for unused portions of a billing period unless
          required by applicable law (see &ldquo;UK Consumer Statutory Rights&rdquo; below).
        </p>
        <h3>One-Time Services</h3>
        <p>
          For one-time professional services (including implementation, training, and consultancy), if you wish to
          cancel, you must notify us in writing at least 7 business days before the scheduled service date.
          Cancellations made after this period may not be eligible for any credit or rescheduling.
        </p>
        <h3>Non-Refundable Payments</h3>
        <p>
          Where services have been fully delivered, payment is non-refundable except where required by applicable law.
          Any complaints regarding services must be raised with us prior to completion of delivery. By making payment,
          you confirm that the services delivered were satisfactory unless you have raised a complaint in writing
          before payment was processed.
        </p>
      </section>

      <section id="uk-consumer-rights">
        <h2>UK Consumer Statutory Rights</h2>
        <p>
          If you are a consumer based in the United Kingdom, nothing in these Terms affects your statutory rights
          under applicable UK consumer protection law, including the Consumer Rights Act 2015 and the Consumer
          Contracts (Information, Cancellation and Additional Charges) Regulations 2013. These rights cannot be
          waived or excluded by contract.
        </p>
        <p>
          Key statutory rights for UK consumers include:
        </p>
        <ul>
          <li>
            <strong>Right to cancel (cooling-off period):</strong> For contracts concluded online or at a distance, UK
            consumers have a 14-day right to cancel from the date of the contract, unless the service has been fully
            performed during that period with your prior agreement and acknowledgement that the right to cancel is lost
            on full performance.
          </li>
          <li>
            <strong>Right to a refund:</strong> Where a service does not meet the standards required by law (that it is
            performed with reasonable care and skill), you may be entitled to a repeat performance or a price
            reduction, up to a full refund.
          </li>
          <li>
            <strong>Right to redress:</strong> You retain the right to pursue a claim through the UK courts or an
            alternative dispute resolution scheme in the event of an unresolved dispute.
          </li>
        </ul>
      </section>

      <section id="sla">
        <h2>Service Levels &amp; Support</h2>
        <p>
          We are committed to providing a reliable and professionally supported service. Our standard support hours are
          Monday to Friday, 09:00&ndash;17:30 GMT. We target a response to support requests within one business day.
        </p>
        <p>
          Planned maintenance windows will be communicated at least 24 hours in advance where possible. In the event of
          unplanned downtime, we will communicate status updates promptly. Specific service level commitments for
          enterprise clients are set out in their individual service agreements.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>Intellectual Property Rights</h2>
        <p>
          All content, trademarks, logos, graphics, text, software, and other materials on the Site are the property
          of HMCTS LLC or its licensors and are protected by applicable intellectual property laws in the US and UK.
        </p>
        <p>
          Unauthorised reproduction, distribution, modification, or any other use of any copyrighted materials is
          strictly prohibited. You may not use our trademarks or branding in any way without our prior written consent.
        </p>
      </section>

      <section id="liability">
        <h2>Limitation of Liability</h2>
        <p>
          We do not guarantee that the Site will be error-free or uninterrupted. To the fullest extent permitted by
          applicable law, HMCTS LLC is not liable for any indirect, incidental, consequential, special, or punitive
          damages resulting from the use of, or inability to use, the Site or our services.
        </p>
        <p>
          In no event shall our total liability to you for all claims exceed the amount paid by you, if any, for
          accessing or using our services during the twelve (12) months prior to the claim.
        </p>
        <p>
          Nothing in these Terms excludes or limits our liability for death or personal injury caused by our
          negligence, for fraud or fraudulent misrepresentation, or for any other matter that cannot be excluded
          or limited by applicable law. This applies to both US and UK users.
        </p>
      </section>

      <section id="third-party">
        <h2>Third-Party Links</h2>
        <p>
          The Site may include links to third-party websites and services. These links are provided for your
          convenience only. We do not endorse, control, or take responsibility for any third-party content, privacy
          practices, or products. Your use of third-party sites is at your own risk and subject to their respective
          terms and conditions.
        </p>
      </section>

      <section id="privacy">
        <h2>Privacy &amp; Data Protection</h2>
        <p>
          Our <a href="/privacy">Privacy Policy</a> explains how we collect, store, use, and protect your personal
          information in compliance with applicable US state law and the UK General Data Protection Regulation (UK
          GDPR). By using the Site, you agree to our data practices as described in the Privacy Policy. Our{" "}
          <a href="/cookies">Cookie Policy</a> explains our use of cookies and tracking technologies.
        </p>
      </section>

      <section id="dispute">
        <h2>Dispute Resolution &amp; Governing Law</h2>
        <p>
          For US-based users, these Terms shall be governed by and construed in accordance with the laws of the State
          of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under these
          Terms shall be resolved through binding arbitration in Delaware, and you waive the right to participate in a
          class-action lawsuit.
        </p>
        <p>
          For UK-based users, these Terms shall be governed by the laws of England and Wales. Nothing in these Terms
          affects your right to bring proceedings in the courts of England, Wales, Scotland, or Northern Ireland, or
          your statutory rights as a UK consumer.
        </p>
        <p>
          If any provision of these Terms is found to be unenforceable, that provision shall be modified to the minimum
          extent necessary, and the remainder of the Terms shall continue in full force and effect.
        </p>
      </section>

      <section id="changes">
        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we make material changes, we will update the &ldquo;Last
          updated&rdquo; date at the top of this page and, where appropriate, notify you by email. Your continued use
          of the Site after any changes constitutes your acceptance of the revised Terms.
        </p>
        <p>
          If you have any questions about these Terms, please <a href="/contact">contact us</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
