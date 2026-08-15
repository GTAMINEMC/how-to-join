import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
export default defineConfig({base:'./',plugins:[react()],build:{rollupOptions:{input:{main:resolve(import.meta.dirname,'index.html'),start:resolve(import.meta.dirname,'start/index.html'),ios:resolve(import.meta.dirname,'ios/index.html')}}}});
