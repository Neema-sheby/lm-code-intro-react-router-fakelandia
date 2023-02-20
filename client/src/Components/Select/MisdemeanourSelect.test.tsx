import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MisdemeanourSelect from "./MisdemeanourSelect";

it("is rendered in the document", () => {
  render(<MisdemeanourSelect setFilteredMisdemeanants={() => {}} />);

  const selectFieldMisdemeanour = screen.getByRole("combobox");

  expect(selectFieldMisdemeanour).toBeInTheDocument();
});

it("passes the selected option as prop to parent component - Misdemeanours.tsx", async () => {
  const mock = jest.fn();

  render(<MisdemeanourSelect setFilteredMisdemeanants={mock} />);

  const user = userEvent.setup();

  const selectFieldMisdemeanour = screen.getByRole("combobox");

  //user selects an option
  await user.selectOptions(selectFieldMisdemeanour, "rudeness 🤪");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(1);
});

it("displays the selected option", async () => {
  const mock = jest.fn();

  render(<MisdemeanourSelect setFilteredMisdemeanants={mock} />);

  const user = userEvent.setup();

  const selectFieldMisdemeanour = screen.getByRole("combobox");

  //user selects an option
  await user.selectOptions(selectFieldMisdemeanour, "rudeness 🤪");

  expect(selectFieldMisdemeanour).toHaveValue("rudeness 🤪");
});
