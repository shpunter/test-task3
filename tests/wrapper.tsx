import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// do not remove React
import React, { ReactNode } from "react";

const queryClient = new QueryClient();

export const queryClientWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
