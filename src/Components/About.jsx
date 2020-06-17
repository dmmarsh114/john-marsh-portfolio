import React from 'react';
import './css/about.css';

import { Container, Row, Col, Button } from 'reactstrap';

import authorPlaceholder from '../Assets/authorPlaceholder.jpg';

const About = (props) => {

    return (
        <div className='about' id='AboutTheAuthor'>
            <h2>About the Author</h2>
            {/* About the Author ===================================== */}
            <img src={authorPlaceholder} alt="author" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio eligendi in magni, vitae eum accusantium delectus ipsam tempora accusamus, tempore molestiae vero pariatur impedit numquam cumque saepe. A voluptas doloremque, quam obcaecati eaque laudantium nobis. Amet deleniti corrupti in saepe, blanditiis aliquid itaque animi tempora velit veniam iusto iste?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio eligendi in magni, vitae eum accusantium delectus ipsam tempora accusamus, tempore molestiae vero pariatur impedit numquam cumque saepe. A voluptas doloremque, quam obcaecati eaque laudantium nobis. Amet deleniti corrupti in saepe, blanditiis aliquid itaque animi tempora velit veniam iusto iste?</p>
            <p><a href="">Click Here</a> to see John Marsh's other works.</p>

            {/* Also by John Marsh ===================================== */}

            {/* <div className='fixing-up'>
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
            </div> */}
        </div>
    )
}

export default About;