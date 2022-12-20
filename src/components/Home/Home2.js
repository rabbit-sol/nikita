import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Testimonials from "../tailwind/Testimonials";
import Cta from "../tailwind/Cta";
import Projects from "./homeProjects";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
         
          <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
                          LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with  Blockchain and Web3.0 in 2020 and I have at least learn a lot, I think… 🤷‍♂️
              <br />
                          <br />Being born a non-conformist, I was intrigued by{" "}
              <i>
                              <b className="text-fun-pink">the idea of building virtual worlds and writing smart contracts, that did not conform to traditional standards of Web 2.0. </b>
              </i>
              <br />
              <br />
           Needless to say, since then, I completely immersed myself in the world Blockchain Development. &nbsp;
              <i>
                              <b className="text-fun-pink">Metaverse & Blockchain is my passion.</b> The desire to learn more about Metaverse has spurred me to{" "}
                              <b className="text-fun-pink">
                                  read 20+ whitepapers & take over a dozen courses.
                </b>
              </i>
              <br />
              <br />
              To stay up to date with the latest trends,
              <i>
                              <b className="text-fun-pink">
                  {" "}
                                  I am also an active member of many discords and Twitter groups.

                </b>
              </i>
                          &nbsp; like{" "}
              <i>
                              <b className="text-fun-pink">Thirdweb, Metaplex, Ethereum.org, MetaSchool etc</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
                          <img src="https://raw.githubusercontent.com/rabbit-sol/metakul-nft/main/hero1.webp" className="img-thumbnail img-fluid border rounded" alt="Responsive image" alt="avatar" />
            </Tilt>
          </Col>
              </Row>
           
              <Row>
                  <div className="mt-20 mb-20 space-y-32">
                  <Projects />
                  <Testimonials />
                 <Cta/>
                  </div>
                  </Row>
                     
    
      </Container>
    </Container>
  );
}
export default Home2;
