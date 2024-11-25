import PropTypes from 'prop-types';
import { useState } from 'react';
const SortFunction = ({ data, setData }) => {
  SortFunction.propTypes = {
    data: PropTypes.array,
    setData: PropTypes.array,
  };
  const sortTop = () => {
    const sortedItems = [...data].sort((a, b) => b.population - a.population);
    setData(sortedItems);
  };
  const sortFlop = () => {
    const sortedItems = [...data].sort((a, b) => a.population - b.population);
    setData(sortedItems);
  };
  const resetSearch = () => {
    console.log('ok');
  }
  return (
    <div className="sortFunction">
      <button onClick={() => sortTop()}>+</button>
      <button onClick={() => resetSearch()}>Annuler la recherche</button>
      <button onClick={() => sortFlop()}>-</button>
    </div>
  );
};

export default SortFunction;
