import React from 'react';
import './App.css';
import Home from './screens/Home/Home';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import lights from './redux/reducers/lights';
import weather from './redux/reducers/weather';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(combineReducers({lights, weather}), applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  // loggerMiddleware // neat middleware that logs actions
));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  )
}

export default App;
