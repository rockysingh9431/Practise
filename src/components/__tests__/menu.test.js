import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_MENU } from "../../mocks/menuData";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
});
test("check if restaurant image is loading or not", async () => {
  let menu;
  await act(async () => {
    menu = render(
      <StaticRouter>
        <Provider store={store}>
            <Header/>
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  });
  const resImage = menu.getByTestId("res-img");
  expect(resImage.src).toBe(
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mznveqfmric44rydj4ie"
  );
});
test("check if menu-items loaded properly", async()=>{
    let menu;
    await act(async () => {
      menu = render(
        <StaticRouter>
          <Provider store={store}>
            <RestaurantMenu />
          </Provider>
        </StaticRouter>
      );
    });
    const menuItems=menu.getAllByTestId("menu-items");
    expect(menuItems[0].innerHTML).toBe("Cheese &amp; Corn Cheese Pizza");
})
test("check if cart is working properly", async () => {
  let menu;
  await act(async () => {
    menu = render(
      <StaticRouter>
        <Provider store={store}>
            <Header/>
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  });
  const addBtn=menu.getAllByTestId("add-btn");
  fireEvent.click(addBtn[0])
  const cartItems=menu.getByTestId("cart")
  expect(cartItems.innerHTML).toBe("Cart- 1 items")
});