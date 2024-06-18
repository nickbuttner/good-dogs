import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./breeds.module.css";
import Container from "../container";
import Button from "../button";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Breeds(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/breeds/${props.breed}`);
  }

  return (
    <section className={styles.breeds}>
      <Container>
        <div className={styles.titleBreed}>
          {/*           <h2>Choose the breed!</h2>
           */}{" "}
        </div>
        <div className={styles.breedsContent}>
          <div className={styles.text}>
            <h3>{props.breed}</h3>
            <p>Check all the {props.breed} registered on our database!</p>
            <Button onClick={handleClick}>Go to breed page</Button>
          </div>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <LazyLoadImage
                src={props.dogs[0].img}
                height={"300px"}
                placeholderSrc="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80"
                alt={props.dogs[0].alt_img}
                effect="blur"
                width={"230px"}
              />
            </div>
            <div className={styles.card2}>
              <LazyLoadImage
                src={props.dogs[1].img}
                height={"300px"}
                placeholderSrc="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80"
                alt={props.dogs[1].alt_img}
                effect="blur"
                width={"230px"}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Breeds;
