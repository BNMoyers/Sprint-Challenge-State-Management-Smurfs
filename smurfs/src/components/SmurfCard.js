import { Card } from 'semantic-ui-react'

export const Smurf = props => {
    return(
        <Card.Group>
    <Card class = 'cardsBox'>
    <Card.Content>
     <Card.Header id='cardHeader'>{props.name}</Card.Header>
         Age: {props.age}<br />
         Height: {props.height}
     </Card.Content>
    </Card>

   
  </Card.Group>
    )
}