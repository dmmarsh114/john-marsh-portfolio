import React from 'react';
import './css/footer.css';

import ContactModal from './ContactModal';

const Footer = (props) => {

    const [contactModal, setContactModal] = React.useState(false);
    const toggle = () => setContactModal(!contactModal);

    return (
        <div className='footer'>
            <ol>
                <li><button onClick={toggle}>Contact</button></li>
                <li><a href="/other-works"><button>Other Works</button></a></li>
                <li><button id='copyrightBtn'>&#169; John Marsh 2020</button></li>
            </ol>

            <ContactModal toggle={toggle} modal={contactModal} header='Contact Me!' subject='Someone Wrote You a Message!' />
        </div>
    );
}

export default Footer;