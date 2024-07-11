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
    url(),
    svgr(),
    json(),
    external(),
    postcss({
      minimize: true,
      modules: true,
      plugins: [postcss_nested, postcss_inline_svg()],
    }),
    babel({
      extensions: [".js", ".ts", ".tsx"],
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    resolve(),
    commonjs(),
  ],
};
