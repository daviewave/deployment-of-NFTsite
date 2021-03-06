import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Link from next/l

// IMPORTS THE BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
      <Navbar
        className={styles.navbar}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#">NFT COLLECTION (HOME)</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="rarityCollection">RARITY/COLLECTION</Nav.Link>
              <Nav.Link href="/roadmap">ROADMAP</Nav.Link>
            </Nav>
            <Nav>
              <Button
                className={styles.connectBtn}
                variant="primary outline-success"
                id="connect-btn"
              >
                CONNECT WALLET
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MAIN */}
      <main className={styles.main}>
        {/* <div className={styles.minColWidth}> */}
        <Container>
          <Row>
            <Col id="leftHomeCol" className={styles.leftHomeCol} xs={4}>
              <p className={styles.wrapper}>
                {" "}
                A collection of uniquely generated, collectible, and hilarious
                members of what we like to call the Cancelled Crew.
              </p>
            </Col>

            <Col className={styles.rightHomeCol} xs={8}>
              <h1
                id="home-container-right-column-h1"
                className={styles.centerHorizontal}
              >
                THE CANCELLED CREW
              </h1>
              {/* CAROSUEL/SLIDESHOW */}
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 wrapper img"
                    src="NFT-Placeholder1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="NFT-Placeholder2.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home
