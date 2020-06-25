import React from 'react';
import './css/alsoBy.css';

import { Button, Container, Row, Col } from 'reactstrap';

import fixingUpLogo from '../Assets/FixingUpLogo.png';

const AlsoBy = (props) => {

    const dewey1 = 'https://vimeo.com/114310558';
    const dewey2 = 'https://vimeo.com/308838046/96b7f51494';

    return (
        <div className='also-by'>

            <a href="/"><Button color='info'>Go back</Button></a>

            <h2>Also By John Marsh</h2>
            <hr style={{ borderColor: 'rgb(23,162,184)', width: '70%', marginBottom: '50px' }} />

            <section className='fixing-up'>
                <Container>
                    <Row>
                        <Col>
                            <div className='play-info'>
                                <h5>Fixing Up</h5>
                                <h6>A Comedy for the Stage in 2 Acts</h6>
                                <p>by John and Jenni Marsh</p>
                                <p><i>2014 McLaren Comedy Festival Winner</i></p>
                            </div>
                            <div className='play-quotes'>
                                <p>“A wonderfully funny romantic farce”</p>
                                <p>“A charming and splendorous comic affair”</p>
                            </div>
                            <p className='link'><a href="" target='blank'>Click Here</a> for a synopsis, excerpt and information on how to license this play.</p>
                        </Col>
                        <Col>
                            <div className='play-logo'>
                                <img src={fixingUpLogo} alt="Fixing Up" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='deweyBLeevum'>
                <Container>
                    <Row>
                        <Col>
                            <h5>Dewey Shorts</h5>
                            <p>Professor Dewey B. Leevum (played by John Marsh) tries to make a name for himself, with some decidedly unorthodox views, in these short, funny mockumentaries. Where would you like to see Dewey go next?</p>
                            <p><a href={dewey1} target='blank'>Space Aliens in Ancient Egypt – with Dewey B. Leevum</a></p>
                            <p><a href={dewey2} target='blank'>Dewey Does Time</a></p>
                            <p>Filmed and edited by <a href="https://vimeo.com/user32093438" target='blank'>Terry Marsh</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='public-speaking'>
                <Container>
                    <Row>
                        <Col>
                            <h5>Public Speaking</h5>
                            <p>John Marsh is also available for public speaking. You can book him for topics such as Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat quibusdam iusto nihil et deleniti corporis repellendus tempore minima officia quod dolore laboriosam amet animi quisquam, quia dignissimos fugiat dolorum.</p>
                            <p><a href="">See a sample</a></p>
                            <p><a href="">Book him here</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
}

export default AlsoBy;