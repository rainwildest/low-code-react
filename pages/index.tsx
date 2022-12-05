import dynamic from "next/dynamic";

const Editor = dynamic(() => import("views/low-code"), {
  ssr: false,
  loading: () => <div className="bg-sky-100 h-screen"></div>
});

export default () => {
  return <Editor />;
};
