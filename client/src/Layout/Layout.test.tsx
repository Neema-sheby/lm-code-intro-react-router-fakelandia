import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

it("is rendered in the document", () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  const layout = screen.getByLabelText("layout");

  expect(layout).toBeInTheDocument();
});
