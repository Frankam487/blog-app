import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import List from '../components/List';
import Navigation from '../components/Navigation';
import SortFunction from '../components/SortFunction';

const Home = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [dataDisplay, setDataDisplay] = useState(true);
  const radio = ['Africa', 'America', 'Asia', 'Antarctica'];
  const [check, setCheck] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setData(res.data);
      setDataDisplay(false);
    });
  }, [rangeValue]);
  return (
    <div className="home">
      <Navigation />
      <ul>
        <div className="range-container">
          <div className="range-content">
            <input
              type="range"
              onChange={(e) => setRangeValue(e.target.value)}
              defaultValue={rangeValue}
              min="6"
              max="250"
            />
            <i>{rangeValue} Pays</i>
          </div>
          {radio.map((country, index) => (
            <List
              key={index}
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
              country={country}
            />
          ))}
        </div>

        <SortFunction
          check={check}
          setCheck={setCheck}
          data={data}
          setSelectedRadio={setSelectedRadio}
          setData={setData}
        />
        <div className="card-container">
        {dataDisplay == true ? <p>Chargement en cous ...</p> : ''}
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .slice(0, rangeValue)
          .map((country, index) => (
            
              <Card key={index} country={country} />
            
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Home;
