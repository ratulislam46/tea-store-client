import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home.jsx';
import AddTea from './AllTea/AddTea.jsx'
import ShowTea from './AllTea/ShowTea.jsx';
import UpdateTeaData from './AllTea/UpdateTeaData.jsx';
import Error from './Home/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('https://tea-store-server-tawny.vercel.app/addtea').then(res => res.json())
      },
      {
        path: '/addtea',
        Component: AddTea
      },
      {
        path: 'updateTeaData/:id',
        loader: ({params})=>fetch(`https://tea-store-server-tawny.vercel.app/addtea/${params.id}`),
        Component: UpdateTeaData
      },
      {
        path: '/*',
        Component: Error
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
