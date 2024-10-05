/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {};

export default nextConfig;

if (process.env.NODE_ENV === 'development') {
    // we simply need to call the utility
    setupDevPlatform();
}