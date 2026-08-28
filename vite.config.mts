import { copyFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

const dist = resolve(import.meta.dirname, 'dist');

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/plugin.ts'),
      name: 'KaplayPluginTemplate',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format, entryName) => {
        switch (format) {
          case 'es':
            return `${entryName}.mjs`;
          case 'umd':
            return `${entryName}.umd.js`;
          default:
            return `${entryName}.${format}`;
        }
      },
    },
    rolldownOptions: {
      external: ['kaplay'],
    },
    sourcemap: true,
  },

  plugins: [
    dts({
      include: ['src'],
      afterBuild() {
        ['ts', 'cts', 'mts'].map((extension) => {
          copyFileSync(
            resolve(dist, 'src/plugin.d.ts'),
            resolve(dist, `plugin.d.${extension}`),
          );
        });
        rmSync(resolve(dist, 'src'), { force: true, recursive: true });
      },
    }),
  ],

  test: {
    globals: true,
    coverage: {
      include: ['src/**/*.ts'],
      thresholds: {
        100: true,
      },
    },
  },
});
