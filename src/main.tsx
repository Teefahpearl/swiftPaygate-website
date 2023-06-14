import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.tsx';
import SendPayment from "@/scenes/Send Payment/index.tsx";
import CollectPayment from "./scenes/Collect Payment";
import './index.css';
import FAQ from './scenes/FAQs/index.tsx';
import Aboutus from "@/scenes/About-Us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"SendpaymentPage",
    element:<SendPayment/>,
  },
  {
    path:"/Collectpayment",
    element:<CollectPayment/>,
  },
  {
    path:"/FAQpage",
    element:<FAQ/>,
  },
  {
    path:"/About_Us page",
    element:<Aboutus/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)
