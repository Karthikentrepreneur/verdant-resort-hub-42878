// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  // Load lovable-tagger only in dev, and only if available
  if (mode === "development") {
    try {
      // @ts-ignore - lovable-tagger is an optional dev dependency
      const mod = await import("lovable-tagger");
      const componentTagger = (mod as any)?.componentTagger ?? (mod as any)?.default;
      if (typeof componentTagger === "function") {
        plugins.push(componentTagger());
      }
    } catch {
      // Package not installed — ignore silently
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // If you deploy under a subpath, set base accordingly:
    // base: "/",
    build: {
      outDir: "dist",
      sourcemap: false,
    },
  };
});
