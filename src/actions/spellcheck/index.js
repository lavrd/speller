import {ADD_HISTORY, ON_FOCUS} from "../../constants";
import api from "../../api";

const addHistoryA = (payload) => {
  return {
    type: ADD_HISTORY,
    payload
  }
}

const onFocusA = {
  type: ON_FOCUS
}

const spellCheck = (text) => (dispatch) => {
  api(text).then(response => {
    let isCheck = !response.length

    dispatch(addHistoryA({text, isCheck}))
  })
}

const onFocus = () => (dispatch) => {
  dispatch(onFocusA)
}

export {spellCheck, onFocus}
