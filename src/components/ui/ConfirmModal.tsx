import type { ModalComponentProps } from "@/hooks/useModal";
import { Button, Modal, Typography } from "antd";
import type { ReactNode } from "react";
import { useState } from "react";

const { Paragraph } = Typography;

/**
 * Data passed to the confirmation modal
 */
export type ConfirmModalData = {
  /** Main title of modal */
  title?: ReactNode;

  /** Primary confirmation message */
  message: ReactNode;

  /** Confirm button text */
  confirmText?: string;

  /** Cancel button text */
  cancelText?: string;

  /** Danger style (delete, irreversible actions) */
  danger?: boolean;

  /**
   * Called when user confirms.
   * Can be async.
   */
  onConfirm: () => void | Promise<void>;
};

/**
 * ConfirmModal
 *
 * Ant Design confirmation modal using `useModal`.
 * Supports message + subMessage.
 */
export function ConfirmModal({
  open,
  data,
  onClose,
}: ModalComponentProps<ConfirmModalData, "CONFIRM">) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!data?.onConfirm) return;

    try {
      setLoading(true);
      await data.onConfirm();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      title={data?.title ?? "Confirm Action"}
      onCancel={onClose}
      centered
      destroyOnHidden
      footer={[
        <Button key="cancel" onClick={onClose}>
          {data?.cancelText ?? "Cancel"}
        </Button>,
        <Button
          key="confirm"
          type={data?.danger ? "primary" : "default"}
          danger={data?.danger}
          loading={loading}
          onClick={handleConfirm}
        >
          {data?.confirmText ?? "Confirm"}
        </Button>,
      ]}
    >
      <Paragraph strong>{data?.message}</Paragraph>
    </Modal>
  );
}
