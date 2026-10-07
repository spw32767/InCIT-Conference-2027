import type { NextConfig } from 'next';
import venues from './src/content/venues.json';

const config: NextConfig = {
  images: {
    // Only the image URLs observed in the supplied venue references are allowed.
    remotePatterns: venues.flatMap(page=>page.sections.flatMap(section=>section.images.map(image=>new URL(image.src)))),
  },
};

export default config;
