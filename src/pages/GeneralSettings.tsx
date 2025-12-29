import {
  ConfirmModal,
  type ConfirmModalData,
} from "@/components/ui/ConfirmModal";
import useModal from "@/hooks/useModal";
import { Button } from "antd";

export const GeneralSettings = () => {
  const [confirmModal, openConfirm, closeConfirm] = useModal<
    ConfirmModalData,
    "CONFIRM"
  >();

  const handleDelete = (id: string) => {
    openConfirm({
      type: "CONFIRM",
      data: {
        title: "Delete User",
        message: "Are you sure you want to delete this user?",
        confirmText: "Delete",
        cancelText: "Cancel",
        danger: true,
        onConfirm: async () => {
          console.log("Delete", id);
          // await deleteUser(id);
        },
      },
    });
  };

  return (
    <div>
      <h1>General Settings</h1>
      <Button danger onClick={() => handleDelete("123")}>
        Delete
      </Button>

      <ConfirmModal {...confirmModal} onClose={closeConfirm} />
    </div>
  );
};
