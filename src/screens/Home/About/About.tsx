import s from './About.module.scss'
import List from '../../../components/List/List'

type Props = {
    aboutRef: any
}

const About = (props: Props) => {
    const list = [
        {
            body: 'JS, React, NextJS;'
        },
        {
            body: 'express, NestJS;'
        },
        {
            body: 'Postgres, MongoDB - Sequelize, Mongoose;'
        },
        {
            body: 'Typescript;'
        },
        {
            body: 'Redux, RTK;'
        },
        { body: 'axios, RTK Query;' },
        { body: 'Forms: redux-form, Formik, react-hook-form;' }
    ]

    return (
        <div ref={props.aboutRef} className={s.about}>
            <section className="container">
                <div className={s.title}>
                    <h2>About</h2>
                </div>
                <div className={s.body}>
                    <p>
                        My name is Ilias. I'm a fullstack developer. I'm
                        passionate about music, especially piano, and basically
                        everything when it comes to web development.
                    </p>
                    <p>
                        My <strong>key</strong> tech stack:
                    </p>
                    <List list={list} />
                </div>
            </section>
        </div>
    )
}

export default About
