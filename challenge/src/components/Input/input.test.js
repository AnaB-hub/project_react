import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  it("Should set input value", () => {
    const { container, getByTestId } = render(<Input />);
    const input = getByTestId("input");
    fireEvent.change(input, { target: { value: "Brazil" } });
    expect(getByTestId("input").value).toEqual("Brazil");
  });
});
