import React from 'react';
import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';
import store from './redux/store'

import Main from './components/main'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
