import styled from "styled-components";
import Table from "../components/shared/Table";
const Policies = [
  {
    name: "financial Policies",
    policies: [
      {
        name: "Available Credit Cards",
        description:
          "Any approved payment methods can be disabled for each brand you have",
      },
      {
        name: "Available Payment Methods",
        description:
          "Any approved payment methods can be disabled for each brand you have",
      },
      {
        name: "Allow for Credit and Bill Me",
        description:
          "Any approved payment methods can be disabled for each brand you have",
      },
      {
        name: "Refund Policies",
        description:
          "For each brand, do you want to limit to full refunds, partial refunds, or no refunds at all. ",
      },
      {
        name: "Declined Payment Policies",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    name: "Marketing Policies",
    policies: [
      {
        name: "Support Trials",
        description:
          "This allows your services the ability to manage trial eligability,  support free trials, or reduce priced trials",
      },
      {
        name: "Gifting Policies",
        description:
          "Allow your customers to be able to purchase a gift for another person",
      },
    ],
  },
  {
    name: "Digital Subscriptions",
    policies: [
      {
        name: "Require Physical Address",
        description:
          "Enabling this policy will require any customer purchasing a digital subscription to provide a valid physical address",
      },
    ],
  },
];
const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;
const Client = () => {
  return (
    <>
      <OuterWrapper>
        <Wrapper>
          <h1>welcome to client page</h1>
          <p>here all the Client Policies witll be showen</p>
          <Table content={Policies} />
        </Wrapper>
      </OuterWrapper>
    </>
  );
};
export default Client;
