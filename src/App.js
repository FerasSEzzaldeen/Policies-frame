import MainHeader from "./components/UI/MainHeader";
import SideBar from "./components/UI/SideBar";
import styled from "styled-components";

const MainDiv = styled.div`
 background-color: #EEEEEE;
`;
function App() {
  return (
    <>
    <MainHeader />
    <MainDiv>
      <SideBar/>
    </MainDiv>
    </>
  );
}

export default App;
