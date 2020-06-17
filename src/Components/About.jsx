import React from 'react';
import './css/about.css';

import { Container, Row, Col, Button } from 'reactstrap';

import authorPlaceholder from '../Assets/authorPlaceholder.jpg';

const About = (props) => {

    return (
        <div className='about' id='AboutTheAuthor'>
            <h2>About the Author</h2>
            <img src={authorPlaceholder} alt="author" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio eligendi in magni, vitae eum accusantium delectus ipsam tempora accusamus, tempore molestiae vero pariatur impedit numquam cumque saepe. A voluptas doloremque, quam obcaecati eaque laudantium nobis. Amet deleniti corrupti in saepe, blanditiis aliquid itaque animi tempora velit veniam iusto iste?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio eligendi in magni, vitae eum accusantium delectus ipsam tempora accusamus, tempore molestiae vero pariatur impedit numquam cumque saepe. A voluptas doloremque, quam obcaecati eaque laudantium nobis. Amet deleniti corrupti in saepe, blanditiis aliquid itaque animi tempora velit veniam iusto iste?</p>
            <p><a href="">Click Here</a> to see John Marsh's other works.</p>
        </div>
    );
}

export default About;