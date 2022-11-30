import NavBar from "../components/UI/NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const navlist = [
  { title: "Available Credit Cards", path: "/financial/availablecc" },
  { title: "Available Payment Methods", path: "/financial/availablepm" },
  { title: "Allow for Credit and Bill Me", path: "/financial/allowforcredit" },
  { title: "Refund Policies", path: "/financial/refundpolicies" },
  { title: "Declined Payment Policies", path: "/financial/declinedpp" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Financial = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};
export default Financial;
