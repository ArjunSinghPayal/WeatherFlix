# API_Integration

WeatherFlix: Weather Data & Movie Recommendations

WeatherFlix is a simple, interactive web application that lets users access current weather information and top movie recommendations. Built using HTML, CSS, and JavaScript, this app employs fetch API, async/await, and DOM manipulation to display real-time data seamlessly on the page.
Features:

    Current Weather Data: Retrieve the current weather for any city through a weather API.

    Top Movie Recommendations: Fetch a list of popular movies from a movie API.

    Real-Time Data Fetching: The app uses asynchronous JavaScript (async/await) and the fetch API to display the data without page reloads.

Technologies Used:

    HTML for basic structure

    CSS(Bootstrap) for styling and layout

    JavaScript for logic (fetch, async/await, DOM manipulation)

    Weather API (OpenWeatherMap)

    Movies API (TMDB)

How It Works:

    Weather Information:

        Users can input a city to get the current weather data.

        The app makes an asynchronous request to the Weather API to fetch weather details like temperature, humidity, and weather conditions.

    Movie Information:

        The app also provides a list of popular movies fetched from the Movies API (independently of the weather data).

        Users can explore the latest top-rated or trending movies.

    Interactive UI:

        Both sets of data (weather and movies) are displayed dynamically on the page using DOM manipulation.

Getting Started:

    Clone the repository to your local machine.

    Open index.html in your browser.

    Ensure you have an internet connection to fetch real-time data.

    Enter a city to view the weather, and explore popular movie recommendations!

API Keys:

To use the weather and movie APIs, you will need to obtain your own API keys:

    Weather API (OpenWeatherMap)

    Movies API (TMDB)

In the config.js file, replace the placeholders with your actual API keys.

Example:

const weatherAPIKey = "YOUR_WEATHER_API_KEY";
const movieAPIKey = "YOUR_MOVIE_API_KEY";

Contributing:

Feel free to fork the repository, open issues, or submit pull requests. Contributions are always welcome!
