import type { ReactNode } from 'react';
import PolicyPage from '../components/policies/PolicyPage';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'Contact Information | Forefather Threads',
    description:
      'Official business and customer support contact details for Forefather Threads — email, phone, hours, and mailing address.',
    path: '/contact-info',
  });
}

interface InfoRow {
  label: string;
  value: ReactNode;
}

function InfoList({ rows }: { rows: InfoRow[] }) {
  return (
    <dl className="divide-y divide-cream/10 border-t border-b border-cream/10">
      {rows.map((row) => (
        <div key={row.label} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
          <dt className="font-sans text-cream/60 text-xs tracking-[0.15em] uppercase sm:w-40 shrink-0">
            {row.label}
          </dt>
          <dd className="font-sans text-cream/80 text-sm leading-relaxed">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ContactInfo() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Contact Information"
      intro="Official business and support contact details for Forefather Threads."
      sections={[
        {
          heading: 'Business Information',
          body: (
            <InfoList
              rows={[
                { label: 'Legal Name', value: <>Treesh Tech LLC</> },
                { label: 'Doing Business As', value: <>Forefather Threads</> },
                { label: 'Mailing Address', value: <>6435 W Jefferson Blvd PMB #266, Fort Wayne, IN 46804</> },
                { label: 'Location', value: <>Fort Wayne, Indiana</> },
              ]}
            />
          ),
        },
        {
          heading: 'Customer Support',
          body: (
            <InfoList
              rows={[
                { label: 'Support Email', value: <>support@forefatherthreads.com</> },
                { label: 'Order & Returns', value: <>support@forefatherthreads.com</> },
                { label: 'Phone', value: <>(260) 408-5500</> },
                { label: 'Hours', value: <>Mon–Fri, 9am–5pm ET</> },
                { label: 'Response Time', value: <>Within 24–48 hours on business days</> },
              ]}
            />
          ),
        },
        {
          heading: 'Other Ways to Reach Us',
          body: (
            <p>
              Prefer a form? Use the{' '}
              <a href="/contact" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                Contact page
              </a>{' '}
              to send us a message directly. For press or wholesale inquiries, contact{' '}
              hq@forefatherthreads.com.
            </p>
          ),
        },
      ]}
    />
  );
}
