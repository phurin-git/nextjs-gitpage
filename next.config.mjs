/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/static-export-nextjs',
    assetPrefix: `/static-export-nextjs/`,
    output: 'export',
    distDir: 'docs',
};

export default nextConfig;
