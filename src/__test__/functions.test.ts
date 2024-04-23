import { movieSort } from "../ts/functions";

describe("movieSort function", () => {
  test("sortera alla filmer i alfabetsik årdingn.", () => {
    const movies = [
      { Title: "Avatar", imdbID: "tt0499549", Type: "movie", Poster: "http://...", Year: "2009" },
      { Title: "Titanic", imdbID: "tt0120338", Type: "movie", Poster: "http://...", Year: "1997" },
      { Title: "The Avengers", imdbID: "tt0848228", Type: "movie", Poster: "http://...", Year: "2012" },
    ];
    const sortedMovies = movieSort(movies);

    expect(sortedMovies).toEqual([
      { Title: "Avatar", imdbID: "tt0499549", Type: "movie", Poster: "http://...", Year: "2009" },
      { Title: "The Avengers", imdbID: "tt0848228", Type: "movie", Poster: "http://...", Year: "2012" },
      { Title: "Titanic", imdbID: "tt0120338", Type: "movie", Poster: "http://...", Year: "1997" },
    ]);
  });
});
