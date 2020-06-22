import React from 'react';
import './css/bitsy.css';

import {
    Button, Row, Col, Container,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import collectionPic from '../Assets/collectionPlaceholder.jpg';

const BitsyStories = () => {

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

    let book1Titles = [
        'Bitsy and the Disastrous 3-Honk System',
        'Bitsy and the Phantom Beaver',
        'Bitsy and the Hunchbacked Troll of Booger Holler',
        'Bitsy and the Alien Invasion',
        'Bitsy and the Message from the Great Beyond',
        'Bitsy and the Night of the Ribbing Bed',
        'Bitsy and the Great Bird Herd of Aught Five'
    ];

    let book2Titles = [
        'Bitsy and the Bowlegged Conductor on the Dreamland Express',
        'Bitsy and the Ghost of Christmas Yet to be Put Away',
        'Bitsy and the Treacherous Plot of the Notorious Traitor',
        'Bitsy and the Courageous Charge up Sand Pond Hill',
        'Bitsy and the Ongoing Search for My Bottom',
        'Bitsy and the Perilous Panty Popping Party',
        'Bitsy and the Behemoth Bra Save the Children’s Literacy Fund'
    ];

    let i = 1;

    setInterval(function () {
        let p = document.getElementById('titleTest');
        p.innerHTML = book1Titles[i++];
        if (i == book1Titles.length) i = 0;
    }, 4000); // match the time here with the animation time in bitsy.css! 

    return (
        <div className='bitsyStories' id='BitsyStories'>

            <p id='titleTest'>{book1Titles[0]}</p>

            <Container>
                <Row>
                    <Col md='6'>
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

                    <Col md='6' className='book-info'>
                        <div id='Bitsy1'>
                            <h4>The Comic Misadventures of Bitsy</h4>
                            <p style={{ textAlign: 'center' }}>By John Marsh</p>
                            <p>Treat yourself to this collection of hilarious Bitsy short stories!</p>
                            <p>Includes 15 madcap tales of mirth such as:</p>
                            <ol>
                                {/* {mapTitles(book1Titles)} */}
                                <p style={{ margin: '15px auto 40px auto' }}>...and more!</p>
                            </ol>
                            <p><i>Now available on Amazon Kindle for $2.99</i></p>
                            <Button color='info'>Buy Here</Button>
                            <Button color='info'>Read a Sample</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* BOOK 2 ================================= */}
            <Container>
                <Row>
                    <Col md='6' className='book-info'>
                        <div id='Bitsy2'>
                            <h4>More Comic Misadventures of Bitsy</h4>
                            <p style={{ textAlign: 'center' }}>By John Marsh</p>
                            <p>Grab the second great collection of hilarious Bitsy short stories!</p>
                            <p>Includes 15 more hilarious tales such as:</p>
                            <ol>
                                {/* {mapTitles(book2Titles)} */}
                                <p style={{ margin: '15px auto 40px auto' }}>...and more!</p>
                            </ol>
                            <p><i>Now available on Amazon Kindle for $2.99</i></p>
                            <Button color='info'>Buy Here</Button>
                            <Button color='info'>Read a Sample</Button>
                        </div>
                    </Col>

                    <Col md='6'>
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