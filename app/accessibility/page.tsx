import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Accessibility Statement | HMCTS - Hospitality Software Solutions",
  description:
    "HMCTS is committed to ensuring digital accessibility for all users. Learn about our accessibility standards and how to report issues.",
}

const sections = [
  { id: "commitment", title: "Our Commitment" },
  { id: "standards", title: "Accessibility Standards" },
  { id: "features", title: "Accessibility Features" },
  { id: "known-issues", title: "Known Issues" },
  { id: "assistive-technology", title: "Assistive Technology" },
  { id: "feedback", title: "Feedback & Contact" },
  { id: "formal-complaints", title: "Formal Complaints" },
  { id: "third-party", title: "Third-Party Content" },
  { id: "review", title: "Review of This Statement" },
]

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      subtitle="HMCTS is committed to ensuring our website is accessible to everyone."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="commitment">
        <h2>Our Commitment</h2>
        <p>
          HMCTS LLC &ndash; Hospitality Management Consultancy &amp; Technology Solutions is committed to ensuring
          digital accessibility for people with disabilities. We are continually improving the user experience for
          everyone and applying the relevant accessibility standards.
        </p>
        <p>
          We believe that all users, regardless of ability or technology, should have equal access to the information
          and services provided on our website. This accessibility statement applies to hospitalitysoftwaresolutions.com.
        </p>
      </section>

      <section id="standards">
        <h2>Accessibility Standards</h2>
        <p>
          We aim to conform to the{" "}
          <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">
            Web Content Accessibility Guidelines (WCAG) 2.1
          </a>{" "}
          at Level AA. These guidelines explain how to make web content more accessible to people with disabilities.
          Conformance with these guidelines helps make the web more user-friendly for everyone.
        </p>
        <p>The WCAG guidelines are organized around four principles:</p>
        <ul>
          <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive.</li>
          <li><strong>Operable:</strong> User interface components and navigation must be operable.</li>
          <li><strong>Understandable:</strong> Information and the operation of the user interface must be understandable.</li>
          <li><strong>Robust:</strong> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
        </ul>
      </section>

      <section id="features">
        <h2>Accessibility Features</h2>
        <p>The following accessibility features are implemented on our website:</p>
        <ul>
          <li><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard.</li>
          <li><strong>Screen Reader Support:</strong> The Site uses semantic HTML and ARIA labels to support screen readers.</li>
          <li><strong>Text Alternatives:</strong> Images include descriptive alt text.</li>
          <li><strong>Color Contrast:</strong> We maintain sufficient color contrast ratios to aid users with visual impairments.</li>
          <li><strong>Responsive Design:</strong> The Site is designed to work across a range of devices and screen sizes.</li>
          <li><strong>Scalable Text:</strong> Text can be resized up to 200% without loss of content or functionality.</li>
          <li><strong>Focus Indicators:</strong> Visible focus indicators are provided for keyboard navigation.</li>
          <li><strong>No Flashing Content:</strong> We avoid content that flashes more than three times per second to prevent seizure risks.</li>
          <li><strong>Descriptive Links:</strong> Links are written to be meaningful and descriptive out of context.</li>
          <li><strong>Skip Navigation:</strong> A skip-to-main-content link is available for keyboard users.</li>
        </ul>
      </section>

      <section id="known-issues">
        <h2>Known Issues</h2>
        <p>
          We are aware of the following accessibility limitations and are actively working to address them:
        </p>
        <ul>
          <li>Some older PDF documents may not be fully accessible. We are working to provide accessible alternatives.</li>
          <li>Some third-party embedded content may not fully meet our accessibility standards.</li>
          <li>Live chat features may have limited compatibility with some screen readers.</li>
        </ul>
        <p>
          If you encounter any accessibility barrier not listed here, please{" "}
          <a href="/contact">contact us</a> so we can address it promptly.
        </p>
      </section>

      <section id="assistive-technology">
        <h2>Assistive Technology</h2>
        <p>
          Our website is designed to be compatible with the following assistive technologies:
        </p>
        <ul>
          <li>Screen readers (including NVDA, JAWS, VoiceOver on macOS/iOS, and TalkBack on Android)</li>
          <li>Screen magnification software</li>
          <li>Speech input software (e.g., Dragon NaturallySpeaking)</li>
          <li>Keyboard-only navigation</li>
          <li>High contrast display modes</li>
        </ul>
        <p>
          For the best experience, we recommend using an up-to-date web browser alongside your assistive technology.
        </p>
      </section>

      <section id="feedback">
        <h2>Feedback &amp; Contact</h2>
        <p>
          We welcome feedback on the accessibility of our website. If you experience any accessibility barriers or have
          suggestions for improvement, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a></li>
          <li><strong>UK Phone:</strong> <a href="tel:+443333355520">+44 (0)333 335 5520</a></li>
          <li><strong>US Phone:</strong> <a href="tel:+13025991401">+1 (302) 599-1401</a></li>
          <li><strong>UK Office:</strong> 84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, United Kingdom</li>
          <li><strong>US Office:</strong> 131 Continental Drive, Newark, Delaware 19713, USA</li>
        </ul>
        <p>
          We aim to respond to accessibility feedback within 5 business days.
        </p>
      </section>

      <section id="formal-complaints">
        <h2>Formal Complaints</h2>
        <p>
          If you are not satisfied with our response to your accessibility feedback, you may escalate your complaint
          through the following channels:
        </p>
        <ul>
          <li>
            <strong>US:</strong> Contact the{" "}
            <a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer">
              US Department of Justice ADA Information Line
            </a>{" "}
            at 1-800-514-0301.
          </li>
          <li>
            <strong>UK/EU:</strong> Contact your national equality body or the{" "}
            <a href="https://www.equalityhumanrights.com/" target="_blank" rel="noopener noreferrer">
              Equality and Human Rights Commission
            </a>.
          </li>
        </ul>
      </section>

      <section id="third-party">
        <h2>Third-Party Content</h2>
        <p>
          Some content on our Site may be provided by third-party services, including embedded videos, maps, and social
          media feeds. While we endeavor to select third-party services that meet accessibility standards, we cannot
          guarantee the accessibility of content hosted or controlled by third parties.
        </p>
        <p>
          If a third-party service creates an accessibility barrier for you, please let us know and we will work to
          find an alternative solution.
        </p>
      </section>

      <section id="review">
        <h2>Review of This Statement</h2>
        <p>
          This accessibility statement was last reviewed on April 5, 2025. We review and update this statement
          regularly as part of our ongoing commitment to accessibility. We conduct periodic accessibility audits of
          the Site and make improvements based on the findings.
        </p>
        <p>
          Our goal is to achieve and maintain full WCAG 2.1 Level AA conformance. We will continue to invest in
          accessibility improvements to ensure an inclusive experience for all users.
        </p>
      </section>
    </LegalLayout>
  )
}
