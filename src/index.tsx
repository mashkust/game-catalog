import React from "react";

import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { store } from "./store";
import HistoryRouter from "./components/history-router";
import hashHistory from "./hash-history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// store.dispatch(fetchGamesAction());

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <HistoryRouter history={hashHistory}>
      <ToastContainer />
      <App />
    </HistoryRouter>
  </Provider>
);
