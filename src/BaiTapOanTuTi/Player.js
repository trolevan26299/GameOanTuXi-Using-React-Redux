import React, { Component } from 'react'
import {connect} from'react-redux'

 class Player extends Component {

  render() {
    return (
      <div className='playerGame'>
          <div className='theThink'>
            <img style={{width:'80px',height:'80px',transform:'rotate(-20deg)'}} className='mt-1' src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh} alt='hình ảnh'/>
          </div>
          <div className='speech-bubble'></div>
          <img style={{width:'180px',height:'180px'}} src='./img/gameOanTuXi/player.png' alt='player'/>
          <div className='row'>
              {this.props.mangDatCuoc.map((item,index)=>{
                let border={};
                if(item.datCuoc){
                  border={border:'3px solid orange'}
                }
                return  <div  key={index} className='col-4 p-1'><button onClick={()=>{this.props.datCuoc(item.ma)}} style={border} className='btnItem'><img src={item.hinhAnh} alt={item.hinhAnh}/></button></div>
              })}
          </div>
      </div>
    )
  }
}
const mapStatToProps = (state)=>{
  return {
    mangDatCuoc:state.BaiTapOanTuXiReducer.mangDatCuoc
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    datCuoc:(maCuoc)=>{
      dispatch({
        type:'CHON_KEO_BUA_BAO',
        maCuoc
      })
    }
  }
}
export default connect(mapStatToProps,mapDispatchToProps)(Player)
