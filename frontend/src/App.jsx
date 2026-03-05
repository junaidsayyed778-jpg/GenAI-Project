import { RouterProvider } from "react-router-dom"
import "./style.scss"
import {router} from "./AppRoutes.jsx"
import {  AuthProvider } from "./features/auth/authContext.jsx"

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
