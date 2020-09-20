import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CountryDetailsItens from "./CountryDetailsItens";

describe("Country details itens", () => {
  it("Should set label value", () => {
    const { container, getByText } = render(
      <CountryDetailsItens title="Name" value="Brazil" />
    );
    expect(getByText("Brazil")).toBeInTheDocument();
  });
});
