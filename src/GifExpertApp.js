import { useState } from 'react';
import { v4 as key } from 'uuid';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

// Styles
import './index.css'
import './styles/header.css';
import './styles/content.css';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <header>
                <h1 className='header-title border'>GifExpertApp</h1>
                <h1 className='header-title wave'>GifExpertApp</h1>
                <AddCategory setCategories={setCategories} />
            </header>


                {
                    categories.map(category => (
                        <GifGrid
                            key={key()}
                            category={category}
                        />
                    ))
                }


        </>
    )
}
