import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li>
            <span>{props.data.description}</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="Flexbox weather-temperature">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <img src={props.data.iconUrl} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>
              <span>{props.data.humidity}%</span>
            </li>
            <li>
              <span>{props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
