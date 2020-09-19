import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
  }
`;

export const Search = styled.div`
  background: #c7c3c3;
  flex: 1;
  max-width: 1200px;
  min-width: 500px;
  padding: 15px;
  margin-bottom: 30px;

  label,
  input {
    font-size: 18px;
  }

  label {
    margin-bottom: 10px;
  }

  input {
    flex: 1;
    height: 60px;
    width: 80%;
    max-width: 600px;
    border: 0px;
    padding: 10px;

    &::placeholder {
      color: #666360;
    }
  }

  button {
    padding: 10px;
    max-width: 200px;
    margin-right: 10px;

    & + button {
      margin-top: 10px;
    }

    &:hover {
      background: ${shade(0.4, "#403f3f")};
    }
  }

  button,
  input {
    color: #a6a39f;
    background: #403f3f;
    border-radius: 8px;
  }

  div {
    & + div {
      margin-top: 20px;
    }
  }
`;

export const CoutryCard = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;

  background: #c7c3c3;
  flex: 1;
  max-width: 1200px;
  min-width: 500px;
  transition: transform 0.2s;
  margin: 5px;

  &:hover {
    transform: translateX(20px);
  }

  div {
    margin: 2px 2px;
  }

  & + div {
    margin-top: 16px;
  }

  p {
    font-size: 18px;
  }

  img {
    height: 100px;
    width: 140px;
    margin: 20px 10px;
  }

  a {
    text-decoration: none;
    color: #000;
    align-items: flex-end;

    & + a {
      margin-left: 10px;
    }
  }
`;
