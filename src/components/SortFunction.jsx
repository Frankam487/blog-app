const SortFunction = ({ data, setData, setSelectedRadio, check, setCheck }) => {
  const sortTop = () => {
    const sortedItems = [...data].sort((a, b) => b.population - a.population);
    setData(sortedItems);
  };
  const sortFlop = () => {
    const sortedItems = [...data].sort((a, b) => a.population - b.population);
    setData(sortedItems);
  };
  const resetSearch = () => {
    setSelectedRadio('');
  };
  return (
    <div className="sortFunction">
      <button onClick={() => sortTop()}>+</button>
      <button onClick={() => resetSearch()}>Annuler la recherche</button>
      <button onClick={() => sortFlop()}>-</button>
    </div>
  );
};

export default SortFunction;
