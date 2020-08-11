import React from 'react';

const Rating = (props) => {
  const rating = Math.round(props.children);
  let filledStars = '';
  let emptyStars = '';

  for (let i = 0; i < rating; i++) {
    filledStars += '★';
  }

  for (let i = rating; i < 5; i++) {
    emptyStars += '☆';
  }

  return (
    <div>
      <h1>
        {filledStars}
        {emptyStars}
      </h1>
    </div>
  );
};

export default Rating;
