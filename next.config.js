/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["source.unsplash.com", "wallpaperset.com"],
    },
    experimental: {
        useClient: true,
    },
}

module.exports = nextConfig
