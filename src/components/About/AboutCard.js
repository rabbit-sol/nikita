import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Kunwar </span>
            from <span className="purple">Garhwal, India.</span>
                      <br />I am a junior full-stack Blockchain Developer building &nbsp;
                      <a className="purple" target="_blank" href="https://metakul.in">Metakul</a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Helping New Devs
            </li>
          </ul>

         
                  <footer  className="blockquote-footer purple">Freelance Blockchain Dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
