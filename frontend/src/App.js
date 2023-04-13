import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import EventsPage, { loader as eventsLoader } from './pages/Events'
import EventDetailPage, {
  loader as eventDetailsLoader,
  action as deleteEvent
} from './pages/EventDetail'
import NewEventPage from './pages/NewEvent'
import EditEventPage from './pages/EditEvent'
import RootLayout from './pages/Root'
import EventsRootLayout from './pages/EventsRoot'
import ErrorPage from './pages/Error'
import { action as manipulateAction } from './components/EventForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateAction
              }
            ]
          },
          { path: 'new', element: <NewEventPage />, action: manipulateAction }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
