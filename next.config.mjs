/** @type {import('next').NextConfig} */
import { execSync } from 'child_process';

const isProd = process.env.NODE_ENV === 'production';

const getRepoName = () => {
    try {
        const repoUrl = execSync('git config --get remote.origin.url').toString().trim();
        const repoName = repoUrl.split('/').pop().replace('.git', '');
        return repoName;
    } catch (error) {
        console.error('Error getting repository name:', error);
        return '';
    }
};

const repoName = getRepoName();
const nextConfig = isProd ? {
    env: {
        BASE_URL: `/${repoName}`,
    },
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
    output: 'export',
    distDir: 'docs',
} : {};

export default nextConfig;