import {connect} from "react-redux";
import {onFocus, spellCheck} from "../../actions";
import SpellCheck from "../../components/spellcheck";

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    spellCheck(e, text) {
      e.preventDefault()

      if (!text) {
        return
      }

      dispatch(spellCheck(text))
    },

    onFocus(e) {
      e.preventDefault()

      dispatch(onFocus())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellCheck)
