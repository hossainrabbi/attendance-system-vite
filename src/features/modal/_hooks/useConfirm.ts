import { useAppDispatch } from "@/app/store";
import type { ConfirmPayload } from "../confirmSlice";
import { openConfirm } from "../confirmSlice";

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
