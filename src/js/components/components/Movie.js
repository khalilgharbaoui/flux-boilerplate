import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';


 class Movie extends React.Component{

  render(){
    let link = 'http://www.imdb.com/title/'+this.props.movie.imdbID;

    return(
      <div className="well">
        <div className="row">
         <div className="col-md-4">
           <img className="thubnail" src={this.props.movie.Poster} />

         </div>
         <div className="col-md-8">
           <h4>{this.props.movie.Title}</h4>
           <ul className="list-group">
            <li className="list-group-item">Year Released: {this.props.movie.Year}</li>
            <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
          </ul>
          <a className="btn btn-primary" href={link}>View on IMDB</a>
         </div>

        </div>
      </div>
    )
  }

}


export default Movie;
