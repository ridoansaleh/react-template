import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ route }) => (
	<div>
		<h1>Home Page</h1>
		<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
	</div>
);

Home.propTypes = {
  route: PropTypes.object
};

export default Home;