/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            // İleride kendi sunucundan veya başka yerden resim çekersen buraya eklemen gerekecek
        ],
    },
};

export default nextConfig;