import { useState } from "react";

export type DefaultModalType = "ADD" | "EDIT" | "VIEW" | "CONFIRM";

export type ModalState<DataT = undefined, TypeT = DefaultModalType> = {
  open: boolean;
  type?: TypeT;
  data?: DataT;
};

export type ModalComponentProps<
  DataT = undefined,
  TypeT = DefaultModalType
> = ModalState<DataT, TypeT> & {
  onClose: () => void;
};

type UseModalReturn<DataT, TypeT> = [
  ModalState<DataT, TypeT>,
  (params?: Omit<ModalState<DataT, TypeT>, "open">) => void,
  () => void
];

/**
 * useModal
 *
 * Custom React hook for managing modal state with optional type and data.
 *
 * @template DataT - Data passed to the modal
 * @template TypeT - Modal type (defaults to common modal actions)
 *
 * @param onAfterClose Optional callback executed after modal is closed
 *
 * @returns [modalState, openModal, closeModal]
 *
 * @example
 * const [modal, openModal, closeModal] = useModal<User, "EDIT" | "VIEW">();
 *
 * openModal({ type: "EDIT", data: user });
 * closeModal();
 */
export default function useModal<DataT = undefined, TypeT = DefaultModalType>(
  onAfterClose?: () => void
): UseModalReturn<DataT, TypeT> {
  const [modal, setModal] = useState<ModalState<DataT, TypeT>>({
    open: false,
  });

  const openModal = (params: Omit<ModalState<DataT, TypeT>, "open"> = {}) => {
    setModal({ open: true, ...params });
  };

  const closeModal = () => {
    onAfterClose?.();
    setModal({ open: false });
  };

  return [modal, openModal, closeModal];
}
