import PolicyPage, { Fill } from '../components/policies/PolicyPage';
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
      intro="Standard placeholder shipping terms. Replace the bracketed values with your actual processing times, carriers, and rates."
      lastUpdated="[Month DD, YYYY]"
      sections={[
        {
          heading: 'Order Processing Time',
          body: (
            <p>
              Orders are processed within <Fill>[3–5]</Fill> business days before shipping.
              Made-to-order items may require additional production time of{' '}
              <Fill>[X]</Fill> business days, noted on the product page. Orders are not
              processed or shipped on weekends or holidays.
            </p>
          ),
        },
        {
          heading: 'Shipping Rates & Delivery Estimates',
          body: (
            <>
              <p>Free shipping on every order — no minimum required. Delivery method and timeline vary by location:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-cream">Standard</strong> — <Fill>[5–7 business days]</Fill></li>
                <li><strong className="text-cream">Expedited</strong> — <Fill>[2–3 business days, $X.XX]</Fill></li>
              </ul>
              <p>Delivery estimates are provided by the carrier and are not guaranteed.</p>
            </>
          ),
        },
        {
          heading: 'Domestic Shipping',
          body: (
            <p>
              We ship via <Fill>[carrier name, e.g. USPS, UPS]</Fill> to all 50 U.S. states. Additional
              fees or delivery time may apply for <Fill>[Alaska, Hawaii, PO boxes, APO/FPO addresses]</Fill>.
            </p>
          ),
        },
        {
          heading: 'International Shipping',
          body: (
            <p>
              We currently ship to <Fill>[list of countries, or "select international destinations"]</Fill>.
              International orders may be subject to customs duties, taxes, and import fees
              charged by the destination country — these are the responsibility of the customer
              and are not included in our shipping charges.
            </p>
          ),
        },
        {
          heading: 'Order Tracking',
          body: (
            <p>
              Once your order ships, you will receive a confirmation email with a tracking
              number. Please allow <Fill>[24–48 hours]</Fill> for tracking information to update
              after it's issued.
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
              arrives damaged, contact us at <Fill>[support@yourdomain.com]</Fill> within{' '}
              <Fill>[X]</Fill> days of the delivery date so we can file a claim with the carrier
              and make it right.
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
              Questions about shipping can be sent to <Fill>[support@yourdomain.com]</Fill>.
            </p>
          ),
        },
      ]}
    />
  );
}
