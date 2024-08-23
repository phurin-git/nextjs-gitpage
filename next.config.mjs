/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = isProd ? {
    env: {
        BASE_URL: '/static-export-nextjs',
    },
    basePath: process.env.BASE_URL,
    assetPrefix: process.env.BASE_URL,
    output: 'export',
    distDir: 'docs',
} : {};

export default nextConfig;