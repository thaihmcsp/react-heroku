import React, {useEffect} from 'react'

function DaskboardNav(props) {
  return (
    <div className='daskBoardNav'>
      <div className='web'>
        <img src='../../../logo192.png' alt='logo'/>
        K17 project
      </div>
      <div className='daskBoardNav-user'>
        <img 
        src={props.userInfo.avartar ? props.userInfo.avartar : '../../../logo192.png'} 
        alt='avartar'/>
        <p>{props.userInfo.username}</p>
      </div>
      <div className='daskBoardNav-menu'>
        <div className='daskBoardNav-menuItem' onClick={()=>{props.changeDaskboard('DaskboardSummary')}}> daskboard </div>
        <div className='daskBoardNav-menuItem' onClick={()=>{props.changeDaskboard('DaskboardProductCode')}}> product code </div>
        <div className='daskBoardNav-menuItem' onClick={()=>{props.changeDaskboard('DaskboardProduct')}}> product </div>
        <div className='daskBoardNav-menuItem' onClick={()=>{props.changeDaskboard('DaskboardUser')}}> user </div>
        <div className='daskBoardNav-menuItem' onClick={()=>{props.changeDaskboard('DaskboardOrder')}}> order </div>
      </div>
    </div>
  )
}

export default DaskboardNav
