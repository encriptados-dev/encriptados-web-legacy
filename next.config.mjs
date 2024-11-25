import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encriptados.io"], // Add your hostname here
  },
};

export default withNextIntl(nextConfig);
