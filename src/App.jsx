import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import NotFound from './components/NotFound'
import Root from './Root'
import Userdetails from './components/Userdetails'
import Contact from './components/Contact'

const usersList = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Ram', email: 'ram@example.com' },
  { id: 4, name: 'Akshay', email: 'akshay@example.com' },
  { id: 5, name: 'Akash', email: 'akash@example.com' },
  { id: 6, name: 'Athira', email: 'athira@example.com' },
  { id: 7, name: 'Smith', email: 'smith@example.com' },
];

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Root />,
    children: [{
      index: true,
      element: <Home />,
    }, {
      path: "user",
      element: <User userlist={usersList} />,
    }, {
      path: "user/:id",
      element: <Userdetails userlist={usersList} />,
    }, {
      path: "about",
      element: <About />,
    }, {
      path: "contact",
      element: <Contact />,
    }, {
      path: "*",
      element: <NotFound />,
    }]
  }]
)

const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
