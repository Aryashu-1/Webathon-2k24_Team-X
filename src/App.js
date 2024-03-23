import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Annapurna from "./Components/Annapurna/Annapurna";
import CocoCola from "./Components/CocoCola/CocoCola";
import Mba from "./Components/MBA/Mba";
import Mealsntiffin from "./Components/Mealsntiffin/Mealsntiffin";
import Teatime from "./Components/Teatime/Teatime";
import GenAnn from "./Components/GenAnn/GenAnn";
import Genmba from "./Components/Genmba/Genmba";
import Fastfoodmba from "./Components/Fastfoodmba/Fastfoodmba";
import Fastfood from "./Components/Fastfood/Fastfood";
import Juicecola from "./Components/Juicecola/Juicecola";
import Juicemba from "./Components/Juicemba/Juicemba";
import Gencola from "./Components/Gencola/Gencola";
import Iceparlourmba from "./Components/Iceparlourmba/Iceparlourmba";
import PaymentComponent from "./Components/PaymentComponent/PaymentComponent";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import AdminComponent from "./Components/AdminComponent/AdminComponent";
import ConfirmDelivery from "./Components/ConfirmDelivery/ConfirmDelivery";
import Homea from "./Components/Homea/Homea";
import Hotels from "./Components/Hotels/Hotels";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path:'',
          element:<Homea/>
        },
        {
          path:'/Home',
          element:<Home/>
        },
        {
          path:'/Hotels',
          element:<Hotels/>
        },
        {
          path: "/admin",
          element: <AdminComponent />
        },
        {
          path: "/Transport",
          element: <Annapurna />,
        },
        {
          path: "/cartann",
          element: <Cart/>,
        },
        {
          path: "/das",
          element: <Mba />,
          
        },
        {
          path: "CocoCola",
          element: <CocoCola />,
          children: [
            {
              path: "fastfood",
              element: <Fastfood />,
            },
            {
              path: "juicecola",
              element: <Juicecola />,
            },
            { path: "gencola", element: <Gencola /> },
          ],
        },
      ],
    },
    {
      path:"/payment",
      element: <PaymentComponent />
    },
    {
      path:"/confirmDelivery",
      element: <ConfirmDelivery />
    }
  ]);
  return (
    <div className="App bg-slate-900 h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
