import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('pages/Home.tsx'),
  route('shop', 'pages/Shop.tsx'),
  route('products/:slug', 'pages/ProductDetail.tsx'),
  route('about', 'pages/About.tsx'),
  route('manifesto', 'pages/Manifesto.tsx'),
  route('contact', 'pages/Contact.tsx'),
  route('founders-words', 'pages/FoundersWords.tsx'),
  route('constitution', 'pages/Constitution.tsx'),
  route('constitution-challenge', 'pages/ConstitutionChallenge.tsx'),
] satisfies RouteConfig;
