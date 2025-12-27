import { useState } from "react";

export type ModalType<DataT = never, TypeT = never> = {
  open: boolean;
  type?: "ADD" | "EDIT" | "VIEW" | "CONFIRM" | TypeT;
  data?: string | number | DataT;
};

export type ModalComponentProps<DataT = never, TypeT = never> = {
  onClose: (val?: boolean) => void;
} & ModalType<DataT, TypeT>;

type ReturnType<DataT, TypeT> = [
  ModalType<DataT, TypeT>,
  (data: Omit<ModalType<DataT, TypeT>, "open">) => void,
  () => void
];

/**
 * Custom React hook for managing modal state with optional data and type parameters.
 *
 * @template DataT - The type of data to be passed to the modal (default: never).
 * @template TypeT - The type of modal (default: never).
 * @param {() => void} [reRender] - Optional callback function to trigger when the modal closes with a truthy value.
 * @returns {[ModalType<DataT, TypeT>, (params: Omit<ModalType<DataT, TypeT>, "open">) => void, (val?: boolean) => void]}
 *   Returns a tuple containing:
 *   - The current modal state object.
 *   - A function to open the modal with optional type and data.
 *   - A function to close the modal, optionally triggering the reRender callback.
 *
 * @example
 * const [modal, openModal, closeModal] = useModal<MyDataType, MyModalType>();
 * openModal({ type: 'EDIT', data: { id: 1 } });
 * closeModal();
 */
export default function useModal<DataT = never, TypeT = never>(
  reRender?: () => void
): ReturnType<DataT, TypeT> {
  const [modal, setModal] = useState<ModalType<DataT, TypeT>>({
    open: false,
    type: undefined,
    data: undefined,
  });

  const onOpen = ({
    type = undefined,
    data = undefined,
  }: Omit<ModalType<DataT, TypeT>, "open">) => {
    setModal({
      open: true,
      type,
      data,
    });
  };

  const onClose = () => {
    if (reRender) reRender();

    setModal({
      open: false,
      type: undefined,
      data: undefined,
    });
  };

  return [modal, onOpen, onClose];
}
