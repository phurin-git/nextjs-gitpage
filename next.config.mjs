/** @type {import('next').NextConfig} */
import { execSync } from 'child_process';

const isProd = process.env.NODE_ENV === 'production';

const getrepoPath = () => {
    try {
        const repoUrl = execSync('git config --get remote.origin.url').toString().trim();
        const repoPath = repoUrl.split('/').pop().replace('.git', '');
        return repoPath;
    } catch (error) {
        console.error('Error getting repository name:', error);
        return '';
    }
};

const repoPath = getrepoPath();
const nextConfig = isProd ? {
    env: {
        BASE_URL: `/${repoPath}`,
    },
    basePath: `/${repoPath}`,
    assetPrefix: `/${repoPath}`,
    output: 'export',
    distDir: 'docs',
} : {};

export default nextConfig;