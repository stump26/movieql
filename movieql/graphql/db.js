import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2";

export const getMovies = (limit, rating)=>{
    let  REQUEST_URL = API_URL+'/list_movies.json?';
    if(limit>0){
        REQUEST_URL+=`&limit=${limit}`;
    }
    if(rating>0){
        REQUEST_URL+=`&minimum_rating=${rating}`;
    }
    console.log("getMovies",REQUEST_URL);
    return fetch( `${REQUEST_URL}`)
        .then(res => res.json())
        .then(json=>json.data.movies)
}
export const getMovieById = (id)=>{
    let  REQUEST_URL = API_URL+'/movie_details.json?';
    if(id){
        REQUEST_URL += `movie_id=${id}`;
    }else{
        console.log("ERR>>input id");
    }
    console.log("getMovieById->",id,"->",REQUEST_URL);
    return fetch(`${REQUEST_URL}`)
        .then(res=>res.json())
        .then(json=>json.data.movie)
}
export const getSuggestionsById = (id)=>{
    let REQUEST_URL = API_URL+'/movie_suggestions.json?';
    if(id){
        REQUEST_URL += `movie_id=${id}`;
    }else{
        console.log("ERR>>input id")
    }
    console.log("getSuggestings->",id,"->",REQUEST_URL);

    return fetch(`${REQUEST_URL}`)
        .then(res=>res.json())
        .then(json=>json.data.movies)
}