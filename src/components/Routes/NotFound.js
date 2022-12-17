import React from "react";
import styled from "styled-components";

const Centred = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
`;

const Button = styled.button`
  background-color: cornflowerblue;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
`;
export default function NotFound() {
  return (
    <Centred>
      <p>Sorry, page not found 😔</p>
      <a href={"/repos"}>
        <Button>Search Repos</Button>
      </a>
    </Centred>
  );
}
