import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm'],
  dts: true,
  sourcemap: false,
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  tsconfig: 'tsconfig.json',
  // The site's components carry 'use client'; a library bundle has no use for it.
  esbuildOptions(o) {
    o.logOverride = { 'ignored-directive': 'silent' };
    // Partner marks ship inline — nothing outside the site serves /assets/.
    o.alias = { ...(o.alias ?? {}), '@/lib/assets': './src/assets.ts' };
  },
});
