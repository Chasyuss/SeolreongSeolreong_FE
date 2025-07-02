import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // React 사용하는 경우만

export default defineConfig({
  plugins: [react()],
});
