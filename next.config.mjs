/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // `next build` and `next dev` share `.next` by default, so running a build
  // while the dev server is up leaves dev serving half-deleted chunks. Set
  // NEXT_DIST_DIR (see the `build:check` script) to verify a build without
  // disturbing a running dev server. Deploys use the default.
  distDir: process.env.NEXT_DIST_DIR || '.next',
};

export default nextConfig;
