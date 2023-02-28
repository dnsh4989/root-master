import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./styles/main.scss";

function App() {
  return (
    <div className="main-container">
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <span className="header__logo">Dinesh SanaLa</span>
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="#section-tours" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
