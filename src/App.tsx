// App.tsx
import { Outlet } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { ToastProvider } from "./contexts/ToastProvider";
import { GlobalConfirmModal } from "./features/modal/Modal";

export default function App() {
  return (
    <Fragment>
      <Outlet />

      {/* Global UI */}
      <ToastProvider />
      <GlobalConfirmModal />
    </Fragment>
  );
}
