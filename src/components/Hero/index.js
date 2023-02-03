import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hero = ({imgSrc="default image", text}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Hero;