import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({ setSpendin, setMakeSpending }) => {

    const [name, setName] = useState('');
    const [cant, setCant] = useState(0);

    const [error, setError] = useState(false);

    const addQuantity = e => {
        e.preventDefault();

        //Validacion
        if (cant < 1 || isNaN(cant) || name.trim() === '') {
            setError(true);
            return;
        }

        //Si se pasa la validacion
        setError(false);
        //Gasto
        const spending = {
            name,
            cant,
            id: shortid.generate()
        }
        //guardar gasto
        setSpendin(spending);
        setMakeSpending(true)

        //resetear formulario
        setName('');
        setCant(0);
    }

    return (
        <form onSubmit={addQuantity}>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error
                message="Ambos campos son obligatorios o presupuesto incorrecto"
            /> : null}
            <div className="camp">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Trasporte"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="camp">
                <label>Cantidad de Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cant}
                    onChange={e => setCant(e.target.value)}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

Form.propTypes = {
    setSpendin: PropTypes.func.isRequired,
    setMakeSpending: PropTypes.func.isRequired,
}

export default Form;