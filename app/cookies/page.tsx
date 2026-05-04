import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Cookie Policy | HMCTS - Hospitality Software Solutions",
  description:
    "Learn how HMCTS uses cookies and similar tracking technologies on our website.",
}

const sections = [
  { id: "what-are-cookies", title: "What Are Cookies?" },
  { id: "how-we-use-cookies", title: "How We Use Cookies" },
  { id: "types-of-cookies", title: "Types of Cookies We Use" },
  { id: "third-party-cookies", title: "Third-Party Cookies" },
  { id: "managing-cookies", title: "Managing Your Cookie Preferences" },
  { id: "do-not-track", title: "Do Not Track Signals" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
]

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="This policy explains how we use cookies and similar technologies on our website."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="what-are-cookies">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer, tablet, or mobile device when you visit a
          website. They are widely used to make websites work more efficiently and to provide information to the site
          owner. Cookies do not contain personally identifiable information by themselves, but personal information that
          we store about you may be linked to the information stored in and obtained from cookies.
        </p>
        <p>
          Cookies serve many purposes &mdash; for example, they allow you to navigate between pages efficiently, remember
          your preferences, and generally improve your browsing experience. They can also help ensure that the
          advertisements you see online are more relevant to you and your interests.
        </p>
      </section>

      <section id="how-we-use-cookies">
        <h2>How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Ensure the Site functions correctly and securely.</li>
          <li>Remember your preferences and settings between visits.</li>
          <li>Analyze how visitors use the Site so we can improve it.</li>
          <li>Understand the effectiveness of our marketing campaigns.</li>
          <li>Personalize the content and advertisements shown to you.</li>
          <li>Enable certain features of the Site, such as live chat and contact forms.</li>
        </ul>
      </section>

      <section id="types-of-cookies">
        <h2>Types of Cookies We Use</h2>

        <h3>Strictly Necessary Cookies</h3>
        <p>
          These cookies are essential for the Site to function properly and cannot be switched off in our systems.
          They are usually set in response to actions you take, such as filling in forms or setting your privacy
          preferences. Without these cookies, services you have asked for cannot be provided.
        </p>

        <h3>Performance &amp; Analytics Cookies</h3>
        <p>
          These cookies allow us to count visits and traffic sources so we can measure and improve the performance of
          the Site. They help us understand which pages are the most and least popular and how visitors move around the
          Site. All information these cookies collect is aggregated and therefore anonymous.
        </p>
        <p>
          We may use <strong>Google Analytics</strong> to collect this information. Google Analytics uses cookies to
          help us analyze how users interact with the Site. The data collected is used in accordance with{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
          You can opt out of Google Analytics tracking by visiting the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out page</a>.
        </p>

        <h3>Functional Cookies</h3>
        <p>
          These cookies enable the Site to provide enhanced functionality and personalization, such as remembering your
          preferences, language settings, or login status. They may be set by us or by third-party providers whose
          services we have added to our pages.
        </p>

        <h3>Targeting &amp; Advertising Cookies</h3>
        <p>
          These cookies are set through our Site by our advertising partners. They may be used to build a profile of
          your interests and show you relevant advertisements on other sites. They work by uniquely identifying your
          browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
        </p>
      </section>

      <section id="third-party-cookies">
        <h2>Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics,
          deliver advertisements, and so on. The following third parties may place cookies on your device when you visit
          our Site:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> &mdash; Usage analytics and performance measurement.
          </li>
          <li>
            <strong>Google Ads</strong> &mdash; Advertising and remarketing.
          </li>
          <li>
            <strong>LinkedIn Insight Tag</strong> &mdash; Professional audience analytics and advertising.
          </li>
          <li>
            <strong>Facebook Pixel</strong> &mdash; Social media advertising and conversion tracking.
          </li>
          <li>
            <strong>Intercom / Live Chat Tools</strong> &mdash; Customer support and live chat functionality.
          </li>
        </ul>
        <p>
          We do not control these third-party cookies. Please refer to the respective privacy policies of these service
          providers for more information on how they use cookies and how you can manage them.
        </p>
      </section>

      <section id="managing-cookies">
        <h2>Managing Your Cookie Preferences</h2>
        <h3>Browser Settings</h3>
        <p>
          Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all
          cookies, accept only certain cookies, or delete cookies when you close your browser. Please note that if you
          disable or reject cookies, some parts of the Site may become inaccessible or not function properly.
        </p>
        <p>
          For instructions on how to manage cookies in your specific browser, please visit:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        <p>
          For more general information on managing cookies, visit{" "}
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
        </p>
        <h3>Opting Out of Analytics</h3>
        <p>
          To opt out of being tracked by Google Analytics across all websites, visit{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            tools.google.com/dlpage/gaoptout
          </a>.
        </p>
      </section>

      <section id="do-not-track">
        <h2>Do Not Track Signals</h2>
        <p>
          Some browsers include a &ldquo;Do Not Track&rdquo; (DNT) feature that signals to websites you visit that you
          do not want to have your online activity tracked. The Site does not currently respond to DNT signals, as
          there is no universally accepted standard for how such signals should be interpreted. We will continue to
          monitor this area and may update our practices if a standard is adopted.
        </p>
      </section>

      <section id="changes">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons. When we make material changes, we will update the &ldquo;Last
          updated&rdquo; date at the top of this page. Please review this policy periodically to stay informed about
          our use of cookies.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a></li>
          <li><strong>UK Phone:</strong> <a href="tel:+443333355520">+44 (0)333 335 5520</a></li>
          <li><strong>US Phone:</strong> <a href="tel:+13025991401">+1 (302) 599-1401</a></li>
          <li><strong>UK Office:</strong> 84 Swinton Hall Road, Swinton, Manchester, M27 4BJ, United Kingdom</li>
          <li><strong>US Office:</strong> 131 Continental Drive, Newark, Delaware 19713, USA</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
