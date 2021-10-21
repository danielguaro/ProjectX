import {Footer} from '../Home/Footer/footer'

const Contact = () => {
  return (
    <>
      <div className='main_contact'>
        <h1 className = 'title_sd' style={{ fontFamily: 'serif' }}>SD Ascension</h1>
        <h1 style={{ fontSize: 45, color: 'black' }}>Contacts</h1>
        <div>
          <h3 style={{ fontSize: 25, color: 'black' }}>Email</h3>
          <p style={{ fontSize: 15, color: 'black' }}>Mgad37@gmail.com</p>
          <h3 style={{ fontSize: 25, color: 'black' }}>Number</h3>
          <p style={{ fontSize: 15, color: 'black' }}>3900239240</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
