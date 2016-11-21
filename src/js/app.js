import React from 'react'
import ReactDom from 'react-dom';

import Root from './components/Root';
import {createStore} from 'redux';
import rootReducer from './reducers';

require('../less/zhihu.less');


const store = createStore(rootReducer);

ReactDom.render(
  <Root store={store}/>,
  document.getElementById('root')
)