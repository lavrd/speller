import React from "react";
import PropTypes from 'prop-types'

const History = (props) => {
  const historyTemplate = props.app.history.map((item, index) => {
    return (
      <div key={index}>
        <span className={item.isCheck ? 'text-success' : 'text-danger'}>
          {item.text}
        </span>
      </div>
    )
  })

  return (
    <div className='history'>
      <h2 className='text-muted'>History</h2>

      <input className='btn btn-primary btn-sm' type='submit' value='Show'
             onClick={props.toggleHistory}/>

      <div className={props.app.historyVisible ? 'history-note' : 'none'}>
        <span className={!props.app.history.length ? 'alert alert-warning' : ''}>
          {!props.app.history.length ? 'Empty history' : historyTemplate}
        </span>
      </div>
    </div>
  )
}

History.propTypes = {
  history: PropTypes.array,
  historyVisible: PropTypes.bool,
  toggleHistory: PropTypes.func
}

export default History
