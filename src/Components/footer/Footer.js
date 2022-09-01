import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>
                Peyman
            </h1>
            <ul className='footer__list'>
                <li>
                    <a href='#about' className="footer__link">About</a>
                </li>
                <li>
                    <a href='#skills' className="footer__link">Skills</a>
                </li>
                <li>
                    <a href='#projects' className="footer__link">Projects</a>
                </li>
            </ul>
            <div className='footer__social'>
            <a href='https://www.instagram.com/p.peyman.n' className='footer__social-link' target=''>
            <i className='uil uil-instagram'></i>
        </a>
        <a href='https://twitter.com/p_peyman_n' className='footer__social-link' target=''>
          <i className='uil uil-twitter'></i>
        </a>
        <a href='https://telegram.org/p_peyman_n' className='footer__social-link' target=''>
          <i className='uil uil-telegram-alt'></i>
        </a>
            </div>
            <span className='footer__copy'>&#169;all rights reseved </span>
        </div>
    </footer>
  )
}

export default Footer