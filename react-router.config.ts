import type { Config } from '@react-router/dev/config';
import { products } from './src/data/products';

export default {
  appDirectory: 'src',
  ssr: false,
  async prerender() {
    return [
      '/',
      '/shop',
      '/about',
      '/manifesto',
      '/contact',
      '/founders-words',
      '/constitution',
      '/constitution-challenge',
      '/privacy',
      '/refunds',
      '/terms',
      '/shipping',
      '/oath',
      ...products.map((product) => `/products/${product.slug}`),
    ];
  },
} satisfies Config;
