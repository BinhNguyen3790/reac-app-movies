import { Component } from "react";
import dataMovies from "../../DataFilms.json";

class ListMovies extends Component {
  renderMovies = () => {
    let NewDataMovie = dataMovies.map((movie, index) => {
      return (
        <li className="col col-md-3 py-3" key={index}>
          <div className="card h-100">
            <img src={movie.hinhAnh} className="card-img-top" alt={movie.bidanh} style={{ maxHeight: "350px" }} />
            <div className="card-body">
              <h5 className="card-title">{movie.tenPhim}</h5>
              {movie.moTa.length > 100 ? <p className="card-text">{movie.moTa.substring(0, 100)}...</p> : <p className="card-text">{movie.moTa}</p>}
              <a href={movie.trailer} target="_blank" className="btn btn-primary">
                Link
              </a>
            </div>
          </div>
        </li>
      );
    });
    return NewDataMovie;
  };

  render() {
    return (
      <div className="py-5 text-white">
        <ul className="row">{this.renderMovies()}</ul>
      </div>
    );
  }
}
export default ListMovies;
