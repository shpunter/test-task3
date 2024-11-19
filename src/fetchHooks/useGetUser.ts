import { useQuery } from "@tanstack/react-query";
import { USER_URL } from "../api";
import { fetcher } from "./fetcher";

export const useGetUser = () => {
    return useQuery<GetUserResp>({
        queryKey: ["user"],
        queryFn: () => fetcher(USER_URL),
        refetchOnWindowFocus: false,
        retry: 3,
        retryDelay: 1000,
    });
};

type GetUserResp = { premium: boolean };
