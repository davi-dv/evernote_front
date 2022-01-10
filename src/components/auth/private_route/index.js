import React from "react"
import { Route, Navigate } from "react-router-dom"

export const PrivateRoute = ({ children}) => {
  const isAuthenticated = useAuth();
      
  if (isAuthenticated ) {
    return children
  }
    
  return <Navigate to="/login" />
}
function useAuth() {
  return localStorage.getItem('user') ? true : false
}

export default PrivateRoute