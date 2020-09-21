import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from './components/Calendar';
// import Overview from './components/Overview';
// import DailyStats from './components/DailyStats';
// import PieRenderer from './components/charts/PieRenderer';
import CustomSVG from './branding/CustomSVg';
import DoughnutChart from './components/charts/DoughnutRenderer';
import LineChart from './components/charts/LineChart';
import { ADD_CONSUMEABLE } from './actionTypes/actionTypes';

const App = props => {
  const newConsumeable = {
    type: 'customTea', //use for icon?  //customTeaCount
    name: 'Darjeeling Tea',
    mg: 70,
    editable: true
  };
  const newConsumeable2 = {
    type: 'customTea', //use for icon?  //customTeaCount
    name: 'Banja Tea',
    mg: 170,
    editable: true
  };
  const dispatch = useDispatch();
  dispatch({ type: 'PAGE_INFORMATION_REQUESTED' });
  const addConsumeable = e => {
    debugger;
    e.preventDefault();
    dispatch({ type: 'ADD_CONSUMEABLE', payload: newConsumeable });
  };
  const addAnotherConsumeable = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_CONSUMEABLE', payload: newConsumeable2 });
  };

  const disatchPgReq = e => {
    e.preventDefault();
    dispatch({ type: 'PAGE_INFORMATION_REQUESTED' });
  };
  const getCaffeineStats = useSelector(state => state.caffeineStateReducer);
  return (
    <>
      <p>Hello, I am the sugar and caffeine counter app, please make me.</p>
      {/* <Calendar />
      <Overview />
      <DailyStats />
      <FooterMenu />
      <PieRenderer /> */}
      {/* <LineChart /> */}
      <DoughnutChart />
      {/* <CustomSVG /> */}
      <button onClick={addConsumeable}>Add Consumeable</button>
      <button onClick={addAnotherConsumeable}>Add Another Consumeable</button>
      <button onClick={disatchPgReq}>Dispatch Page Request</button>
    </>
  );
};

export default App;
