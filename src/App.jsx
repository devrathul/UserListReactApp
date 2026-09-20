import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import NotFound from './components/NotFound'
import Root from './Root'


const router = createBrowserRouter(
  [{
    path: "/",
    element: <Root />,
    children: [{
      path: "/",
      element: <Home />,
    }, {
      path: "user",
      element: <User />,
    }, {
      path: "about",
      element: <About />,
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
