import styled from "styled-components";
import { NavLink } from "react-router-dom";
const StyledNavLink = styled(NavLink)`
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #3C4048;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 900;
  transition: .2s;
  /* color: ${isActive => (isActive ? 'blue' : 'red')}; */
  &.active{
    color: #EAEAEA;
    background-color: #303841;
  }
  &:hover{

    color: #303841;
    background-color: #EAB35A;
  }
`;

const List = (props) => {
  return (
    <>
      <StyledNavLink to={props.path} >{props.title}</StyledNavLink>
    </>
  );
};

export default List;
