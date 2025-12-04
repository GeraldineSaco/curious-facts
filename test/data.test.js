import { describe, expect, test, vi, beforeEach } from "vitest";
import { dataFacts } from "../js/data";

const mockFactData = {
    id: "abc12345",
    text: "This is a simulated useless fact.",
    source: "api",
    source_url: "uselessfacts.jsph.pl",
    language: "en",
    permalink: "uselessfacts.jsph.plabc12345"
};

describe("dataFacts", () => {
    beforeEach(()=>{
        document.body.innerHTML = `
            <div id="displayData"></div>
        `;
        vi.spyOn(global, "fetch").mockResolvedValue({
            json: () => Promise.resolve(mockFactData),
        })
    });

    test("should return typeof objeto response", () => {
        expect(dataFacts("today")).toBeTypeOf("object");
    })
    test("should fetch a fact and return an object structure", async () => {
        const result = await dataFacts("today");
        expect(result).toEqual(mockFactData);
    }); 
});