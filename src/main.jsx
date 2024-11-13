import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EmployeeList from './components/employee/EmployeeList.jsx'
import PunktList from './components/punkt/PunktList.jsx'
import { ConfigProvider } from 'antd';
import { theme } from './App.Theme.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <EmployeeList />,
      },
      {
        path: "/punkts",
        element: <PunktList />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ConfigProvider
        theme={theme}
      >
         <RouterProvider router={router} />
      </ConfigProvider>
    
  </StrictMode>,
)