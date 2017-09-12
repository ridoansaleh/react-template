import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

const Header = ({ route }) => (
	<div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="#">Navbar</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		      	<Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
		      </li>
		      <li className="nav-item">
		      	<Link to="/about" className="nav-link">About</Link>
		      </li>
		      <li className="nav-item">
		      	<Link to="/career" className="nav-link">Career</Link>
		      </li>
		    </ul>
		  </div>
		</nav>
		{/* child routes won't render without this */}
    	{renderRoutes(route.routes)}
	</div>
);

Header.propTypes = {
  route: PropTypes.object
};

export default Header;