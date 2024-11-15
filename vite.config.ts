import react from "@vitejs/plugin-react"
import { defineConfig, mergeConfig, UserConfig } from "vite"
import dts from "vite-plugin-dts"

const defaultPlugins = [react(), dts()]

export const defaultExternal = (id: string) => {
  return ["react", "react-dom", "react/jsx-runtime", "@emotion/react"].some(
    (pkg) => id === pkg || id.startsWith(`${pkg}/`),
  )
}

export default (options: any) => {
  const { plugins: customPlugins } = options

  const plugins = Array.isArray(customPlugins) ? customPlugins : defaultPlugins

  const baseConfig: UserConfig = defineConfig({
    plugins,
    build: {
      // @ts-ignore
      lib: {
        formats: ["es"],
        fileName: "index",
      },
    },
  })

  return mergeConfig(baseConfig, options)
}
