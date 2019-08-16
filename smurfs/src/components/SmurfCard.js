import React from 'react';
import { Card } from 'semantic-ui-react'

export const SmurfCard = ({ smurf }) => {
    return(
        <Card.Group>
    <Card class = 'cardsBox'>
    <Card.Content>
     <Card.Header id='cardHeader'>{smurf.name}</Card.Header>
         Age: {smurf.age}<br />
         Height: {smurf.height}
     </Card.Content>
    </Card>

   
  </Card.Group>
    )
}