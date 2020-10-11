import React from "react";
import "./App.css";
import Navigation from "./Component/Navigation";
import Head from "./Component/Head";
import IndoCase from "./Component/IndoCase";
import EastCase from "./Component/EastCase";
import IndoGraph from "./Component/IndoGraph";
import WorldCase from "./Component/WorldCase";
import ProvinceCase from "./Component/ProvinceCase";
import Footer from "./Component/Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Container>
        <Head></Head>
        <IndoCase></IndoCase>
        <EastCase></EastCase>
        <IndoGraph></IndoGraph>
        <WorldCase></WorldCase>
        <ProvinceCase></ProvinceCase>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
