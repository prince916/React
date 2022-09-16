import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='Design'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div className="head">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;