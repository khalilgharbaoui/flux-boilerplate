import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import SearchForm from './SearchForm';
import MovieResults from './MovieResults';


function getAppState(){
  return{
    movies: AppStore.getMovieResults()
  }
}

class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      movies: ''
    };

  }



  componentDidMount(){
    AppStore.addChangeListener(this._onChange.bind(this));

  }
  componentWillUnMount(){
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

  render(){
    if (this.state.movies == ''){
      var movieResults = '';
    } else {
      var movieResults = <MovieResults movies={this.state.movies} />
    }
    console.log('Are The Movies in the current state? (App.js:34) \n' +this.state.movies);

    return(
      <div>
        <SearchForm />
        {movieResults}
      </div>
    )
  }


  _onChange(){
    console.log('Movies are Now in (App.js:43) \n' +AppStore.getMovieResults());
    this.setState(getAppState());

  }


}


export default App;
