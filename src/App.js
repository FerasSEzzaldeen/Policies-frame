import { RouterProvider } from "react-router-dom";
import MainHeader from "./components/UI/MainHeader";
import router from "./routes/router";
import styled from "styled-components";

const MainWraper = styled.div`
  height: auto;
`;
function App() {
  return (
    <>
      <MainHeader />
      <MainWraper>
        <RouterProvider router={router} />
      </MainWraper>
    </>
  );
}

export default App;
