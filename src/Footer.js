import React from "react";

export default function Footer() {
  return (
    <div className="link-to-github">
      This weather project is open sourced on{" "}
      <a
        href="https://github.com/Santje777/weather-react"
        target="_blank"
        rel="noopener noreferrer"
        title="link to github page"
      >
        GitHub{" "}
      </a>
      by Susanne van Oosterom and hosted on
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
