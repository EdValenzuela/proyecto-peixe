
export const getMoviesAPI = async (categ) => {
    try {
        
        const api = '3f2b5781';
        const url = `https://www.omdbapi.com/?t=${encodeURI(categ)}&apikey=${api}&r=json`;

        const resp = await fetch(url);
        const data = await resp.json();

        return data;

    } catch (e) {
        console.log(e);
    }
}
