import React from 'react';
import './css/header.css';

import { Button } from 'reactstrap';

const Header = () => {

    return (
        <div className='header'>
            <div className='header-text'>
                <h1>Bitsy Stories</h1>
                <h4>Subtitle Text</h4>
                <Button color='danger'>Hello</Button>
            </div>
        </div>
    )
}

export default Header;