import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({ budget, rest }) => {
    return (
        <Fragment>
            <div className="btn-outline-success">
                Presupuesto: ${budget}
            </div>
            <div className={checkBudget(budget, rest)}>
                Restante: ${rest}
            </div>
        </Fragment>
    );
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired

}

export default BudgetControl;