import React, { createContext, useContext } from "react";
import themeStore from "./modules/theme";
import { enableStaticRendering } from "mobx-react";

let store: AnyProps | null = null;

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

export function initializeStore(initialData = {}) {
  if (isServer) {
    return { themeStore };
  }

  if (!store) {
    store = { themeStore };
  }

  return store;
}

export const StoreContext = createContext(null);

export function StoreProvider(props: AnyProps) {
  return (
    <StoreContext.Provider value={props.value}>
      {props.children}
    </StoreContext.Provider>
  );
}

type StoresProps = {
  themeStore: typeof themeStore;
};

export function useMobxStores() {
  return useContext<StoresProps>(StoreContext);
}
