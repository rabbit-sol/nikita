import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { AiFillEye } from "react-icons/ai";
import { blog } from "../Data/blogdata"
import { Link } from "react-router-dom"
function ProjectCards(props) {
    return (
        <Card className="project-card-view ">
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            


            <Card.Body>
                <div className=" d-flex justify-content-center">
                   
                    <a href={props.demoLink} className="ml-2 " target="_blank" rel="noreferrer">
                        <Card.Title className="text-fun-pink justify-content-center pt-1">{props.title}</Card.Title>
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
               
                
                {/* <Link to={`/details/${props.id}`} className='link'>Live Demo</Link> */}
             
                {"\n"}
                {"\n"}

              



            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
