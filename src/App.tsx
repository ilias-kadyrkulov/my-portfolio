import { useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Contact from './screens/Contact/Contact'
import NotFound from './screens/NotFound/NotFound'
import Layout from './layout/Layout'

function App() {
    const handleAboutNavClick = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const handleExpNavClick = () => {
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const aboutRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout scrollToAbout={handleAboutNavClick} scrollToExp={handleExpNavClick} />}>
                            <Route index element={<Home aboutRef={aboutRef} experienceRef={experienceRef} />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
