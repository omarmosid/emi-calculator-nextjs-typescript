import React from "react";
import Navbar from "../navbar/navbar";
import { Container } from "semantic-ui-react";

const Layout = ({ children }): any => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
