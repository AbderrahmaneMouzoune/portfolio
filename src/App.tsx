import About from './Layouts/About/About'
import Hero from './Layouts/Hero/Hero'
import Work from './Layouts/Work/Work'
import Menu from './Layouts/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

function App() {
    return (
        <>
            <Menu />
            <Hero />
            <About />
            <Work />
        </>
    )
}

export default App
