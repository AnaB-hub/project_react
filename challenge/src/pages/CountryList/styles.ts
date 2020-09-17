import styled from "styled-components";

export const Container = styled.div``;

export const CoutryCard = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  background: #fff;
  max-width: 700px;
  transition: transform 0.2s;
  margin: 5px;

  &:hover {
    transform: translateX(15px);
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
`;
