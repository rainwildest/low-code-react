import dynamic from "next/dynamic";
import { ComponentType } from "react";

const Editor: ComponentType = dynamic(() => import("views/low-code"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-1000 dark:bg-purple-1000 h-screen">加载中...</div>
  )
});

export default () => {
  return <Editor />;
};
