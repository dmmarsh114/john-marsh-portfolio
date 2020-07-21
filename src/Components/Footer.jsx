import React from 'react';
import './css/footer.css';

import ContactModal from './ContactModal';
import { Button } from 'reactstrap';

const Footer = (props) => {

    const [contactModal, setContactModal] = React.useState(false);
    const toggle = () => setContactModal(!contactModal);

    return (
        <div className='footer'>
            <ol>
                <li><button onClick={toggle}>Contact</button></li>
                <li><button>Other Works</button></li>
                <li>Copyright John Marsh</li>
            </ol>

            <ContactModal toggle={toggle} modal={contactModal} />
        </div>
    );
}

export default Footer;