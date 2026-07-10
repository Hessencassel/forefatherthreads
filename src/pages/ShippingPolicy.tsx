import PolicyPage from '../components/policies/PolicyPage';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'Shipping Policy | Forefather Threads',
    description:
      'Processing times, shipping rates, delivery estimates, and tracking information for Forefather Threads orders.',
    path: '/shipping',
  });
}

export default function ShippingPolicy() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Shipping Policy"
      intro="Processing times, carriers, and delivery estimates for Forefather Threads orders."
      lastUpdated="July 10, 2026"
      sections={[
        {
          heading: 'Order Processing Time',
          body: (
            <p>
              Every item is made to order. Orders are processed within 3–5 business days
              before shipping. Orders are not processed or shipped on weekends or holidays.
            </p>
          ),
        },
        {
          heading: 'Shipping Rates & Delivery Estimates',
          body: (
            <>
              <p>Free shipping on every order — no minimum required. Delivery method and timeline vary by location:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-cream">Standard</strong> — 5–7 business days via USPS or another carrier</li>
              </ul>
              <p>Delivery estimates are provided by the carrier and are not guaranteed.</p>
            </>
          ),
        },
        {
          heading: 'Domestic Shipping',
          body: (
            <p>
              We currently ship within the United States only, via USPS and other carriers.
              Additional fees or delivery time may apply for Alaska, Hawaii, PO boxes, and
              APO/FPO addresses.
            </p>
          ),
        },
        {
          heading: 'International Shipping',
          body: (
            <p>
              We do not currently offer international shipping. We ship to addresses within
              the United States only.
            </p>
          ),
        },
        {
          heading: 'Order Tracking',
          body: (
            <p>
              Once your order ships, you will receive a confirmation email with a tracking
              number. Please allow 24–48 hours for tracking information to update after it's
              issued.
            </p>
          ),
        },
        {
          heading: 'Shipping Delays',
          body: (
            <p>
              While we strive to meet the estimates above, delays can occur due to weather,
              carrier issues, or high order volume. We are not responsible for delays once a
              package is in the carrier's possession, but we're happy to help you track down a
              late order.
            </p>
          ),
        },
        {
          heading: 'Lost, Stolen, or Damaged Packages',
          body: (
            <p>
              If your tracking shows delivered but you haven't received your package, or it
              arrives damaged, contact us at support@forefatherthreads.com within 30 days of
              the delivery date so we can file a claim with the carrier and make it right.
            </p>
          ),
        },
        {
          heading: 'Address Accuracy',
          body: (
            <p>
              Please double-check your shipping address at checkout. We are not responsible for
              orders delivered to an incorrectly entered address. If you need to correct an
              address, contact us as soon as possible after placing your order — we cannot
              guarantee changes once an order has shipped.
            </p>
          ),
        },
        {
          heading: 'Contact Us',
          body: (
            <p>
              Questions about shipping can be sent to support@forefatherthreads.com.
            </p>
          ),
        },
      ]}
    />
  );
}
