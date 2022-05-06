

export const GifGridItem = ({ title, url}) => {

    return (
        <div className="card">
            <img src={url} alt={ title } />
            <p className="text-card">{title}</p>
        </div>
    )
}
