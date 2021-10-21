import Fondo from '../Images/Fondo.jpg'
import { useHistory } from 'react-router-dom'
import { Button } from '../../Navbar/Button'

export const Main = () => {
  const history = useHistory()

  const handleLogin = () => {
    history.push('/login')
  }
  return (
    <>
      <main>
        <div class='main_section'>
          <h1 style={{fontFamily:'serif'}}>SD Ascension</h1>
          <div class='underline'></div>
          <h2 style={{fontSize:25}}>
            <p>Welcome to the main page.</p>
            <hr></hr>
            <p>Our team is SD Ascension</p>
          </h2> 

        </div>
      </main>
    </>
  )
}
