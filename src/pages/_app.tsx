import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { AppContext } from "@/contexts/sizeContext";
import React, { useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const categories: string[] = ["Category A", "Category B", "Category C"];

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );
  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};
export default appWithTranslation(App);
