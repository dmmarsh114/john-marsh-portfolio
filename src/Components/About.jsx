import React from 'react';
import './css/about.css';

import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import authorPlaceholder from '../Assets/authorPlaceholder.jpg';

const About = (props) => {

    return (
        <div className='about' id='AboutTheAuthor'>
            <h2>About the Author</h2>
            <img src={authorPlaceholder} alt="author" />
            <p>“When you have the real-life Bitsy for inspiration, these stories practically write themselves,” says John Marsh of his 2 collections of humorous stories inspired by his delightfully quirky and spirited wife, Jenni. The couple are pictured here getting a 25th Anniversary biplane ride. Together they wrote the hilarious farce, Fixing Up, which won the 2014 McLaren Comedy Playwriting Competition.</p>
            <p>John is also an award-winning teacher, author, performer. Colorful story-telling and ample amounts of humor are hallmarks of his popular history classes. He is the winner of numerous teaching honors, including the inaugural Robert P. Bell Creative Teaching Award.</p>
            <p> John and Jenni live in Muncie, Indiana and have 3 children.</p>
            <p><a href="/alsoby">Click Here</a> to see some of John Marsh's other works.</p>
        </div>
    );
}

export default About;