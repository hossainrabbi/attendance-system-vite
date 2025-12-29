import useConfirm from "@/features/modal/_hooks/useConfirm";
import { Toast } from "@/lib/toast";
import { Button } from "antd";

export const SecuritySettings = () => {
  const confirm = useConfirm();

  const handleDelete = async () => {
    try {
      await confirm({
        title: "Delete User",
        message: "Are you sure you want to delete this user?",
        subMessage: "This action cannot be undone.",
        confirmText: "Delete",
        danger: true,
      });

      // await deleteUser();
      Toast.success("User deleted successfully");
    } catch {
      // user cancelled
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Security Settings</h1>
      <p className="text-gray-600">
        Configure security and authentication settings
      </p>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};
