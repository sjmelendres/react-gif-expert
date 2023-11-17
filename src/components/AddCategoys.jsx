/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({onNewCategorie}) => {
	const [inputValue, setInputValue] = useState('');
	const onInputCahnge = ({target}) => {
		setInputValue(target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		if(inputValue.trim().length <= 1) return;

		onNewCategorie(inputValue.trim());

		setInputValue('');
	}

	return (
		<form onSubmit={onSubmit}>
			<input 
			type="text"
			placeholder="Buscar gifs"
			value={inputValue}
			onChange={onInputCahnge}
			/>
		</form>
	)
}