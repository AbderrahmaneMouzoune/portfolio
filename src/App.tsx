import AnimateText from "./components/AnimateText/AnimateText"
import Button from "./components/Button/Button"
import "./style.css"

function App() {
  return (
    <>
      <h1>Hello !</h1>
      <Button 
        value="test" 
        link="#about"
      />
      <AnimateText
        values={["Apprendre", "Créer", "Innover"]}
      />
    </>
  )
}

export default App
