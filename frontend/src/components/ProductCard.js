import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'



import React from 'react';

function ProductCard() {
    return <div>

        <Card>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>;
}

export default ProductCard;


