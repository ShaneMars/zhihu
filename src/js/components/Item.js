import React,{Component} from 'react';


class Item extends Component{
	render() {


		const{onChangeInvited,person} = this.props;

		const name = person.name;
		const url = person.avatarUrl;
		const des = person.bio;
		const id = person.id;

		let style = {};

		//如果人物被邀请 改变按钮样式
		if (person.invited === true) {
			style = {
				background: 'linear-gradient(to bottom,#f8f8f9,#e6e6e8)',
                border: '1px solid #bbb',
                boxShadow: '0 1px 0 #fff inset,0 1px 0 rgba(0,0,0,.1)'
			}
		}else{
			 style = {
				background: 'linear-gradient(to bottom,#adda4d,#86b846)',
			    border: '1px solid #6d8f29',
			    boxShadow: '0 1px 0 rgba(255,255,255,.5) inset,0 1px 0 rgba(0,0,0,.2)'
			}
		}



		return (
			<li className='item'>
			<div className='itemDiv'>
			<img src={url}/>
			<div className='name'>{name}</div>
			<div className='des'>{des}</div>
			<button style={style} onClick={() => {onChangeInvited(id)}}>{person.invited ? '收回邀请' : '邀请回答'}</button>
			</div>
			</li>
			)
	}
}

export default Item;