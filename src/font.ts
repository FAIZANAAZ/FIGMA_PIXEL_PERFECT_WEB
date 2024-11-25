import { Roboto } from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'], // Include Latin characters
    weight: ['400', '700'], // Specify font weights (e.g., normal and bold)
    style: ['normal', 'italic'], // Optional: normal and italic styles
    variable: '--font-roboto', // Custom CSS variable for this font
  });