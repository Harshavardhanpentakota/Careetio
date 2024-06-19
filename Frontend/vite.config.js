import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './src',
  base: '/',
  // Other Vite configuration options...
},{
  optimizeDeps: {
    include: [
      'react',
      'react-dom'
    ]
  }
});