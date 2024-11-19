import { FACTOR_GRADES_NOW_URL, URLs } from "../api";
import { map } from "./mockResp";

export const fetcher = <T>(url: URLs): Promise<T> => {
    // mocked API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // uncomment to have some random API errors
            // url === FACTOR_GRADES_NOW_URL && Boolean(Math.floor(Math.random() * 2))
            false
                ? reject({ status: 400, message: "any reason" })
                : resolve(map[url].data as T);
        }, map[url].delay);
    });

    // // origin API, has limitation on call number and often offline
    // return fetch(url)
    //     // .then(<T>(resp: T): Promise<T> => {
    //     //     // delay req if needed
    //     //     return new Promise((resolve) =>
    //     //         setTimeout(() => resolve(resp), 1000)
    //     //     );
    //     // })
    //     .then((resp) => {
    //         if (!resp.ok) {
    //             throw new Error(
    //                 `Something went wrong (status: ${resp.status})`,
    //             );
    //         }

    //         return resp.json();
    //     });
};
