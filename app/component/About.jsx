import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const About = ({ route }) => (
	<div>
		<h1>About Page</h1>
		<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
	</div>
);

About.propTypes = {
  route: PropTypes.object
};

export default About;