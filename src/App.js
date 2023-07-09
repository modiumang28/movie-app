import React, { Component } from "react";
import MovieList from "./movielist";
import Navbar from "./navbar";
import { movies } from "./moviesData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    if (movies[index].star >= 5) {
      return;
    }
    movies[index].star += 0.5;
    this.setState({
      movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    if (movies[index].star <= 0) {
      return;
    }
    movies[index].star -= 0.5;
    this.setState({
      movies,
    });
  };

  handleFavBtn = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].fav = !movies[index].fav;
    this.setState({
      movies,
    });
  };

  handleCartBtn = (movie) => {
    let { movies, cartCount } = this.state;
    const index = movies.indexOf(movie);
    movies[index].isInCart = !movies[index].isInCart;
    if (movies[index].isInCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    console.log(this.state.cartCount);
    return (
      <div className="App">
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStars}
          decStars={this.handleDecStars}
          toggleFav={this.handleFavBtn}
          toggleCart={this.handleCartBtn}
        />
      </div>
    );
  }
}

export default App;
