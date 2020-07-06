import React from 'react';
import './css/contact.css';

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label,
    Input, InputGroup, InputGroupAddon, Row, Col
} from 'reactstrap';

const ContactModal = (props) => {

    const [subject, setSubject] = React.useState('');

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className='contactModal'>
            <ModalHeader toggle={props.toggle}>Contact Me</ModalHeader>
            <Form action='https://formspree.io/jsmarsh555@gmail.com' method='POST'>
                <ModalBody>
                    <FormGroup>
                        <Label for='name'>Full Name</Label>
                        <Input id='name' name='name' required />
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input id='email' name='_replyto' required />
                    </FormGroup>
                    <FormGroup>
                        <Label for='subject'>Subject</Label>
                        {
                            subject === 'Other' ?
                                <InputGroup>
                                    <InputGroupAddon type='prepend'><Button outline='secondary' onClick={() => setSubject('')}>Back</Button></InputGroupAddon>
                                    <Input id='subject' placeholder='Subject' required />
                                </InputGroup>
                                :
                                <Input type='select' id='subject' required onChange={e => setSubject(e.target.value)}>
                                    <option disabled selected>Select One</option>
                                    <option>Fan Mail</option>
                                    <option>Licensing</option>
                                    <option>Other</option>
                                </Input>
                        }
                        <input type='hidden' name='_subject' value={'Contact Form Submission: ' + subject}></input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='message'>Message</Label>
                        <Input type='textarea' id='message' name='message' />
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