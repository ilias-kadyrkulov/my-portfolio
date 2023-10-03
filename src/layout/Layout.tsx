import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

type Props = {
    scrollToAbout: () => void
    scrollToExp: () => void
}

const Layout = (props: Props) => {

    return (
        <>
            <Header scrollToAbout={props.scrollToAbout} scrollToExp={props.scrollToExp}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
