// @ts-check
import React, { useState } from "react";
import s from "./App.module.scss";
import Logo from "./images/default-logo.png";
import CloseIcon from "./icons/Close";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e
   */
  const onClickMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  /**
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e
   */
  const onClickClose = (e) => {
    setMenuOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <menu className={`${s.menu} ${menuOpen ? s.open : ""}`}>
        <div className={s.close_button} onClick={onClickClose}>
          <CloseIcon />
        </div>
        <ul className={s.links}>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#about">Company</a>
          </li>
          <li>
            <a href="#about">Portfolio</a>
          </li>
          <li>
            <a href="#about">Landing</a>
          </li>
        </ul>
      </menu>
      <header className={s.app_bar}>
        <div className={s.container}>
          <a href="/">
            <img src={Logo} alt="design" />
          </a>
          <div
            className={s.menu_icon}
            role="button"
            tabIndex={-1}
            onClick={onClickMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
        </div>
      </header>
      <section className={s.section_form}> </section>
    </div>
  );
}

export default App;
