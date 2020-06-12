import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter} from "react-router-dom"
import store from "./redux/store"

export default function App() {
console.log(store.getState())

  return (
    <BrowserRouter>
    <provider store={store}>

   
    <div className="App">
     
    </div>

    </provider>
    </BrowserRouter>
  );
}

export default App;
