import { resolve } from "path"
import { defineConfig } from "vite"
import mergeDefineConfig, { defaultExternal } from "../../vite.config"
import pkg from "./package.json"

export default defineConfig(() => {
  const peerDeps = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []

  const external = (id: string) => {
    if (defaultExternal(id)) {
      return true
    }
    return peerDeps.some(
      (pkgName) => id === pkgName || id.startsWith(`${pkgName}/`),
    )
  }

  return mergeDefineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        formats: ["es"],
        fileName: () => `index.js`,
      },
      rollupOptions: {
        external,
      },
    },
  })
})
