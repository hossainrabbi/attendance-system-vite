import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { getThemeConfig } from "./config/theme.config.ts";
import { store } from "./store/store";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleProvider layer>
          <ConfigProvider theme={getThemeConfig()}>
            <App />
          </ConfigProvider>
        </StyleProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
