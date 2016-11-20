import React, { PropTypes } from 'react';
import Navbar from 'containers/Navbar';

const Main = props => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
