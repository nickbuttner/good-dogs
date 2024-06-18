import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../button";
import styles from "./adddog.module.css";

function Adddog() {
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataToSend = {};
    formData.forEach((value, key) => (dataToSend[key] = value));

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/dogs`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      history.push(`/dogs/${data.breed}/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className={styles.adddog}>
        <h2>Add a new good dog!</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name
            <input name="name" placeholder="Name" type="text" required />
          </label>
          <label>
            Image
            <input name="img" placeholder="Image link" type="text" required />
          </label>
          <label>
            Breed
            <select name="breed">
              <option value="bulldog">Bulldog</option>
              <option value="corgi">Corgi</option>
              <option value="husky">Husky</option>
              <option value="pug">Pug</option>
            </select>
          </label>
          <label>
            Genre
            <select name="genre">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Bio
            <textarea name="bio" placeholder="Bio"></textarea>
          </label>
          <div className={styles.button}>
            <Button type="submit">Add good dog</Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Adddog;
