import React from "react";
import styled from "styled-components";

const MyHeader = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #303841;
  color: #EEEEEE;
  padding: 0 2rem;
  border-bottom: 4px solid #EAB35A;

`;

const Title =styled.h1`
  color: #EEEEEE;
`;

const MainHeader = (props) => {
  return (
    <MyHeader>
      <Title>Policies</Title>
    </MyHeader>
  );
};

export default MainHeader;
