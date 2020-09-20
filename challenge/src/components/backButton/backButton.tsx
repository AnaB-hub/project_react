import React from "react";
import { BiArrowBack } from "react-icons/bi";

import { Container } from "./styles";
import { Link } from "react-router-dom";

const BackButton: React.FC = () => (
  <Container>
    <Link to="/">
      <BiArrowBack size={30} title="Return to home page" />
    </Link>
  </Container>
);

export default BackButton;
