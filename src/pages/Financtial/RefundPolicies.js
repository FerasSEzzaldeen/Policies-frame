
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

const RefundPolicies = () => {
 

  return (
    <>
      <Wrapper>
        <h1>Search for a Policy</h1>
        <StyledTableDiv>
          {/* <InnerDiv>
            <h3>Conditions</h3>
            <YellowButton title="Create Condition" onClick={handleOpenModal} />
          </InnerDiv> */}
          <FilterBar />
          <ConditionsTable />
        </StyledTableDiv>
      </Wrapper>
    </>
  );
};
export default RefundPolicies;
