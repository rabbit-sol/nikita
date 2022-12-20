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
                <h5 style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </h5>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            id={1}
                            imgPath={chatify}
                            isBlog={false}
                            title="NFT Mint Website"
                            description="Custom ERC721 Contract with web3js and multiple wallet Integeration on Ethereum blockchain"
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://walletconnect-anotherdev.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            id={2}
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="Own Nft Project"
                            description="The Innovative Solana Metaverse Website Reforming Vedic Education via blockchain."
                            ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                            demoLink="https://metakul.in"
                        />
                    </Col>



                    <Col md={4} className="project-card">
                        <ProjectCard
                            id={3}
                            imgPath={leaf}
                            isBlog={false}
                            title="NFT Mint Website"
                            description="Minting Website with burnable WL token in Solana Blockchain"
                            ghLink="https://github.com/soumyajit4419/Plant_AI"
                            demoLink="https://metacopsnft.io"
                        />
                    </Col>


                </Row>
                <div className="relative w-half  mt-2">
                    <a className="text-decoration-none"
                        href="https://github.com/rabbit-sol?tab=repositories" target="_blank"
                        >
                        <div className="mt-8 max-w-sm md:max-w-xl border rounded-pill border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors text-white cursor-pointer">
                            View All On Github
                        </div>
                    </a>
                </div>
            </Container>
            
        </Container>
    );
}

export default Projects;
