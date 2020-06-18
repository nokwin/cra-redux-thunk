import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { HomePage } from "./pages/homepage/homepage.component";
import { CounterPage } from "./pages/counter-page/counter-page.component";
import { store } from "./redux/store";
import { Header } from "./components/header/header.component";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/counter" component={CounterPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
