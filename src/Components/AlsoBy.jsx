import React from 'react';
import './css/alsoBy.css';

const AlsoBy = (props) => {

    return (
        <div className='also-by'>

            <a href="/">Go back</a>

            <div className='fixing-up'>
                <div className='play-info'>
                    <h5>Fixing Up</h5>
                    <h6>A Comedy for the Stage in 2 Acts</h6>
                    <p>by John and Jenni Marsh</p>
                    <p><i>2014 McLaren Comedy Festival Winner</i></p>
                </div>
                <div className='play-quotes'>
                    <p>“A wonderfully funny romantic farce”</p>
                    <p>“A charming and splendorous comic affair”</p>
                </div>
                <p className='link'><a href="">Click Here</a> for a synopsis, excerpt and information on how to license this play</p>
            </div>
        </div>
    );
}

export default AlsoBy;