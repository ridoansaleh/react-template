import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

const Header = ({ route }) => (
	<div>
		  <ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/career">Career</Link>
				</li>
		  </ul>
    	{renderRoutes(route.routes)}
	</div>
);

Header.propTypes = {
  route: PropTypes.object
};

export default Header;