import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { IssuesContextProvider } from './context/IssuesContext.tsx'
import { BaseLayout } from './layouts/Layout.tsx'
import { ErrorPage } from './pages/ErrorPage.tsx'
import { Home } from './pages/Home.tsx'
import { Issue } from './pages/Issue.tsx'

export function App() {
    const router = createBrowserRouter([{
        path: '/',
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: [{
            path: '/',
            element: <Home />,
        }, {
            path: 'issue/:issueNumber',
            element: <Issue />
        }, ]
    }])

    return (
        <IssuesContextProvider>
            <RouterProvider router={router} />
        </IssuesContextProvider>
    )
}