import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { store } from "./app/store";
import { getThemeConfig } from "./config/themeConfig";
import { router } from "./router";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <StyleProvider layer>
          <ConfigProvider theme={getThemeConfig()}>
            <RouterProvider router={router} />
          </ConfigProvider>
        </StyleProvider>
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
