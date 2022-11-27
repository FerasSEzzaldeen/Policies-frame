import React from "react";
import styled from "styled-components";
import List from "../shared/List";
const NavSec = styled.div`
  /* background-color: #B2B2B2; */
  width: 15%;
  height: 800px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 3px solid #c0c1c2;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
`;

const SideBar = () => {
  return (
    <NavSec>
      <Wrapper>
        <List
          title={"Client"}
          subs={["Support Trials", "Gifting Policies"]}
          path={"/marketing/giftingpolicies"}
        />
        <List
          title={"Offer"}
          path={""}
        />
        <List
          title={"product"}
          path={"/digital/subscriptions"}
        />
        <List
          title={"somthing else"}
          path={"/digital/subscriptions"}
        />
      </Wrapper>
    </NavSec>
  );
};

export default SideBar;
