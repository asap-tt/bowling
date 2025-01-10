import { expect, test, describe } from "vitest";
import { Bowling } from "./Bowling";

describe("Bowling Game", () => {
  test("should be able to create a new game", () => {
    expect(new Bowling()).toBeInstanceOf(Bowling);
  });

  // Here's an example of what a test might look like:
  test("should score 0 for a gutter roll", () => {
    const bowling = new Bowling();
    bowling.throwBall(0);
    expect(bowling.score()).toBe(0);
  });

  // Add your tests here...
});