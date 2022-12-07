
import styled from "styled-components";
import YellowButton from "../../components/shared/YellowButton";
import ConditionsTable from "../../components/shared/ConditionsTable";
import Modal from "../../Modals/FinancialConditionModal";
import CollapsibleSelect from "../../components/shared/CollapsibleSelect";
import FilterBar from "../../components/shared/FilterBar";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 20px;
`;



const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledTableDiv = styled.div``;

const AvailableCC = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpenModal = (e) => {
    e.preventDefault()
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {isOpen && <Modal closeModal={handleCloseModal} />}
      <Wrapper>
        <h1>Search for a Policy</h1>
        <StyledTableDiv>
          <InnerDiv>
            <YellowButton title="Create Policy" onClick={handleOpenModal} />
          </InnerDiv>
          <FilterBar />
          <ConditionsTable />
        </StyledTableDiv>
      </Wrapper>
    </>
  );
};
export default AvailableCC;
