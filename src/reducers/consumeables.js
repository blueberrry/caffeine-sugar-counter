import { ADD_CONSUMEABLE, SAVE_DATA } from '../actionTypes/actionTypes';
import { createReducer } from '@reduxjs/toolkit';
//consumableItems
//validate against duplicate names
const initialState = [
  {
    id: 'tea', //use for icon?
    name: 'Generic Tea',
    mg: 60,
    editable: false
  },
  {
    id: 'cola', //use for icon?
    name: 'Cola',
    mg: 60,
    editable: false
  },
  {
    id: 'coffee', //use for icon?
    name: 'Coffee',
    mg: 60,
    editable: false
  },
  {
    id: 'customTea', //use for icon?  //customTeaCount
    name: 'Custom Tea',
    mg: 60,
    editable: true
  }
];

const consumeablesReducer = createReducer(initialState, {
  ADD_CONSUMEABLE: (state, action) => {
    return [...state, { ...action.payload }];
  },
  SAVE_DATA: (state, action) => {
    return [...state];
  }
});

export default consumeablesReducer;

// export default (state = initialState, action) => {
//   debugger;
//   switch (action.type) {
//     case ADD_CONSUMEABLE: {
//       // debugger;
//       return [...state, { ...action.payload }];
//     }
//     case SAVE_DATA: {
//       return [...state];
//     }
//     default:
//       return state;
//   }
// };
