import React, { InputHTMLAttributes, useRef } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inpuRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <label>{name}: </label>
      <input ref={inpuRef} {...rest} />
    </Container>
  );
};

export default Input;
