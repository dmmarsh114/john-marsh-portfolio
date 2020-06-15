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

    const [sampleText, setSampleText] = React.useState('');
    const [sampleModal, setSampleModal] = React.useState(false);

    const toggle = () => setSampleModal(!sampleModal);

    const openSampleModal = (text) => {
        setSampleText(text);
        toggle();
    }

    return (
        <div className='bitsyStories'>
            <h2>The Stories</h2>

            <CardColumns className='bitsy-collections-container'>

                <Card className='bitsy-collection collection-1 text-left'>
                    <Row>
                        <Col className='pic-container'>
                            <CardImg className='collection-pic' src={collectionPic} alt='Collection1 Cover Art' />
                        </Col>
                        <Col>
                            <CardBody>
                                <CardTitle>Collection 1</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore exercitationem aliquam sunt cum odit? Praesentium architecto tempore sed voluptates odio id provident laudantium. Nemo nam dicta saepe, iusto alias ea.
                                </CardText>
                                <CardText>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est." -- from <i>Bitsy and the Lorem Ipusm</i>
                                </CardText>
                                <CardText>
                                    With stories such as: <i>Lorem ipsum dolor, sit amet</i>, <i>consectetur adipisicing elit</i>, <i>Commodi voluptatem</i>
                                </CardText>
                                <Button color='info' onClick={() => openSampleModal(collection1Sample)}>Read A Sample</Button>
                                <Button color='info'>Buy Now!</Button>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>

                <Card className='bitsy-collection collection-2 text-right'>
                    <Row>
                        <Col>
                            <CardBody>
                                <CardTitle>Collection 2</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore exercitationem aliquam sunt cum odit? Praesentium architecto tempore sed voluptates odio id provident laudantium. Nemo nam dicta saepe, iusto alias ea.
                                </CardText>
                                <CardText>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est." -- from <i>Bitsy and the Something-or-Other</i>
                                </CardText>
                                <CardText>
                                    With stories such as: <i>Lorem ipsum dolor, sit amet</i>, <i>consectetur adipisicing elit</i>, <i>Commodi voluptatem</i>
                                </CardText>
                                <Button color='info'>Buy Now!</Button>
                                <Button color='info' onClick={() => openSampleModal(collection2Sample)}>Read A Sample</Button>
                            </CardBody>
                        </Col>
                        <Col className='pic-container'>
                            <CardImg className='collection-pic' src={collectionPic} alt='Collection2 Cover Art' />
                        </Col>
                    </Row>
                </Card>

            </CardColumns>

            <Modal isOpen={sampleModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Sample Modal</ModalHeader>
                <ModalBody>{sampleText}</ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={toggle}>Close</Button>
                    <Button color='info'>Buy Here!</Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}

export default BitsyStories;