import { Toast } from "@/lib/toast";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type ApiErrorResponse = {
  message?: string;
};

type MutationFn<T> = (payload: T) => {
  unwrap: () => Promise<unknown>;
};

/**
 * Common submit handler for RTK Query mutations
 * Handles try/catch and toast errors centrally
 */
export const handleSubmit = async <T>(
  mutation: MutationFn<T>,
  payload: T,
  onSuccess?: () => void
) => {
  try {
    await mutation(payload).unwrap();
    onSuccess?.();
  } catch (error) {
    const err = error as FetchBaseQueryError;

    let message = "Something went wrong. Please try again.";

    if ("data" in err) {
      const data = err.data as ApiErrorResponse;
      if (data?.message) {
        message = data.message;
      }
    }

    Toast.error(message);
  }
};
