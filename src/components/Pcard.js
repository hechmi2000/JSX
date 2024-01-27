import React from 'react'
import { Button, Card } from 'react-bootstrap'
import  product  from '../Product'

const Pcard = () => {
   console.log(product)
  return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Button variant="primary">{product.price}</Button>
    </Card.Body>
  </Card>
  
  </div>
  )
}

export default Pcard