import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from 'react-fontawesome';
import Temperature from 'components/Temperature';
import WeatherImg from 'components/WeatherImg';

const CityCard = (city) => {
  if (!city.description) {
    return (
      <div className="col-md-3">
        <span className="well" style={{ float: 'left' }}>
          <h3>
            <Link to={`/city/${city.id}`}>{city.name}</Link>
          </h3>
          <p>
            <Icon name="spinner" spin size="2x" />
          </p>
        </span>
      </div>

    );
  }

  return (
    <div className="col-md-4">
      <div className="col-md-12 well">
        <h2>
          <Link to={`/city/${city.id}`}>{city.name}</Link>,
          <small>{city.country}</small>
        </h2>
        <h3>
          <span style={{ padding: '20px 20px 20px 0' }}>
            <WeatherImg icon={city.icon} />
          </span>
          <Temperature value={city.temp} units={city.units} /><br />
        </h3>
        <p>
          <span style={{ textTransform: 'capitalize' }}>
            {city.description}
          </span>
        </p>
        <p>{city.pressure}hPa</p>
        <p>{city.humidity}%</p>
      </div>
    </div>
  );
};

CityCard.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default CityCard;
