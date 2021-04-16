import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Error = ({ message }) => (
    <div className="alert alert-warning">
        <p className="mb-0">{message}</p>
    </div>

);

Error.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Error;