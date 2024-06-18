import React, { useState } from "react";
import Container from "../container";
import Button from "../button";
import styles from "./detail.module.css";

function Detail({ dog }) {
  const [goodDog, setGoodDog] = useState(dog.good_dog);

  async function handleClick() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/dogs/${dog.breed}/${dog.id}/gooddog`,
        { method: "PATCH" }
      );
      const data = await response.json();
      setGoodDog(data.good_dog);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={styles.detail}>
      <Container>
        <div className={styles.detailWrapper}>
          <div className={`${styles.detailBox} ${styles.detailImage}`}>
            <img src={dog.img} alt={dog.alt_img} />
          </div>
          <div className={styles.detailBox}>
            <h2>{dog.name}</h2>
            <p className={styles.genre}>{dog.genre}</p>
            <p className={styles.bio}>{dog.bio}</p>
            <div className={styles.goodDogBox}>
              <Button bg="#5b56bc" hoverStyle="color" onClick={handleClick}>
                Good Dog {goodDog}x
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Detail;
