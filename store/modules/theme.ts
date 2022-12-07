import { action, makeObservable, observable } from "mobx";

class Store {
  @observable count = 0;
  @observable theme = "dark";
  @observable isDark = false;

  constructor() {
    makeObservable(this);
  }

  @action setTheme(type: "light" | "dark" | "" = "dark") {
    this.theme = type;
    this.isDark = type === "dark";
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
