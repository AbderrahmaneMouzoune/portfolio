import About from './Layouts/About/About'
import Hero from './Layouts/Hero/Hero'
import Work from './Layouts/Work/Work'
import Menu from './Layouts/Menu/Menu'
import Footer from './Layouts/Footer/Footer'
import './assets/css/App.scss'
import './assets/css/Comete.scss'
import Galaxy from './components/Galaxy/Galaxy'

function App() {
    return (
        <>
            <Menu />
            <Hero />
            <About />
            <Work />
            <Footer />
            <Galaxy />
        </>
    )
}

export default App
