import dynamic from "next/dynamic";
import { ComponentType, memo } from "react";

const Editor: ComponentType = dynamic(() => import("views/low-code"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-1000 dark:bg-purple-1000">加载中...</div>
});

const Index = () => <Editor />;

export default memo(Index);
