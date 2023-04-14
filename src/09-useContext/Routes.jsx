import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { MainApp } from "./MainApp";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        // errorElement: <div id="error-page"><h1> 404 😞Oops!</h1><p> Sorry, an unexpected error has occurred.</p>            <p>            </p>        </div>,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },  {
              path: "/*",
              element: <Navigate to='about' />,
          }
        ]
    }
]);