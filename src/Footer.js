import React from "react";

export default function Footer() {
  return (
    <div className="link-to-github">
      This weather app project was coded by{" "}
      <a
        href="https://github.com/Santje777"
        target="_blank"
        rel="noopener noreferrer"
        title="link to Susanne's github page"
      >
        Susanne van Oosterom
      </a>{" "}
      and is open sourced on{" "}
      <a
        href="https://github.com/Santje777/weather-react"
        target="_blank"
        rel="noopener noreferrer"
        title="link to the github page of this site"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://susannes-weather-react-project.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        title="link to netlify page"
      >
        Netlify
      </a>
    </div>
  );
}
