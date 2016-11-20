import React, { PropTypes } from 'react';


const CityInfo = ({ city }) => (
  <div className="well">
    <p>{city.name}</p>
    <p>{city.id}</p>
    <p>{city.sys && city.sys.country}</p>
  </div>
);

CityInfo.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
  }),
};


export default CityInfo;
