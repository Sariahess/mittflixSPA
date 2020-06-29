import React from 'react';
import Movie from './Movie';

export default function TitleList(props) {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{props.movies.length > 0 ? props.genre.name : ""}</h1>
        <div className="titles-wrapper">
          {props.movies.map(movie => (
            <Movie 
              movie={movie} 
              clickToggle={props.clickToggle} 
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}