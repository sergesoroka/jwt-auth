import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store';

import App from './App';

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({ store });

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
