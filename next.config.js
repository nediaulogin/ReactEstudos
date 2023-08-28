/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["source.unsplash.com"],
    },
    experimental: {
        useClient: true,
    },
}

module.exports = nextConfig
