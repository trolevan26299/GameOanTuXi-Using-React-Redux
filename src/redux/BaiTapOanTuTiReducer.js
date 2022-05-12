const  stateDefault={
    mangDatCuoc:[
        {ma:'keo',hinhAnh:'./img/gameOanTuXi/keo.png',datCuoc:false},
        {ma:'bua',hinhAnh:'./img/gameOanTuXi/bua.png',datCuoc:true},
        {ma:'bao',hinhAnh:'./img/gameOanTuXi/bao.png',datCuoc:false}
    ],
    ketQua:" I'm Iron Man , i love you 3000 <3 ",
    soBanThang:0,
    soBanChoi:0,
    computer:{ma:'bua',hinhAnh:'./img/gameOanTuXi/bao.png'}
}
const BaiTapOanTuXiReducer=(state=stateDefault,action)=>{
    switch(action.type){
        case 'CHON_KEO_BUA_BAO':{
            //reset mangCuoc
            let mangCuocUpdate=[...state.mangDatCuoc];
            //tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
            mangCuocUpdate=mangCuocUpdate.map((item,index)=>{
                if(item.ma===action.maCuoc){
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            ///set State của mảng cược render lại giao diện
            state.mangDatCuoc=mangCuocUpdate
            return {...state}
        }
        case 'RAN_DOM':{
            let soNgauNhien=Math.floor(Math.random() * 3);
            let quanCuocNgauNhien= state.mangDatCuoc[soNgauNhien]

            state.computer=quanCuocNgauNhien;
            return {...state}
        }
        case 'END_GAME':{ 
            state.soBanChoi +=1;
            let player=state.mangDatCuoc.find(item =>item.datCuoc === true);
            let computer=state.computer
            // eslint-disable-next-line default-case
            switch(player.ma){
                case 'keo':
                    if(computer.ma==='keo'){
                        state.ketQua='Hòa nhau !!!'
                    }else if(computer.ma==='bua'){
                        state.ketQua='thua sml !!!'
                    }else{
                        state.soBanThang +=1
                        state.ketQua=" I'm Iron man,i love 3000 <3 "
                    }
                    ;break;
                case 'bua':
                    if(computer.ma==='keo'){
                        state.soBanThang +=1
                        state.ketQua="I'm Iron man,i love 3000 <3 "
                    }else if(computer.ma==='bua'){
                        state.ketQua='Hòa nhau !!!'
                    }else{
                        state.ketQua=" thua sml !!! "
                    }
                    ;break;
                // eslint-disable-next-line no-duplicate-case
                case 'bao':
                        if(computer.ma==='keo'){
                            state.ketQua="thua sml"
                        }else if(computer.ma==='bua'){
                            state.soBanThang +=1
                            state.ketQua="I'm Iron man,i love 3000 <3 "
                        }else{
                            state.ketQua=" Hòa nhau !!! "
                        }
                        ;break;
                default :state.ketQua = "I'm Iron man,i love 3000 <3";
                    return{...state}
            }

            return {...state}
        }
        default:return{...state}
    }
}
export default BaiTapOanTuXiReducer;