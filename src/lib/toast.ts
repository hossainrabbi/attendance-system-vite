import { message } from "antd";
import type { JointContent } from "antd/es/message/interface";
type Types = "success" | "error" | "info" | "warning";

export const toast = (type: Types, content: JointContent) => {
  message.config({
    getContainer: () => {
      const container = document.createElement("div");
      container.className = "custom-toast-message";
      document.body.appendChild(container);
      return container;
    },
    maxCount: 1,
  });

  switch (type) {
    case "success":
      message.success(content);
      break;
    case "error":
      message.error(content);
      break;
    case "info":
      message.info(content);
      break;
    case "warning":
      message.warning(content);
      break;
    default:
      message.info(content);
  }
};
