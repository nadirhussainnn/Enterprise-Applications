import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProductCard from "./ProductCard";

export default function CustomerDashboard() {
  return (

<Container className="mt-4">
        <Row>
            {new Array(10).fill().map((product, index) =>
            <Col md={{span:3}} className="mt-3 mb-4">
            <ProductCard
                    key={index}
                    title="Laptop"
                    description="Some quick example text to build on the card title and make up the bulk of the card content"
                    price={10}
                    quantity={20}
                  />
                  </Col>
                  )}
          
        </Row>
      </Container>
  );
}
