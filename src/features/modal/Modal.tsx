import { useAppDispatch, useAppSelector } from "@/store/store";
import { Button, Modal, Typography } from "antd";
import { closeConfirm } from "./confirmSlice";

const { Paragraph, Text } = Typography;

export function GlobalConfirmModal() {
  const dispatch = useAppDispatch();
  const { open, data } = useAppSelector((state) => state.confirm);

  const handleCancel = () => {
    data?.reject?.();
    dispatch(closeConfirm());
  };

  const handleConfirm = () => {
    data?.resolve?.();
    dispatch(closeConfirm());
  };

  return (
    <Modal
      open={open}
      title={data?.title ?? "Confirm Action"}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          {data?.cancelText ?? "Cancel"}
        </Button>,
        <Button
          key="confirm"
          type={data?.danger ? "primary" : "default"}
          danger={data?.danger}
          onClick={handleConfirm}
        >
          {data?.confirmText ?? "Confirm"}
        </Button>,
      ]}
      centered
      destroyOnHidden
    >
      <Paragraph strong>{data?.message}</Paragraph>
      {data?.subMessage && <Text type="secondary">{data.subMessage}</Text>}
    </Modal>
  );
}
