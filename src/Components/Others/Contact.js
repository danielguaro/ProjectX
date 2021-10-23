import {Footer} from '../Home/Footer/footer'

const Contact = () => {
  return (
    <>
      <header className='main_contact' > 
        <h1 className = 'title_sd' style={{ fontFamily: 'serif' }}>SD Ascension</h1>
      </header>
      <main>
      <div >
        <h1 style={{ fontSize: 45, color: 'black' }}>Contacts</h1>
      <div>
        <h3 style={{ fontSize: 25, color: 'black' }}>Email</h3>
        <p style={{ fontSize: 15, color: 'black' }}>contacusSDA@gmail.com</p>
        <h3 style={{ fontSize: 25, color: 'black' }}>Number</h3>
        <p style={{ fontSize: 15, color: 'black' }}>3130515987</p>
        <h3 style={{ fontSize: 25, color: 'black' }}>Number</h3>
        <p style={{ fontSize: 15, color: 'black' }}>3108459541</p>
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact
