import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Import only the components a page uses from the package barrel (it re-exports every component).
  experimental: { optimizePackageImports: ["@meetingat10/design-system", "react-aria-components"] },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
