import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "commonjs",
        sourcemap: true,
        exports: "auto",
      },
      {
        file: "dist/index.mjs",
        format: "module",
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "module" }],
    plugins: [dts()],
  },
];
