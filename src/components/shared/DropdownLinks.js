import { useState } from "react";
import styled from "styled-components";
import List from "./List";

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #3c4048;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 900;
  font-size: 20px;
  transition: 0.2s;
  border: none;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
 
const DropdownLinks = (props) => {
  const toggle = () => {
    setOPen(!open);
  };

  const [open, setOPen] = useState(false);
  return (
    <div>
      <StyledButton onClick={toggle}>{props.group.name}</StyledButton>
      {open && (
        <LinksWrapper>
          {props.group.subPolicies.map((item)=>(
            <List title={item.name} path={item.link} />
          ))}
          {/* <List title={"Refund Policies"} path={"/financial/refundpolicies"} /> */}
        </LinksWrapper>
      )}
    </div>
  );
};
export default DropdownLinks;
