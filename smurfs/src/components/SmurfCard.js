import React from 'react'
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';
const SmurfCard = ({ smurf }) => {
    return (
        <Card>
            <CardBody>
            <CardTitle>
                {smurf.name}
            </CardTitle>
            <CardText>
                <p><span className='labeltext'>Age: </span>{smurf.age}</p>
                <p><span className='labeltext'>Height: </span> {smurf.height} cm</p>
                </CardText>
            </CardBody>
            </Card>
    )
}

export default SmurfCard