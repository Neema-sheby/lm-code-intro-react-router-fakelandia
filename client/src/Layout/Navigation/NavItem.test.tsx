import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavItem from "./NavItem";

it("renders home navigation link", () => {
  render(
    <BrowserRouter>
      <NavItem
        to="/"
        ariaLabel="home"
        content={
          <svg className="icon icon-home-outline">
            <use xlinkHref="../../public/Svg/home-outline.svg#icon-home-outline"></use>
          </svg>
        }
      />
    </BrowserRouter>
  );

  const navItem = screen.getByRole("link", { name: /home/i });

  expect(navItem).toBeInTheDocument();
});
