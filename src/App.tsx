import About from './Layouts/About/About'
import Hero from './Layouts/Hero/Hero'
import Work from './Layouts/Work/Work'
import Menu from './Layouts/Menu/Menu'
import Contact from './Layouts/Contact/Contact'
import Footer from './Layouts/Footer/Footer'
import Comete1 from './assets/img/effect/comete_1.module.svg'
import './assets/css/App.scss'
import './assets/css/Comete.scss'
import Galaxy from './components/Galaxy/Galaxy'
import Soucoupes from './components/Soucoupes/Soucoupes'

function App() {
    return (
        <>
            <Menu />
            <Hero />
            <About />
            <Work />
            <Contact />
            <Footer />
            <Galaxy />
            <Soucoupes />
            <img className={'first'} src={Comete1} alt={'comète'} />
        </>
    )
}

export default App
