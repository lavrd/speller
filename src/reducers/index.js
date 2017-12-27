import {createReducer} from "redux-create-reducer";
import {combineReducers} from "redux";
import {ADD_HISTORY, ON_FOCUS, TOGGLE_HISTORY} from "../constants";

const initialState = {
  resultVisible: false,
  historyVisible: false,
  currentCheck: {},
  history: []
}

const reducer = createReducer(initialState, {
  [ADD_HISTORY]: (state, action) => {
    let newState = Object.assign({}, state)

    newState.resultVisible = true

    newState.currentCheck = {
      text: action.payload.text,
      isCheck: action.payload.isCheck
    }

    newState.history.unshift({
      text: action.payload.text,
      isCheck: action.payload.isCheck
    })

    if (newState.history.length === 11) {
      newState.history.pop()
    }

    return newState
  },
  [ON_FOCUS]: (state) => {
    let newState = Object.assign({}, state)

    newState.resultVisible = false

    return newState
  },
  [TOGGLE_HISTORY]: (state) => {
    let newState = Object.assign({}, state)

    newState.historyVisible = !state.historyVisible

    return newState
  }
})

export default combineReducers({
  app: reducer
})
