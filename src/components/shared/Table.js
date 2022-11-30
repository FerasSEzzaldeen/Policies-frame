import styled from "styled-components";
import { useState } from "react";
import Modal from "../../Modals/Modal";
import AvailableCreditCard from "../../pages/AvailableCreditCard";
const StyledH1 = styled.h1`
  font-size: 20px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 50px;
`;

const StyledTr = styled.tr`
  cursor: pointer;

  &:nth-child(odd) {
    background-color: #dddddd;
  }
`;

const StyledTh = styled.th`
  border: 1px solid #afb0b3;
  border-collapse: collapse;
  padding: 7px 3px;
`;

const Table = (props) => {
  const showModal = (name) => {
    console.log("hello world");
    if (name == "Available Credit Cards") {
      console.log(name);
      setOpen(true);
    }
  };
  const closeModal = ()=>{
    setOpen(false)
  }

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && <Modal closeModal ={closeModal} > <AvailableCreditCard /></Modal>}
      {props.content.map((policyType) => (
        <>
          <StyledH1>{policyType["name"]}</StyledH1>
          <StyledTable>
            {policyType["policies"].map((item) => (
              <StyledTr onClick={() => showModal(item["name"])}>
                <StyledTh>{item["name"]}</StyledTh>
                <StyledTh>{item["description"]}</StyledTh>
              </StyledTr>
            ))}
          </StyledTable>
        </>
      ))}
    </>
  );
};
export default Table;
