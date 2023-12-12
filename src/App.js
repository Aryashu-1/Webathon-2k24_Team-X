import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout/RootLayout';
import Annapurna from './Components/Annapurna/Annapurna';
import CocoCola from './Components/CocoCola/CocoCola';
import Mba from './Components/MBA/Mba';
import Mealsntiffin from './Components/Mealsntiffin/Mealsntiffin';
import Teatime from './Components/Teatime/Teatime';
import GenAnn from './Components/GenAnn/GenAnn';
import Genmba from './Components/Genmba/Genmba';
import Fastfoodmba from './Components/Fastfoodmba/Fastfoodmba';
import Fastfood from './Components/Fastfood/Fastfood';
import Juicecola from './Components/Juicecola/Juicecola';
import Juicemba from './Components/Juicemba/Juicemba';
import Gencola from './Components/Gencola/Gencola';
import Iceparlourmba from './Components/Iceparlourmba/Iceparlourmba';



function App() {
let router= createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    children:[
  {
    path:'annapurna',
    element:<Annapurna/>,
    children:[{
      path:'mealsntiffins',
      element:<Mealsntiffin/>
    },
    {
      path:'genann',
      element:<GenAnn/>
    },
    {
      path:'teatime',
      element:<Teatime/>
    }
  ]

  },
  {
    path:'mba',
    element:<Mba/>,
    children:[
      {
        path:'juicemba',
        element:<Juicemba/>
      },
      {
        path:'fastfoodmba',
        element:<Fastfoodmba/>

      },
      {
        path:'iceparlourmba',
        element:<Iceparlourmba/>
        
      },
      {
        path:'genmba',
        element:<Genmba/>
      }
    ]
  },
  {
    path:'cococola',
    element:<CocoCola/>,
    children:[
      {
        path:'fastfood',
        element:<Fastfood/>
      },
      {
        path:'juicecola',
        element:<Juicecola/>
      },
      {path: 'gencola',
      element:<Gencola/>
      }
    ]
  }
]}])
  return (
    <div className="App bg-slate-900 h-screen">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
