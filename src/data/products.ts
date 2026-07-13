import type { Product } from '../types';
import remnantBlackFront from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-black-front-.webp';
import remnantBlackFrontAndBack from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-black-front-and-back-.webp';
import remnantGraphiteFront from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-graphite-front.webp';
import remnantGraphiteFrontAndBack from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-graphite-front-and-back.webp';
import remnantHempFront from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-hemp-front.webp';
import remnantHempFrontAndBack from '../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-hemp-front-and-back.webp';
import fafoBlack from '../assets/products/directive-02-fafo-t-shirt-black.webp';
import fafoMilitaryGreen from '../assets/products/directive-02-fafo-t-shirt-military-green.webp';
import fafoWhite from '../assets/products/directive-02-fafo-t-shirt-white.webp';
import shallNotBeInfringedBlack from '../assets/products/shall-not-be-infringed-black.webp';
import shallNotBeInfringedMilitaryGreen from '../assets/products/shall-not-be-infringed-military-green.webp';
import shallNotBeInfringedWhite from '../assets/products/shall-not-be-infringed-white.webp';
import seventeenSeventySixBlack from '../assets/products/1776-riveted-steel-black.webp';
import seventeenSeventySixMilitaryGreen from '../assets/products/1776-riveted-steel-military-green.webp';
import seventeenSeventySixWhite from '../assets/products/1776-riveted-steel-white.webp';
import dangerousThanGovernableBlack from '../assets/products/dangerous-than-governable-black.webp';
import dangerousThanGovernableMilitaryGreen from '../assets/products/dangerous-than-governable-military-green.webp';
import dangerousThanGovernableWhite from '../assets/products/dangerous-than-governable-white.webp';
import weThePeopleBlack from '../assets/products/we-the-people-constitution-preamble-shirt-black.webp';
import weThePeopleMilitaryGreen from '../assets/products/we-the-people-constitution-preamble-shirt-military-green.webp';

