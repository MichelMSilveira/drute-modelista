import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

export { inter, cormorant };