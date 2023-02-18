import { screen, render } from "@testing-library/react";
import NotFound from "./NotFound";

it("is rendering the not found error message", () => {
  render(<NotFound />);

  const notFoundPage = screen.getByLabelText("notFound");

  expect(notFoundPage).toHaveTextContent("Oops! Error 404: Page Not Found !");
});
