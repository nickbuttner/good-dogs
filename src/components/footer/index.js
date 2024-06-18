import React from "react";
import Container from "../container";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          This website was built using the{" "}
          <a href="https://unsplash.com/">Unsplash's</a> API.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
