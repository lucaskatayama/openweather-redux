import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { cities } from 'config';
import * as CityActions from 'actions/cities';
import Card from 'components/CityCard';

function mapStateToProps(state) {
  return {
    cities: state.cities,
    units: state.units,
  };
}


class Home extends Component {
  componentWillMount() {
    Object.keys(cities).forEach(key => this.props.fetchCity(cities[key], this.props.units));
  }

  componentWillUpdate(next) {
    if(next.units !== this.props.units){
      Object.keys(cities).forEach(key => this.props.fetchCity(cities[key], next.units));
    }
  }

  render() {
    return (
      <div>
        {
          Object.keys(this.props.cities)
            .map(city => <Card key={city} units={this.props.units} {...this.props.cities[city]} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, CityActions)(Home);
