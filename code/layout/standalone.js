import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Standalone component
 *
 * @disable-docs
 */
const Standalone = ({ _body }) => (
	<div className="standalone">{ _body }</div>
);

Standalone.propTypes = {
	/**
	 * _body: (Standalone)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Standalone.defaultProps = {};

export default Standalone;
