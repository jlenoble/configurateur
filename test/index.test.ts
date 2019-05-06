import { expect } from "chai";
import Configurateur from "../src/index";

describe("Testing Configurateur", (): void => {
  const defaultArgs = [];

  it("Class Configurateur can be instanciated", (): void => {
    expect(
      (): void => {
        new Configurateur(...defaultArgs);
      }
    ).not.to.throw();
  });
});
