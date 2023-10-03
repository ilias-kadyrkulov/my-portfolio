import { useEffect, useState } from 'react'
import portfolioLogo from '../../assets/logo.svg'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

type Props = {
    scrollToAbout: () => void
    scrollToExp: () => void
}

const Header = (props: Props) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNavMOpen, setIsNavMOpen] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {  
            if (window.scrollY > 0 && !isScrolled) {
                setIsScrolled(true)
            } else if (window.scrollY === 0 && isScrolled) {
                setIsScrolled(false)
            } else if (window.scrollY) {
                setIsNavMOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isScrolled])

    return (
        <nav>
            <div
                className={`${isScrolled ? s.wrapperActive : s.wrapper} ${
                    isNavMOpen ? s.wrapperActiveNav : ''
                }`}
            ></div>
            <section className={s.container}>
                <div className={s.logoWrapper}>
                    <Link to="/my-portfolio/">
                        <img
                            className={s.logo}
                            src={portfolioLogo}
                            alt="Portfolio Logo"
                        />
                    </Link>
                </div>
                <div className={s.listD}>
                    <Link onClick={() => props.scrollToAbout()} to="/my-portfolio/#about">
                        About
                    </Link>
                    <Link onClick={() => props.scrollToExp()} className="divider" to="/my-portfolio/#experience">
                        Experience
                    </Link>
                    <Link to="/my-portfolio/contact">Contact</Link>
                </div>
                <div className={`${s.listM} ${isNavMOpen ? s.open : ''}`}>
                    <button
                        onClick={() => {
                            setIsNavMOpen(!isNavMOpen)
                        }}
                    >
                        <div className="first"></div>
                        <div className="second"></div>
                        <div className="third"></div>
                    </button>
                </div>
                <div
                    className={`${s.listMM} ${isNavMOpen ? s.listMMOpen : ''}`}
                >
                    <Link onClick={() => props.scrollToAbout()} to="/my-portfolio/#about">
                        About
                    </Link>
                    <Link onClick={() => props.scrollToExp()} className="divider" to="/my-portfolio/#experience">
                        Experience
                    </Link>
                    <Link to="/my-portfolio/contact">Contact</Link>
                </div>
            </section>
        </nav>
    )
}

export default Header
