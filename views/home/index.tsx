import React, { useState, memo } from "react";

const Home: React.FC = () => {
  // const [{ opacity }, drag, preview] = useDrag(
  //   () => ({
  //     type,
  //     item: { name },
  //     collect: monitor => ({
  //       opacity: monitor.isDragging() ? 0.4 : 1
  //     })
  //   }),
  //   [name, type]
  // );

  return <div className="h-screen w-full overflow-hidden">home</div>;
};

export default memo(Home);
