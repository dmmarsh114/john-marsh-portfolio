import React from 'react';
import './css/bitsy.css';

import {
    Button, Row, Col, Container,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import collectionPic from '../Assets/collectionPlaceholder.jpg';

const BitsyStories = () => {

    const collection1Sample = 'Collection 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in eveniet itaque eaque tenetur ipsa enim similique vel, distinctio laborum architecto nam velit voluptate vero unde quas, blanditiis dignissimos neque!';
    const collection2Sample = 'Collection 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in eveniet itaque eaque tenetur ipsa enim similique vel, distinctio laborum architecto nam velit voluptate vero unde quas, blanditiis dignissimos neque!';

    const [cardFlip, setCardFlip] = React.useState(false);

    const flipCard = (id) => {
        let card = document.getElementById(id);

        if (cardFlip === false) {
            card.style.transform = 'rotateY(-180deg)';
            setCardFlip(true);
        } else {
            card.style.transform = 'initial';
            setCardFlip(false);
        }
    }

    return (
        <div className='bitsyStories' id='BitsyStories'>
            {/* <h2>The Stories</h2> */}

            <Container>
                <Row>
                    <Col md='7'>
                        {/* BOOK 1 ================================= */}
                        <div className="card-wrapper">
                            <div className="card" id='book1'>
                                <div className="card-front">
                                    <img src={collectionPic} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="card-back">
                                    <p>back content</p>
                                </div>
                            </div>
                            <Button color='info' onClick={() => flipCard('book1')}>click me</Button>
                        </div>
                    </Col>

                    <Col md='5' className='book-info'>
                        <div>
                            <h4>Book 1</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit, quae neque, accusantium assumenda blanditiis laboriosam error voluptatibus deleniti ad tenetur necessitatibus nihil, qui saepe. At enim itaque provident dicta?</p>
                            <p>Included in this book are stories such as:</p>
                            <ol>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                            </ol>
                            <p style={{ textAlign: 'right' }}>...and more!</p>
                            <Button color='info'>Buy Here</Button>
                            <Button color='info'>Read a Sample</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md='5' className='book-info'>
                        <div>
                            <h4>Book 2</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit, quae neque, accusantium assumenda blanditiis laboriosam error voluptatibus deleniti ad tenetur necessitatibus nihil, qui saepe. At enim itaque provident dicta?</p>
                            <p>Included in this book are stories such as:</p>
                            <ol>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                            </ol>
                            <p style={{ textAlign: 'right' }}>...and more!</p>
                            <Button color='info'>Buy Here</Button>
                            <Button color='info'>Read a Sample</Button>
                        </div>
                    </Col>

                    <Col md='7'>
                        {/* BOOK 2 ================================= */}
                        <div className="card-wrapper">
                            <div className="card" id='book2'>
                                <div className="card-front">
                                    <img src={collectionPic} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="card-back">
                                    <p>back content</p>
                                </div>
                            </div>
                            <Button color='info' onClick={() => flipCard('book2')}>click me</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default BitsyStories;