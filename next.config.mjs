/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = isProd ? {
    basePath: '/static-export-nextjs',
    assetPrefix: '/static-export-nextjs',
    output: 'export',
    distDir: 'docs',
} : {};

export default nextConfig;