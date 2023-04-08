import type { FC } from "react";
import { useEffect, useRef } from "react";
import { configureMonacoTailwindcss, tailwindcssData } from "monaco-tailwindcss";
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

import { createStyleElement } from "lib/utils";

export type MonacoEditorProps = {
  htmlText?: string;
  insertStyleLabel?: boolean;
  onChangeStyle?: (style: string) => void;
};

type IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

const TailwindcssMonacoEditor: FC<MonacoEditorProps> = ({ htmlText, insertStyleLabel, onChangeStyle }) => {
  const tailwindConfig = {
    theme: {
      extend: {}
    }
  };

  const init = useRef(false);
  const eidtor = useRef(null);
  const taildindMonaco = useRef<IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (init.current) {
      taildindMonaco.current && taildindMonaco.current.setValue(htmlText || "");
      return;
    }
    init.current = true;

    loader.config({ monaco });

    loader.init().then(monaco => {
      monaco.languages.css.cssDefaults.setOptions({
        data: { dataProviders: { tailwindcssData } }
      });

      const monacoTailwindcss = configureMonacoTailwindcss(monaco, { tailwindConfig });

      window.MonacoEnvironment = {
        getWorker(_, label) {
          switch (label) {
            case "editorWorkerService":
              return new Worker(new URL("monaco-editor/esm/vs/editor/editor.worker?worker", import.meta.url));
            case "css":
              return new Worker(new URL("monaco-editor/esm/vs/language/css/css.worker?worker", import.meta.url));
            case "html":
              return new Worker(new URL("monaco-editor/esm/vs/language/html/html.worker?worker", import.meta.url));
            case "json":
              return new Worker(new URL("monaco-editor/esm/vs/language/json/json.worker?worker", import.meta.url));
            case "tailwindcss":
              // We are using a custom worker instead of the default
              // 'monaco-tailwindcss/tailwindcss.worker.js'
              // This way we can enable custom plugins
              return new Worker(new URL("tailwindcss.worker?.worker", import.meta.url));
          }
        }
      };

      // const tailwindrcModel = monaco.editor.createModel(
      //   `${JSON.stringify(tailwindConfig, undefined, 2)}\n`,
      //   "json",
      //   monaco.Uri.parse("file:///.tailwindrc.json")
      // );

      // @tailwind base;
      const cssModel = monaco.editor.createModel(`@tailwind components; @tailwind utilities;`, "css");

      const htmlModel = monaco.editor.createModel(htmlText || "", "html");

      async function generateOutput() {
        const content = await monacoTailwindcss.generateStylesFromContent(cssModel.getValue(), [
          {
            content: htmlModel.getValue(),
            extension: htmlModel.getLanguageId()
          }
        ]);

        onChangeStyle && onChangeStyle(content);

        if (insertStyleLabel) {
          const styleId = "tailwindcss-style";
          const hasInstance = document.getElementById(styleId);

          hasInstance ? (hasInstance.innerText = content) : createStyleElement(content, { id: styleId });
        }
      }

      generateOutput();
      // cssModel.onDidChangeContent(generateOutput);
      htmlModel.onDidChangeContent(generateOutput);

      const properties = {
        // value: "function hello() {\n\talert(\"Hello world!\");\n}",
        // language:  "javascript",
        // automaticLayout: true,
        // theme:'',
        // colorDecorators: true,
        model: htmlModel
        // wordBasedSuggestions: false,
      };

      // const editor =
      taildindMonaco.current = monaco.editor.create(eidtor.current, properties);
    });
  }, [htmlText]);

  return <div ref={eidtor} className="h-full w-full" />;
};

export default TailwindcssMonacoEditor;
