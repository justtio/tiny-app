import React from "react";
import Like from "../common/like";

const MoviesTable = ({ movies, onDelete, onLike, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort('title')}>Title</th>
          <th onClick={() => onSort('genre.name')}>Genre</th>
          <th onClick={() => onSort('nuberInStock')}>Stock</th>
          <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onLikeToggle={() => onLike(movie)} />
            </td>
            <th>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
