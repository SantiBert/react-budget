import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import './Question.css';

const Question = ({ setBudget, setRest, setQuestion }) => {

    //Definir State
    const [cant, setCant] = useState()

    //Error
    const [error, setError] = useState(false);

    //Funcion para leer presupuesto
    const definiteBudget = e => {
        setCant(parseInt(e.target.value, 10));
    }

    //Submit el presupuesto
    const submitBudget = e => {
        e.preventDefault();

        //validar
        if (cant < 1 || isNaN(cant)) {
            setError(true);
            return;
        }

        //Si se pasa la validacion
        setError(false);
        setBudget(cant);
        setRest(cant);
        setQuestion(false);

    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error
                message="El presupuesto es incorrecto"
            /> : null}
            <form
                onSubmit={submitBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={definiteBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRest: PropTypes.func.isRequired,
    setQuestion: PropTypes.func.isRequired
}

export default Question;