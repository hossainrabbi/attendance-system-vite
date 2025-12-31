import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { getThemeConfig } from "./config/theme.config";
import { router } from "./router";
import { store } from "./store/store";
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
