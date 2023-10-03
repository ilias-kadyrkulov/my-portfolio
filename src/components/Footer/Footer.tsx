import s from './Footer.module.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={s.footer}>
            <section className={s.container}>
                <div className={s.left}>
                    <h4>I'm flying into the space! Let's build something.</h4>
                    <Button />
                </div>
                <div className={s.right}>
                    <div>
                        <a href="https://github.com/ilias-kadyrkulov">Github</a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/ilias-kadyrkulov/">
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/ilias-kadyrkulov/my-portfolio">Source</a>
                    </div>
                </div>
            </section>
            <div className={s.lastLine}>
                <Link to="/">Ilias Kadyrkulov</Link>
            </div>
        </div>
    )
}

export default Footer
