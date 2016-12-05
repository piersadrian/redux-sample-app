import React from 'react'
import ReactDOM from 'react-dom'
import {
  applyMiddleware,  // simple wrapper that provides middlewares with the current store to work with
  combineReducers,  // allows us to build multiple reducers into a single structure with named keys
  createStore,  // turns a reducer (or a combined reducer) + middleware into a store
} from 'redux'
import { Provider } from 'react-redux'  // wraps <App /> (or any single top-level component) so that
                                        // the store is always available within our components
import thunk from 'redux-thunk'  // allows our action functions to return *functions* that can
                                 // be called later, rather than just simple data objects, which
                                 // is the standard, synchronous approach. this allows us to do
                                 // network requests (and other async stuff) within actions

import postsReducer from './reducers'
import PostList from './components/post-list-connector'  // redux-aware connected version

const combinedReducers = combineReducers({
  posts: postsReducer,
})

const store = createStore(combinedReducers, applyMiddleware(thunk))
window.store = store

const App = (props) => {
  return (
    <div className="app">
      <PostList />
    </div>
  )
}

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(wrappedApp, document.querySelector('.app'))