/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enable styled-components SWC transform for better SSR and to avoid flicker/glitches
    styledComponents: true,
  },
};

export default nextConfig;
