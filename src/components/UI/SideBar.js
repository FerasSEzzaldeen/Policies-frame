import React from "react";
import styled from "styled-components";
import DropdownLinks from "../shared/DropdownLinks";
import { Link } from "react-router-dom";
const ListOfLinks = [
  {
    name:"Financial Policies",
    subPolicies: [
      {
        name: "Create Policy",
        link: "/financial/availablecc"
      },
      {
        name: "Advanced Notification",
        link: "/financial/refundpolicies"
      }
    ]
  },
  {
    name:"Marketing Policies",
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
  max-width: 20%;
  width: 100%;
  height: 800px;
  margin: 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  border-right: 3px solid #c0c1c2;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
`;

const HomeBottonWrapper = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  border-bottom: 1px gray solid;
  /* padding: 30px 0; */
  margin: 30px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  /* border: 2px solid black; */
  border-radius: 5px;
  margin: 5px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EAB35A;
  font-weight: 900;
`;

const SideBar = () => {
  return (
    <NavSec>
      <Wrapper>
        <HomeBottonWrapper>
          <StyledLink to="/">Back to Scribe</StyledLink>
        </HomeBottonWrapper>
        {ListOfLinks.map(group=>(
          <DropdownLinks group={group} />
        ))}
      </Wrapper>
    </NavSec>
  );
};

export default SideBar;
