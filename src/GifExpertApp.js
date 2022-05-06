import { useState } from 'react';
import { v4 as key } from 'uuid';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />


            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={key()}
                            category={category}
                        />
                    )
                    )
                }
            </ol>
        </>
    )
}
