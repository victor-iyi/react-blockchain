import { combineReducers } from 'redux';

import Block from './Block';

const rootReducer = combineReducers({
  block: Block,
});

export default rootReducer;
