import {RouterProvider,} from "react-router-dom";
import MainHeader from "./components/UI/MainHeader";
import router from "./routes/router";



function App() {
  return (
    <>
    <MainHeader />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
