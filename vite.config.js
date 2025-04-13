// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // base: "/ClockApp-React/"
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
 plugins: [
 react(),
 VitePWA({
 registerType: 'autoUpdate',
 includeAssets: ['vinay.jpg', 'vinay.jpg'], 
 manifest: {
 name: 'NextDevPath',
 short_name: 'NextDev',
 start_url: '/',
 display: 'standalone',
 background_color: '#000000',
 theme_color: '#1d4ed8',
 icons: [
 {
 src: 'vinay.jpg',
 sizes: '192x192',
 type: 'image/jpg',
 },
 {
 src: 'vinay.jpg',
 sizes: '512x512',
 type: 'image/jpg',
 },
 ],
 },
 }),
 ],
});