import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import appReducer from "../reducers";

export function configureStore() {
  const devTools = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ?
    window.devToolsExtension() : f => f

  const loggerMiddleware = createLogger()
  const middleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
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
