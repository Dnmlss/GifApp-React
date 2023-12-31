import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	// State
	const [inputValue, setInputValue] = useState(''); // Hook

	// Metodo
	// Desfragmentamos el evento para obtener el target.value (lo escrito en input)
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	// Metodo submit
	const onSubmit = (event) => {
		// Evitamos que se refresque la pagina por defecto con el submit.
		event.preventDefault();

		// el onNewCategory solo se va a emitir si el input es mayor a 2 caracteres
		if (inputValue.trim().length <= 1) return;

		// setCategories((categories) => [inputValue, ...categories]);
		onNewCategory(inputValue.trim());

		// Limpiamos la caja de texto, al dar enter, se queda en blanco para hacer otra busqueda
		setInputValue('');
	};

	return (
		// Formulario
		<form onSubmit={(event) => onSubmit(event)} aria-label='form'>
			<input
				type='text'
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};

/* Obs:
- El fragment o '<> </>' se utilizan cuando se tienen mas de un elemento, por ej. una etiqueta 'h1' y debajo una etiqueta p, no deben ser hermanos, siempre debe haber un padre. En este caso un 'form' es padre, por ende podemos tener la cantidad de inputs que necesitemos

.trim() elimina los espacios en blanco de adelante y atras de un string */
