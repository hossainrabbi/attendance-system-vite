import type { ModalProps } from "antd";
import { Modal } from "antd";
import type { ReactNode } from "react";

import type { ModalComponentProps } from "@/hooks/useModal";

/**
 * Title can be:
 * - ReactNode (string, JSX, etc.)
 * - Object map keyed by modal type
 */
export type ModalTitle<TypeT extends string> =
  | ReactNode
  | Partial<Record<TypeT, ReactNode>>;

/**
 * Children can be:
 * - ReactNode
 * - Render prop receiving modal state
 */
export type ModalChildren<DataT, TypeT extends string> =
  | ReactNode
  | ((props: ModalComponentProps<DataT, TypeT>) => ReactNode);

export type CustomModalProps<DataT, TypeT extends string> = ModalComponentProps<
  DataT,
  TypeT
> & {
  title?: ModalTitle<TypeT>;
  children?: ModalChildren<DataT, TypeT>;
  modalProps?: Omit<
    ModalProps,
    "open" | "title" | "onCancel" | "children" | "footer"
  >;
};

/**
 * Type guard to detect title map vs ReactNode
 */
function isTitleMap<TypeT extends string>(
  title: ModalTitle<TypeT> | undefined
): title is Partial<Record<TypeT, ReactNode>> {
  return (
    typeof title === "object" &&
    title !== null &&
    !Array.isArray(title) &&
    !("$$typeof" in title)
  );
}

/**
 * CustomModal
 *
 * Flexible Ant Design modal powered by `useModal`.
 */
export default function CModal<DataT, TypeT extends string>({
  open,
  type,
  data,
  onClose,
  title,
  children,
  modalProps,
}: CustomModalProps<DataT, TypeT>) {
  const resolvedTitle = type && isTitleMap(title) ? title[type] : title;

  const resolvedChildren =
    typeof children === "function"
      ? children({ open, type, data, onClose })
      : children;

  return (
    <Modal
      open={open}
      title={resolvedTitle as string}
      onCancel={onClose}
      footer={null}
      destroyOnHidden
      centered
      {...modalProps}
    >
      {resolvedChildren}
    </Modal>
  );
}
