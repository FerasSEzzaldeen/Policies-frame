import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  width: 50%;
`;
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


const TableWrapper = styled.div`
  margin: 40px 0;
`;
const FilterWrapper = styled.div`
  width: 80%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
`;

const FilterOptionWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* width: 20%; */
  margin: 10px;
`;
const RefundPolicies = (props) => {
  return (
    <>
      <Wrapper>
        <h1>Advanced Notifications</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <FilterWrapper>
        <FilterOptionWrapper>
          <label>search by name</label>
          <input type="text" />
        </FilterOptionWrapper>
        <FilterOptionWrapper>
          <label>Filter by LevelType</label>
          <select>
            <option>None</option>
            <option>Client</option>
            <option>Brand</option>
            <option>Offer</option>
            <option>Product</option>
          </select>
        </FilterOptionWrapper>
      </FilterWrapper>
        <TableWrapper>
          <table>
            <StyledTR>
              <StyledTH>level</StyledTH>
              <StyledTH>name</StyledTH>
              <StyledTH>number of days</StyledTH>
            </StyledTR>
            <StyledTR>
              <StyledTD>client</StyledTD>
              <StyledTD>--</StyledTD>
              <StyledTD>
                <input onBlur={()=>{console.log("hellooo")}} type="number" defaultValue={7}/>
              </StyledTD>
            </StyledTR>
            <StyledTR>
              <StyledTD>brand</StyledTD>
              <StyledTD>anything</StyledTD>
              <StyledTD>
                <input onBlur={()=>{console.log("hellooo")}} type="number" defaultValue={7}/>
              </StyledTD>
            </StyledTR>
          </table>
        </TableWrapper>
      </Wrapper>
    </>
  );
};
export default RefundPolicies;
