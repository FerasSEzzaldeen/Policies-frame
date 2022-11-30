import styled from "styled-components";


const Wrapper = styled.div`
  margin: 20px;
`;

const MyParagraph = styled.p``;

const RefundPolicies = () => {
  return (
    <>
      <Wrapper>
        <h1>Refund Policies</h1>
        <MyParagraph>
          For each brand, do you want to limit to full refunds, partial refunds,
          or no refunds at all.
        </MyParagraph>
      </Wrapper>
    </>
  );
};
export default RefundPolicies;