export const products: Product[] = [
  {
    id: 'remnant-heavyweight',
    slug: 'the-remnant',
    shopifyHandle: 'the-remnant-heavyweight-garment',
    name: 'The Remnant',
    subtitle: 'Heavyweight Garment',
    tagline: 'For those who won\'t kneel when everyone else does.',
    quote: 'The majority drifts with the current. The Remnant holds the line.',
    price: 38,
    description:
      '100% ring-spun cotton. 6.1 oz/yd². Garment-dyed, pre-shrunk. Built for those who hold the line when the majority drifts. Cut from different cloth. The Remnant is garment-dyed heavyweight Comfort Colors — a boxier, weightier build than the rest of the line. Everything else in the Armory runs on Bella+Canvas. This one doesn\'t.',
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
    badge: 'flagship',
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: [remnantBlackFront, remnantBlackFrontAndBack] },
      { name: 'Graphite', hex: '#4a4a4a', images: [remnantGraphiteFront, remnantGraphiteFrontAndBack] },
      { name: 'Hemp', hex: '#6E7355', images: [remnantHempFront, remnantHempFrontAndBack] },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 2,
    imageSrc: remnantBlackFront,
    imageBg: '#FFFFFF',
    colorway: ['black', 'graphite', 'hemp'],
  },
  {
    id: 'fafo-tshirt',
    slug: 'directive-02-fafo-t-shirt',
    shopifyHandle: 'fafo',
    name: 'FAFO',
    subtitle: 'Directive 02',
    tagline: 'For when polite stopped getting the job done.',
    quote: 'For when polite stopped getting the job done.',
    price: 34,
    description:
      '100% Airlume combed & ring-spun cotton. 4.2 oz/yd². A statement for the patient who ran out of patience. New riveted-steel armor plate treatment.',
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
    badge: 'signature',
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: [fafoBlack] },
      { name: 'Military Green', hex: '#4a5240', images: [fafoMilitaryGreen] },
      { name: 'White', hex: '#FFFFFF', images: [fafoWhite] },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 1,
    imageSrc: fafoBlack,
    imageBg: '#FFFFFF',
    colorway: ['black', 'military-green', 'white'],
  },
  {
    id: 'we-the-people-preamble',
    slug: 'we-the-people-constitution-preamble-shirt',
    shopifyHandle: 'we-the-people',
    name: 'We The People',
    subtitle: 'Constitution Preamble Shirt',
    tagline: 'For patriots who still take the preamble literally.',
    quote: '1787. Still relevant. Still the law.',
    price: 40,
    description:
      'The full 52-word Preamble to the Constitution, printed on premium 4.2 oz Airlume cotton. Read the document before you regulate. Full doctrine edition — front recognition, the complete preamble printed on the back.',
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
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: [weThePeopleBlack] },
      { name: 'Military Green', hex: '#4a5240', images: [weThePeopleMilitaryGreen] },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 1,
    imageSrc: weThePeopleBlack,
    imageBg: '#FFFFFF',
    colorway: ['black', 'military-green'],
  },
  {
    id: 'shall-not-be-infringed',
    slug: 'shall-not-be-infringed',
    shopifyHandle: 'shall-not-be-infringed',
    name: 'Shall Not Be Infringed',
    subtitle: 'Second Amendment Shirt',
    tagline: 'The clearest sentence in the Bill of Rights.',
    quote: 'A well regulated Militia... the right of the people to keep and bear Arms, shall not be infringed.',
    price: 34,
    description:
      '100% Airlume combed & ring-spun cotton. 4.2 oz/yd². The clearest 2A statement, cast in riveted-steel armor plate lettering with rifling detail worked into the O.',
    story: `Twenty-seven words. No ambiguity in the ones that matter.

The lettering is cast to look forged — riveted steel armor plate, the kind of material built to outlast an argument. Look closer at the O and you'll find rifling: the spiral grooves cut into a barrel to put a spin on what leaves it. Small detail. Exact reference.

This isn't a bumper-sticker slogan. It's the actual text, in a typeface built to look like it was struck from plate rather than printed on cotton.

Every garment is equipped with a high-density QR code on the left sleeve linking directly to the full text of the U.S. Constitution. Read the whole document, not just the part people argue about.

Shall not be infringed. Still not a suggestion.`,
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
    badge: 'new',
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: [shallNotBeInfringedBlack] },
      { name: 'Military Green', hex: '#4a5240', images: [shallNotBeInfringedMilitaryGreen] },
      { name: 'White', hex: '#FFFFFF', images: [shallNotBeInfringedWhite] },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 1,
    imageSrc: shallNotBeInfringedBlack,
    imageBg: '#FFFFFF',
    colorway: ['black', 'military-green', 'white'],
    lane: 'Rights',
  },
  {
    id: '1776-riveted-steel',
    slug: '1776-riveted-steel',
    shopifyHandle: '1776',
    name: '1776',
    subtitle: 'Riveted Steel',
    tagline: 'Semiquincentennial. Forged, not printed.',
    quote: 'Two hundred fifty years on, and the numerals still hold.',
    price: 34,
    description:
      '100% Airlume combed & ring-spun cotton. 4.2 oz/yd². Semiquincentennial numerals cast in forged riveted-steel plate, struck with a Philadelphia Foundry mark.',
    story: `Two hundred fifty years since 1776. The numerals on this shirt are cut to look forged — riveted steel plate, not a printed font — because the thing they commemorate wasn't printed either. It was struck.

The Philadelphia Foundry detail worked into the design is a nod to where the document was drafted and where the bell that announced it once rang, cracked and all.

This is a Semiquincentennial piece, not a seasonal one. It'll read the same in fifty years as it does now.

Every garment is equipped with a high-density QR code on the left sleeve linking directly to the full text of the U.S. Constitution — the document that came eleven years after the numerals on your chest.

1776. Forged, not printed.`,
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
    badge: 'new',
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: [seventeenSeventySixBlack] },
      { name: 'Military Green', hex: '#4a5240', images: [seventeenSeventySixMilitaryGreen] },
      { name: 'White', hex: '#FFFFFF', images: [seventeenSeventySixWhite] },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 1,
    imageSrc: seventeenSeventySixBlack,
    imageBg: '#FFFFFF',
    colorway: ['black', 'military-green', 'white'],
    lane: 'Founding Era',
  },
  {
    id: 'dangerous-than-governable',
    slug: 'dangerous-than-governable',
    shopifyHandle: 'dangerous',
    name: 'Dangerous Than Governable',
    subtitle: 'Illustrated Statement Piece',
    tagline: "I'd rather be dangerous than governable.",
    quote: "I'd rather be dangerous than governable, 1776.",
    price: 34,
    description:
      '100% Airlume combed & ring-spun cotton. 4.2 oz/yd². An illustrated statement piece — a sepia minuteman over torn-flag texture, with the line that says what the others imply.',
    story: `Not every shirt in the Armory makes its point in text. This one starts with a sepia-toned minuteman, standing over a torn-flag texture — worn, frayed at the edges, the way most founding ideals look after two hundred fifty years of use.

Underneath it: "I'd rather be dangerous than governable, 1776." Not a threat. A preference. The founders weren't tame men, and they didn't build a country for tame ideas.

The illustration is deliberately rough — foundry-etched, not airbrushed — because the sentiment isn't a polished one either.

Every garment is equipped with a high-density QR code on the left sleeve linking directly to the full text of the U.S. Constitution. The document that gave dangerous men a framework instead of a leash.

Dangerous. Not ungoverned. There's a difference, and this shirt knows it.`,
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
    badge: 'new',
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: [dangerousThanGovernableBlack] },
      { name: 'Military Green', hex: '#4a5240', images: [dangerousThanGovernableMilitaryGreen] },
      { name: 'White', hex: '#FFFFFF', images: [dangerousThanGovernableWhite] },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    featured: true,
    imageCount: 1,
    imageSrc: dangerousThanGovernableBlack,
    imageBg: '#FFFFFF',
    colorway: ['black', 'military-green', 'white'],
    lane: 'Defiance',
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentId: string): Product[] =>
  products.filter((p) => p.id !== currentId);
