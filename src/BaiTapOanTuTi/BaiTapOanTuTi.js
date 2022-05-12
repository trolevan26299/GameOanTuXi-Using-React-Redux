import React, { Component } from 'react'
import './BaiTapOanTuTi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import {connect} from'react-redux'

 class BaiTapOanTuTi extends Component {
  render() {
    
    return (
      <div className='gameOanTuTi'>
          <div className='row text-center mt-4'> 
            <div className='col-3'><Player/></div>
            <div className='col-6'>
                    <KetQuaTroChoi/>
                    <button onClick={()=>{this.props.playGame()}} className=' btn btn-danger p-3 display-4 mt-4'>Play Game</button>
            </div>
            <div className='col-3'><Computer/></div>
          </div>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    playGame:()=>{
      let count=0;
      //khai báo hàm lặp đi lặp lại
      let randomComputerItem=setInterval(()=>{
        dispatch({
          type:'RAN_DOM'
        })
        count++;
        if(count > 20){
          clearInterval(randomComputerItem)
          dispatch({
            type:'END_GAME'
          })
        }
      },100)
    }
  }
}
export default connect(null,mapDispatchToProps)(BaiTapOanTuTi)
