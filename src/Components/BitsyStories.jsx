import React from 'react';
import './css/bitsy.css';

import {
    Button, Row, Col, Container,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import collectionPic from '../Assets/collectionPlaceholder.jpg';

const BitsyStories = () => {

    const amazonLink = 'https://smile.amazon.com/Comic-Misadventures-Bitsy-John-Marsh-ebook/dp/B08BK5HV6H/ref=sr_1_2?dchild=1&keywords=bitsy&qid=1592733716&s=digital-text&sr=1-2';

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

    let titles = [
        'Bitsy and the Disastrous 3-Honk System',
        'Bitsy and the Phantom Beaver',
        'Bitsy and the Hunchbacked Troll of Booger Holler',
        'Bitsy and the Alien Invasion',
        'Bitsy and the Message from the Great Beyond',
        'Bitsy and the Night of the Ribbing Bed',
        'Bitsy and the Great Bird Herd of Aught Five',
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
        let p = document.getElementById('titleCycle');
        p.innerHTML = titles[i++];
        if (i == titles.length) i = 0;
    }, 8000); // match the time here with the animation time in bitsy.css! 

    return (
        <div className='bitsyStories' id='BitsyStories'>

            <Container id='bitsyBook'>
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
                            <Button color='info' onClick={() => flipCard('book1')}>{cardFlip ? 'see front' : 'see back'}</Button>
                        </div>
                    </Col>

                    <Col md='6' className='book-info'>
                        <div>
                            <h4>The Comic Misadventures of Bitsy</h4>
                            <p style={{ textAlign: 'center' }}>By John Marsh</p>
                            <p>Treat yourself to this collection of hilarious Bitsy short stories!</p>
                            <p>Includes 30 madcap tales of mirth such as:</p>
                            <div style={{ display: 'inline-block' }}>
                                <p id='titleCycle'>{titles[0]}</p>
                                <p style={{ margin: '15px auto 40px auto' }}>...and more!</p>
                            </div>
                            <p><i>Now available for print or Amazon Kindle for $2.99</i></p>
                            <Button color='info'>Buy Here</Button>
                            <Button color='info'>Read a Sample</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default BitsyStories;