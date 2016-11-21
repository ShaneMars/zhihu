import React,{Component}from 'react';
import List from '../containers/List';
import Search from '../containers/Search'

import{connect} from 'react-redux';
import{fetchList} from '../api/fetchList';


class App extends Component {
    componentDidMount () {
        const data = fetchList();
        this.props.onReceiveList(data.invited);
    }
    render (){
        return (
            <div className="wrapper">
                <Search />
                <List />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=> ({
	onReceiveList:(list) =>{
		dispatch({
			type:'RECEIVE_LIST',
			list//是否被邀请
		})
	}
})


export default connect(null,mapDispatchToProps)(App);