import { useQuery } from "@tanstack/react-query";
import { USER_URL } from "../api";
import { fetcher } from "./fetcher";
import { GetUserResp } from "./types";

export const useGetUser = () => {
    return useQuery<GetUserResp>({
        queryKey: ["user"],
        queryFn: () => fetcher(USER_URL),
        refetchOnWindowFocus: false,
        retry: false,
    });
};
