import './style.css'
import { Footer } from '../Home/Footer/footer'

const About = () => {
  return (
    <>
      <div class='main'>
        <h1 style={{ fontFamily: 'serif' }}>SD Ascension</h1>
        <h2 style={{ fontSize: 25, color: 'white', top: 50 }}>
          <p>Group created for the administration of any kind of products.</p>
          <p>
            We come from Latin America and we offer any kind of service about
            front end and back end development that you are looking for.
          </p>
        </h2>
      </div>
      <Footer/>
    </>
  )
}

export default About
