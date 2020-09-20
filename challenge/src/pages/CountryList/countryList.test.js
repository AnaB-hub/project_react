import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CountryList from ".";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("Country List", () => {
  it("Should have a title", () => {
    const { container, getByText } = render(<CountryList />);
    expect(getByText("List of Countries")).toBeInTheDocument();
  });

  it("Should have label search", () => {
    const { container, getByText } = render(<CountryList />);

    expect(getByText("Search for a country name:")).toBeInTheDocument();
  });

  it("Should search country", () => {
    const { container, getByTestId } = render(<CountryList />);

    const search = getByTestId("search");
    fireEvent.change(search, { target: { value: "Brazil" } });
    expect(getByTestId("search").value).toEqual("Brazil");
  });
});
