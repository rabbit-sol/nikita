import React, { useState, useEffect } from "react"

import { useParams } from "react-router-dom"


import "./details.css"

import { blog } from "./Data/blogdata"
import { Container, Row, Col } from "react-bootstrap";

import Particle from "./Particle";
export const DetailsPages = () => {
    const { id } = useParams()
    console.log(id)
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))
        if (blogs) {
            setBlogs(blogs)
        }
    }, [])

    return (
        <>
            {blogs ? (
                <section classname="home-section1">
                    <Container fluid className="home-section" id="home">
                        <Particle />
                        <Container className="home-content">
                <section className='singlePage'>
                    <div className='container'>
                        <div className='left '>
                                        <img  src={blogs.cover} alt='' />
                        </div>
                        <div className='right'>
                            {blogs.title}
                            <p>{blogs.desc}</p>
                            
                        </div>
                    </div>
                            </section>
                        </Container>
                        </Container>
                        </section>
            ) : null}
        </>
    )
}