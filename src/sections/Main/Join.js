import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import logo from "../../assets/SVG/Logo Symbol.svg";
import pattern from "../../assets/Png/Pattern_5.png";

const ShapeBottom = styled(Box)`
  position: absolute;
  bottom: -325.5px;
  right: -5em;
  width: 315px;
`;

const Join = () => (
  <>
    <Section bg="warning" className="position-relative">
      <ShapeBottom id="join-pattern">
        <img src={pattern} alt="" className="img-fluid" />
      </ShapeBottom>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Box
              mb={5}
              className="text-center d-flex align-items-center justify-content-center"
              css={{width: '100%'}}
            >
              <Text color="black" css={{width: '100%', textAlign: 'right'}}>
                JOIN OUR
              </Text>
              <div style={{width: 'min(148px,max(10.3vw, 100px))', height: "min(148px,max(10.3vw, 100px))", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '0 3%'}}>
                <img src={logo} alt="" height="100%"/>
              </div>
              <Text color="black" css={{width: '100%', textAlign: 'left', wordBreak:"break-word"}}>
                COMMUNITY
              </Text>
            </Box>
            <Box className="d-flex flex-column align-items-center text-center mt-5" css={{width: '100%'}}>
              <Title className="mb-0">
                Looking for a technical challenge<br/> and meaningful work?
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
