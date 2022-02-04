const API_KEY = "0bZ7HGHYVZjy6xaxr69G6xC6qr6Xv8R2";
const API_URL = "https://api.giphy.com/v1/gifs/";


export const fetchGIFs = async (searchTerm) => {
     
    const endpoint = `${API_URL}search?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`    
    return await (await fetch(endpoint)).json();

  }

export const fetchGIF = async (id) => {
 
    const endpoint = `${API_URL}${id}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();

  }

