#!/usr/bin/env bun

import { readdirSync, readFileSync, statSync } from "fs"
import { join } from "path"
function getPackages(): Map<string, PackageInfo> {
  const packagesDir = join(process.cwd(), "packages")

  const packageDirs = readdirSync(packagesDir).filter((dir) => {
    const fullPath = join(packagesDir, dir)
    return statSync(fullPath).isDirectory()
  })

  const packageInfos: PackageInfo[] = []

  for (const dir of packageDirs) {
    const packageJsonPath = join(packagesDir, dir, "package.json")
    try {
      const packageJsonData = readFileSync(packageJsonPath, "utf-8")
      const packageJson = JSON.parse(packageJsonData)
      const dependencies = [
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(packageJson.devDependencies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
      ]
      packageInfos.push({
        name: packageJson.name,
        dependencies,
        path: join(packagesDir, dir),
      })
    } catch (err) {
      console.error(`Failed to read package.json for package ${dir}: ${err}`)
      process.exit(1)
    }
  }

  const packageMap = new Map<string, PackageInfo>()
  for (const pkg of packageInfos) {
    packageMap.set(pkg.name, pkg)
  }

  return packageMap
}

export { getPackages }
