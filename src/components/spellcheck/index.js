import React from "react";
import PropTypes from 'prop-types'

const SpellCheck = (props) => {
  let text

  return (
    <div>
      <form className='form-group'>
        <textarea className='form-control col-8' rows='5'
                  ref={(val) => {
                    text = val
                  }}
                  onFocus={props.onFocus}
                  placeholder='Enter text for spell check'/>

        <br/>

        <button className='btn btn-primary'
                onClick={(e) => props.spellCheck(e, text.value)}>Check
        </button>

        <input className='btn btn-danger' value='Reset' type='reset'/>
      </form>

      <div className={props.app.resultVisible ? '' : 'none'}>
        <span className={props.app.currentCheck.isCheck ? 'text-success' : 'text-danger'}>
          {props.app.currentCheck.isCheck ? 'there are no errors' : 'there are mistakes'}
        </span>
      </div>
    </div>
  )
}

SpellCheck.propTypes = {
  currentCheck: PropTypes.object,
  spellCheck: PropTypes.func,
  onFocus: PropTypes.func,
  resultVisible: PropTypes.bool
}

export default SpellCheck
