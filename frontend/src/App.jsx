import { RouterProvider } from "react-router-dom"
import "./style.scss"
import {router} from "./AppRoutes.jsx"

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
