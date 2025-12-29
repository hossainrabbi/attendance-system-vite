import { useDispatch } from "react-redux";
import type { ConfirmPayload } from "../confirmSlice";
import { openConfirm } from "../confirmSlice";

/**
 * useConfirm
 *
 * Global confirmation dialog hook (Promise-based).
 */
export function useConfirm() {
  const dispatch = useDispatch();

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
