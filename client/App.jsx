import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Homepage from './pages/Homepage'
import Main from './pages/Main'
import ParkDetails from './pages/ParkDetails'

function App () {
  useEffect(() => { }, [])

  const { isLoading, user } = useAuth0()
  console.log(user)
  // if (isLoading) {
  //   return <p>Loading..</p>
  // }

  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route path='/main' component={Main} />
      <Route path='/park-details/:id' component={ParkDetails} />
    </>
  )
}

export default App
