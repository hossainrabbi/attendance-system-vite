import { useAppDispatch } from "@/store/store";
import type { ConfirmPayload } from "../confirm.slice";
import { openConfirm } from "../confirm.slice";

/**
 * useConfirm
 *
 * Global confirmation dialog hook (Promise-based).
 */
export default function useConfirm() {
  const dispatch = useAppDispatch();

  return (options: Omit<ConfirmPayload, "resolve" | "reject">) =>
    new Promise<void>((resolve, reject) => {
      dispatch(
        openConfirm({
          ...options,
          resolve,
          reject,
        })
      );
    });
}
