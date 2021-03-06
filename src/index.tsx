import isMobile from "is-mobile"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

if (isMobile()) {
    document.body.classList.add("is-mobile")
}
