import React from 'react'
import Api from './utils/Api';

function getLatestMovies() {
    let films = [];
    let json = {};
    Api.get('titles/')
        .then((res) => {
            // console.log(res.results);
            res.results.map((film) => {
                // console.log(film);
                json['id'] = film.id || null;
                json['title'] = film?.titleText?.text || null;
                json['img'] = film?.primaryImage?.url || null;
                json['description'] = film?.caption?.plainText || null;
                json['release'] = film?.releaseYear?.year || null;
                films.push(json);
                json = {};
            })
        })
    return films;
    // console.log(films);
}
function getMovieByTitle(title) {
    let films = [];
    let json = {};
    Api.get('titles/search/title/' + title)
        .then((res) => {
            // console.log(res.results);
            res.results.map((film) => {
                // console.log(film);
                json['id'] = film.id || null;
                json['title'] = film?.titleText?.text || null;
                json['img'] = film?.primaryImage?.url || null;
                json['description'] = film?.caption?.plainText || null;
                json['release'] = film?.releaseYear?.year || null;
                films.push(json);
                json = {};
            })
        })
    return films;
}
export {
    getLatestMovies,
    getMovieByTitle
}