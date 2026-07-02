import type { ReactNode } from 'react';
import PolicyPage, { Fill } from '../components/policies/PolicyPage';

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
      intro="Official business and support contact details. Replace every bracketed placeholder with your real information."
      sections={[
        {
          heading: 'Business Information',
          body: (
            <InfoList
              rows={[
                { label: 'Legal Name', value: <Fill>[Your Company Legal Name]</Fill> },
                { label: 'Doing Business As', value: <Fill>[Forefather Threads]</Fill> },
                { label: 'Mailing Address', value: <Fill>[Street Address, City, State, ZIP]</Fill> },
                { label: 'Location', value: <>Waynedale, Indiana</> },
              ]}
            />
          ),
        },
        {
          heading: 'Customer Support',
          body: (
            <InfoList
              rows={[
                { label: 'Support Email', value: <Fill>[support@yourdomain.com]</Fill> },
                { label: 'Order & Returns', value: <Fill>[returns@yourdomain.com]</Fill> },
                { label: 'Phone', value: <Fill>[(XXX) XXX-XXXX]</Fill> },
                { label: 'Hours', value: <Fill>[Mon–Fri, 9am–5pm ET]</Fill> },
                { label: 'Response Time', value: <>Within <Fill>[24–48 hours]</Fill> on business days</> },
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
              <Fill>[press@yourdomain.com]</Fill>.
            </p>
          ),
        },
      ]}
    />
  );
}
