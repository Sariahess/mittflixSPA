import React from 'react';
import * as MovieAPI from './MovieAPI';
import Search from './Search';
import TitleList from './TitleList';
import Movie from './Movie';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    movies: [],
    genres: [],
    myList: []
  }

  componentDidMount = () => {
    MovieAPI.getAll()
      .then(movies => {
        this.setState(() => {
          const listedMovies = movies.filter(movie => movie.my_list === true);

          return {
            movies,
            myList: listedMovies
          }
        });
      });
    
    MovieAPI.genres()
      .then(genres => {
        const orderedGenres = genres.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        });

        this.setState({genres: orderedGenres});
      });
  }

  filterMovieByQuery = (query) => {
    this.setState(prevState => {
      if (query.length > 0) {
        const filteredMovies = prevState.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()) || movie.overview.toLowerCase().includes(query.toLowerCase()));
        return {movies: filteredMovies};
      } else {
        this.componentDidMount();
      }
    });
  }

  filterMyListByQuery = (query) => {
    this.setState(prevState => {
      if (query.length > 0) {
        const filteredList = prevState.myList.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()) || movie.overview.toLowerCase().includes(query.toLowerCase()));
        return {myList: filteredList};
      } else {
        this.componentDidMount();
      }
    });
  }

  clickToggle = movie => {
    if (movie.my_list === false) {
      MovieAPI.addToList(movie)
        .then(movie => {
          this.setState(prevState => ({
            myList: [...prevState.myList, movie]
          }));
        });  
    } else {
      MovieAPI.removeFromList(movie)
        .then(movie => {
          this.setState(prevState => ({
            myList: prevState.myList.filter(movieElem => movieElem.id !== movie.id)
          }));
        });
    }

    this.componentDidMount();
  }

  render = () => {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Search searchResults={this.state.movies} filterByQuery={this.filterMovieByQuery} />

            {this.state.genres.map(genre => (
              <TitleList 
                genre={genre} 
                movies={this.state.movies.filter(movie => movie.genre_ids.includes(genre.id))} 
                clickToggle={this.clickToggle} 
                key={genre.id}
              />
            ))}
          </Route>

          <Route exact path="/my-list">
            <Search searchResults={this.state.myList} filterByQuery={this.filterMyListByQuery} />
            
            <div className="titleList">
              <div className="title">
                <h1>{this.state.myList.length !== 0 ? "My List" : ""}</h1>
                <div className="titles-wrapper">
                  {this.state.myList.map(movie => (
                    <Movie 
                      movie={movie} 
                      clickToggle={this.clickToggle} 
                      key={movie.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
