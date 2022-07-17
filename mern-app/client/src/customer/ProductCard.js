import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import ListGroup from 'react-bootstrap/ListGroup';

function ProductCard(props) {
    const {title, description, price, quantity}=props
  return (
    <Card style={{ width: '18rem' }} className='shadow-sm'>
        <CardHeader className='text-center'>USD- {price}</CardHeader>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
      <Card.Footer className="text-center">Available Products- {quantity}</Card.Footer>
    </Card>
  );
}

export default ProductCard;