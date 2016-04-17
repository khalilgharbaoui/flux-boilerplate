import AppActions from '../actions/AppActions';

module.exports = {
    //example ajaxt call appAPI

    // searchMovies(movie) {
    //     $.ajax({
    //             url: 'http://www.omdbapi.com/?s='+movie.title+'&_=1460844374331',
    //             dataType: 'json',
    //             // contentType: 'application/json',
    //             method: 'GET',
    //             cache: false
    //
    //         })
    //         .success((data) => {
    //
    //             AppActions.receiveMovieResults(data.Search);
    //
    //
    //         })
    //         .done((data) => {
    //
    //             console.log('Total Results, Ajax Call (appAPI.js:21): \n'+data.totalResults);
    //             console.log('First Result Title (appAPI.js:22): \n' +data.Search[1].Title);
    //         })
    //         .fail(function(xhr, status, err) {
    //             console.log(err);
    //         })
    // }
}
