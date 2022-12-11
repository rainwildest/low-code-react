import { memo } from "react";
import { Button } from "antd";
import { Icon } from "components";
import { observer } from "mobx-react";
import { useMobxStores } from "store";

const Layout = observer(({ children }) => {
  const { useThemeStore } = useMobxStores();

  const onSetTheme = () => {
    useThemeStore.setTheme(useThemeStore.isDark ? "light" : "dark");
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-gray-1000 dark:bg-purple-1000">
      {/* 头部 */}
      <header className="h-16 bg-gray-1000 dark:bg-purple-1000">
        {JSON.stringify(useThemeStore.isDark)}
        <Button className="flex items-center" onClick={onSetTheme}>
          <Icon name={useThemeStore.isDark ? "sun" : "moon"} />
        </Button>
      </header>
      <section className="flex h-full w-full">
        {/* 导航栏 */}
        <aside className="h-ful w-16 relative z-50 bg-gray-1000 dark:bg-purple-1000"></aside>

        <main className="h-full w-full">{children}</main>
      </section>
    </div>
  );
});

export default memo(Layout);
