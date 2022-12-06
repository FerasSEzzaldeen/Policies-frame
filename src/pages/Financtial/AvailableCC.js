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

const StyledFirtsP = styled.p`
  font-size: 15px;
  max-width: 800px;
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

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledTableDiv = styled.div``;

const AvailableCC = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {isOpen && <Modal closeModal={handleCloseModal} />}
      <Wrapper>
        <h1>Payment Method</h1>
        {/* <h3>Background Info</h3> */}
        <StyledFirtsP>
          Here you can manage the Policies related to Payment
        </StyledFirtsP>
        {/* <h3>System Level Policy Options</h3> */}
        {/* <p>Selected cards types are available for credit card orders.</p> */}
        {/* <CollapsibleSelect /> */}
        {/* <StyledFilterOutWrapper>
        </StyledFilterOutWrapper> */}
        <StyledTableDiv>
          <InnerDiv>
            <h3>Conditions</h3>
            <YellowButton title="Create Condition" onClick={handleOpenModal} />
          </InnerDiv>
          <FilterBar />
          <ConditionsTable />
        </StyledTableDiv>
      </Wrapper>
    </>
  );
};
export default AvailableCC;
