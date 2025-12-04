import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    // ➡️ ACTIVA JSDOM AQUÍ
    environment: 'jsdom',
    // Opcional: Esto hace que 'describe', 'test', 'expect' estén disponibles globalmente sin importarlos
    globals: true, 
  },
});


