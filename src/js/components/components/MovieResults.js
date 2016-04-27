import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import Movie from '../components/Movie';


 class MovieResults extends React.Component{

  render(){

    return(
      <div className="">
        <h3 className="text-center">RESULTS</h3>
        {
          this.props.movies.map(function(movie, i){

            return(
              <Movie movie={movie} key={i} />
            )
          })
        }


      </div>
    )
  }

}


export default MovieResults;
