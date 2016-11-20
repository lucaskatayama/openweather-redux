import React from 'react';
import Search from 'containers/Search';


const Navbar = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">OpenWeather Redux</a>
      </div>
      <div id="navbar">
        <Search />
      </div>
    </div>
  </nav>
);

export default Navbar;
