import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
`;

const MyParagraph = styled.p``;

const AvailablePM = () => {
  return (
    <>
      <Wrapper>
        <h1>Available Payment Methods</h1>
        <MyParagraph>
          Any approved payment methods can be disabled for each brand you have
        </MyParagraph>
      </Wrapper>
    </>
  );
};

export default AvailablePM;
