import React from 'react';
import './css/alsoBy.css';

import ContactModal from './ContactModal';

import { Button, Container, Row, Col } from 'reactstrap';

import fixingUpLogo from '../Assets/FixingUpLogo.png';

const AlsoBy = (props) => {

    const [contactModal, setContactModal] = React.useState(false);
    const toggle = () => setContactModal(!contactModal);

    const dewey1 = 'https://vimeo.com/114310558';
    const dewey2 = 'https://vimeo.com/308838046/96b7f51494';

    return (
        <div className='also-by'>

            <a href="/" style={{ margin: '15px' }}><Button color='info'>Go back</Button></a>

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
                            <p><a className='info-button' href={undefined} onClick={toggle}>Click Here</a> for a synopsis, excerpt and information on how to license this play.</p>
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
                            <p>Filmed and edited by <a href="https://vimeo.com/user32093438" target='blank'>Terry Marsh</a></p>
                            <p><a href={dewey1} target='blank'>Space Aliens in Ancient Egypt – with Dewey B. Leevum</a></p>
                            <p><a href={dewey2} target='blank'>Dewey Does Time</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='public-speaking'>
                <Container>
                    <Row>
                        <Col>
                            <h5>Public Speaking</h5>
                            <p>Need an engaging and entertaining speaker for your event? John Marsh delivers lively talks on a variety of interesting topics for a wide range of audiences. His historical presentations fascinate audiences with their fresh stories and timely perspectives. Topics include subjects from American history from colonial times through today, as well as select topics in world history and world religions. He also presents history from biblical times for churches wishing to enrich their understanding with historical context. Marsh’s messages are ultimately positive looks at America and at human endeavors, and resonate extremely well with audiences where a love of freedom is present.</p>
                            <p><a href="">See a sample</a></p>
                            <p><a href="">Book him here</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='articles'>
                <Container>
                    <Row>
                        <Col>
                            <h5>Grandma Article</h5>
                            <p>Here’s an article I wrote recently about teaching during a pandemic – a century ago. It is based on letters from my grandmother, who was a 21-year-old school teacher in 1918 during the Spanish Influenza pandemic. She has some very interesting things to say to us.</p>
                            <p><a href="https://historynewsnetwork.org/article/175189" target='blank'>Read it here</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <ContactModal toggle={toggle} modal={contactModal} />
        </div>
    );
}

export default AlsoBy;