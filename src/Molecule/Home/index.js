import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
      <Card id="center">
        <Card.Body>
          <Card.Title>React Training</Card.Title>
          <Card.Text>React Training Metrodata</Card.Text>
          <Button href="/presence">Presence</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
