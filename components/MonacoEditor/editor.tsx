import { useEffect, useRef } from "react";
import { configureMonacoTailwindcss, tailwindcssData } from "monaco-tailwindcss";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

const MonacoEditor = () => {
  const tailwindConfig = {
    theme: {
      extend: {}
    }
  };

  const init = useRef(false);
  const eidtor = useRef(null);

  useEffect(() => {
    if (init.current) return;
    init.current = true;

    loader.config({ monaco });

    loader.init().then(monaco => {
      monaco.languages.css.cssDefaults.setOptions({
        data: { dataProviders: { tailwindcssData } }
      });

      const monacoTailwindcss = configureMonacoTailwindcss(monaco, { tailwindConfig });

      window.MonacoEnvironment = {
        getWorker(_, label) {
          console.log(label);
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
              return new Worker(new URL("tailwindcssplugin.worker?.worker", import.meta.url));
          }
        }
      };

      // const tailwindrcModel = monaco.editor.createModel(
      //   `${JSON.stringify(tailwindConfig, undefined, 2)}\n`,
      //   "json",
      //   monaco.Uri.parse("file:///.tailwindrc.json")
      // );

      // @tailwind base;
      const cssModel = monaco.editor.createModel(`@tailwind base; @tailwind components; @tailwind utilities;`, "css");

      const htmlModel = monaco.editor.createModel("", "html");

      async function generateOutput() {
        const content = await monacoTailwindcss.generateStylesFromContent(cssModel.getValue(), [
          {
            content: htmlModel.getValue(),
            extension: htmlModel.getLanguageId()
          }
        ]);

        // console.log("style", content);

        // outputPane.textContent = content;
        // monaco.editor.colorizeElement(outputPane, { mimeType: 'css', theme: 'vs-dark' });
      }

      generateOutput();
      cssModel.onDidChangeContent(generateOutput);
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
      monaco.editor.create(eidtor.current, properties);
    });
  }, []);

  return (
    <div style={{ height: "400px", width: "100%", border: "1px solid red" }}>
      <div ref={eidtor} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default MonacoEditor;
