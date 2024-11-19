#!/usr/bin/env bun

import { getPackages } from "./utils/getPackages"

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
