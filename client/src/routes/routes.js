import EventsPage from "../pages/EventsPage";
import RegisterPage from "../pages/RegisterPage";
import UserPage from "../pages/EventUserPage";

export const PublicRoutes = [
    { path: '/*', element: <EventsPage />},
    { path: '/register', element: <RegisterPage /> },
    { path: '/view/:id', element: <UserPage /> }
]