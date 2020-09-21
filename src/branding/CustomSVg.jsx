import React from 'react';

const iconLibrary = props => {
  const icon1 = <svg width='6.25rem' height='25rem' fill='#666#' />;
  const icon2 = (
    <svg height='140' width='500'>
      <ellipse
        cx='200'
        cy='80'
        rx='100'
        ry='50'
        style={{ fill: 'yellow', stroke: 'purple', strokeWidth: 2 }}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );

  return [icon1, icon2];
};

export default iconLibrary;
