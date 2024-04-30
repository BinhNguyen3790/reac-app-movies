import { Component } from "react";
import ListMovies from "../layouts/ListMovies";
class TopPage extends Component {
  render() {
    return (
      <div className="topPage container-fluid h-auto p-0" style={{ backgroundImage: 'url("./assets/movies/avanger.jpg")' }}>
        <div className="bg-container h-auto px-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
          <div className="container">
            <ListMovies />
          </div>
        </div>
      </div>
    );
  }
}

export default TopPage;
