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
    onRecoverableError: (err) => {
      // Ignore hydration errors
      if (err.message.includes('Hydration failed')) {
        return;
      }
      // Log other errors as usual
      console.error(err);
    },
  };
export default nextConfig;
