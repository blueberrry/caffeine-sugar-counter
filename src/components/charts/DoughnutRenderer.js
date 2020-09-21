import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import './DoughnutRenderer.scss';

const DoughnutChart = () => {
  const dispatch = useDispatch();
  //  **  local state of array of totals for the charts object formatting  **
  //  **  [72.5, 100, 145, 100, 220];
  //  **  I think the function is called from the render method or another function so this is not used for now
  const [arrayOfTotals, setArrayOfTotals] = useState([]);

  const todaysDate = moment().format('YYYY-MM-DD');
  console.log(`todaysDate = ${todaysDate}`);

  //  ** daily collection is the array of objects {timestamp, id }  **
  const dailyCollection = useSelector(
    (state) => state.dailyCaffeineStats[0].dailyCollection
  );

  const consumeables = useSelector((state) => state.consumeables);

  const computeHalfLife = (mg, timeAdded) => {
    //  **  do wacky half-life for formula
    //  **  but for now just half it for the timebeing
    console.log(`I'm gonna do some funky things with this ${timeAdded}`);
    //  **  oh lord hap me with this one
    return mg / 2;
  };

  const updateCurrentLevels = dailyCollection.map((item) => {
    const timeAdded = item.timeAdded;
    const id = item.id;
    // debugger;
    // const mgFromConsumable = () => {
    const mg = consumeables.find((cons) => cons.id === id).mg;
    // };
    // debugger;
    const currentLevel = computeHalfLife(mg, timeAdded);

    // debugger;
    //  **  set state  **
    dispatch({
      type: 'UPDATE_CURRENT_LEVEL',
      payload: { todaysDate, id, currentLevel },
    });
  });

  const dailyCollectedItemsIds = dailyCollection.map((item) => item.id);

  const filterCollectionByDailyUsed = consumeables.filter((consumeable) =>
    dailyCollectedItemsIds.includes(consumeable.id)
  );

  const getListOfDaysConsumeables = filterCollectionByDailyUsed.map((cons) => {
    return cons.name;
  });

  /**** NEW STUFF ****/
  // need to create this
  const mgRemainingCollection = [
    {
      id: 'coffee',
      mg: 63,
    },
    {
      id: 'coffee',
      mg: 35,
    },
    {
      id: 'tea',
      mg: 20,
    },
    {
      id: 'cola',
      mg: 20,
    },
    {
      id: 'cola',
      mg: 12,
    },
    {
      id: 'cola',
      mg: 7,
    },
  ];

  // getListOfDaysConsumeables.forEach(consumeable => {
  //   return mgRemainingCollection.map(remainingMg => {
  //     if(consumeable === remainingMg.id) {

  //     }
  //   })
  //   if()
  // })
  /**** NEW STUFF ****/

  getListOfDaysConsumeables &&
    console.log(`getListOfDaysConsumeables is ${getListOfDaysConsumeables}`);

  const [remainingMg, setRemainingMg] = useState(null);
  const buildDataSet = () => {
    const configureBackgroundColours = (arrayItemsLength) => {
      const backgroundColorsLibrary = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        'red',
        'yellow',
        'pink',
        'green',
      ];
      const selectedColours = backgroundColorsLibrary.slice(
        0,
        arrayItemsLength
      );
      return {
        backgroundColor: selectedColours,
        hoverBackgroundColor: selectedColours, //should be lighter - css in js might be good here
      };
    };
    // const getArrayOfTotals = () => {
    // for each id: coffee, id: coffee
    // get id coffee from cunsumables.mg ... 100mg
    // total = 100(mg) * coffee.length + 1
    //dailyCollectionItemIds = ['coffee', 'coffee', 'cola']
    const getOccurrence = (array, value) => {
      let count = 0;
      array.forEach((v) => v === value && count++);
      return count;
    };

    //  **  calculates full total of each daily consumeablen mg  **
    //  **  does not calculate half life for each
    const calculateArrayOfTotals = filterCollectionByDailyUsed.map(
      (consumeableUsed) => {
        const id = consumeableUsed.id;
        const mg = consumeableUsed.mg; //  **  Generic state mg, not calculation
        const occurence = getOccurrence(dailyCollectedItemsIds, id);
        return occurence * mg;
      }
    );

    const sumOfArrayOfTotals = _.sum(calculateArrayOfTotals);

    // if (sumOfArrayOfTotals)
    //   setRemainingMg(
    //     sumOfArrayOfTotals < 400 ? 400 - sumOfArrayOfTotals : null
    //   );

    // console.log(calculateArrayOfTotals());
    // setArrayOfTotals(calculateArrayOfTotals);
    // };
    // console.log(getArrayOfTotals());

    // if (arrayOfTotals) {
    // return {
    //   data: arrayOfTotals && [...arrayOfTotals, 400 - _.sum(arrayOfTotals)],
    //   ...configureBackgroundColours(arrayOfTotals.length)
    // };
    // }
    // getArrayOfTotals();

    const calculateRemaining = () => {
      const sumOfArrayOfTotals = _.sum(calculateArrayOfTotals);
      const mg = sumOfArrayOfTotals < 400 ? 400 - sumOfArrayOfTotals : null;
      return mg;
    };

    return {
      data: [...calculateArrayOfTotals, calculateRemaining()],
      ...configureBackgroundColours(calculateArrayOfTotals.length),
    };
  };
  // return {
  //   // data: [300, 50],
  //   data: getArrayOfTotals(),
  //   backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'red'],
  //   hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'red']
  // };
  // remainingMg && console.log(`remainingMg is ${remainingMg}`);
  // buildDataSet();
  const data = {
    labels: [...getListOfDaysConsumeables, 'Wiggle Room'],
    datasets: [
      // {
      //   data: [300, 50],
      //   backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'red'],
      //   hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'red']
      // },
      buildDataSet(),
    ],
  };
  // const [data, setData] = useState({
  //   labels: [],
  //   datasets: [
  //     {
  //       data: [],
  //       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  //     }
  //   ]
  // });
  // useEffect(() => {
  //   setData(newData);
  // });
  // const
  // const useDispatch = useDispatch();
  // const addDataSet = useDispatch({type: 'ADD_DATA_SET', payload: })

  return (
    <div>
      <h2>Doughnut</h2>
      <Doughnut data={data} />
      {/* <button onClick={addDataSet}>Add Data Set</button> */}
    </div>
  );
};

export default DoughnutChart;
