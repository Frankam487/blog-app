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
      <button className="top" onClick={() => sortTop()}>
        +
      </button>
      <button className="reset" onClick={() => resetSearch()}>
        Annuler la recherche
      </button>
      <button className="flop" onClick={() => sortFlop()}>
        -
      </button>
    </div>
  );
};

export default SortFunction;
