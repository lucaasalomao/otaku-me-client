import { Navigate, Outlet } from 'react-router-dom'
import apiUtils from '../utils/api.utils'

const PrivateOutlet = () => {
  const authToken = localStorage.getItem('token')

  if (authToken.split(".").length != 3) {
    return <Navigate to='/'/>
  }

  const verify = async () => {
    try {
      await apiUtils.verifyToken()
    } catch (error) {
      return <Navigate to='/'/>
    }
  }

  verify()

  return <Outlet />

}

export default PrivateOutlet