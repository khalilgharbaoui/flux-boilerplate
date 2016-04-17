import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';
import AppAPI from '../utils/appAPI';
const CHANGE_EVENT = 'change';

//Example

// let _movies = [];
// let _selected = '';



class AppStoreClass extends EventEmitter {
    //Example

    // setMovieResults(movies){
    //     _movies = movies;
    // console.log('Results SET (AppStore.js:17): \n' + _movies);
    // }


    //Example

    // getMovieResults(){
    //     return _movies;
    // console.log('Results GET (AppStore.js:24): \n' + _movies);
    //
    // }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {

        this.on('change', callback);

    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

}

AppDispatcher.register((payload) => {
    const action = payload.action;

    switch (action.actionType) {
      //Examples

        case
        // AppConstants.SEARCH_MOVIES:
        // console.log('Searching..(AppStore.js:42): \n' + action.movie.title);
        // AppAPI.searchMovies(action.movie);
        AppStore.emit(CHANGE_EVENT);
        break;
        //
        case
        // AppConstants.RECEIVE_MOVIE_RESULTS:
        // console.log('Received Results (AppStore.js:48): \n' + action.movies);
        // AppStore.setMovieResults(action.movies);
        AppStore.emit(CHANGE_EVENT);
        break;

    }
    return true

});

// Initialize the singleton to register with the
// dispatcher and export for React components
const AppStore = new AppStoreClass();

export default AppStore;
