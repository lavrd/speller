import React from "react";

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

        <br />

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
    </div >
  )
}

SpellCheck.propTypes = {
  currentCheck: React.PropTypes.object,
  spellCheck: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  resultVisible: React.PropTypes.bool
}

export default SpellCheck
