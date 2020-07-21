import React from 'react';
import './css/header.css';

import bitsyWagon from '../Assets/bitsy-wagon.png';
import bitsyCameo from '../Assets/Bitsy-Cameo.png';

import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';

const amazonLink = 'https://www.amazon.com/Comic-Misadventures-Bitsy-John-Marsh/dp/B08C97X2CG/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=';

// cached here for development, remove later pls
// const headerPic = bitsyCameo;
const headerPic = bitsyWagon;

const Header = () => {

    return (
        <div className='header'>
            <div className='header-text'>
                <div className='card'>
                    <h4 className='subtitle'>Introducing a Delightful Collection of Hilarious Short Stories…</h4>
                    <br />
                    <h1 className='title'><a href={amazonLink}>The Comic Misadventures of Bitsy</a></h1>
                </div>
                <br />
                <br />
            </div>
            <ButtonGroup vertical>
                <a href="#bitsyBook"><Button size='lg' color='info'>Check it Out!</Button></a>
                <a href="#AboutTheAuthor"><Button size='lg' color='info'>About the Author</Button></a>
            </ButtonGroup>
            <div style={{ width: '50%', float: 'right' }}>
                <img src={headerPic} alt="Hero" />
            </div>
        </div>
    )
}

export default Header;