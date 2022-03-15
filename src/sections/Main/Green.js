import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import green from "../../assets/Png/Image_2.png";

const Green = () => {
  return (
    <>
      <Section
        css={`
          background-image: url(${green});
          background-size: cover;
          width: 100%;
        `}
        className="position-relative overflow-hidden"
      >
        <Container>
          <Row className="">
            <Col lg="3" className="order-lg-1"></Col>
            <Col md="9" className="order-lg-2">
              <Box>
                <Title
                  color="light"
                  css={`
                    line-height: 54px;
                    font-size: 50px;
                  `}
                >
                  And we believe that there is no wrong way to find productivity
                  - only more opportunities to find focus
                </Title>
                <Text
                  mb={4}
                  color="light"
                  opacity={0.7}
                  css={`
                    line-height: 30px;
                    font-size: 20px;
                  `}
                >
                  We believe that it is by understanding your own patterns that
                  you can find the best solutions that truly work for you
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Green;
