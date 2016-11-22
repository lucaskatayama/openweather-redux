import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Search from 'components/Search';
import Units from 'components/Units';
import WeatherIcon from 'react-weathericons';
import { VERSION } from 'config';

const mapStateToProps = state => ({
  units: state.units,
});

const Navbar = ({ units }) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" style={{ color: 'white' }} href="#">
          <WeatherIcon name="day-sunny" />{' '}
          OpenWeather Redux
          <small>{' '}{VERSION}</small>
        </a>

      </div>
      <div id="navbar" className="navbar-form navbar-right">
        <Units units={units} />
        <Search />
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  units: PropTypes.string,
};

export default connect(mapStateToProps)(Navbar);
