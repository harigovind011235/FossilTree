import { Row, Col, Card, Button, Form } from 'react-bootstrap'

import React from 'react';

function NewScreen() {
    return <div>
        <Card className="text-center">

            <Card.Body>
                <Card.Title> Story Of A Angry Girl</Card.Title>
                <Card.Text>
                    One Day They Both Felt As One.Enchanted Willingly To The Arms Of Him
                </Card.Text>
                <Button variant="light">Delete</Button>
                <Button variant="light">Update</Button>
                <Button variant="light">Like <i class="far fa-heart"></i></Button>
            </Card.Body>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Your Comments</Form.Label>
                    <Form.Control type="text" placeholder="comments" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    </div>;
}

export default NewScreen;
