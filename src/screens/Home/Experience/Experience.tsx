import { useState } from 'react'
import s from './Experience.module.scss'
import List from '../../../components/List/List'

type Props = {
    experienceRef: any
}

const Experience = (props: Props) => {
    const [firstSelected, setFirstSelected] = useState(true)
    const [secondSelected, setSecondSelected] = useState(false)

    const list = [
        { body: 'React (Redux & Hooks)' },
        { body: 'Typescript' },
        { body: 'Ant Design (CSS)' },
        { body: 'axios (REST API)' },
        { body: 'Unit tests (jest)' },
        { body: 'Formik, redux-form' },
        { body: 'WebSocket' }
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
                                firstSelected ? s.selected : ''
                            }`}
                            onClick={() => {
                                setFirstSelected(!firstSelected)
                                setSecondSelected(false)
                            }}
                        >
                            <div className={s.expBlockTitle}>
                                <span>Samurai Social Network</span>
                                <div className={s.expArrow}></div>
                            </div>
                            <div className={s.expBlockDetails}>
                                <div
                                    className={
                                        firstSelected
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
                                        <List list={list} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${s.expBlock} ${
                                secondSelected ? s.selected : ''
                            }`}
                            onClick={() => {
                                setSecondSelected(!secondSelected)
                                setFirstSelected(false)
                            }}
                        >
                            <div className={s.expBlockTitle}>
                                <span>Movieholic</span>
                                <div className={s.expArrow}></div>
                            </div>
                            <div className={s.expBlockDetails}>
                                <div
                                    className={
                                        secondSelected
                                            ? s.wrap + ' ' + s.selected
                                            : s.wrap
                                    }
                                >
                                    <div className={s.timeframe}>
                                        <span>October 2023 - Present</span>
                                    </div>
                                    <div className={s.details}>
                                        <p>In development.</p>
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
