import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import path from "node:path"
import process from "node:process"

const jsOutputPath = process.env.QPY_DIST_JS ?? path.resolve(import.meta.dirname, "dist", "static", "js");

export default {
    input: 'src/main.ts',
    output: {
        file: `${jsOutputPath}/main.js`,
        format: 'es',
    },
    plugins: [
        typescript(),
        nodeResolve({
            mainFields: ['browser'],
            preferBuiltins: false,
        }),
        terser(),
    ],
};
