// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // // import { defineConfig } from 'vite'


// // // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()]
  
 
// })





// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
// });



// vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss'; // Import tailwindcss
// import daisyui from 'daisyui'; // Import daisyui if needed

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
