import React from 'react';
import './css/about.css';

import authorImg from '../Assets/authorAndBitsy.jpg';

const About = (props) => {

    return (
        <div className='about' id='AboutTheAuthor'>
            <h1>About the Author</h1>
            <img src={authorImg} alt="author" />
            <p>“When you have the real-life Bitsy for inspiration, these stories practically write themselves,” says John Marsh of his collection of humorous stories inspired by his delightfully quirky and spirited wife, Jenni. The couple are pictured here getting a 25th Anniversary biplane ride. Together they wrote the hilarious farce, Fixing Up, which won the 2014 McLaren Comedy Playwriting Competition.</p>
            <p>John is also an award-winning teacher, author, performer. Colorful story-telling and ample amounts of humor are hallmarks of his popular history classes. He is the winner of numerous teaching honors, including the inaugural Robert P. Bell Creative Teaching Award.</p>
            <p> John and Jenni live in Muncie, Indiana and have 3 children.</p>
            <p><a className='info-button' href="/other-works">Click Here</a> to see some of John Marsh's other works.</p>
        </div>
    );
}

export default About;