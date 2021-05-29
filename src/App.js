import "./App.css"
import { useEffect } from "react"
import Navigation from "./ui/navigation/Navigation"
import Home from "./ui/home/Home"
import Apps from "./ui/apps/Apps"
import Contact from "./ui/contact/Contact"
import Aos from "aos"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apps" component={Apps} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
