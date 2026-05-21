import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Directory that contains this `next.config` file (stable; not `process.cwd()`). */
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  allowedDevOrigins :  ["https://childish-prowess-deary.ngrok-free.dev"],
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
