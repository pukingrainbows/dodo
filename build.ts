#!/usr/bin/env bun

import { readdirSync, readFileSync, statSync } from "fs"
import { join } from "path"

interface PackageInfo {
  name: string
  dependencies: string[]
  path: string
}

function getPackages() {
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

const packagesMap = getPackages()

const sortedPackages: PackageInfo[] = [
  packagesMap.get("@pukingrainbows-ui/logic")!,
  packagesMap.get("@pukingrainbows-ui/system")!,
  packagesMap.get("@pukingrainbows-ui/divider")!,
  ...Array.from(packagesMap.values()).filter(
    (pkg) => !["@pukingrainbows-ui/system"].includes(pkg.name),
  ),
]

let i = 0
for (const pkg of sortedPackages) {
  i++
  console.log(`${i}).- 🍻`)
  console.log(`Building ${pkg.name}...`)

  const proc = Bun.spawn({
    cmd: ["bun", "run", "build"],
    cwd: pkg.path,
    stdout: "inherit",
    stderr: "inherit",
  })

  // Wait for the process to exit and get the exit code
  const exitCode = await proc.exited

  if (exitCode !== 0) {
    console.error(`Build failed for package ${pkg.name}`)
    process.exit(exitCode)
  }
}
