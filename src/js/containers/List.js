import React, {Component} from 'react';
import Item from '../components/Item';


import {connect} from 'react-redux';

const List = ({list,onToggleInvite}) => {
	const row = list.map((item) => 
		<Item 
			key={item.id}
			person={item}
			onChangeInvited={onToggleInvite} />
		)
	return (
		<div className='listWrapper'>
		<ul>
		 {row}
		</ul>
		</div>
		
	)
}
//过滤函数 es6直接返回值 不用加{return}
const getVisibleList = (list,filter) => list.filter((item)=> (
	item.name.indexOf(filter) != -1
));
// const getVisibleList = (list,filter) => {
// 	return list.filter((item)=> {
// 		return item.name.indexOf(filter) != -1
// 	)}
// }		
const mapStateToProps = (state) => ({
	//过滤后的list
	list:getVisibleList(state.list,state.filter)
})

const mapDispatchToProps = (dispatch)=> ({
	onToggleInvite:(id) => {
		// 触发点击事件TOGGLE_INVITE
		dispatch({
			type:'TOGGLE_INVITE',
			id
		})
	},
	onReceiveList:(list) =>{
		dispatch({
			type:'RECEIVE_LIST',
			list
		})
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(List);