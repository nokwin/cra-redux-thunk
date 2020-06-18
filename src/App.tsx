import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { HomePage } from "./pages/homepage/homepage.component";
import { CounterPage } from "./pages/counter-page/counter-page.component";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/counter" component={CounterPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
