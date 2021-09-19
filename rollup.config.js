import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import image from 'rollup-plugin-img';
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    image({
      output: `lib/images`, // default the root
      extensions: /\.(png|jpg|jpeg|gif|svg)$/, // support png|jpg|jpeg|gif|svg, and it's alse the default value
      limit: 8192,  // default 8192(8k)
      exclude: 'node_modules/**'
    }),
    cleaner({
      targets: ["./lib"],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
};
