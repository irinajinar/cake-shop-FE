import { Button, Card } from "react-bootstrap";

function BasicExample() {
  return (
    <Card
      style={{
        width: "18rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
        padding: "2px",
      }}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
