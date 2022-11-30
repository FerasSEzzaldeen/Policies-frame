import styled from "styled-components";
const Wrapper = styled.div`
  margin: 20px;
`;

const MyParagraph = styled.p``;

const AllowForCredit = () => {
  return (
    <>
      <Wrapper>
        <h1>Allow for Credit and Bill Me</h1>
        <MyParagraph>
          Any approved payment methods can be disabled for each brand you have
        </MyParagraph>
      </Wrapper>
    </>
  );
};

export default AllowForCredit;
