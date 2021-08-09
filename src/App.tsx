import About from './Layouts/About/About'
import Hero from './Layouts/Hero/Hero'
import Work from './Layouts/Work/Work'
import Menu from './Layouts/Menu/Menu'
import Contact from './Layouts/Contact/Contact'
import './assets/css/App.scss'

function App() {
    return (
        <>
            <Menu />
            <Hero />
            <About />
            <Work />
            <Contact />
        </>
    )
}

export default App
