import typescript from "@rollup/plugin-typescript"

const pkg = require("./package.json")

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    }, {
      file: "dist/index.esm.js",
      format: "es"
    }
  ],
  plugins: [typescript()],
  external: [...Object.keys(pkg.dependencies), "react-dom/server"]
}