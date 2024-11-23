import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setData(res.data);
    }, []);
  });
  return (
    <div className="home">
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
