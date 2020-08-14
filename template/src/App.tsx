import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { HomePage } from "./pages/homepage/homepage.component";
import { CounterPage } from "./pages/counter-page/counter-page.component";
import { store } from "./redux/store";
import { Header } from "./components/header/header.component";
import { FormsPage } from "./pages/forms-page/forms-page.component";
import { ApiPage } from "./pages/api-page/api-page.component";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/counter" component={CounterPage} />
        <Route exact path="/forms" component={FormsPage} />
        <Route exact path="/api" component={ApiPage} />
      </BrowserRouter>
    </Provider>
  );
};
