import {applyMiddleware, compose, createStore} from "redux";
import ReduxThunk from 'redux-thunk'
import logger from "redux-logger";
import appReducer from "../reducers";

export function configureStore() {
  const devTools = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ?
    window.devToolsExtension() : f => f

  const middleware = applyMiddleware(
    ReduxThunk,
    logger
  )

  const enhancer = compose(
    middleware,
    devTools
  )

  return createStore(
    appReducer,
    enhancer
  )
}

export default configureStore()
