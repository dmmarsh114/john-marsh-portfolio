import React from 'react';
import './css/header.css';

import bitsyWagon from '../Assets/bitsy-wagon.png';

import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';

const Header = () => {

    return (
        <div className='header'>
            <div className='header-text'>
                <div className='titleCard'>
                    <h4 className='subtitle'>Introducing a Delightful Collection of Hilarious Short Stories…</h4>
                    <br />
                    <h1 className='title'>The Comic Misadventures of Bitsy</h1>
                </div>
                <br />
                <br />
            </div>
            <ButtonGroup vertical>
                <a href="#bitsyBook"><Button size='lg' color='info'>Check it Out!</Button></a>
                <a href="#AboutTheAuthor"><Button size='lg' color='info'>About the Author</Button></a>
            </ButtonGroup>
            <div style={{ width: '50%', float: 'right' }}>
                <img src={bitsyWagon} alt="Hero" />
            </div>
        </div>
    )
}

export default Header;