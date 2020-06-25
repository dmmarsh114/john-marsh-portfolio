import React from 'react';
import './css/header.css';

import { Button, ButtonGroup } from 'reactstrap';

const Header = () => {

    return (
        <div className='header'>
            <div className='header-text'>
                {/* <h1>Bitsy Stories</h1>
                <h4>Subtitle Text</h4> */}

                <h4>Introducing a Delightful Collection of Hilarious Short Stories…</h4>
                <br />
                <h1><a href="#bitsyBook"><i>The Comic Misadventures of Bitsy</i></a></h1>
                <br />
                <br />
                <h6><a href="#AboutTheAuthor">Read about author John Marsh and his other works</a></h6>

                {/* <ButtonGroup vertical>
                    <a href="#BitsyStories"><Button color='info'>See the Stuff!</Button></a>
                    <a href="#AboutTheAuthor"><Button color='info'>Meet the Author!</Button></a>
                </ButtonGroup> */}
            </div>
        </div>
    )
}

export default Header;