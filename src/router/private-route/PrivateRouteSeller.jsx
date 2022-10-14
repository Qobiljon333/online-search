import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivateRouteSeller = (props) => {
    const seller = useSelector(s=> s.seller)
  return  seller? 
    <Route {...props} />
        :
    <Redirect to="login" />
}

export default PrivateRouteSeller