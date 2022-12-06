import React from "react";
import styled from "styled-components";
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
        name: "Support Trials",
        link: "/marketing/supporttrials"
      },
      {
        name: "Gifting Policies",
        link: "/marketing/giftingpolicies"
      }
    ]
  },
  {
    name:"Digital Subscription",
    subPolicies: [
      {
        name: "Require Physical Address",
        link: "/digital/requirephysicaladdress"
      },
    ]
  }
]
const NavSec = styled.div`
  /* background-color: #B2B2B2; */
  width: 20%;
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
        {ListOfLinks.map(group=>(
          <DropdownLinks group={group} />
        ))}
      </Wrapper>
    </NavSec>
  );
};

export default SideBar;
