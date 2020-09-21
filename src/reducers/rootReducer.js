import { combineReducers } from 'redux';
import { persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import dailyCaffeineStats from './dailyCaffeineStats';
import consumeables from './consumeables';
import dailySugarStats from './dailySugarStats';

const reducers = {
  dailyCaffeineStats,
  consumeables,
  dailySugarStats
}

const rootReducer = persistCombineReducers({
  key: 'root',
  storage
}, reducers);

export default rootReducer;
