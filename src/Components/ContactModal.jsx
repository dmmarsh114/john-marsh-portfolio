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
            <Form>
                <ModalBody>
                    <Row className='name'>
                        <Col>
                            <FormGroup className='fname'>
                                <Label for='fname'>First Name</Label>
                                <Input id='fname' />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className='lname'>
                                <Label for='lname'>Last Name</Label>
                                <Input id='lname' />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input id='email' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='subject'>Subject</Label>
                        {
                            subject === 'Other' ?
                                <InputGroup>
                                    <InputGroupAddon type='prepend'><Button outline='secondary' onClick={() => setSubject('')}>Back</Button></InputGroupAddon>
                                    <Input id='subject' placeholder='Subject' />
                                </InputGroup>
                                :
                                <Input type='select' id='subject' onChange={e => setSubject(e.target.value)}>
                                    <option disabled selected>Select One</option>
                                    <option>Fan Mail</option>
                                    <option>Licensing</option>
                                    <option>Other</option>
                                </Input>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for='message'>Message</Label>
                        <Input type='textarea' id='message' />
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