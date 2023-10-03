import Hero from './Hero/Hero'
import About from './About/About'
import Experience from './Experience/Experience'

type Props = {
    aboutRef: any
    experienceRef: any
}

const Home = (props: Props) => {
    return (
        <div className="home">
            <Hero />
            <About aboutRef={props.aboutRef} />
            <Experience experienceRef={props.experienceRef} />
        </div>
    )
}

export default Home
