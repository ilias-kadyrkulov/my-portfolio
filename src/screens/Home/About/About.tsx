import s from './About.module.scss'
import List from '../../../components/List/List'

type Props = {
    aboutRef: any
}

const About = (props: Props) => {
    const list = [
        {
            body: 'React (its Virtual DOM; reconciliation mechanism, how React uses JSX to create V.DOM, etc.);'
        },
        {
            body: 'Typescript (types, generics, tuples, keyof - typeofoperators, etc.)'
        },
        {
            body: 'State management (actions, dispatch, thunk), reduxand react-redux libraries, RTK;'
        },
        { body: 'Data access (REST API): axios library, RTK Query;' },
        { body: 'Forms: redux-form, Formik;' },
        { body: 'JS of course;' }
    ]

    return (
        <div ref={props.aboutRef} className={s.about}>
            <section className="container">
                <div className={s.title}>
                    <h2>About</h2>
                </div>
                <div className={s.body}>
                    <p>
                        My name is Ilias. I'm a React frontend developer. I'm
                        passionate about music, especially piano, and basically
                        everything when it comes to web development.
                    </p>
                    <p>
                        I understand workflow of essential things a frontend
                        developer needs to know:
                    </p>
                    <List list={list} />
                </div>
            </section>
        </div>
    )
}

export default About
