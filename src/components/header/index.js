import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import "hamburgers/dist/hamburgers.css";
import classNames from "classnames";
import Logo from "../logo";
import Container from "../container";
import throttle from "lodash.throttle";

function Header({ whiteBgPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [withWhiteBg, setWithThiteBg] = useState(false);
  const toggle = (state) => {
    return !state;
  };

  function setIcon() {
    setIsOpen(toggle);
  }

  useEffect(() => {
    const onScroll = throttle(() => {
      if (window.scrollY > 50) {
        setWithThiteBg(true);
      } else {
        setWithThiteBg(false);
      }
    }, 230);

    const scrollListner = window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  const fade = isOpen ? styles.fade : "";

  return (
    <React.Fragment>
      <div
        className={classNames(styles.overlay, {
          [styles.hidden]: !isOpen,
        })}
      >
        {" "}
        <Container>
          <ul className={styles.overlayContent}>
            {["bulldog", "corgi", "husky", "pug"].map((dogBreed) => {
              return (
                <li
                  key={dogBreed}
                  className={classNames(fade, styles.animateList)}
                >
                  <Link to={`/breeds/${dogBreed}`}>{dogBreed}</Link>
                </li>
              );
            })}
            <li className={classNames(fade, styles.animateList)}>
              <Link to={`/new-good-dog`}>Add a dog</Link>
            </li>
          </ul>
        </Container>
        <Logo className={styles.background} />
      </div>
      <header
        className={classNames({
          [styles.withWhiteBg]: withWhiteBg && !isOpen,
        })}
      >
        <Container>
          <div className={styles.navWrapper}>
            <div
              className={classNames(styles.logo, {
                [styles.darkColor]: (withWhiteBg || whiteBgPage) && !isOpen,
              })}
            >
              <Logo />
            </div>

            <nav className={styles.nav}>
              <button
                onClick={setIcon}
                className={`hamburger hamburger--elastic ${
                  isOpen ? "is-active" : ""
                } `}
                type="button"
              >
                <span className="hamburger-box">
                  <span
                    className={classNames("hamburger-inner", {
                      [styles.darkColor]:
                        (withWhiteBg || whiteBgPage) && !isOpen,
                      [styles.lightColor]:
                        (!withWhiteBg && !whiteBgPage) || isOpen,
                    })}
                  ></span>
                </span>
              </button>
            </nav>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
}

export default Header;
