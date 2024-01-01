/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        // Google 이미지 호스트
        remotePatterns: [{
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
        }],
    }
};

module.exports = nextConfig;