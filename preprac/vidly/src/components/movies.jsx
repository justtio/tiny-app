import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/like";
import Pagination from "../common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  };
  //delete function use item's id
  // when clicked the delete button we can get item id we clicked
  //and left the rest of items, then we just delete the item we clicked
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies: movies
    });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = () => {
    console.log("page changed");
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the datebase.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLikeToggle={() => this.handleLike(movie)}
                  />
                </td>
                <th>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
