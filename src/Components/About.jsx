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
            <p style={{ marginBottom: '10px' }}><a href="">Click Here</a> to see John Marsh's other works, including:</p>
            <ul style={{ paddingLeft: '30px' }}>
                <li>His performances as the hapless Professor Dewey B. Leevum in the mockumentary series</li>
                <li>A synopsis of  Fixing Up, a play he co-authored with Jenni, and information about licensing it for a production</li>
                <li>Find information on booking John as a speaker on a range of entertaining and relevant topics such as colorful history tales, world religions, the founding of America, creativity and humor.</li>
            </ul>
                    <p><a href="/alsoby">Click Here</a> to see John Marsh's other works.</p>
        </div>
    );
}

export default About;