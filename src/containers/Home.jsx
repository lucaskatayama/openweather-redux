import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { cities } from 'config';
import * as CityActions from 'actions/cities';
import Card from 'components/CityCard';

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}


class Home extends Component {
  componentWillMount() {
    Object.keys(cities).forEach(key => this.props.fetchCity(cities[key]));
  }
  render() {
    return (
      <div>
        {
          Object.keys(this.props.cities)
            .map(city => <Card key={city} {...this.props.cities[city]} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, CityActions)(Home);
