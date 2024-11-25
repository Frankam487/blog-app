import React from 'react';

const List = ({ country, selectedRadio, setSelectedRadio }) => {
  return (
    <div className="list">
      <ul>
        <li>
          <input
            type="radio"
            name="country"
            id={country}
            defaultValue={country}
            checked={selectedRadio === country}
            onChange={(e) => setSelectedRadio(e.target.id)}
          />
          <label htmlFor={country}>{country}</label>
        </li>
      </ul>
    </div>
  );
};

export default List;