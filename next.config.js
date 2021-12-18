/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,

  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /image/, // example.svg?image
          use: ['next-image-loader'],
        },
        {
          resourceQuery: /icon/, // example.svg?icon
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
              },
            },
          ],
        },
        {
          use: ['@svgr/webpack'],
        },
      ],
    });

    return config;
  },
};

module.exports = config;
