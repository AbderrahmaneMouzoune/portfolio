import About from './Layouts/About/About'
import Hero from './Layouts/Hero/Hero'
import Work from './Layouts/Work/Work'
import Menu from './Layouts/Menu/Menu'
import Contact from './Layouts/Contact/Contact'
import Footer from './Layouts/Footer/Footer'
import './assets/css/App.scss'
import './assets/css/Comete.scss'
import Galaxy from './components/Galaxy/Galaxy'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function App() {
    return (
        <>
            <Menu />
            <Hero />
            <LazyLoadComponent>
                <About />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Work />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Contact />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Footer />
            </LazyLoadComponent>
            <Galaxy />
        </>
    )
}

export default App
