import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-a6h1btg5.us.auth0.com'
      clientId='0TGRPIRjM9ByfoT5uPPqCu3gsUHHl2VJ'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
