import { rest } from "msw";
import { setupServer } from "msw/node";
import { postData } from "./Post";
import { ErrorMessagesAPI } from "../ErrorHandler/ErrorMessages";

//-------------------Test data

const testData1 = {
  subject: "confession",
  reason: "rudeness",
  details:
    "I behaved rudely to a citzen in Fakelandia. I will make sure I don't do it next time.",
};

//-------------------

const handlers = [
  rest.post("http://localhost:8080/api/confess", (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        justTalked: false,
        message: "Confession received.",
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.listHandlers());
afterAll(() => server.close());

const mock = jest.fn();

it(`returns response from API`, async () => {
  const response = await postData(
    "http://localhost:8080/api/confess",
    {
      subject: testData1.subject,
      reason: testData1.reason,
      details: testData1.details,
    },
    mock
  );

  expect(mock).toHaveBeenCalledWith("");
  expect(response).toEqual({
    success: true,
    justTalked: false,
    message: "Confession received.",
  });
});

it(`calls the error callback function on error`, async () => {
  server.use(
    rest.post("http://localhost:8080/api/confess", (req, res, ctx) => {
      return res(ctx.status(418));
    })
  );

  const response = await postData(
    "http://localhost:8080/api/confess",
    {
      subject: testData1.subject,
      reason: testData1.reason,
      details: testData1.details,
    },
    mock
  );

  expect(mock).toBeCalled();
  expect(mock).toBeCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(ErrorMessagesAPI.error418);
});
