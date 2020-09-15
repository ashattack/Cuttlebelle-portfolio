import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Bottom, Hole } from './icon';


/**
 * The Footer component
 */
const Footer = ({ _body }) => (
	<footer className="footer">
		<Bottom className="footer__bottom" title="" desc="" />
		<Hole className="footer__hole" title="" desc="" />
		{ _body }
	</footer>
);

Footer.propTypes = {
	/**
	 * _body: (text)(2)
	 */
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
