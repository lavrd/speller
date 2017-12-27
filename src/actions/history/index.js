import {TOGGLE_HISTORY} from "../../constants";

const toggleHistoryA = {
  type: TOGGLE_HISTORY
}

export default () => (dispatch) => {
  dispatch(toggleHistoryA)
}
