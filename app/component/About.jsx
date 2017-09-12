import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const About = ({ route }) => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-12">
			    <div className="jumbotron jumbotron-fluid">
					<div className="container">
					    <h1 className="display-3">About Page</h1>
					    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

About.propTypes = {
  route: PropTypes.object
};

export default About;