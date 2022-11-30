import styled from "styled-components";
import YellowButton from "../components/shared/YellowButton";
import RedButton from "../components/shared/RedButton";
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
  height: 700px;
  background: white;
  z-index: 10;
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
  justify-content: space-between;
`;

const Modal = (props) => {
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
              <h1>Create a Condition</h1>
              <h3>Basic Condition Info</h3>
              <form>
                <StyledInputDiv>
                  <label for="nickname">Condition Nickname:</label>
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
                <h3>Policy Options for Condition</h3>
                <p>Selected Card are Available as Payment Methods </p>
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
                <ButtonsWrapper>
                  <YellowButton title="Save" onClick={props.closeModal} />
                  <RedButton title="Cancel" onClick={props.closeModal} />
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
