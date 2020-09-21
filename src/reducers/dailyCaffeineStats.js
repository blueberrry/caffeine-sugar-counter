import {
  PAGE_INFORMATION_REQUESTED,
  SAVE_DATA,
} from '../actionTypes/actionTypes';
import { createReducer } from '@reduxjs/toolkit';
//dailyCaffeineStats
const initialState = [
  {
    date: 20220020,
    totalConsumption: 300, //for day no degradation
    currentLevel: 221, // for day after degradation
    colaCount: 2,
    coffeeCount: 2,
    dailyCollection: [
      {
        timeAdded: 2020202929,
        id: 'coffee',
        currentLevel: 70, // after degradation
      },
      {
        timeAdded: 2020493943,
        id: 'coffee',
        currentLevel: 100, /// after degradation
      },
      {
        timeAdded: 2020230423,
        id: 'cola',
        currentMg: 51, // after degradation
      },
    ],
  },
  { date: 20200120 },
  { date: 20200111 },
  { date: 20191215 },
  { date: 20191212 },
];

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case PAGE_INFORMATION_REQUESTED: {
//       return { ...state };
//     }
//     case SAVE_DATA: {
//       return { ...state };
//     }
//     default:
//       return state;
//   }
// };

const daillyCaffeineStats = createReducer(initialState, {
  PAGE_INFORMATION_REQUESTED: (state, action) => {
    return { ...state };
  },
  SAVE_DATA: (state, action) => {
    return { ...state };
  },
  UPDATE_CURRENT_LEVEL: (state, action) => {
    const { todaysDate, id, currentLevel } = action.payload;
    console.log(`state is ${JSON.stringify(state)}`);
    debugger;
    return { ...state };
  },
});

export default daillyCaffeineStats;


