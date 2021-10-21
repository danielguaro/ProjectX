import { FaReact } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <div class='social_icons'>
        <h1 className='footer-logo' style={{ fontSize: 30 }}>
          SD Ascension
          <i id='logo-icon'>
            <FaReact />
          </i>
        </h1>
        <ul>
          <li>SD Ascensionn, rights reserved</li>
        </ul>
      </div>
    </footer>
  )
}
