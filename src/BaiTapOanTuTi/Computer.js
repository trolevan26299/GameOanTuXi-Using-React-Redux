import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Computer extends Component {
  render() {
    let keyframe=`@keyframes randomItem${Date.now()}{
      0%{top:-15px}
      25%{top:20px}
      50%{top:-15px}
      75%{top:20px}
      100%{top:0px}
    }`
    return (
        <div className='playerGame'>
         <style>
          {keyframe}
         </style>
        <div className='theThink' style={{position:'relative'}}>
        <img style={{ position:'absolute',animation:`randomItem${Date.now()} 0.5s`,left:'23%',width:'80px',height:'80px'}} className='mt-1' src={this.props.computer.hinhAnh} alt='bao'/>
        </div>
        <div className='speech-bubble'></div>
        <img style={{width:'180px',height:'180px'}} src='./img/gameOanTuXi/playerComputer.png' alt='player'/>
    </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    computer:state.BaiTapOanTuXiReducer.computer
  }
}
export default connect(mapStateToProps)(Computer);
