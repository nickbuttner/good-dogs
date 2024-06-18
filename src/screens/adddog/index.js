import React from "react";
import Header from "../../components/header";
import Container from "../../components/container";
import Footer from "../../components/footer";
import AddDog from "../../components/adddog";

function Adddog() {
  return (
    <>
      <Header whiteBgPage />
      <Container>
        <AddDog />
      </Container>
      <Footer />
    </>
  );
}

export default Adddog;
