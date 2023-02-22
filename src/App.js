import React from "react";
import { Provider } from 'react-redux';
import { createStore } from "redux";

import './App.css';

import Router from './router';
import countReducer from "./reducers/countReducer";

let store = createStore(countReducer);

function App() {
  return (
    <Provider store={store}>
        <div className='app-container'>
            <Router/>
        </div>
    </Provider>
  );
}

export default App;
