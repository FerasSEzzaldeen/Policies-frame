import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 50px 0;
  display: flex;
`;

const FilterOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 10px;
`;

 const FilterBar = () =>{
    return <>
      <Wrapper>
        <FilterOptionWrapper>
          <label>search by Nickname</label>
          <input type="text" />
        </FilterOptionWrapper>
        <FilterOptionWrapper>
          <label>Filter by Status</label>
          <select>
            <option>None</option>
            <option>active</option>
            <option>unactive</option>
          </select>
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
      </Wrapper>
    </>;

 }

export default FilterBar