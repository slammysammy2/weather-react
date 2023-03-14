import React from "react";
import "./Weather.css";
import "./App.css";
import "./Footer.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Vienna" />
      <footer className="text-center mt-3">
        This project was coded by Samantha Baran and is open-sourced on{" "}
        <a
          href="https://github.com/slammysammy2/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub{" "}
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://remarkable-douhua-f868d5.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify{" "}
        </a>
      </footer>
    </div>
  );
}
