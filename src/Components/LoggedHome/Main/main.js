import Fondo from '../Images/Fondo.jpg'
import './index.css'

export const Main = () => {
    return (
      <>
        <main>
          <div class='main_section'>
            <h1>SD Ascension</h1>
            <div class='underline'></div>
            <h2>
              <p>Welcome to the main page.</p>
              <hr></hr>
              <p>To join in the system press the next button</p>
            </h2>
            <a>
              <button>
                <a
                  href='/seeProduct'
                  style={{
                    textDecoration: 'none',
                    color: 'hsl(210, 22%, 49%)',
                  }}
                >
                  Products
                </a>
              </button>
            </a>
          </div>
        </main>
      </>
    )
}