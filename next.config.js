/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require("webpack");

//  return config;
const nextConfig = {
    reactStrictMode: false,
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')]
    },
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '192.168.29.253:8090',
          },
        ],
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      }
}

module.exports = nextConfig
