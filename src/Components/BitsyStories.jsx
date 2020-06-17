import React from 'react';
import './css/bitsy.css';

import {
    Card, CardColumns, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container,
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
            <h2>The Stories</h2>

            {/* BOOK 1 ================================= */}
            <div className="card-wrapper">
                <h4>Book 1</h4>
                <div className="card" id='book1'>
                    <div className="card-front">
                        <img src={collectionPic} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="card-back">
                        <p>back content</p>
                    </div>
                </div>
                <button onClick={() => flipCard('book1')}>click me</button>
            </div>

            {/* BOOK 2 ================================= */}
            <div className="card-wrapper">
                <h4>Book 2</h4>
                <div className="card" id='book2'>
                    <div className="card-front">
                        <img src={collectionPic} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="card-back">
                        <p>back content</p>
                    </div>
                </div>
                <button onClick={() => flipCard('book2')}>click me</button>
            </div>

        </div >
    )
}

export default BitsyStories;