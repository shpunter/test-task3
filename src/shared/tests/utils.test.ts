import { describe, expect, it } from "vitest";
import { classNames } from "../utils";

describe("classNames", () => {
    it("should return 1 of 1 dynamic classname", () => {
        const result = classNames({ class: true });
        expect(result).toEqual("class");
    });

    it("should not return dynamic classname", () => {
        const result = classNames({ class: false });
        expect(result).toEqual("");
    });

    it("should return 2 of 2 dynamic classname", () => {
        const result = classNames({ class1: true, class2: true });
        expect(result).toEqual("class1 class2");
    });

    it("should return 1 of 2 dynamic classname", () => {
        const result = classNames({ class1: true, class2: false });
        expect(result).toEqual("class1");
    });

    it("should return 2 of 3 dynamic classname", () => {
        const result = classNames({ class1: true, class2: false, class3: true });
        expect(result).toEqual("class1 class3");
    });

    it("should return 1 of 2 dynamic classname", () => {
        const result = classNames({ class1: true, class2: false, class3: true });
        expect(result).toEqual("class1 class3");
    });

    it("should return 1 of 2 dynamic classname + static", () => {
        const result = classNames({ class1: true, class2: false, class3: true }, ["class4"]);
        expect(result).toEqual("class1 class3 class4");
    });
});
