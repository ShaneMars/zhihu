//专门用来引入第三方文件
import React from 'react';
import App from '../containers/App';
import {Provider} from 'react-redux';

//直接返回
const Root = ({store}) => (
    <Provider store = {store}>
        <App / >
    </Provider>
)

export default Root;



