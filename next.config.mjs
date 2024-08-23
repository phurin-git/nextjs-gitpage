/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/static-export-nextjs',
    assetPrefix: '/static-export-nextjs/',
    images: {
        loader: 'akamai',
        path: ''
    },
    output: 'export',
    distDir: 'docs',
};

export default nextConfig;
