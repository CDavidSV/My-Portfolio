import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "user-images.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "github.com",
                pathname: "/user-attachments/**",
            },
        ],
    },
};

export default nextConfig;
