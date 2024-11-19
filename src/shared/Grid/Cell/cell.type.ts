import { ReactNode } from "react";

export type Props = {
    children: ReactNode;
    className?: string;
    align?: "left" | "center" | "right";
};
