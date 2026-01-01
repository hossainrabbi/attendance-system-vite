import { ENV } from "@/config/globalConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { defaultErrorMsg, defaultHeaders } from "../utils";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: ENV.APP_API,
      prepareHeaders: async (headers, { getState }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const token = (getState() as any)?.auth?.access_token;
        return defaultHeaders(headers, token);
      },
    });

    const result = await baseQuery(args, api, extraOptions);
    await defaultErrorMsg(result, api.type);

    return result;
  },

  tagTypes: [],
  keepUnusedDataFor: 60,
  endpoints: () => ({}),
});
