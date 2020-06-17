import React from 'react';
import './css/about.css';

import { Container, Row, Col, Button } from 'reactstrap';

import authorPlaceholder from '../Assets/authorPlaceholder.jpg';

const About = (props) => {

    return (
        <div className='about' id='AboutTheAuthor'>
            <Container>
                <Row>
                    <Col>
                        <h2>About the Author</h2>
                        <img src={authorPlaceholder} alt="author" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio eligendi in magni, vitae eum accusantium delectus ipsam tempora accusamus, tempore molestiae vero pariatur impedit numquam cumque saepe. A voluptas doloremque, quam obcaecati eaque laudantium nobis. Amet deleniti corrupti in saepe, blanditiis aliquid itaque animi tempora velit veniam iusto iste?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio eligendi in magni, vitae eum accusantium delectus ipsam tempora accusamus, tempore molestiae vero pariatur impedit numquam cumque saepe. A voluptas doloremque, quam obcaecati eaque laudantium nobis. Amet deleniti corrupti in saepe, blanditiis aliquid itaque animi tempora velit veniam iusto iste?
                        </p>
                    </Col>
                    <Col>
                        <h2>Also By John Marsh</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus corrupti vel vitae exercitationem. Dolores rem eaque praesentium aperiam? Nisi ipsum necessitatibus maxime est soluta voluptatibus ut corporis architecto ipsa nesciunt.
                        </p>
                        <div>
                            <h6>News</h6>
                            <a href="">Grandma Article</a>
                        </div>
                        <div>
                            <h6>Dewey Vids</h6>
                            <ol>
                                <li>
                                    <a href="">Video 1</a>
                                </li>
                                <li>
                                    <a href="">Video 2</a>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h6>Public Speaking</h6>
                            <a href="">Click here for booking</a>
                            <a href="">Click here to see a preview!</a>
                        </div>
                        <div>
                            <h6>Fixing Up</h6>
                            <p>A comedy play by John and Jennifer Marsh</p>
                        </div>
                        <h6>Want to book me for speaking? Or license my play? Or just chat? Click below.</h6>
                        <Button style={{ marginBottom: '10px' }} color='info'>Contact</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;