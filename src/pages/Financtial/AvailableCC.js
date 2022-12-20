
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

const CoverModal = styled.div`
z-index: 1000;
background-color: black;
opacity: .3;
width: 100%;
height: 100%;
border-radius: 5px;
position: absolute;
`;

const StyledTableDiv = styled.div`
position: relative;
`;

const AvailableCC = () => {
  const [isOpen, setOpen] = useState(false);
  const [DefaultPolicy, setDefaultPolicy] = useState(false);
  const handleOpenModal = (e) => {
    e.preventDefault()
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleDefualtPolicies = (e) =>{
    setDefaultPolicy(!DefaultPolicy)
  }

  return (
    <>
      {isOpen && <Modal closeModal={handleCloseModal} />}
      <Wrapper>
        <h1>Search for a Policy</h1>
        <label>Default Policies</label>
        <input type="checkbox" onChange={(e) => handleDefualtPolicies(e)} />
        <StyledTableDiv>
          {DefaultPolicy && <CoverModal />}
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
