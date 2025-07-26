import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Home from "../pages/Home/Home"
import Event from "../pages/Event/Event"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/event",
                element: <Event />
            },
        ]
    }
])

export default Routes