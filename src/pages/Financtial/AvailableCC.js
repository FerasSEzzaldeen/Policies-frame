import styled from "styled-components";
import YellowButton from "../../components/shared/YellowButton";
import RedButton from "../../components/shared/RedButton";
import CollapsibleSelect from "../../components/shared/CollapsibleSelect";
import { useState } from "react";
import SavedModal from "../../Modals/SavedModal";
const Wrapper = styled.div`
  width: auto;
  margin: 20px;
`;

const StyledTextInput = styled.input`
  display: block;
  margin-top: 20px;
  width: 300px;
  border: none;
  border-bottom: 1px solid black;
`;

const StyledSelectInput = styled.select`
  display: block;
  margin-top: 20px;
  width: 300px;
  border: none;
  border-bottom: 1px solid black;
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

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

const AvailableCC = (props) => {
  const [enableRefund, setEnableRefund] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleOpenModal = (e) => {
    e.preventDefault()
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleRufundState = (e) => {
    setEnableRefund(!enableRefund);
  };

  return (
    <>
      {isOpen && <SavedModal closeModal={handleCloseModal} />}
      <Wrapper>
        <h1>Create a Policy</h1>
        <form>
          <StyledInputDiv>
            <label for="nickname">Policy Name:</label>
            <StyledTextInput type="text" id="nickname" name="nickname" />
          </StyledInputDiv>
          <StyledInputDiv>
            <label for="level">Condition System Level:</label>
            <StyledSelectInput name="level" id="level">
              <option value="client">Client</option>
              <option value="brand">Brand</option>
              <option value="Offer">Offer</option>
              <option value="product">Product</option>
            </StyledSelectInput>
          </StyledInputDiv>
          <StyledInputDiv>
            <label for="unit">
              Select any Brands to Apply this condition to:
            </label>
            <StyledSelectInput name="unit" id="unit">
              <option value="brand1">Brand1</option>
              <option value="brand2">Brand2</option>
              <option value="brand3">Brand3</option>
              <option value="brand4">Brand4</option>
            </StyledSelectInput>
          </StyledInputDiv>
          <p>Select Payment Method:</p>
          <StyledFilterOutWrapper>
            <CollapsibleSelect />
          </StyledFilterOutWrapper>
          <p> Refund:</p>
          <label>allow refund</label>
          <input type="checkbox" onChange={(e) => handleRufundState(e)} />
          <StyledInputDiv>
            {enableRefund && (
              <StyledSelectInput>
                <option value="brand1">Full Refund</option>
                <option value="brand2">Partial Refund</option>
                <option value="brand3">Manual Refund</option>
              </StyledSelectInput>
            )}
          </StyledInputDiv>

          <ButtonsWrapper>
            <YellowButton title="Save" onClick={(e)=>handleOpenModal(e)} />
            <RedButton title="Cancel" />
          </ButtonsWrapper>
        </form>
      </Wrapper>
    </>
  );
};
export default AvailableCC;
