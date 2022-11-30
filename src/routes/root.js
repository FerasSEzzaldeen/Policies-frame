import styled from "styled-components";
import SideBar from "../components/UI/SideBar";
import { Outlet } from "react-router-dom";
const MainDiv = styled.div`
background-color: #EEEEEE;
display: flex;
`;

export default function Root() {
    return (
      <>
        <MainDiv>
            <SideBar />
            <Outlet />
        </MainDiv>
      </>
    );
  }