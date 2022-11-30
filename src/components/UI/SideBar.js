import React from "react";
import styled from "styled-components";
import List from "../shared/List";
import DropdownLinks from "../shared/DropdownLinks";

const ListOfLinks = [
  {
    name:"Financial Policies",
    subPolicies: [
      {
        name: "Payment Method",
        link: "/financial/availablecc"
      },
      {
        name: "Refund Policies",
        link: "/financial/refundpolicies"
      }
    ]
  },
  {
    name:"Markiting Policies",
    subPolicies: [
      {
        name: "Payment Method",
        link: "/financial/availablecc"
      },
      {
        name: "Refund Policies",
        link: "/financial/refundpolicies"
      }
    ]
  },
  {
    name:"Digital Subscription",
    subPolicies: [
      {
        name: "Payment Method",
        link: "/financial/availablecc"
      },
      {
        name: "Refund Policies",
        link: "/financial/refundpolicies"
      }
    ]
  }
]
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
        {/* <List
          title={"Financial Policies"}
          path={"/financial/availablecc"}
        />
        <List
          title={"Marketing Policies"}
          path={"/marketing"}
        />
        <List
          title={"Digital Subscriptions"}
          path={"/digital"}
        /> */}
        {ListOfLinks.map(group=>(
          <DropdownLinks group={group} />
        ))}
      </Wrapper>
    </NavSec>
  );
};

export default SideBar;
