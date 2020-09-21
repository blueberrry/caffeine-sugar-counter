import { SAVE_DATA } from '../actionTypes/actionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case SAVE_DATA: {
//       return { ...state };
//     }
//     default:
//       return state;
//   }
// };

const dailySugarStats = createReducer(initialState, {
  SAVE_DATA: (state, action) => {
    return { ...state };
  }
});

export default dailySugarStats;
