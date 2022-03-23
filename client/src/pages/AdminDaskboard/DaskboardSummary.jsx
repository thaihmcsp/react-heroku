import React from 'react'

function DaskboardSummary() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='DaskboardBody-summary'>
        <div className='DaskboardBody-summaryItem bluesky'>
          <div className='DaskboardBody-summary-info'>
            <div className='DaskboardBody-summary-index'>150</div>
            <div className='DaskboardBody-summary-name'>new order</div>
          </div>
          <div className='DaskboardBody-summary-icon'>icon</div>
        </div>
        <div className='DaskboardBody-summaryItem green'>
          <div className='DaskboardBody-summary-info'>
            <div className='DaskboardBody-summary-index'>150</div>
            <div className='DaskboardBody-summary-name'>new order</div>
          </div>
          <div className='DaskboardBody-summary-icon'>icon</div>
        </div>
        <div className='DaskboardBody-summaryItem yellow'>
          <div className='DaskboardBody-summary-info'>
            <div className='DaskboardBody-summary-index'>150</div>
            <div className='DaskboardBody-summary-name'>new order</div>
          </div>
          <div className='DaskboardBody-summary-icon'>icon</div>
        </div>
        <div className='DaskboardBody-summaryItem red'>
          <div className='DaskboardBody-summary-info'>
            <div className='DaskboardBody-summary-index'>150</div>
            <div className='DaskboardBody-summary-name'>new order</div>
          </div>
          <div className='DaskboardBody-summary-icon'>icon</div>
        </div>
      </div>
    </div>
  )
}

export default DaskboardSummary
