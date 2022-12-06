import { createBrowserRouter } from "react-router-dom";
import SupportTrials from "../pages/SupportTrials";
import Root from "./root";
import AvailableCC from "../pages/Financtial/AvailableCC"
import GiftingPolicies from "../pages/Financtial/GiftingPolicies"
import RequirePhysicalAddress from "../pages/Financtial/RequirePhysicalAddress"
import RefundPolicies from "../pages/Financtial/RefundPolicies"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/marketing",
    element: <Root />,
    children: [
      {
        path: "supporttrials",
        element: <SupportTrials />,
      },
      {
        path: "giftingpolicies",
        element: <GiftingPolicies />,
      },
    ],
  },
  {
    path: "/financial",
    element: <Root />,
    children: [
      {
        path: "availablecc",
        element: <AvailableCC />,
      },
      {
        path: "refundpolicies",
        element: <RefundPolicies />,
      },
    ],
  },
  {
    path: "/digital",
    element: <Root />,
    children: [
      {
        path: "requirephysicaladdress",
        element: <RequirePhysicalAddress />,
      },
    ],
  },
]);

export default router;
