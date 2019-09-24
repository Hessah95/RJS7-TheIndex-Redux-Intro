import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./stores/reducer";

const stores = createStore(reducer);

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
