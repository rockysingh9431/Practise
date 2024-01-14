import {fireEvent, render} from "@testing-library/react";
import Header from "../Header";
import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux"
import store from "../../utils/store"

test("does logo loaded properly or not",()=>{

    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const logo=header.getByTestId("logo")
    expect(logo.src).toBe("http://localhost/logo.png")
});
test("check if Home is loaded or not",()=>
{
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    const home=header.getByTestId("home")

    expect(home.innerHTML).toBe("Home")
})
test("check if the cart items is 0 or not",()=>{
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const cartItems=header.getByTestId("cart")
    expect(cartItems.innerHTML).toBe("Cart- 0 items")
})
test("check if online", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("🟢");
});
test("check if login is Working", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const loginButton = header.getByTestId("logInButton");

  fireEvent.click(loginButton)

  const logOutButton=header.getByTestId("logOutButton")

})
