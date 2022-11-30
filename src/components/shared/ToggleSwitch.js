import styled from "styled-components";

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const styledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const ToggleSwitch = () => {
  return (
    <>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </>
  );
};
export default ToggleSwitch;
