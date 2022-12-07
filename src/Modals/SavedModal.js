import styled from "styled-components";
import YellowButton from "../components/shared/YellowButton";
import RedButton from "../components/shared/RedButton";
import CollapsibleSelect from "../components/shared/CollapsibleSelect";
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
  width: 400px;
  height: 300px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;






const SavedModal = (props) => {
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
                <h1>New Policy has been created</h1>
            <RedButton title="Cancel" onClick={props.closeModal} />

            </Wrapper>
          </ModalBody>
        </Centered>
      </DarkBG>
    </>
  );
};
export default SavedModal;
