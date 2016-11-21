import React, {Component} from 'react';
import {connect} from 'react-redux';
class Search extends Component{
	onHandleChange(){
		this.props.onSetFilter(this.input.value)
	}
	render() {

		// 邀请的人
		const data = this.props.list;

		const personRow = [];

		let truePerson = [];

		//邀请...等人
		data.forEach((item,index) => {
			if(item.invited && index < 2){
				personRow.unshift(<span key = {index + 100}>{item.name}</span>);
				truePerson = personRow;
			}else if (item.invited && index >= 2) {
				personRow.unshift(<span key={index + 100}>{item.name}</span>);
				truePerson = personRow.slice(0,2);
			}
		});

		return (
			<div className='searchBar'>
				<input ref={(c)=>{this.input=c}} type='text' placeholder='搜索你想邀请的人' onChange={()=>{
					this.onHandleChange();
				}}/>
				<span>您已邀请{truePerson}等{personRow.length}人</span>
			</div>
			)
	}
}
const mapStateToProps = (state) => ({
	list:state.list
})
const mapDispatchToProps = (dispatch) => ({
	onSetFilter:(filter) => {
		dispatch({
			type:'SET_FILTER',
			filter
		})
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Search);