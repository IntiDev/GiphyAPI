const API_KEY = "aL7tPpGfA3kJWW1SRLjbodjNWRNBwNcb";
const LIMIT = 24;
const BASE_URL = "http://api.giphy.com/v1/gifs/";
const PATH_TRENDING = `trending?api_key=${API_KEY}&limit=${LIMIT}&rating=g`;
const PATH_SEARCH = `search?api_key=${API_KEY}&limit=${LIMIT}&q=`;

export default {
    Config: {
        UrlTrending: BASE_URL + PATH_TRENDING,
        UrlSearch: BASE_URL + PATH_SEARCH
    }
}