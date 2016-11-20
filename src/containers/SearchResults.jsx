import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import * as SearchActions from 'actions/search';
import CityInfo from 'components/CityInfo';
import WeatherMain from 'components/WeatherMain';


const mapStateToProps = state => ({
  results: state.search.results,
  units: state.units,
  loading: state.search.loading,
});

class SearchResults extends Component {
  static propTypes = {
    units: PropTypes.string,
    loading: PropTypes.bool,
    search: PropTypes.func,
    location: PropTypes.shape({
      query: PropTypes.shape({
        q: PropTypes.string.isRequired,
      }),
    }),
    results: PropTypes.shape({
      name: PropTypes.string,
      main: PropTypes.object,
    }),
  }

  componentWillMount() {
    const q = this.props.location.query.q;
    this.props.search(q);
  }

  componentWillUpdate(next) {
    const q = next.location.query.q;
    if (this.props.location.query.q !== next.location.query.q || this.props.units !== next.units) {
      this.props.search(q, next.units);
    }
  }
  render() {
    let results = (
      <div className="row text-center">
        <Icon name="spinner" spin size="2x" />
      </div>
    );
    if (!this.props.loading && this.props.results) {
      results = (
        <div className="row">
          <div className="col-lg-3">
            <WeatherMain data={this.props.results.main} />
          </div>
          <div className="col-lg-9">
            <CityInfo city={this.props.results} />
          </div>
        </div>
      );
    }
    return (
      <div>
        {results}
      </div>
    );
  }
}


export default connect(mapStateToProps, SearchActions)(SearchResults);
