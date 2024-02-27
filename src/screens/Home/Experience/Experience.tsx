import { useState } from 'react'
import s from './Experience.module.scss'
import List from '../../../components/List/List'

type Props = {
    experienceRef: any
}

const Experience = (props: Props) => {
    const [isFirstSelected, setIsFirstSelected] = useState(true)
    const [isSecondSelected, setIsSecondSelected] = useState(false)
    const [isThirdSelected, setIsThirdSelected] = useState(false)
    
    const ssnTechList = [
        { body: 'React (Redux & Hooks)' },
        { body: 'Typescript' },
        { body: 'Ant Design (CSS)' },
        { body: 'axios (REST API)' },
        { body: 'Unit tests (jest)' },
        { body: 'Formik, redux-form' },
        { body: 'WebSocket' }
    ]

    const movieTechList = [
        { body: 'React' },
        { body: 'RTK' },
        { body: 'RTK Query' },
        { body: 'Typescript' },
        { body: 'TailwindCSS, CSS Modules, styled' },
        { body: 'Formik' },
        { body: 'TMDB API' },
        { body: 'Firestore' }
    ]
    
    const socialTechList = [
        { body: 'NextJS' },
        { body: 'NestJS' },
        { body: 'Postgres - Sequelize ORM' },
        { body: 'RTK' },
        { body: 'RTK Query' },
        { body: 'Socket IO' },
        { body: 'Typescript' },
        { body: 'TailwindCSS, CSS Modules' },
        { body: 'Formik' },
    ]

    return (
        <div ref={props.experienceRef} className={s.experience}>
            <section className="container">
                <div className={s.title}>
                    <h2>Experience</h2>
                </div>
                <div className={s.body}>
                    <div className={s.left}>
                        <div
                            className={`${s.expBlock} ${
                                isFirstSelected ? s.selected : ''
                            }`}
                            onClick={() => {
                                setIsSecondSelected(false)
                                setIsThirdSelected(false)
                                setIsFirstSelected(!isFirstSelected)
                            }}
                        >
                            <div className={s.expBlockTitle}>
                                <span>Samurai Social Network</span>
                                <div className={s.expArrow}></div>
                            </div>
                            <div className={s.expBlockDetails}>
                                <div
                                    className={
                                        isFirstSelected
                                            ? s.wrap + ' ' + s.selected
                                            : s.wrap
                                    }
                                >
                                    <div className={s.timeframe}>
                                        <span>June - September 2023</span>
                                    </div>
                                    <div className={s.details}>
                                        <p>
                                            Samurai Social Network is a social
                                            network application for frontend
                                            developers. Here you can follow,
                                            unfollow developers, change your
                                            profile data, look for developers by
                                            certain filters, and have a realtime
                                            chat. All credits to Dimych from
                                            IT-Kamasutra, the best mentor!
                                        </p>
                                        <List list={ssnTechList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${s.expBlock} ${
                                isSecondSelected ? s.selected : ''
                            }`}
                            onClick={() => {
                                setIsFirstSelected(false)
                                setIsThirdSelected(false)
                                setIsSecondSelected(!isSecondSelected)
                            }}
                        >
                            <div className={s.expBlockTitle}>
                                <span>Movieholic</span>
                                <div className={s.expArrow}></div>
                            </div>
                            <div className={s.expBlockDetails}>
                                <div
                                    className={
                                        isSecondSelected
                                            ? s.wrap + ' ' + s.selected
                                            : s.wrap
                                    }
                                >
                                    <div className={s.timeframe}>
                                        <span>
                                            October 2023 - December 2023
                                        </span>
                                    </div>
                                    <div className={s.details}>
                                        <p>
                                            Movieholic is a web application for
                                            comfortable viewing of films and TV
                                            series.
                                        </p>
                                        <List list={movieTechList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${s.expBlock} ${
                                isThirdSelected ? s.selected : ''
                            }`}
                            onClick={() => {
                                setIsFirstSelected(false)
                                setIsSecondSelected(false)
                                setIsThirdSelected(!isThirdSelected)
                            }}
                        >
                            <div className={s.expBlockTitle}>
                                <span>Social</span>
                                <div className={s.expArrow}></div>
                            </div>
                            <div className={s.expBlockDetails}>
                                <div
                                    className={
                                        isThirdSelected
                                            ? s.wrap + ' ' + s.selected
                                            : s.wrap
                                    }
                                >
                                    <div className={s.timeframe}>
                                        <span>February 2024 - Present</span>
                                    </div>
                                    <div className={s.details}>
                                        <p>
                                            Social is a fullstack social network application.
                                        </p>
                                        <List list={socialTechList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience
