import { getThemeConfig } from "@/config/theme.config.ts";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleProvider layer>
      <ConfigProvider theme={getThemeConfig()}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
);
