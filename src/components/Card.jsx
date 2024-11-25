import PropTypes from 'prop-types';
const Card = ({ country }) => {
  Card.propTypes = {
    country: PropTypes.string,
  };
  return (
    <div className="card">
      <li className='ok'>
        <img
          src={country.flags.png ? country.flags.png : country.flags.jpg}
          alt={'Photo de ' + country.name.common}
        />
        <div className="card-infos">
          <h2>{country.name.common}</h2>
          <h3>{country.capital}</h3>
          <i>{country.population.toLocaleString() + ' habitants'}</i>
        </div>
      </li>
    </div>
  );
};

export default Card;
