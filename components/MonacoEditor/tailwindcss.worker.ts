import lineClamp from "@tailwindcss/line-clamp";
import typography from "@tailwindcss/typography";
import { initialize } from "monaco-tailwindcss/tailwindcss.worker.js";
import type { TailwindConfig } from "monaco-tailwindcss";

initialize({
  prepareTailwindConfig(tailwindConfig) {
    const config = tailwindConfig as TailwindConfig;

    if (config.plugins) {
      // eslint-disable-next-line no-console
      console.error("Only preconfigured built in plugins are supported", config.plugins);
    }

    const plugins = [typography, lineClamp];

    return { ...config, plugins } as any;
  }
});
