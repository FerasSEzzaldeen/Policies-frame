import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavBarWrapper = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: #B2B2B2; */
  display: flex;
  border-bottom: #a7a8a7 2px solid;

`;

const NavBarUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const NavBarLi = styled.li`
  margin-left: 10px;
`;

const LinkButton = styled(NavLink)`
  display: flex;
  width: 130px;
  height: 40px;
  padding: 5px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #3C4048;
  text-decoration: none;
  border-radius: 15px;
  
  &.active{
    color: #EAEAEA;
    background-color: #303841;
  }
  &:hover{
    border-bottom: #EAEAEA 2px solid;
    background-color: #EAB35A;
    color: #303841;
  }

`;

const NavBar = (props) => {
  return (
    <>
      <NavBarWrapper>
        <NavBarUl>
          {props.navlist.map((item) => (
            <NavBarLi>
              <LinkButton to={item["path"]}>{item["title"]}</LinkButton>
            </NavBarLi>
          ))}
        </NavBarUl>
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
