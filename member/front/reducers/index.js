import React from 'react';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';


const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        console.log('State');
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  },
  user,
});

export default rootReducer;