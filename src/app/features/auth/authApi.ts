import { apiService } from "@/app/apis/api";
import { API_URLS } from "@/app/apiUrls";
import type { CommonResponse } from "@/types";
import { setUser } from "./authSlice";
import type { ILogin, ILoginResponse } from "./authType";

export const authApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<CommonResponse<ILoginResponse>, ILogin>({
      query: (body) => ({
        url: API_URLS.LOGIN,
        method: "POST",
        body,
      }),

      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const res = data?.data;

          if (!res) return;

          const loginData = {
            accessToken: res.access_token,
            refreshToken: res.refresh_token,
            user: {
              role: res.role,
            },
          };

          dispatch(setUser(loginData));
        } catch {
          // Errors are handled by the common handleSubmit utility or RTK Query globally
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
