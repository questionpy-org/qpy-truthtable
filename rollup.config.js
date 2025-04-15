import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";


export default {
    input: 'ts/main.ts',
    output: {
        file: 'js/main.js',
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
