import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Dashboard />
        }]
    }
])

export default router