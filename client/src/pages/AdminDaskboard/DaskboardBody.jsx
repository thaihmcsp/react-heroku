import React from 'react'
import DaskboardProductCode from './DaskboardProductCode'
import DaskboardSummary from './DaskboardSummary'
import DaskboardUser from './DaskboardUser'
import DaskboardOrder from './DaskboardOrder'
import DaskboardProduct from './DaskboardProduct'


function DaskboardBody(props) {
  function daskboardPage(){
    let daskboard
    daskboard = props.daskboard === 'DaskboardSummary' ? <DaskboardSummary/> :
                props.daskboard === 'DaskboardProductCode' ? <DaskboardProductCode/> :
                props.daskboard === 'DaskboardUser' ? <DaskboardUser/> :
                props.daskboard === 'DaskboardOrder' ? <DaskboardOrder/> : 
                props.daskboard === 'DaskboardProduct' ? <DaskboardProduct/> : <></>
    return daskboard
  }
  
  return (
    <div className='DaskboardBody'>
      {daskboardPage()}
    </div>
  )
}

export default DaskboardBody
