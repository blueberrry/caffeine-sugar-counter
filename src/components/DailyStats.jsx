import React from 'react';

const DailyStats = () => {
  return (
    <div style={{ border: '5px solid #1cbbb4' }}>
      <p>This is the dailystats section</p>
      <p>
        I contain two daily stats cards
        <ul>
          <li>Caffeine with total left in system + item count + mg</li>
          <li>Sugar with total left in system + item count + mg</li>
        </ul>
      </p>
    </div>
  );
};

export default DailyStats;
