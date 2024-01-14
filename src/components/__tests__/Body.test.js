import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import Body from "../Body";
import { render, act, fireEvent } from "@testing-library/react";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
test("Check if input is loaded", async () => {
  let body;
  await act(async () => {
    body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  });
  const searchInput = body.getByTestId("search-input");
  const searchButton = body.getByTestId("search-btn");
  fireEvent.change(searchInput, {
    target: {
      value: "king",
    },
  });
  fireEvent.click(searchButton);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2)
});
