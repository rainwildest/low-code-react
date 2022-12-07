import { Button } from "antd";
import { Icon } from "components";

import { useMobxStores } from "store";

const Layout = ({ children }) => {
  const { useThemeStore } = useMobxStores();

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-1000">
      {/* 头部 */}
      <header className="h-16 bg-gray-1000">
        <Button className="flex items-center">
          <Icon name={useThemeStore.isDark ? "" : ""} />
        </Button>
      </header>
      <section className="flex h-full w-full">
        {/* 导航栏 */}
        <aside className="h-ful w-16 bg-gray-1000"></aside>

        <main className="h-full w-full">{children}</main>
      </section>
    </div>
  );
};

export default Layout;
