import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Career = ({ route }) => (
	<div>
		<h1>Career Page</h1>
		<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
	</div>
);

Career.propTypes = {
  route: PropTypes.object
};

export default Career;