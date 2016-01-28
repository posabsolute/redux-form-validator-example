import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { validateReducer } from 'redux-form-validator';

const rootReducer = combineReducers({
  routing: routeReducer,
  validate: validateReducer,
});

export default rootReducer;
