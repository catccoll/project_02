import React, { Component } from "react";

export default class App extends Component {
  state = {
    movies: ["大海", "小于", "小夏"],
  };
  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        <button
          onClick={() => {
            this.changeMovies();
          }}
        >
          修改电影
        </button>
      </div>
    );
  }
  changeMovies() {
    // 这里进行一个浅拷贝 来做性能的优化
    const movies = [...this.state.movies];
    const p = "海王";
    this.setState({
      movies: [p, ...movies],
    });
  }
}
