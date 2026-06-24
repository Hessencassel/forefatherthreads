import type { Product } from '../types';
import remnantBlackFront from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-black-front-.png';
import remnantBlackFrontAndBack from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-black-front-and-back-.png';
import remnantGraphiteFront from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-graphite-front.png';
import remnantGraphiteFrontAndBack from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-graphite-front-and-back.png';
import remnantHempFront from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-hemp-front.png';
import remnantHempFrontAndBack from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-hemp-front-and-back.png';

export const products: Product[] = [
  {
    id: 'remnant-heavyweight',
    slug: 'the-remnant',
    name: 'The Remnant',
    subtitle: 'Heavyweight Garment',
    tagline: 'For those who won\'t kneel when everyone else does.',
    quote: 'The majority drifts with the current. The Remnant holds the line.',
    price: 29,
    description:
      '100% ring-spun cotton. 6.1 oz/yd². Garment-dyed, pre-shrunk. Built for those who hold the line when the majority drifts.',
    story: `Isaiah's concept of the Remnant — the faithful few who persist when the majority abandons principle — has never been more relevant. This shirt is built for those people. You know who you are.

We didn't print a flag. We didn't put a bald eagle on it. We put words on it, because words still mean something to the kind of people who wear this shirt.

Garment-dyed for a lived-in look from day one. Heavy 6.1 oz ring-spun cotton that gets better with every wash. Cut with a relaxed fit and a vintage wash — because the Remnant doesn't do fitted.

Every garment is equipped with a high-density QR code on the left sleeve linking directly to the full text of the U.S. Constitution. In a world of partisan noise, we provide the source code.

The text on the front reads exactly what it says. No hidden meaning. No irony. Just a plain statement of who this shirt belongs to.`,
    material: {
      fabric: '100% ring-spun cotton',
      weight: '6.1 oz/yd² (207 g/m²)',
      construction: [
        'Garment-dyed & pre-shrunk',
        'Double-needle stitching throughout',
        'Twill-taped neck and shoulders',
        'Relaxed fit with vintage wash',
        'Made to order in the USA',
      ],
    },
    madeToOrder: true,
    badge: 'best-seller',
    rating: 4.9,
    reviewCount: 127,
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: [remnantBlackFront, remnantBlackFrontAndBack] },
      { name: 'Graphite', hex: '#4a4a4a', images: [remnantGraphiteFront, remnantGraphiteFrontAndBack] },
      { name: 'Hemp', hex: '#8B7355', images: [remnantHempFront, remnantHempFrontAndBack] },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 2,
    imageSrc: remnantBlackFront,
    imageBg: '#FFFFFF',
    reviews: [
      {
        author: 'Marcus T.',
        location: 'Tulsa, OK',
        rating: 5,
        body: 'Wore it to a town hall. Three different people stopped me to ask where I got it. Ended up having the kind of conversation about the Second Amendment I hadn\'t had in years.',
        date: 'March 2025',
      },
      {
        author: 'James R.',
        location: 'Colorado Springs, CO',
        rating: 5,
        body: 'Best weight cotton I\'ve owned at this price. Washed it six times and it looks better than new. The message is right. The quality is right.',
        date: 'April 2025',
      },
      {
        author: 'Derek M.',
        location: 'Billings, MT',
        rating: 5,
        body: 'I\'ve bought from the other "patriotic" brands. Most of them are cheap prints on cheap shirts. This is different. You can feel the difference the moment you hold it.',
        date: 'May 2025',
      },
    ],
  },
  {
    id: 'fafo-tshirt',
    slug: 'directive-02-fafo-t-shirt',
    name: 'DIRECTIVE 02: FAFO',
    subtitle: 'T-Shirt',
    tagline: 'For when polite stopped getting the job done.',
    quote: 'For when polite stopped getting the job done.',
    price: 29,
    description:
      '100% Airlume combed & ring-spun cotton. 4.2 oz/yd². A statement for the patient who ran out of patience.',
    story: `There's a moment in every principled person's life when they realize polite conversation has run its course. You've attended the meetings. You've written the letters. You've been the reasonable one in every room.

This shirt is for after that moment.

FAFO is not a threat. It's a prediction. It's what happens when a constitutional republic stops being respected by the people it's supposed to restrain. History is full of examples. We'd prefer not to add another one.

Every garment is equipped with a high-density QR code on the left sleeve linking directly to the full text of the U.S. Constitution. When someone asks what you mean, hand them the primary source.

Both parties are guilty. We're not playing their game.`,
    material: {
      fabric: '100% Airlume combed & ring-spun cotton',
      weight: '4.2 oz/yd² (142 g/m²)',
      construction: [
        'Pre-shrunk',
        'Side-seamed',
        'Shoulder-to-shoulder taping',
        'Made to order in the USA',
      ],
    },
    madeToOrder: true,
    badge: 'best-seller',
    rating: 4.8,
    reviewCount: 89,
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 2,
    reviews: [
      {
        author: 'Robert A.',
        location: 'Austin, TX',
        rating: 5,
        body: 'Finally a brand that isn\'t waving a flag for one party. The manifesto is the first time I\'ve seen someone say both sides are guilty and mean it. Bought two.',
        date: 'April 2025',
      },
      {
        author: 'T. Hansen',
        location: 'Phoenix, AZ',
        rating: 5,
        body: 'My wife hid it and said it was "too much." I bought a second one. We had a conversation about the First Amendment that lasted three hours.',
        date: 'May 2025',
      },
    ],
  },
  {
    id: 'we-the-people-preamble',
    slug: 'we-the-people-constitution-preamble-shirt',
    name: 'We The People',
    subtitle: 'Constitution Preamble Shirt',
    tagline: 'For patriots who still take the preamble literally.',
    quote: '1787. Still relevant. Still the law.',
    price: 32,
    description:
      'The full 52-word Preamble to the Constitution, printed on premium 4.2 oz Airlume cotton. Read the document before you regulate.',
    story: `WE THE PEOPLE — not "we the government." Not "we the elected officials." Not "we the party that won last cycle."

Fifty-two words. The entire purpose of the American government, stated plainly, in order. Most people can't recite past the first three. This shirt carries all of them.

Printed in period-accurate typography that echoes the original document. Not a graphic. Not an interpretation. The actual words, exactly as they were ratified in 1787, on your chest.

For the originalists. For the constitutionalists. For anyone who's tired of being told the Founders didn't mean what they wrote.

Every garment is equipped with a high-density QR code on the left sleeve linking directly to the full U.S. Constitution. The preamble is just the beginning.

1787. Still relevant. Still the law.`,
    material: {
      fabric: '100% Airlume combed & ring-spun cotton (Black); 52% cotton / 48% polyester (other colors)',
      weight: '4.2 oz/yd² (142 g/m²)',
      construction: [
        'Pre-shrunk',
        'Side-seamed',
        'Shoulder-to-shoulder taping',
        'Made to order in the USA',
      ],
    },
    madeToOrder: true,
    badge: undefined,
    rating: 4.9,
    reviewCount: 64,
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 3,
    reviews: [
      {
        author: 'Sarah K.',
        location: 'Nashville, TN',
        rating: 5,
        body: 'The QR code thing isn\'t a gimmick. My brother-in-law scanned it at Thanksgiving and spent the next hour actually reading the Bill of Rights. Worth every penny.',
        date: 'March 2025',
      },
      {
        author: 'Paul D.',
        location: 'Richmond, VA',
        rating: 5,
        body: '52 words. Everyone should know them. This shirt makes sure they do. Gifted three to friends who voted differently than me — that\'s the point.',
        date: 'May 2025',
      },
    ],
  },
  {
    id: 'trt-tyranny-response-team',
    slug: 't-r-t-tyranny-response-team-shirt',
    name: 'T.R.T.',
    subtitle: 'Tyranny Response Team Shirt',
    tagline: 'On call since 1775.',
    quote: 'This isn\'t a joke — it\'s a job description. And the position has been filled for 250 years.',
    price: 32,
    description:
      '100% Airlume combed & ring-spun cotton. 4.2 oz/yd². Deployed at Lexington Green. Bunker Hill. Trenton Crossing. Saratoga. Yorktown.',
    story: `The Tyranny Response Team has been operational since 1775.

Deployed at Lexington Green. Bunker Hill. Trenton Crossing. Saratoga. Yorktown. The names change. The mission doesn't.

This isn't a joke — it's a job description. And the position has been filled for 250 years by men and women who understood that freedom is not a gift from government; it's a condition that must be defended.

The front carries the tactical unit patch. The back carries the deployment record. Both are accurate.

Every garment is equipped with a high-density QR code on the left sleeve linking directly to the full text of the U.S. Constitution — the founding document that defines what the T.R.T. has always been defending.

Still recruiting. Qualification: you have to mean it.`,
    material: {
      fabric: '100% Airlume combed & ring-spun cotton (Black); 52% cotton / 48% polyester (Heather & Military Green)',
      weight: '4.2 oz/yd² (142 g/m²)',
      construction: [
        'Pre-shrunk',
        'Side-seamed',
        'Shoulder-to-shoulder taping',
        'Made to order in the USA',
      ],
    },
    madeToOrder: true,
    badge: 'new',
    rating: 4.7,
    reviewCount: 31,
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Black Heather', hex: '#3a3a3a' },
      { name: 'Military Green', hex: '#4a5240' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 2,
    reviews: [
      {
        author: 'Chris W.',
        location: 'Fayetteville, NC',
        rating: 5,
        body: 'Ordered on a Friday. Had it by Wednesday. Quality is what you\'d expect from something made to order — not mass-produced overseas. The deployment list on the back is a conversation every time.',
        date: 'June 2025',
      },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentId: string): Product[] =>
  products.filter((p) => p.id !== currentId);
