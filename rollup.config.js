import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import pkg from "./package.json";
import postcss_nested from "postcss-nested";
import postcss_inline_svg from "postcss-inline-svg";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    json(),
    external(),
    postcss({
      modules: true,
      plugins: [postcss_nested, postcss_inline_svg()],
    }),
    url(),
    svgr(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ],
};
