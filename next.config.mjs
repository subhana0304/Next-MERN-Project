/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['d3aj5vjnhssdu4.cloudfront.net'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**'
        }
      ]
    },
    experimental: {
      reactMode: 'concurrent', // Or disable if you're not using concurrent mode
    },
  };
export default nextConfig;
