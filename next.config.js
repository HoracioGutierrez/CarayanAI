/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
            {
                hostname: "lh3.googleusercontent.com",
            },
            {
                hostname: "api.dicebear.com",
            }
        ],
        dangerouslyAllowSVG: true,
    },
    env: {
        MERCADOPAGO_CLIENT_ID: process.env.MERCADOPAGO_CLIENT_ID,
    }
}

module.exports = nextConfig
