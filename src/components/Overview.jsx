import React from 'react';

const Overview = props => {
  return (
    <>
      <div className='container' style={{ border: '5px solid #00a651' }}>
        <p>I am the overview</p>
        <p>
          I contain two pie charts:
          <ul>
            <li>A pie chart representing sugar consumption by type</li>
            <li>A pie chart representing caffeine consumption by type</li>
          </ul>
        </p>
        <p>Gesture control - swipe between the two</p>
        <p>
          The pie charts could respond to touch and the slices can be fragmented
          to make the data more{' '}
        </p>
      </div>
    </>
  );
};
export default Overview;
