import styled from "styled-components";
import YellowButton from "../../components/shared/YellowButton";
import ConditionsTable from "../../components/shared/ConditionsTable";
import Modal from "../../Modals/FinancialConditionModal"
import { useState } from "react";

const Wrapper = styled.div`
  margin: 20px;
`;

const StyledFirtsP = styled.p`
  font-size: 15px;
  max-width: 800px;
`;

const StyledFilterOutWrapper = styled.div`
  display: flex;
  margin-bottom: 90px;
`;

const StyledFilterInWrapper = styled.div`
  display: flex;
  width: 230px;
`;

const StyledInput = styled.input`
  margin-right: 10px;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledTableDiv = styled.div``;



const AvailableCC = () => {
  const [isOpen, setOpen] = useState(false)
  
  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <>
      {isOpen && <Modal closeModal={handleCloseModal}/>}
      <Wrapper>
        <h1>Available Credit Cards</h1>
        <h3>Background Info</h3>
        <StyledFirtsP>
          If credit cards are an acceptable payment method, this policy allows
          you to specify which credit card types are available for customer use.
          Before enabling a credit card type, it must first be configured and
          enabled with the credit card payment processor.
        </StyledFirtsP>
        <h3>System Level Policy Options</h3>
        <p>Selected cards types are available for credit card orders.</p>
        <StyledFilterOutWrapper>
          <StyledFilterInWrapper>
            <StyledInput type="checkbox" />
            <p>American Express</p>
          </StyledFilterInWrapper>
          <StyledFilterInWrapper>
            <StyledInput type="checkbox" />
            <p>Discover</p>
          </StyledFilterInWrapper>
          <StyledFilterInWrapper>
            <StyledInput type="checkbox" />
            <p>MasterCard</p>
          </StyledFilterInWrapper>
          <StyledFilterInWrapper>
            <StyledInput type="checkbox" />
            <p>VISA</p>
          </StyledFilterInWrapper>
        </StyledFilterOutWrapper>
        <StyledTableDiv>
          <InnerDiv>
          <h3>Conditions</h3>
          <YellowButton title="Create Condition" onClick={handleOpenModal} />

          </InnerDiv>
          <ConditionsTable />
        </StyledTableDiv>
      </Wrapper>
    </>
  );
};
export default AvailableCC;
