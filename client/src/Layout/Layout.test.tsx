import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

it("is rendered in the document", () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  const container = screen.getByLabelText("container");

  expect(container).toBeInTheDocument();
});
