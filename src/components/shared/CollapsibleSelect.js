import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  width: 200px;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: #3c4048;
  background-color: white;
  text-decoration: none;
  font-size: 15px;
  transition: 0.2s;
  position: absolute;
  top: 0;
  left: 0;
`;

const FormWrapper = styled.div`
  width: 200px;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  margin: 0;
  top: 30px;
  left: 0;
  opacity: .7;

`;

const Wrapper = styled.div`
  display: flex;
`;

const InnerWrapper = styled.div`
  display: block;
  position: relative;
  width: 300px;
`;
const StyledP = styled.p`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


const CollapsibleSelect = (props) => {
  const toggle = (event) => {
    event.preventDefault()
    setOPen(!open);
  };

  const CreditCardHandeler = (e) => {
    e.preventDefault()
    setCreditCardOption(!creditCardOption);
  };


  const [open, setOPen] = useState(false);
  const [creditCardOption, setCreditCardOption] = useState(false);
  const [openCreditCards, setCreditCard] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <StyledButton onClick={(e)=>toggle(e)}>select Payment Method</StyledButton>
        {open && (
          <FormWrapper>
            <form>
              <OptionWrapper>
                <label>Amazon Pay</label>
                <input type="checkbox" />
              </OptionWrapper>
              <OptionWrapper>
                <label>Apple Pay</label>
                <input type="checkbox" />
              </OptionWrapper>
              <OptionWrapper>
                <label>PayPal</label>
                <input type="checkbox" />
              </OptionWrapper>
              <OptionWrapper>
                <StyledP onClick={(e)=>CreditCardHandeler(e)}>Credit Card</StyledP>
              </OptionWrapper>
              {creditCardOption && (
                <div>
                   <OptionWrapper>
                <label>American Express</label>
                <input type="checkbox" title="American Express"/>
              </OptionWrapper>
              <OptionWrapper>
                <label>Discover</label>
                <input type="checkbox" />
              </OptionWrapper>
              <OptionWrapper>
                <label>MasterCard</label>
                <input type="checkbox" />
              </OptionWrapper>
              <OptionWrapper>
                <label>Visa</label>
                <input type="checkbox" />
              </OptionWrapper>
                </div>
              )}
            </form>
          </FormWrapper>
        )}
      </InnerWrapper>
      {/* <InnerWrapper>
        {creditCardOption && <div>
        <StyledButton onClick ={CreditCardSelectionHandeler}>select CreditCard</StyledButton>
        {openCreditCards && (
          <FormWrapper>
            <form>
              <OptionWrapper>
                <label>American Express</label>
                <input type="checkbox" title="American Express"/>
              </OptionWrapper>
              <OptionWrapper>
                <label>Discover</label>
                <input type="checkbox" />
              </OptionWrapper>
              <OptionWrapper>
                <label>MasterCard</label>
                <input type="checkbox" />
              </OptionWrapper>
              <OptionWrapper>
                <label>Visa</label>
                <input type="checkbox" />
              </OptionWrapper>
              {}
            </form>
          </FormWrapper>
        )}
        </div>}
      </InnerWrapper> */}
    </Wrapper>
  );
};
export default CollapsibleSelect;
