import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages under a sub-path, set base to '/your-repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: './',
});
