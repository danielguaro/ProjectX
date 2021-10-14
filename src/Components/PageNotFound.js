import { useLocation, useHistory } from 'react-router-dom'

import React from 'react'

const PageNotFound = () => {
  let location = useLocation()
  let history = useHistory()

  return (
    <>
      <h1
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          background: 'white',
          height: '100%',
          textAlign: 'center',
          fontSize: 50,
        }}
      >
        Error Page Not Found
      </h1>
      <p
        style={{
          position: 'absolute',
          width: '100%',
          top: 60,
          height: '100%',
          textAlign: 'center',
          fontSize: 20,
          color: 'black',
        }}
      >
        The page {location.pathname} doesn't exist, If you want to go back to
        home page, press
        <button
          style={{
            position: 'relative',
            width: '100px',
            top: 5,
            left: 5,
            height: '40px',
            textAlign: 'center',
            fontSize: 20,
            color: 'black',
          }}
          onClick={() => {
            history.push('/')
          }}
        >
          Home
        </button>
      </p>
    </>
  )
}

export default PageNotFound
