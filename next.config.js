/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.mateusvenancio.com.br',
            },
            {
                hostname: 'images-americanas.b2w.io',
            },
        ],
    },
};

module.exports = nextConfig;
