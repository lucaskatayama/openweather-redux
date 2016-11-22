import React, { PropTypes } from 'react';
import Icon from 'react-weathericons';

const map = {
  '50d': 'day-fog',
  '01d': 'day-sunny',
  '09n': 'day-showers',
  '03n': 'night-alt-cloudy',
  '01n': 'night-clear',
};
// <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather" />
const WeatherImg = ({ icon }) => (
  <Icon name={map[icon]} size="2x" className="fa-fw"/>
);

WeatherImg.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default WeatherImg;
