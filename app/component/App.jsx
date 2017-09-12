import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

const App = ({ route }) => (
	<div>
		<Header route={route}/>
	</div>
);

App.propTypes = {
  route: PropTypes.object
};

export default App;