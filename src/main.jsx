import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx"
import Contacts from "./components/Contacts.jsx"
import Earn from './components/Earn.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/earn",
        element: <Earn />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
