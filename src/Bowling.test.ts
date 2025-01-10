import { expect, test, describe } from "vitest";
import { Bowling } from "./Bowling";

describe("Bowling Game", () => {
  test("should be able to create a new game", () => {
    expect(new Bowling()).toBeInstanceOf(Bowling);
  });

  // Add your tests here...
});