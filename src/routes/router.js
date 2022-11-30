import { createBrowserRouter } from "react-router-dom";
import Digital from "../pages/Digital";
import Financial from "../pages/Financial";
import Marketing from "../pages/Marketing";
import Root from "./root";
import AvailableCC from "../pages/Financtial/AvailableCC"
import AvailablePM from "../pages/Financtial/AvailablePM"
import AllowForCredit from "../pages/Financtial/AllowForCredit"
import DeclinedPaymentPolicies from "../pages/Financtial/DeclinedPaymentPolicies"
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
        path: "/marketing",
        element: <Marketing />,
      },
    ],
  },
  {
    path: "/financial",
    element: <Root />,
    children: [
      {
        path: "/financial/",
        element: <Financial />,
        
        children: [
          {
            path: "availablecc",
            element: <AvailableCC />,
          },
          {
            path: "availablepm",
            element: <AvailablePM />,
          },
          {
            path: "allowforcredit",
            element: <AllowForCredit />,
          },
          {
            path: "refundpolicies",
            element: <RefundPolicies />,
          },
          {
            path: "declinedpp",
            element: <DeclinedPaymentPolicies />,
          },
        ],
      },
    ],
  },
  {
    path: "/digital",
    element: <Root />,
    children: [
      {
        path: "/digital",
        element: <Digital />,
      },
    ],
  },
]);

export default router;
