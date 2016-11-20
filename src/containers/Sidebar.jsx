import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => (
  <div className="col-md-2 sidebar">
    <div className="list-group">
      <Link activeClassName="active" className="list-group-item" to="/">Home</Link>
    </div>
  </div>

);

export default Sidebar;
