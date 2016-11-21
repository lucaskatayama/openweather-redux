import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from 'react-fontawesome';

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
    <div className="col-md-3">
      <span className="well" style={{ float: 'left' }}>
        <h3>
          <Link to={`/city/${city.id}`}>{city.name}</Link>,
          <small>{city.country}</small>
        </h3>
        <p>{city.description}</p>
        <p>Temp:{city.temp} Max:{city.temp_max} Min:{city.temp_min}</p>
        <p>{city.pressure}hPa</p>
        <p>{city.humidity}%</p>
      </span>
    </div>
  );
}

CityCard.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default CityCard;
