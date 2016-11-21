// 保存当前输入的关键字
const filter = (state='',action)=>{
    switch(action.type){
        //根据输入框文本过滤
        case 'SET_FILTER':
            return action.filter;
        default:
            return state
    }
}
export default filter;