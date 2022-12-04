import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { AiFillEye } from "react-icons/ai";

function ProjectCards(props) {
    return (
        <Card className="project-card-view ">
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            


            <Card.Body>
                <div className=" d-flex justify-content-center">
                    <Card.Title className="justify-content-center pt-1">{props.title}</Card.Title>
                    <a href={props.ghLink} target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/expand-5591096-4652873.png"
                            width={28}
                            height={28}
                            alt="Link Icon"
                        />
                    </a>

                </div>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" className=" flex flex-row " href={props.ghLink} target="_blank">
                   Read More
                    
                </Button>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}




            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
