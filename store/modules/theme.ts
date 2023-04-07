import { action, makeObservable, observable } from "mobx";
import storage from "lib/storage";

class Store {
  @observable count = 0;
  @observable theme = "light";
  @observable isDark = false;

  constructor() {
    if (typeof window !== "undefined") {
      const theme = storage.get("theme") || "light";

      this.setTheme(theme);

      // setTimeout(() => {
      // makeObservable(this);
      // }, 1000 * 500);
    }

    makeObservable(this);
  }

  @action setTheme(type: "light" | "dark" | "" = "dark") {
    this.theme = type;
    this.isDark = type === "dark";

    storage.set("theme", type);

    if (storage.get("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }

  @action addCount(): void {
    console.log(this.count);
    this.count++;
  }

  @action reduceCount(): void {
    this.count--;
  }
}

export default new Store();
