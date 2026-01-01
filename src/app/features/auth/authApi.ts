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

          // ✅ Persist auth
          localStorage.setItem("auth", JSON.stringify(loginData));
          dispatch(setUser(loginData));
        } catch {
          // ✅ Cleanup on failure
          localStorage.removeItem("auth");
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
