import React, { useState, useEffect }  from "react";
import "./index.css";
// import testData  from '../../constants/defaultMovieList';

function MovieList() {
  const [hasCalledApi, movies, setState] = useState([])
  useEffect(() => {
    const url = `https://jsonmock.hackerrank.com/api/movies?Year=${query}`
    fetch(
      url,
      {
          method: 'get'
      })
      .then(response => response.json())
      .then(jsonData => {
        setState({
          hasCalledApi: true;
          movies: jsonData.data;
        }
      })
      .catch(err => {
        setState({
          hasCalledApi: true;
        });
      })
  }, [query]);

  function setDate(date) {
    const value = date;
    setQuery(value)
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" id="app-input"/>
        <button className="" data-testid="submit-button" onClick={() => setDate(document.getElementById('app-input').value)}>Search</button>
      </section>
      {hasCalledApi && movies.length === 0 && document.getElementById('app-input').value === ''
        && <div data-testid="no-result">No Results Found</div>
      }
      {hasCalledApi && movies.length !== 0
        && (
          <ul data-testid="movieList">
            {movies.map((movie) => {
              <li>{movie.title}</li>
            })}
          </ul>
        )
      }
    </div>
  );
}

export default MovieList
