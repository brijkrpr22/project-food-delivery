import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "./redux/store"
import Routes from "./Routes/Routes"
import Navbar from "./Routes/Navbar"




export default function App() {
  console.log(store.getState())

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

// export default App;
