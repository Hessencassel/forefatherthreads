import PolicyPage from '../components/policies/PolicyPage';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
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
      intro="Our returns, exchanges, and refund process — eligibility, timelines, and how to start a return."
      lastUpdated="July 10, 2026"
      sections={[
        {
          heading: 'Overview',
          body: (
            <p>
              We want you to be satisfied with your order. This policy explains how returns,
              exchanges, and refunds work. It applies to purchases made directly through
              forefatherthreads.com.
            </p>
          ),
        },
        {
          heading: 'Return Eligibility',
          body: (
            <p>
              Every item we sell is made to order. Because of this, we accept returns and
              refunds only for items that arrive defective, damaged, or misprinted. We are
              not able to accept returns for buyer's remorse, an incorrectly ordered size, or
              a change of mind. Defect, damage, or misprint claims must be reported within 30
              days of the delivery date, with photos, to support@forefatherthreads.com.
            </p>
          ),
        },
        {
          heading: 'Non-Returnable Items',
          body: (
            <p>
              Since every item is made to order specifically for you, orders are not eligible
              for return or refund based on buyer's remorse, incorrect size selection, or
              change of mind. Only defective, damaged, or misprinted items qualify — see
              Return Eligibility above.
            </p>
          ),
        },
        {
          heading: 'How to Start a Return',
          body: (
            <p>
              Email support@forefatherthreads.com with your order number, photos of the issue,
              and a description of the defect, damage, or misprint. We will send you return
              instructions and, if applicable, a prepaid shipping label. Returns sent without
              prior authorization may not be accepted.
            </p>
          ),
        },
        {
          heading: 'Refunds',
          body: (
            <p>
              Once we receive and inspect your return, we will notify you of the approval status.
              Approved refunds are issued to your original payment method within 5–10 business
              days. Original shipping charges are non-refundable (shipping is free on every
              order, so this rarely applies).
            </p>
          ),
        },
        {
          heading: 'Late or Missing Refunds',
          body: (
            <p>
              If you haven't received a refund within the expected window, first check your bank
              or card statement — processing times vary by provider. If it still hasn't appeared,
              contact us at support@forefatherthreads.com.
            </p>
          ),
        },
        {
          heading: 'Exchanges',
          body: (
            <p>
              We do not offer direct exchanges, since every item is made to order. For a
              different size, place a new order.
            </p>
          ),
        },
        {
          heading: 'Damaged or Defective Items',
          body: (
            <p>
              If your order arrives damaged, defective, or misprinted, contact us within 30
              days of delivery at support@forefatherthreads.com with photos of the issue. We
              will arrange a replacement or full refund at no cost to you.
            </p>
          ),
        },
        {
          heading: 'Return Shipping Costs',
          body: (
            <p>
              The customer is responsible for return shipping costs, except when the return is
              due to our error — a defective, damaged, or misprinted item — in which case we
              cover return shipping.
            </p>
          ),
        },
        {
          heading: 'Contact Us',
          body: (
            <p>
              For any return or refund questions, reach us at support@forefatherthreads.com or
              (260) 408-5500.
            </p>
          ),
        },
      ]}
    />
  );
}
