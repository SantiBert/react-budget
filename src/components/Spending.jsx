import React from 'react';
import PropTypes from 'prop-types';

const Spending = ({ spending }) => (
    <li className="spending">
        <p>
            {spending.name}
            <span className="spending">$ {spending.cant}</span>
        </p>
    </li>
);

Spending.propTypes = {
    spending: PropTypes.object.isRequired,

}

export default Spending;