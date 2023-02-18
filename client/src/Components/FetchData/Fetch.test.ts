import { rest } from "msw";
import { setupServer } from "msw/node";
import { fetchData } from "./Fetch";

const handlers = [
  rest.get("https://testingAPI.com/res", (req, res, ctx) => {
    return res(
      ctx.json({
        misdemeanours: [
          { citizenId: 16499, misdemeanour: "lift", date: "2/17/2023" },

          { citizenId: 476, misdemeanour: "lift", date: "2/17/2023" },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mock = jest.fn();

it(`returns data from API`, async () => {
  const response = await fetchData("https://testingAPI.com/res", mock);

  expect(response).toEqual({
    misdemeanours: [
      { citizenId: 16499, misdemeanour: "lift", date: "2/17/2023" },

      { citizenId: 476, misdemeanour: "lift", date: "2/17/2023" },
    ],
  });
});

it(`calls the error callback function on error`, async () => {
  server.use(
    rest.get("https://testingAPI.com/res", (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  const response = await fetchData("https://testingAPI.com/res", mock);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(response).toBeUndefined();
});
