import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

import '../styles/content.css';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <div className='container'>
                <div>
                    <h3 className="animate__animated animate__fadeIn animate__delay-1s">{category}</h3>

                    {loading && <p className="animate__animated animate__flash">Loading</p>}

                    {
                        images.map(img =>
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    }
                </div>

            </div>


        </>

    )
}
