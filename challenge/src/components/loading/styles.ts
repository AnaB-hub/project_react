import styled from "styled-components";

export const Loading = styled.div`
  margin: 10px;
  border: 14px solid #ece9e9;
  border-radius: 50%;
  border-top: 12px solid #000;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
