import PolicyPage from '../components/policies/PolicyPage';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'Terms of Service | Forefather Threads',
    description:
      'The terms governing your use of the Forefather Threads site and any purchases made through it.',
    path: '/terms',
  });
}

export default function TermsOfService() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms governing your use of the Forefather Threads site and any purchases made through it."
      lastUpdated="July 10, 2026"
      sections={[
        {
          heading: 'Agreement to Terms',
          body: (
            <p>
              These Terms of Service ("Terms") govern your access to and use of
              forefatherthreads.com (the "Site"), operated by Treesh Tech LLC, doing business
              as Forefather Threads. By accessing or using the Site, you agree to be bound by
              these Terms. If you do not agree, do not use the Site.
            </p>
          ),
        },
        {
          heading: 'Eligibility',
          body: (
            <p>
              You must be at least 18 years old, or the age of majority in your jurisdiction, to
              place an order. By using the Site, you represent that you meet this requirement.
            </p>
          ),
        },
        {
          heading: 'Products, Pricing & Availability',
          body: (
            <p>
              We attempt to display product details and pricing accurately, but errors may
              occur. We reserve the right to correct pricing errors, limit order quantities, and
              discontinue products at any time without notice. Prices are listed in USD and
              do not include taxes or shipping unless stated otherwise.
            </p>
          ),
        },
        {
          heading: 'Orders & Payment',
          body: (
            <p>
              Placing an order is an offer to purchase, which we may accept or decline. Payment
              is processed securely through Shopify. We reserve the right to cancel or refuse
              any order for reasons including suspected fraud, inventory issues, or pricing
              errors.
            </p>
          ),
        },
        {
          heading: 'Intellectual Property',
          body: (
            <p>
              All content on the Site — including text, graphics, logos, and designs — is the
              property of Treesh Tech LLC or its licensors and is protected by intellectual
              property law. You may not reproduce, distribute, or create derivative works
              without our prior written consent.
            </p>
          ),
        },
        {
          heading: 'Prohibited Conduct',
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Using the Site for any unlawful purpose.</li>
              <li>Attempting to gain unauthorized access to the Site or its systems.</li>
              <li>Interfering with the security or proper functioning of the Site.</li>
              <li>Scraping, harvesting, or reselling Site content without permission.</li>
            </ul>
          ),
        },
        {
          heading: 'Third-Party Links',
          body: (
            <p>
              The Site may contain links to third-party websites. We are not responsible for the
              content, policies, or practices of any third-party site.
            </p>
          ),
        },
        {
          heading: 'Disclaimer of Warranties',
          body: (
            <p>
              The Site and its content are provided "as is" without warranties of any kind,
              express or implied, to the fullest extent permitted by law.
            </p>
          ),
        },
        {
          heading: 'Limitation of Liability',
          body: (
            <p>
              To the fullest extent permitted by law, Treesh Tech LLC shall not be liable for
              any indirect, incidental, or consequential damages arising from your use of the
              Site or products purchased through it.
            </p>
          ),
        },
        {
          heading: 'Governing Law',
          body: (
            <p>
              These Terms are governed by the laws of the State of Indiana, without regard to
              its conflict of law principles. Any disputes shall be resolved in the courts
              located in Allen County, Indiana.
            </p>
          ),
        },
        {
          heading: 'Changes to These Terms',
          body: (
            <p>
              We may update these Terms at any time. Changes take effect when posted to this
              page. Continued use of the Site after changes constitutes acceptance.
            </p>
          ),
        },
        {
          heading: 'Contact Us',
          body: (
            <p>
              Questions about these Terms can be sent to{' '}
              <a href="mailto:hq@forefatherthreads.com" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                hq@forefatherthreads.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
