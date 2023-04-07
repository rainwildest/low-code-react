import dynamic from "next/dynamic";
import { ComponentType, memo, FC } from "react";
import { MonacoEditorProps } from "./editor";

const Editor: ComponentType<MonacoEditorProps> = dynamic(() => import("./editor"), {
  ssr: false
  // loading: () => <div className="h-screen bg-gray-1000 dark:bg-purple-1000">加载中...</div>
});

export default memo(Editor);
