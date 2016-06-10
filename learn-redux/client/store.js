import { createStore, compose } from 'redux';
import { synchHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
	posts,
	comments
};

export const store = createStore(rootReducer, defaultState);

export const history = synchHistoryWithStore(browserHistory, store);	