import lineClamp from "@tailwindcss/line-clamp";
import typography from "@tailwindcss/typography";
import { initialize } from "monaco-tailwindcss/tailwindcss.worker.js";
import type { TailwindConfig } from "monaco-tailwindcss";
import autoprefixer from "autoprefixer";
import postcss from "postcss";

initialize({
  prepareTailwindConfig(tailwindConfig) {
    const config = tailwindConfig as TailwindConfig;

    console.log(config);
    if (config.plugins) {
      // eslint-disable-next-line no-console
      console.error("Only preconfigured built in plugins are supported", config.plugins);
    }

    const plugins = [typography, lineClamp, postcss, autoprefixer];

    return { ...config, plugins } as any;
  }
});
