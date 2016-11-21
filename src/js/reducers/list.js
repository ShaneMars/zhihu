//list为一个数组 用来显示整个列表
const list = (state=[],action) =>{
    switch(action.type){
        //action.type 事件类型
        // toggle_invite 点击事件
        case 'TOGGLE_INVITE':
        //map返回新state数组
            return state.map((item)=>{
                //action.id是点击的id
                if(item.id == action.id){
                    //返回新的item对象
                   return Object.assign({},item,{
                       invited : !item.invited
                   });
                }
                return item;
            })
            //把数据更新到state的方法
        case "RECEIVE_LIST":
            return action.list;
        default:
         return state;
    }
}
export default list