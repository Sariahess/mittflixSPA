import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  state = {
    query: ""
  }

  updateQuery = eve => {
    this.setState({[eve.target.name]: eve.target.value});
    this.props.filterByQuery(eve.target.value);
  }

  render = () => {
    return (
      <header className="header">
        <Link exact to="/">
          <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
          />
        </Link>
        <div id="navigation" className="navigation">
          <nav>
            <ul>
              <li><Link exact to="/my-list">My List</Link></li>
            </ul>
          </nav>
        </div>
        <form id="search" className="search">
          <input 
            name="query" 
            type="search" 
            placeholder="Search for a title..." 
            value={this.state.query} 
            onChange={eve => this.updateQuery(eve)}
          />
          <div className="searchResults">{this.state.query.length === 0 ? "" : `Found 
          ${this.props.searchResults.length} movies with the query ${this.state.query}`}</div>
        </form>
      </header>
    );
  }
}

export default Search;