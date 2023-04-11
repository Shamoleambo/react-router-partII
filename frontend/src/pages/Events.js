import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
  { id: 'e1', title: 'some event' },
  { id: 'e2', title: 'some event' },
  { id: 'e3', title: 'some event' }
]

const EventsPage = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EventsPage
