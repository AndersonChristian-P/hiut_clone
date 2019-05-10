import React from 'react';
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import store from "./redux/store"
import router from "./router"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        {router}
        <Footer />
      </HashRouter>
    </Provider>
  );
}

export default App;
