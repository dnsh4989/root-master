import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

test("renders learn react link", () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/Dinesh/i);
  expect(linkElement).toBeInTheDocument();
});
