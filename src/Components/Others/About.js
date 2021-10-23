import './style.css'
import { Footer } from '../Home/Footer/footer'

const About = () => {
  return (
    <>
    <header className='main_contact' > 
        <h1 className = 'title_sd' style={{ fontFamily: 'serif' }}>SD Ascension</h1>
      </header>
      <div class='main'>
          <p style={{ fontSize: 25, color: 'crimson', top: 50 }}>Group created in South America, and designed to sell many kind of products .</p>
          <p style={{ fontSize: 25, color: 'crimson', top: 50 }}>
          We are proud to say that we born in Colombia, and our public target has been growing after these five years of production, now we have distribution in ten countries, nine in south America and one in north America.
          </p>
          <p style={{ fontSize: 15, color: 'white', top: 50 }}>
          We already have de ISO 9001:2015 and that shows our compromise with the clients.
          </p>
      </div>
      <Footer/>
    </>
  )
}

export default About
