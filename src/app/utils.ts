import { ENV } from "@/config/globalConfig";
import { Toast } from "@/lib/toast";
import type {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from "@reduxjs/toolkit/query";

export function defaultHeaders(headers: Headers, token?: string) {
  const defaultHeader: Headers = headers;

  if (token) {
    defaultHeader.set("Authorization", `Bearer ${token}`);
  }

  defaultHeader.set("ngrok-skip-browser-warning", "true");

  return defaultHeader;
}

export async function defaultErrorMsg(
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
  type: "query" | "mutation"
) {
  if (result.error) {
    const message =
      (result.error.data as { message?: string })?.message || "Request failed";

    if (ENV.NODE_ENV === "development") {
      console.log("Unauthorized Log", result);
    }

    if (type === "query") {
      Toast.error(message);
    }

    if (
      result.error?.status === 401 &&
      (result?.error?.data as { message?: string })?.message === "Unauthorized"
    ) {
      localStorage.clear();
      location.reload();
    }
  }
}
