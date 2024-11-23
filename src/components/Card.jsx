import PropTypes from 'prop-types';
const Card = ({ country }) => {
  Card.propTypes = {
    country: PropTypes.string, 
  };
  return (
    <div className="card">
      <li>
        <img src={country.flags.png} alt={'Photo de ' + country.name.common} />
        <h2>{country.name.common}</h2>
        <h2>{country.capital}</h2>
        <i>{country.population.toLocaleString() + ' habitants'}</i>
      </li>
    </div>
  );
};

export default Card;
