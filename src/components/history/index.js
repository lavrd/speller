import React from "react";

const History = (props) => {
  const historyTemplate = props.app.history.map((item, index) => {
    return (
      <div key={index}>
        <div data={item}>
          <span className={item.isCheck ? 'text-success' : 'text-danger'}>
            {item.text}
          </span>
        </div>
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
  history: React.PropTypes.array,
  historyVisible: React.PropTypes.bool,
  toggleHistory: React.PropTypes.func
}

export default History
