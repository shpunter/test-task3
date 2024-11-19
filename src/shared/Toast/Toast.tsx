import { useEffect, useRef } from "react";
import css from "./toast.module.css";
import { Props } from "./toast.type";

function Toast({ isVisible, children }: Props) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        isVisible ? ref.current?.show() : ref.current?.close();

        setTimeout(() => {
            ref.current?.close();
        }, 3000);
    }, [isVisible]);

    return (
        <dialog ref={ref} className={css.toast}>
            {children}
        </dialog>
    );
}

export default Toast;
