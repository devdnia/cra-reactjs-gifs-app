import { useState } from "react";



export const AddCategory = ( { setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [  inputValue, ...cats ]);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Búsqueda de imágenes"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form >
    )
}
