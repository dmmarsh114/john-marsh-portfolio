import React from 'react';
import './css/bitsy.css';

import {
    Button, Row, Col, Container,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import coverImg from '../Assets/Bitsy-Cover.jpg';
import backImg from '../Assets/Bitsy-Back.jpg';

const BitsyStories = () => {

    const amazonLink = 'https://www.amazon.com/Comic-Misadventures-Bitsy-John-Marsh/dp/B08C97X2CG/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=';

    const sampleText = 'Collection 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in eveniet itaque eaque tenetur ipsa enim similique vel, distinctio laborum architecto nam velit voluptate vero unde quas, blanditiis dignissimos neque!';
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
        'Disastrous 3-Honk System',
        'Phantom Beaver',
        'Hunchbacked Troll of Booger Holler',
        'Alien Invasion',
        'Message from the Great Beyond',
        'Night of the Ribbing Bed',
        'Great Bird Herd of Aught Five',
        // 'Bowlegged Conductor on the Dreamland Express',
        'Ghost of Christmas Yet to be Put Away',
        'Treacherous Plot of the Notorious Traitor',
        'Courageous Charge up Sand Pond Hill',
        'Ongoing Search for My Bottom',
        'Perilous Panty Popping Party'
    ];

    let i = 1;

    setInterval(function () {
        let p = document.getElementById('titleCycle');
        p.innerHTML = titles[i++];
        if (i === titles.length) i = 0;
    }, 8000); // match the time here with the animation time in bitsy.css! 

    return (
        <div className='bitsyStories' id='BitsyStories'>

            <div className='product-card'>

                <Container>
                    <Row>

                        <Col md='6'>
                            <div className="card-wrapper" id='bitsyBook'>
                                <div className="card" id='book1'>
                                    <div className="card-front">
                                        <img src={coverImg} style={{ width: '100%', height: '100%' }} alt='front cover' />
                                    </div>
                                    <div className="card-back">
                                        <img src={backImg} style={{ width: '100%', height: '100%' }} alt='back cover' />
                                    </div>
                                </div>
                                <Button color='info' onClick={() => flipCard('book1')}>{cardFlip ? 'see front' : 'see back'}</Button>
                            </div>
                        </Col>

                        <Col md='6' className='book-info'>
                            <div>
                                <h4 style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '.1rem', fontSize: '30px' }}>The Comic Misadventures of Bitsy</h4>
                                <p style={{ textAlign: 'center' }}>By John Marsh</p>
                                <p>Treat yourself to this collection of hilarious short stories, which includes 30 madcap tales of mirth!</p>
                                <p>Featuring Bitsy and the...</p>
                                <div style={{ display: 'inline-block' }}>
                                    <p id='titleCycle'>{titles[0]}</p>
                                </div>
                                <p style={{ margin: '15px 30px 40px auto', textAlign: 'right' }}>...and more!</p>
                                <p><i>Now available for print or Amazon Kindle for $2.99</i></p>
                                <Button color='info'>Read a Sample</Button>
                                <a href={amazonLink}><Button color='info'>Buy Here</Button></a>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div >
    )
}

export default BitsyStories;