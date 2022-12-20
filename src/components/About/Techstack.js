import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,

} from "react-icons/di";
import {
    SiTailwindcss,
    SiWeb3Dotjs,
    SiSolidity,
    SiEthereum
} from "react-icons/si";

function Techstack() {
  return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

          <Col xs={4} md={2} className="tech-icons center-block">
              <SiEthereum className="img-responsive center-block d-block mx-auto"/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 className="img-responsive center-block d-block mx-auto"/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiWeb3Dotjs className="img-responsive center-block d-block mx-auto"/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiSolidity className="img-responsive center-block d-block mx-auto"/>
          </Col>
      
      <Col xs={4} md={2} className="tech-icons">
              <DiNodejs className="img-responsive center-block d-block mx-auto"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <DiReact className="img-responsive center-block d-block mx-auto"/>
      </Col> <Col xs={4} md={2} className="tech-icons">
              <SiTailwindcss className="img-responsive center-block d-block mx-auto"/>
      </Col>
     

      
    </Row>
  );
}

export default Techstack;
