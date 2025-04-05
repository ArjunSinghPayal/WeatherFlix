const movieButton = document.querySelector("#movies");
const newMovies = document.querySelector("#newMovies");
const movieDisplay = document.querySelector("#MoviesDisplay");
const weatherDisplay = document.querySelector("#weatherDisplay");
let counter = 0;
let increment = 1;
const apiReadAccessTocken = "YOUR_API_READ_ACCESS_TOKEN_HERE";

async function MovieCounter() {
  counter += 1;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadAccessTocken}`,
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.results.forEach((item) => {
        newMovies.innerHTML += `
            <li><h4>${increment++}. ${item.title}</h4>
            <ul>
            <li>Overview: ${item.overview}</li>
            <li>Release Date: ${item.release_date}</li>
            <li>Votes: ${item.vote_average}</li>
            </ul>
            </li>
            </br>
            `;
      });
    })
    .catch((err) => console.error(err));
}

movieButton.addEventListener("click", async (event) => {
  weatherDisplay.classList.add("d-none");
  if (counter === 0) {
    await MovieCounter();
  }
  movieDisplay.classList.toggle("d-none");
});
