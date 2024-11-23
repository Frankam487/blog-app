import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';

const Home = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [dataDisplay, setDataDisplay] = useState(true);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setData(res.data);
      setDataDisplay(false);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="home">
      <Navigation />
      <div className="range">
        <input
          type="range"
          onChange={(e) => setRangeValue(e.target.value)}
          defaultValue={rangeValue}
          width={250}
        />
        <input type="checkbox" /> Afrique
        <input type="checkbox" /> Europe
        <input type="checkbox" /> Asie
      </div>
      <ul>
        {dataDisplay == true ? <p>Chargement en cous ...</p> : ''}
        {data.slice(0, rangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
