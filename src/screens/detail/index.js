import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "../../components/header";
import PageLoader from "../../components/page-loader";
import Footer from "../../components/footer";
import DetailComponent from "../../components/detail";

function Detail() {
  const match = useRouteMatch("/dogs/:breed/:id");
  const [isLoading, setIsLoading] = useState(false);
  const [dog, setDog] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function getId() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/dogs/${match.params.breed}/${match.params.id}`,
          { signal }
        );
        const data = await response.json();

        setDog(data);
        setIsLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    }
    getId();

    return () => {
      controller.abort();
    };
  }, [match.params.breed, match.params.id]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Header whiteBgPage />
      <DetailComponent dog={dog} />
      <Footer />
    </>
  );
}

export default Detail;
