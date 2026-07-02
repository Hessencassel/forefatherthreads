import PolicyPage, { Fill } from '../components/policies/PolicyPage';
import { pageMeta } from '../lib/seo';

export function meta() {
  return pageMeta({
    title: 'Refund Policy | Forefather Threads',
    description:
      'Our returns, exchanges, and refund process — eligibility, timelines, and how to start a return with Forefather Threads.',
    path: '/refunds',
  });
}

export default function RefundPolicy() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Refund Policy"
      intro="Standard placeholder terms for returns, exchanges, and refunds. Replace the bracketed values with your actual return window, condition requirements, and process."
      lastUpdated="[Month DD, YYYY]"
      sections={[
        {
          heading: 'Overview',
          body: (
            <p>
              We want you to be satisfied with your order. This policy explains how returns,
              exchanges, and refunds work. It applies to purchases made directly through{' '}
              <Fill>[yourdomain.com]</Fill>.
            </p>
          ),
        },
        {
          heading: 'Return Eligibility',
          body: (
            <>
              <p>
                Items may be returned within <Fill>[30]</Fill> days of the delivery date if they are:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Unworn, unwashed, and in original condition.</li>
                <li>In their original packaging, with tags attached.</li>
                <li>Accompanied by proof of purchase (order number or receipt).</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Non-Returnable Items',
          body: (
            <p>
              The following items are final sale and not eligible for return or refund:{' '}
              <Fill>[e.g. made-to-order items, sale/clearance items, gift cards]</Fill>. This section
              should list any product categories your store excludes from returns.
            </p>
          ),
        },
        {
          heading: 'How to Start a Return',
          body: (
            <p>
              Email <Fill>[returns@yourdomain.com]</Fill> with your order number and the reason for
              return. We will send you return instructions and, if applicable, a prepaid
              shipping label. Returns sent without prior authorization may not be accepted.
            </p>
          ),
        },
        {
          heading: 'Refunds',
          body: (
            <p>
              Once we receive and inspect your return, we will notify you of the approval status.
              Approved refunds are issued to your original payment method within{' '}
              <Fill>[5–10]</Fill> business days. Original shipping charges are{' '}
              <Fill>[refundable / non-refundable]</Fill>.
            </p>
          ),
        },
        {
          heading: 'Late or Missing Refunds',
          body: (
            <p>
              If you haven't received a refund within the expected window, first check your bank
              or card statement — processing times vary by provider. If it still hasn't appeared,
              contact us at <Fill>[support@yourdomain.com]</Fill>.
            </p>
          ),
        },
        {
          heading: 'Exchanges',
          body: (
            <p>
              We currently <Fill>[do / do not]</Fill> offer direct exchanges. For a different size
              or color, return the original item for a refund and place a new order.
            </p>
          ),
        },
        {
          heading: 'Damaged or Defective Items',
          body: (
            <p>
              If your order arrives damaged or defective, contact us within{' '}
              <Fill>[7]</Fill> days of delivery at <Fill>[support@yourdomain.com]</Fill> with photos of
              the issue. We will arrange a replacement or full refund at no cost to you.
            </p>
          ),
        },
        {
          heading: 'Return Shipping Costs',
          body: (
            <p>
              Unless the return is due to our error (damaged, defective, or incorrect item), the
              customer is responsible for return shipping costs of{' '}
              <Fill>[flat rate / actual cost]</Fill>.
            </p>
          ),
        },
        {
          heading: 'Contact Us',
          body: (
            <p>
              For any return or refund questions, reach us at{' '}
              <Fill>[returns@yourdomain.com]</Fill> or <Fill>[support phone number]</Fill>.
            </p>
          ),
        },
      ]}
    />
  );
}
