import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Refund Policy | HMCTS - Hospitality Software Solutions",
  description:
    "Read the Refund Policy for HMCTS services and understand our refund procedures and guidelines.",
}

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "refund-eligibility", title: "Refund Eligibility" },
  { id: "refund-request", title: "How to Request a Refund" },
  { id: "refund-timeline", title: "Refund Timeline" },
  { id: "non-refundable", title: "Non-Refundable Services" },
  { id: "exceptions", title: "Exceptions and Special Circumstances" },
  { id: "service-credits", title: "Service Credits" },
  { id: "processing", title: "Refund Processing" },
  { id: "contact", title: "Contact for Refunds" },
]

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Our commitment to transparent refund policies and customer satisfaction."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          This Refund Policy (&ldquo;Policy&rdquo;) is established by HMCTS LLC &ndash; Hospitality Management Consultancy
          &amp; Technology Solutions (&ldquo;Company&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, and &ldquo;we&rdquo;) to
          outline the terms and conditions regarding refunds for services provided through our website and services
          (&ldquo;Services&rdquo;).
        </p>
        <p>
          We are committed to customer satisfaction and strive to ensure all clients receive high-quality services.
          This Policy explains when and how refunds may be issued, as well as any limitations or conditions that may apply.
        </p>
      </section>

      <section id="refund-eligibility">
        <h2>Refund Eligibility</h2>
        <h3>2.1 Eligible for Refund</h3>
        <p>Refunds may be considered under the following circumstances:</p>
        <ul>
          <li>The Client requests cancellation within 7 business days of initial payment, provided services have not yet been rendered or commenced.</li>
          <li>HMCTS fails to deliver the agreed-upon Services within a reasonable timeframe due to our fault.</li>
          <li>The Services rendered do not meet the specifications outlined in the agreed Service Agreement.</li>
          <li>The Client believes they were charged in error or for Services not rendered.</li>
          <li>Payment was made through fraud or unauthorized access to the Client&apos;s account.</li>
        </ul>

        <h3>2.2 Refund Request Window</h3>
        <p>
          Refund requests must be submitted in writing within 30 days of the date of payment or service completion,
          whichever is earlier. Requests submitted after this period will not be eligible for review unless there are
          extenuating circumstances approved by HMCTS management.
        </p>
      </section>

      <section id="refund-request">
        <h2>How to Request a Refund</h2>
        <h3>3.1 Submission Process</h3>
        <p>To request a refund, please follow these steps:</p>
        <ol>
          <li>Send a written request to <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a> with the subject line &ldquo;Refund Request.&rdquo;</li>
          <li>Include your Order ID, full name, email address, and a detailed explanation of the reason for the refund request.</li>
          <li>Attach any relevant documentation or evidence supporting your claim (e.g., screenshots, email correspondence, proof of payment).</li>
          <li>Await confirmation that your request has been received and is under review.</li>
        </ol>

        <h3>3.2 Review and Decision</h3>
        <p>
          Once your refund request is received, HMCTS will review the claim within 5-10 business days. You will be
          notified via email of our decision, including the reasons for approval or denial. If approved, refund
          processing will begin immediately.
        </p>
      </section>

      <section id="refund-timeline">
        <h2>Refund Timeline</h2>
        <p>
          Once a refund has been approved, the timeline for receiving the refund depends on your payment method and
          financial institution:
        </p>
        <ul>
          <li><strong>Credit/Debit Card:</strong> 5-10 business days for the refund to appear in your account.</li>
          <li><strong>Bank Transfer:</strong> 5-15 business days, depending on your bank&apos;s processing speed.</li>
          <li><strong>Digital Payment Methods (PayPal, Stripe, etc.):</strong> 2-5 business days.</li>
          <li><strong>Check or Money Order:</strong> 10-15 business days from the date of mailing.</li>
        </ul>
        <p>
          Please note that HMCTS is not responsible for delays caused by your financial institution or payment processor.
          We recommend contacting your bank if the refund does not appear within the stated timeframe.
        </p>
      </section>

      <section id="non-refundable">
        <h2>Non-Refundable Services</h2>
        <p>The following services and circumstances are generally NOT eligible for refunds:</p>
        <ul>
          <li>Services that have been fully delivered and completed as specified in the Service Agreement.</li>
          <li>Consulting services, training, or education courses after the course or session has commenced.</li>
          <li>Custom software development or integration work after development has begun.</li>
          <li>Services cancelled by the Client after the 7-business-day cancellation window.</li>
          <li>Services provided as part of a non-refundable promotional package or special offer.</li>
          <li>Services provided in violation of these Terms &amp; Conditions or applicable laws.</li>
          <li>Payments made for subscription services that have already been provided.</li>
          <li>Any additional fees or surcharges (e.g., rush fees, expedited processing fees, or customization fees).</li>
        </ul>
      </section>

      <section id="exceptions">
        <h2>Exceptions and Special Circumstances</h2>
        <h3>5.1 Partially Completed Services</h3>
        <p>
          If you cancel a service after it has been partially completed, HMCTS may deduct fees for work already performed,
          materials used, or resources allocated. The remaining balance will be refunded proportionally.
        </p>

        <h3>5.2 Technical Issues</h3>
        <p>
          If Services are disrupted due to HMCTS technical issues, platform downtime, or server failures, we will work
          with you to resolve the issue or provide a partial refund or service credit at our discretion.
        </p>

        <h3>5.3 Disputed Charges</h3>
        <p>
          If you believe you were charged incorrectly or fraudulently, please contact us immediately. HMCTS will
          investigate all legitimate disputes and work with your financial institution as necessary to resolve the matter.
        </p>

        <h3>5.4 Force Majeure</h3>
        <p>
          In the event of extraordinary circumstances beyond HMCTS&apos;s control (e.g., natural disasters, pandemics,
          government actions), refunds may be denied or delayed. However, we will offer service credits or rescheduling
          options where possible.
        </p>
      </section>

      <section id="service-credits">
        <h2>Service Credits</h2>
        <p>
          In certain situations, instead of issuing a refund, HMCTS may offer service credits that can be applied toward
          future purchases. Service credits are typically non-transferable, non-refundable, and must be used within 12 months
          of issuance. Unused service credits will expire after this period.
        </p>
      </section>

      <section id="processing">
        <h2>Refund Processing</h2>
        <h3>7.1 Payment Method</h3>
        <p>
          Refunds will be issued using the same payment method originally used for the purchase. If the original payment
          method is no longer available, we will work with you to arrange an alternative refund method.
        </p>

        <h3>7.2 Processing Fees</h3>
        <p>
          HMCTS may deduct a processing fee of up to 2.5% for refunds processed through third-party payment processors
          or financial institutions. This fee reflects the actual costs incurred by HMCTS in processing the refund.
        </p>

        <h3>7.3 No Interest</h3>
        <p>
          Refunds are issued without interest. The refund amount will be based on the original payment amount, excluding
          any applicable taxes or shipping costs that may have been added to the original transaction.
        </p>
      </section>

      <section id="contact">
        <h2>Contact for Refunds</h2>
        <p>
          If you have questions about our Refund Policy or need to submit a refund request, please contact us using the
          information below:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a>
          </li>
          <li>
            <strong>UK Phone:</strong> <a href="tel:+443333355520">+44 (0)333 335 5520</a>
          </li>
          <li>
            <strong>US Phone:</strong> <a href="tel:+13025991401">+1 (302) 599-1401</a>
          </li>
          <li>
            <strong>UK Office:</strong> 84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, United Kingdom
          </li>
          <li>
            <strong>US Office:</strong> 131 Continental Drive, Newark, Delaware 19713, USA
          </li>
        </ul>
        <p>
          Our customer service team is available to assist you with any refund-related inquiries. For the fastest response,
          please email your request directly.
        </p>
      </section>
    </LegalLayout>
  )
}
