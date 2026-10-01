import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { parse, compileScript, compileStyleAsync } from '@vue/compiler-sfc';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
const require = createRequire(import.meta.url);
const uiRoot = dirname(require.resolve('@minds-ai-co/ui/package.json'));
const componentStyles = new Map();
export const vuePlugin = {
  name: 'minds-ui-source',
  setup(build) {
    build.onLoad({ filter: /\.vue$/ }, async ({ path }) => {
      const source = await readFile(path, 'utf8');
      const { descriptor, errors } = parse(source, { filename: path });
      if (errors.length) throw errors[0];
      const compiled = compileScript(descriptor, { id: path, inlineTemplate: true });
      const styles = await Promise.all(descriptor.styles.map(style => compileStyleAsync({ source: style.content, filename: path, id: path, scoped: style.scoped })));
      if (styles.some(style => style.errors.length)) throw new Error(`Invalid shared component styles: ${path}`);
      componentStyles.set(path, styles.map(style => style.code).join('\n'));
      return { contents: compiled.content, loader: 'ts', resolveDir: dirname(path) };
    });
  },
};
export const vueDefines = { __VUE_OPTIONS_API__: 'true', __VUE_PROD_DEVTOOLS__: 'false', __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false', 'process.env.NODE_ENV': '"production"' };
export async function sharedStyles(hostStyles) {
  const entry = resolve(uiRoot, 'src/styles/widget.css');
  const css = `${await readFile(entry, 'utf8')}\n${[...componentStyles.values()].join('\n')}\n${hostStyles}`;
  const result = await postcss([postcssImport(), tailwindcss({ presets: [require('@minds-ai-co/ui/tailwind-preset')],
    content: [resolve(uiRoot, 'src/components/button/Button.vue'), resolve(uiRoot, 'src/components/common/Tooltip.vue'), resolve(uiRoot, 'src/components/input/TextInput.vue')],
  })]).process(css, { from: entry });
  // Opaque Figma and offline host panels need self-contained fonts, not relative network requests.
  return result.css.replace(/url\(['"]?([^)'" ]+\.woff2)['"]?\)/g, (_, path) => `url("data:font/woff2;base64,${require('node:fs').readFileSync(resolve(dirname(entry), path)).toString('base64')}")`);
}
