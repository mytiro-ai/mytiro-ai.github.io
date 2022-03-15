import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import logo from "../../assets/SVG/Logo Symbol.svg";
import pattern from "../../assets/Png/Pattern_5.png";

const ShapeBottom = styled(Box)`
  position: absolute;
  bottom: -13.5rem;
  right: -5em;
  width: 15%;
`;

const Join = () => (
  <>
    <Section bg="warning" className="position-relative">
      <ShapeBottom>
        <img src={pattern} alt="" className="img-fluid" />
      </ShapeBottom>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Box
              mb={5}
              className="text-center d-flex align-items-center justify-content-center"
            >
              <Text color="black" className="mr-4">
                JOIN OUR
              </Text>
              <img src={logo} alt="" className="img-fluid" />
              <Text color="black" className="ml-4">
                COMMUNITY
              </Text>
            </Box>
            <Box className="d-flex flex-column align-items-center text-center mt-5">
              <Title className="mb-0">
                Looking for a technical challenge and meaningful work?
              </Title>
              <Button bg="black" className="mt-5">
                Join Us
              </Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Join;
