import '../styles/article.css'


export const GifGridItem = ({ title, url }) => {

    return (

            <article className="card animate__animated animate__fadeIn animate__delay-1s">
                <img src={url} alt={title} />
                <p className="text-card">{title}</p>
            </article>

    )
}
