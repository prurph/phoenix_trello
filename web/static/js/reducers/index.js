import { combineReducers } from 'redux';
import { routeReducer }    from 'react-router-redux';
import session             from './session';

export default combineReducers({
  routing: routeReducer,  // automatically set routing changes into the state
  session: session
});
