import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

// initial Store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

//STORE
const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer store={store} />
    </Provider>
  );
}

export default App;
