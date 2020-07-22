import React from 'react';
import './css/alsoBy.css';

import ContactModal from './ContactModal';

import { Button } from 'reactstrap';

import fixingUpPdf from '../Assets/FIXING UP.pdf';

import fixingUpLogo from '../Assets/FixingUpLogo.png';
import deweyImg from '../Assets/dewey.png';
import francesDyke from '../Assets/Frances Dyke.png';

const AlsoBy = (props) => {

    const [contactModal, setContactModal] = React.useState(false);
    const toggle = () => setContactModal(!contactModal);

    const dewey1 = 'https://vimeo.com/114310558';
    const dewey2 = 'https://vimeo.com/308838046/96b7f51494';

    return (
        <div className='also-by'>

            <a href="/" style={{ margin: '15px' }}><Button color='info'>Go back</Button></a>

            <h1>Also By John Marsh</h1>
            <hr style={{ borderColor: 'var(--cover-orange)', width: '70%', marginBottom: '50px' }} />

            <section className='fixing-up alsoby-card'>
                <img src={fixingUpLogo} alt="Fixing Up" />

                <div className='play-info'>
                    <h2>Fixing Up</h2>
                    <h6>A Comedy for the Stage in 2 Acts</h6>
                    <p>by John and Jenni Marsh</p>
                    <p><i>2014 McLaren Comedy Festival Winner</i></p>
                </div>
                <div className='play-quotes'>
                    <p>“A wonderfully funny romantic farce”</p>
                    <p>“A charming and splendorous comic affair”</p>
                </div>
                <a href={fixingUpPdf} download='Fixing Up'>Click Here</a><span> for a synopsis, excerpt and information on how to license this play.</span>
            </section>

            <section className='deweyBLeevum alsoby-card'>
                <img src={deweyImg} id='deweyImg' alt="Dewey B Leevum" />

                <h2>Dewey Shorts</h2>
                <p>Professor Dewey B. Leevum (played by John Marsh) tries to make a name for himself, with some decidedly unorthodox views, in these short, funny mockumentaries. Where would you like to see Dewey go next?</p>
                <p><a href={dewey1} target='blank'>Space Aliens in Ancient Egypt – with Dewey B. Leevum</a></p>
                <p><a href={dewey2} target='blank'>Dewey Does Time</a></p>
            </section >

            <section className='articles alsoby-card'>
                <img src={francesDyke} alt="Frances Dyke" />

                <h2>Teaching During a Pandemic – a Century Ago</h2>
                <p>Here’s an article John Marsh wrote recently about teaching during a pandemic – a century ago. It is based on letters from his grandmother, who was a 21-year-old school teacher in 1918 during the Spanish Influenza pandemic. She has some very interesting things to say to us.</p>
                <p><a href="https://historynewsnetwork.org/article/175189" target='blank'>Read it here</a></p>
            </section>

            <section className='public-speaking alsoby-card'>
                <h2>Public Speaking</h2>
                <p>Need an engaging and entertaining speaker for your event? John Marsh delivers lively talks on a variety of interesting topics for a wide range of audiences. His historical presentations fascinate audiences with their fresh stories and timely perspectives. Topics include subjects from American history from colonial times through today, as well as select topics in world history and world religions. He also presents history from biblical times for churches wishing to enrich their understanding with historical context. Marsh’s messages are ultimately positive looks at America and at human endeavors, and resonate extremely well with audiences where a love of freedom is present.</p>
                <p className='info-button' onClick={toggle}>Book him here</p>
            </section>

            <a href="/" style={{ margin: '15px' }}><Button color='info'>Go back</Button></a>

            <ContactModal toggle={toggle} modal={contactModal} />
        </div >
    );
}

export default AlsoBy;