import styled from "styled-components";

const StyledTR = styled.tr`
height: 10px;
`;

const StyledTH = styled.th`
  width: 200px;
  text-align: start;
  border-bottom: 1px solid black;
  margin-bottom: px;
`;

const StyledTD = styled.td`
  width: 200px;
  border-bottom: 1px solid black;
`;

const StyledDotTD = styled.td`
  border-bottom: 1px solid black;
`;

const ConditionsTable = () => {
  return (
    <>
      <table>
        <tr>
          <StyledTH>Nickname</StyledTH>
          <StyledTH>Status</StyledTH>
          <StyledTH>Level Type</StyledTH>
          <StyledTH>Last Modified</StyledTH>
          <StyledTH>Modified By</StyledTH>
        </tr>
        <StyledTR />
        <tr>
          <StyledTD>X Brand Limit Credit Card Types</StyledTD>
          <StyledTD>active</StyledTD>
          <StyledTD>Brand</StyledTD>
          <StyledTD>3/14/21</StyledTD>
          <StyledTH>Admin 1</StyledTH>
          <StyledDotTD> ... </StyledDotTD>
        </tr>
        <StyledTR />
        <tr>
          <StyledTD>X Brand Limit Credit Card Types</StyledTD>
          <StyledTD>active</StyledTD>
          <StyledTD>Brand</StyledTD>
          <StyledTD>3/14/21</StyledTD>
          <StyledTH>Admin 2</StyledTH>
          <StyledDotTD> ... </StyledDotTD>
        </tr>
      </table>
    </>
  );
};
export default ConditionsTable;
