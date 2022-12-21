import styled from "styled-components";
import YellowButton from "../components/shared/YellowButton";
import RedButton from "../components/shared/RedButton";
import CollapsibleSelect from "../components/shared/CollapsibleSelect";
import { useState } from "react";

const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Centered = styled.div`
  position: fixed;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const ModalBody = styled.div`
  z-index: 60;
  width: 700px;
  height: auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
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

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const StyledCheckBoxWrapper = styled.div``;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = (props) => {
  const [enableRefund, setEnableRefund] = useState(false);
  const [PaymentPolicy, setPaymentPolicy] = useState(true);
  const [RefundPolicy, setRefundPolicy] = useState(false);

  const handleRufundState = (e) => {
    setEnableRefund(!enableRefund);
  };

  const handlePoliceisChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == "payment") {
      setPaymentPolicy(true);
      setRefundPolicy(false);
    } else if (e.target.value == "refund") {
      setPaymentPolicy(false);
      setRefundPolicy(true);
    } else {
      setRefundPolicy(true);
      setPaymentPolicy(true);
    }
  };
  return (
    <>
      <DarkBG
      // onClick={() => {
      //   props.closeModal();
      // }}
      >
        <Centered>
          <ModalBody>
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
                <StyledInputDiv>
                  <label for="unit">
                    What kind of policies you want to create:
                  </label>
                  <StyledSelectInput
                    onChange={(e) => {
                      handlePoliceisChange(e);
                    }}
                  >
                    <option value="payment">Payment</option>
                    <option value="refund">Refund</option>
                    <option value="both">Both</option>
                  </StyledSelectInput>
                </StyledInputDiv>
                {PaymentPolicy && (
                  <StyledWrapper>
                    <p>Select Payment Method:</p>
                    <CollapsibleSelect />
                  </StyledWrapper>
                )}
                {RefundPolicy && (
                  <StyledInputDiv>
                    <p> Refund:</p>
                    <div>
                      <label>allow refund</label>
                      <input
                        type="checkbox"
                        onChange={(e) => handleRufundState(e)}
                      />
                    </div>
                    {enableRefund && (
                      <StyledSelectInput>
                        <option value="brand1">Full Refund</option>
                        <option value="brand2">Partial Refund</option>
                        <option value="brand3">Manual Refund</option>
                      </StyledSelectInput>
                    )}
                  </StyledInputDiv>
                )}

                <ButtonsWrapper>
                  <YellowButton title="Save" onClick={(e) => {}} />
                  <RedButton title="Cancel" onClick={(e) => {}} />
                </ButtonsWrapper>
              </form>
            </Wrapper>
          </ModalBody>
        </Centered>
      </DarkBG>
    </>
  );
};
export default Modal;
