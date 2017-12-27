import {connect} from "react-redux";
import History from "../../components/history";
import {toggleHistory} from "../../actions";

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHistory(e) {
      e.preventDefault()
      dispatch(toggleHistory())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
