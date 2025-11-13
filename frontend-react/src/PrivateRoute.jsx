 import {useContext} from 'react'
 import { AuthContext } from './AuthProvider'
 import {Nagigate} from 'react-router-dom'
 
 const PrivateRoute = (children) => {
    const {isLoggedIn } = useContext(AuthContext)
   return isLoggedIn ? (
    children
     
   ):(
    <Nagigate to = '/login' />
   )
 }
 
 export default PrivateRoute