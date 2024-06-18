import React, { useEffect } from "react";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Breeds from "../../components/breeds";

function Home() {
  const [breeds, setBreeds] = React.useState({});

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function getBreeds() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/dogs/breeds`,
          { signal }
        );
        const data = await response.json();
        const breedsData = data.reduce((breedsAcc, dog) => {
          return {
            ...breedsAcc,
            [dog.breed]: breedsAcc[dog.breed]?.concat(dog) || [dog],
          };
        }, {});

        setBreeds(breedsData);
      } catch (error) {
        console.log("err", error);
      }
    }

    getBreeds();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {Object.keys(breeds).map((key) => {
        const dogs = breeds[key];
        return <Breeds key={key} dogs={dogs} breed={key} />;
      })}
      <Footer />
    </>
  );
}

export default Home;
