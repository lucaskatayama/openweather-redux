import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Search from 'components/Search';
import Units from 'components/Units';
import Icon from 'react-fontawesome';

const mapStateToProps = state => ({
  units: state.units,
});

const Navbar = ({ units }) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <Icon name="sun-o" />{' '}
          OpenWeather Redux
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
