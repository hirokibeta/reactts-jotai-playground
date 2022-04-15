/* eslint-disable import/no-extraneous-dependencies, import/no-default-export */
import * as path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // use @src instead of @ until the below change will be marged.
    // https://github.com/import-js/eslint-plugin-import/pull/2334
    alias: [
      {
        find: '@src',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    reactRefresh(),
    react({
      jsxImportSource: '@emotion/react',
      babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] },
    }),
  ],
});
