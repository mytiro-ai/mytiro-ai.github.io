import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/Main/Hero";
import Why from "../sections/Main/Why";
import Purple from "../sections/Main/Purple";
import Benefits from "../sections/Main/Benefits";
import Privacy from "../sections/Main/Privacy";
import Green from "../sections/Main/Green";
import Leadership from "../sections/Main/Leadership";
import Join from "../sections/Main/Join";
import Test from "../sections/Main/Test";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Why />
        <Purple />
        <Benefits />
        <Privacy />
        <Green />
        <Leadership />
        {/* <Test /> */}
      </PageWrapper>
    </>
  );
};
export default IndexPage;
