import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className='bg-light-green br3 dib ma2 pa2 grow bw2 shadow-5 tc'>
      <img alt='robot' src={`https://robohash.org/${id}?size=200x200&set=set3`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
