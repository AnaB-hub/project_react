import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.form`
  button {
    padding: 10px;
    max-width: 200px;
    margin-right: 10px;
    margin-top: 20px;
    height: 60px;
    width: 192px;
    font-size: 20px;

    &:hover {
      background: ${shade(0.4, "#403f3f")};
    }

    color: #a6a39f;
    background: #403f3f;
    border-radius: 8px;
  }
`;
