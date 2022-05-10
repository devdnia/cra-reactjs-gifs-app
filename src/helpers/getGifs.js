export const getGifs = async ( category ) => {

    /**encodeURI() para eliminar espacios */
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=HBSexdtnLXk4AOWuMoCewieIKUtANe2R`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}