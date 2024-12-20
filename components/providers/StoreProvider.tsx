"use client";

import { store } from "@/services";
import { Provider } from "react-redux";

function StoreProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
