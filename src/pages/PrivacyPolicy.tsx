import PolicyPage, { Fill } from '../components/policies/PolicyPage';
import { pageMeta } from '../lib/seo';

export function meta() {
  return pageMeta({
    title: 'Privacy Policy | Forefather Threads',
    description:
      'How Forefather Threads collects, uses, and protects your personal information when you shop with us.',
    path: '/privacy',
  });
}

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This Privacy Policy explains how we collect, use, and protect the information you share with us. It is a standard template — replace every bracketed placeholder with your actual practices before publishing."
      lastUpdated="[Month DD, YYYY]"
      sections={[
        {
          heading: 'Introduction',
          body: (
            <>
              <p>
                <Fill>[Your Company Legal Name]</Fill> ("we," "us," or "our") operates{' '}
                <Fill>[yourdomain.com]</Fill> (the "Site"). This policy describes what personal
                information we collect, how we use it, and the choices you have.
              </p>
              <p>
                By using the Site, you agree to the collection and use of information in
                accordance with this policy. This is placeholder text — consult a licensed
                attorney to confirm this policy meets the requirements of the jurisdictions
                you operate in (e.g. GDPR, CCPA, CalOPPA) before publishing.
              </p>
            </>
          ),
        },
        {
          heading: 'Information We Collect',
          body: (
            <>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-cream">Contact information</strong> — name, email address, mailing address, phone number.</li>
                <li><strong className="text-cream">Order information</strong> — items purchased, payment details (processed by our payment provider, <Fill>[payment processor name]</Fill>), shipping address.</li>
                <li><strong className="text-cream">Device &amp; usage data</strong> — IP address, browser type, pages visited, referring URL.</li>
                <li><strong className="text-cream">Account information</strong> — if you create an account, your login credentials and order history.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'How We Use Your Information',
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>To process and fulfill your orders, including shipping and payment.</li>
              <li>To communicate with you about your order, account, or customer service requests.</li>
              <li>To send marketing communications, where you have opted in — you may unsubscribe at any time.</li>
              <li>To improve the Site, our products, and the customer experience.</li>
              <li>To detect and prevent fraud or abuse.</li>
            </ul>
          ),
        },
        {
          heading: 'Cookies & Tracking Technologies',
          body: (
            <p>
              We use cookies and similar tracking technologies (e.g. <Fill>[analytics provider, e.g. Google Analytics]</Fill>) to
              operate the Site, remember your preferences, and understand how visitors use the
              Site. You can control cookies through your browser settings; disabling cookies may
              affect Site functionality, including your ability to check out.
            </p>
          ),
        },
        {
          heading: 'How We Share Your Information',
          body: (
            <>
              <p>We do not sell your personal information. We may share it with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service providers who help us operate the Site (payment processing, shipping, email delivery, analytics).</li>
                <li>Law enforcement or regulators, where required by law.</li>
                <li>A successor entity, in the event of a merger, acquisition, or sale of assets.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Data Retention',
          body: (
            <p>
              We retain your personal information for as long as necessary to fulfill the
              purposes described in this policy, comply with our legal obligations, resolve
              disputes, and enforce our agreements — typically <Fill>[X years]</Fill> from your last
              interaction with us, unless a longer retention period is required by law.
            </p>
          ),
        },
        {
          heading: 'Your Rights & Choices',
          body: (
            <p>
              Depending on where you live, you may have the right to access, correct, delete, or
              export your personal information, or to opt out of certain uses. To exercise any
              of these rights, contact us at <Fill>[privacy@yourdomain.com]</Fill>.
            </p>
          ),
        },
        {
          heading: "Children's Privacy",
          body: (
            <p>
              The Site is not directed to children under 13, and we do not knowingly collect
              personal information from children under 13. If you believe a child has provided
              us with personal information, contact us and we will delete it.
            </p>
          ),
        },
        {
          heading: 'Changes to This Policy',
          body: (
            <p>
              We may update this Privacy Policy from time to time. We will post the revised
              policy on this page with an updated "Last updated" date. Continued use of the Site
              after changes take effect constitutes acceptance of the revised policy.
            </p>
          ),
        },
        {
          heading: 'Contact Us',
          body: (
            <p>
              Questions about this Privacy Policy can be sent to{' '}
              <Fill>[privacy@yourdomain.com]</Fill> or by mail to{' '}
              <Fill>[business mailing address]</Fill>.
            </p>
          ),
        },
      ]}
    />
  );
}
