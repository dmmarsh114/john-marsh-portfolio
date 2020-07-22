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
                <li><a href="/alsoby"><button>Other Works</button></a></li>
                <li><button>&#169; John Marsh 2020</button></li>
            </ol>

            <ContactModal toggle={toggle} modal={contactModal} />
        </div>
    );
}

export default Footer;