import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards2";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
function Projects() {
    const [expand, updateExpanded] = useState(false);
    return (
        <Container fluid className="">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            id={1}
                            imgPath={chatify}
                            isBlog={false}
                            title="How To Create an NFT: A Step-By-Step Guide"
                            description="NFTs are more than just a way of selling art, they can offer exclusive communities and secure ownership of real-life items as digital assets."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            id={2}
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="How Can NFTs Be Valuable?"
                            description="There is no rulebook on how to determine the value of an NFT. Some values are usually indicated by the last sales of a particular NFT."
                            ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                            demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </Col>



                    <Col md={4} className="project-card">
                        <ProjectCard
                            id={3}
                            imgPath={leaf}
                            isBlog={false}
                            title="How Will The Metaverse Change Health Care?"
                            description="The digital age is here. The Pandemic has led to an increase in innovation in health care, as well as the emergence of new business models."
                            ghLink="https://github.com/soumyajit4419/Plant_AI"
                            demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>


                </Row>
                <div className="relative w-half  mt-2">
                    <Link className="text-decoration-none"
                        to="/project"
                        >
                        <div className="mt-8 max-w-sm md:max-w-xl border rounded-pill border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors text-white cursor-pointer">
                            View All
                        </div>
                    </Link>
                </div>
            </Container>
            
        </Container>
    );
}

export default Projects;
