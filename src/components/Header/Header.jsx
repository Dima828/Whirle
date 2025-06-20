import { useState } from 'react'
import logoImage from '../../assets/icons/logo.svg'
import Button from '../Button/Button'
import './Header.css'

export default function Header(){
    const [isOpen, setOpen] = useState()

    return(
        <header className='header'>
            <nav className='header__nav'>
                <img className="header__logo" width={106} height={37} src={logoImage}></img>
                <ul className={`nav__list ${isOpen ? "active" : ''}`}>
                    <li className="nav__list-item">
                        <a href="#" className="list-item__link">
                            Features
                        </a>
                        </li>
                    <li className="nav__list-item">
                        <a href="#" className="list-item__link">
                            Pricing
                        </a>
                        </li>
                    <li className="nav__list-item">
                        <a href="#" className="list-item__link">
                            Integrations
                        </a>
                        </li>
                    <li className="nav__list-item">
                        <a href="#" className="list-item__link">
                            Learn
                        </a>
                    </li>
                    <div className="button__block">
                    <a href='#' className="block__link">Sign in</a>
                    <Button>Book a demo</Button>
                </div>
                </ul>
            </nav>
            <div className="burger__button" onClick={() => setOpen(!isOpen)}>
                <span></span>
            </div>
        </header>
    )
}