import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Disclaimer | HMCTS - Hospitality Software Solutions",
  description:
    "Important disclaimers regarding the information and services provided by HMCTS.",
}

const sections = [
  { id: "general", title: "General Disclaimer" },
  { id: "professional-advice", title: "No Professional Advice" },
  { id: "accuracy", title: "Accuracy of Information" },
  { id: "external-links", title: "External Links Disclaimer" },
  { id: "testimonials", title: "Testimonials & Results" },
  { id: "affiliate", title: "Affiliate Disclaimer" },
  { id: "errors", title: "Errors & Omissions" },
  { id: "fair-use", title: "Fair Use Notice" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "contact", title: "Contact Us" },
]

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="Please read this disclaimer carefully before using our website."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="general">
        <h2>General Disclaimer</h2>
        <p>
          The information contained on the hospitalitysoftwaresolutions.com website (the &ldquo;Site&rdquo;) is provided
          by HMCTS LLC &ndash; Hospitality Management Consultancy &amp; Technology Solutions for general informational
          purposes only. All information on the Site is provided in good faith; however, we make no representation or
          warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability,
          availability, or completeness of any information on the Site.
        </p>
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a
          result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and
          your reliance on any information on the Site is solely at your own risk.
        </p>
      </section>

      <section id="professional-advice">
        <h2>No Professional Advice</h2>
        <p>
          The Site cannot and does not contain business, legal, financial, or other professional advice. The information
          is provided for general informational and educational purposes only and is not a substitute for professional
          advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with
          appropriate professionals.
        </p>
        <p>
          We do not provide any kind of legal, tax, investment, or financial advice. Do not use any content on this
          Site as a substitute for professional legal, tax, financial, or other advice. Always seek the advice of
          qualified professionals in the relevant field before making business decisions.
        </p>
      </section>

      <section id="accuracy">
        <h2>Accuracy of Information</h2>
        <p>
          While we endeavor to keep the information on our Site current and correct, we make no representations,
          warranties, or guarantees, whether express or implied, that the content on the Site is accurate, complete, or
          up to date. Information may be changed or updated without notice.
        </p>
        <p>
          Industry data, statistics, and market information referenced on the Site are sourced from third-party sources
          that we believe to be reliable, but we cannot guarantee their accuracy. You should independently verify any
          information before relying on it.
        </p>
      </section>

      <section id="external-links">
        <h2>External Links Disclaimer</h2>
        <p>
          The Site may contain links to external websites that are not provided or maintained by, or in any way
          affiliated with, HMCTS. Please note that HMCTS does not guarantee the accuracy, relevance, timeliness, or
          completeness of any information on these external websites.
        </p>
        <p>
          The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed
          within them. We have no control over the nature, content, and availability of those sites.
        </p>
      </section>

      <section id="testimonials">
        <h2>Testimonials &amp; Results</h2>
        <p>
          The Site may contain testimonials from clients and descriptions of past results. These testimonials and
          results are not necessarily representative of the experience of other clients. Past results do not guarantee
          or imply similar results in the future.
        </p>
        <p>
          Individual results will vary based on a range of factors, including but not limited to business size, market
          conditions, geographic location, and how our recommendations are implemented. We make no guarantee that
          you will achieve any particular result.
        </p>
      </section>

      <section id="affiliate">
        <h2>Affiliate Disclaimer</h2>
        <p>
          The Site may contain links to affiliate websites, and we may receive an affiliate commission for any purchases
          made by you on the affiliate website using such links. Where applicable, we will indicate this clearly.
          Our use of affiliate links does not influence our recommendations or editorial content.
        </p>
        <p>
          HMCTS is a proud partner of Cloudbeds. Some links to Cloudbeds products and services on this Site may be
          affiliate or referral links.
        </p>
      </section>

      <section id="errors">
        <h2>Errors &amp; Omissions</h2>
        <p>
          While we make every effort to ensure the information on the Site is complete and accurate, errors and
          omissions may occur. If you find information on the Site that you believe is incorrect or outdated, please{" "}
          <a href="/contact">contact us</a> and we will review and, where appropriate, correct the information.
        </p>
      </section>

      <section id="fair-use">
        <h2>Fair Use Notice</h2>
        <p>
          The Site may contain copyrighted material the use of which has not always been specifically authorized by the
          copyright owner. We make such material available for educational and informational purposes. We believe this
          constitutes a &ldquo;fair use&rdquo; of any such copyrighted material as provided for in section 107 of the
          US Copyright Law.
        </p>
        <p>
          If you wish to use copyrighted material from the Site for your own purposes that go beyond fair use, you must
          obtain permission from the copyright owner. To report any copyright concerns, please{" "}
          <a href="/contact">contact us</a>.
        </p>
      </section>

      <section id="liability">
        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, HMCTS, its officers, directors, employees, and agents
          shall not be liable for any indirect, incidental, special, exemplary, consequential, or punitive damages,
          including without limitation, loss of profits, data, goodwill, or other intangible losses, resulting from:
        </p>
        <ul>
          <li>Your access to or use of, or inability to access or use, the Site;</li>
          <li>Any conduct or content of any third party on the Site;</li>
          <li>Any content obtained from the Site; or</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>
        <p>
          This limitation of liability applies whether the alleged liability is based on contract, tort, negligence,
          strict liability, or any other basis, even if we have been advised of the possibility of such damage.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Disclaimer, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a></li>
          <li><strong>UK Phone:</strong> <a href="tel:+443333355520">+44 (0)333 335 5520</a></li>
          <li><strong>US Phone:</strong> <a href="tel:+13024696267">+1 (302) 469-6267</a></li>
          <li><strong>UK Office:</strong> 84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, United Kingdom</li>
          <li><strong>US Office:</strong> 131 Continental Drive, Newark, Delaware 19713, USA</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
