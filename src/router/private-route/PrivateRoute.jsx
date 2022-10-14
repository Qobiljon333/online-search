import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    
    const auth = useSelector(s=> s.auth)

    console.log(auth);
  return auth?
    <Route {...props} />
     :
   <Redirect to="login" />
}

export default PrivateRoute