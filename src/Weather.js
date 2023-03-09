import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(reponse) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  let weatherData = {
    city: "Vienna",
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAUhJREFUeNrt230NgzAQh2GkIAUJyJgMJCABCZNQKcxBHdyOpFkyEkYGV9oL75Lff2Rwz8pXe2tEpLlzGgAAAAAAAAAAYHsDg4+8Hp1m0ATNrJGNzGmbZdvOZN+lAFLRkyb+KHgvMX1H5wYgFR5OFL2VcATiMgA9uFbzzFD4Oss+2qoA9ID6k0P9yKnRVwGgBzJeWPg6Y1GAdIGSwpmKAFRS/C5CFoDCw/6v08EcIF3wpNL0WQHSrS5WDBDXt0hrgGfFxX+eE7IApCc8cZIuB0BwBBBMAZz9+l+jwApgcggwWQJEhwDRBMDp8P+cBhYAg2OAwQIgOAYIFgCzY4DZAkBcB4C7AywvcIwAAADgNsiDEI/CvAzxOsyECFNiTIoyLc7CCEtjLI6yPE6DBC0yNEnRJkejJK2yNEvTLs8fJgAAAAAAAADg1nkDlR7XfJiH1ggAAAAASUVORK5CYII=",
    humidity: "80",
    wind: "30",
  };

  if (ready) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city here ..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-auto">
              <input type="submit" value="Search" class="btn btn-primary" />
            </div>
            <div className="col-auto">
              <input
                type="submit"
                value="Current"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <span>{weatherData.date}</span>
            </li>
            <li>
              <span>{weatherData.description}</span>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="Flexbox weather-temperature">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
              <strong>19</strong>
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <span>{weatherData.humidity}%</span>
              </li>
              <li>
                <span>{weatherData.wind} km/h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    );
  } else {
    const apiKey = "caafdc7aea30a3ea4d8a3bedof16c24t";
    let city = "Vienna";
    let apiUrl =
      "https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric";
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
