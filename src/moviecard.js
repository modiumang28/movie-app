import { Component } from "react";

function MovieCard(props) {
  const { title, plot, price, rating, star, fav, isInCart, poster } =
    props.movie;
  const { movie, addStars, decStars, toggleFav, toggleCart } = props;
  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img alt="movie-image" src={poster} />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>

          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="stars">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
                alt="increase"
                className="str-btn"
                onClick={() => {
                  addStars(movie);
                }}
              />
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
              <img
                src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
                alt="decrease"
                className="str-btn"
                onClick={() => decStars(movie)}
              />
              <span className="starCount">{star}</span>
            </div>
            {!fav ? (
              <button
                className="favourite-btn"
                onClick={() => toggleFav(movie)}
              >
                Favourite
              </button>
            ) : (
              <button
                className="unfavourite-btn"
                onClick={() => toggleFav(movie)}
              >
                Unfavourite
              </button>
            )}
            <button
              className={isInCart ? "remove-cart-btn" : "cart-btn"}
              onClick={() => toggleCart(movie)}
            >
              {isInCart ? "Remove" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
