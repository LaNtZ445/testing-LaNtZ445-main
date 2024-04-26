import { createHtml, displayNoResult } from "../ts/movieApp";

test("skapa html element för varje film", () => {
  const movies = [
    { Title: "film 1", Poster: "poster1.jpg", imdbID: "1", Type: "movie", Year: "2022" },
    { Title: "film 2", Poster: "poster2.jpg", imdbID: "2", Type: "movie", Year: "2023" },
    { Title: "film 3", Poster: "poster3.jpg", imdbID: "3", Type: "movie", Year: "2024" }
  ];

  const container = document.createElement("div");

  createHtml(movies, container);

  expect(container.children.length).toBe(movies.length);

  movies.forEach((movie, index) => {
    const movieElement = container.children[index] as HTMLDivElement; 

    const titleElement = movieElement.querySelector("h3");
    const imgElement = movieElement.querySelector("img");

    expect(movieElement.tagName).toBe("DIV");
    expect(titleElement?.textContent).toBe(movie.Title); 
    expect(imgElement?.src.split('/').pop()).toBe(movie.Poster); 
    expect(imgElement?.alt).toBe(movie.Title); 
  });

  console.log("skapapade html element för varje film");
});

test("displayNoResult skapar en text som säger att sökresultatet inte finns i databasen", () => {
  const container = document.createElement("div");

  displayNoResult(container);

  const paragraphElement = container.querySelector("p");
  expect(paragraphElement).toBeDefined();
  expect(paragraphElement?.textContent).toBe("Inga sökresultat att visa");

  console.log("sskapar ingen sökresultat text");
});



