import React from 'react';
import './css/contact.css';

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label,
    Input, InputGroup, InputGroupAddon, Row, Col
} from 'reactstrap';

const ContactModal = (props) => {

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className='contactModal' id='bootstrap-overrides'>
            <ModalHeader toggle={props.toggle}>{props.header}</ModalHeader>
            <Form action='https://formspree.io/jsmarsh555@gmail.com' method='POST'>
                <ModalBody>
                    <FormGroup>
                        <Label for='name'>Full Name <i>(required)</i></Label>
                        <Input id='name' name='name' required />
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email <i>(required)</i></Label>
                        <Input id='email' name='_replyto' required />
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>Phone Number <i>(optional)</i></Label>
                        <Input id='phone' name='_phone' />
                    </FormGroup>
                    {/* SUBJECT */}
                    <input type='hidden' name='_subject' value={'Contact Form Submission: ' + props.subject}></input>
                    <FormGroup>
                        <Label for='message'>Message <i>(required)</i></Label>
                        <Input type='textarea' id='message' name='message' required />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color='success'>Submit</Button>
                    <Button onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
}

export default ContactModal;