import React from 'react';
import './css/bitsy.css';

import {
    Card, CardColumns, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';

import collectionPic from '../Assets/collectionPlaceholder.jpg';

const BitsyStories = () => {

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
                                <Button color='info'>Read A Sample</Button>
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
                                <Button color='info'>Read A Sample</Button>
                            </CardBody>
                        </Col>
                        <Col className='pic-container'>
                            <CardImg className='collection-pic' src={collectionPic} alt='Collection2 Cover Art' />
                        </Col>
                    </Row>
                </Card>

            </CardColumns>
        </div >
    )
}

export default BitsyStories;