import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import postsReducer from './reducers'
import PostList from './components/post-list'

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