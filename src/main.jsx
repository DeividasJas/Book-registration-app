import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page.jsx';

import Books from './pages/Books.jsx';
import RegistrationForm from './pages/RegistrationForm.jsx';
import BooksReviews from './pages/BooksReviews.jsx';
import Layout from './components/Layout.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { path: '/', element: <Books />, errorElement: <ErrorPage /> },
          {
            path: '/registration',
            element: <RegistrationForm />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/reviews',
            element: <BooksReviews />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>
);




// import { useNavigate } from "react-router-dom";
// import { useEffect, useContext } from "react";
// import { UserContext } from "../App";
// import { jwtDecode } from "jwt-decode";
 
// function ProtectedRoute({ children }) {
//   const navigate = useNavigate();
//   // 1. load the authenticated user
//   const { userToken } = useContext(UserContext);
//    // if user NO authenticated redirect to login page
 
//    useEffect(() => {
//     if (!userToken) {
//       return navigate("/");
//     } else {
//       const decodedUser = jwtDecode(userToken.token);
//       if (!decodedUser || decodedUser.role !== "user") {
//         return navigate("/");
//       }
//     }
//   }, [userToken, navigate]);
 
//   //3. if user IS authenticated render the protected route component
//   return <>{children}</>;
// }
 
// export default ProtectedRoute;