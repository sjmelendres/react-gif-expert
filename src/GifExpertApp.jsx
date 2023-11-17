import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategorie) => {
		if(categories.includes(newCategorie)) return;
		setCategories([newCategorie, ...categories]);
	}
	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategorie={onAddCategory}></AddCategory>

			{ 
				categories.map( category => (
					<GifGrid 
						key={category}
						category={category}
					/>
				))
			}
		</>
	)
}