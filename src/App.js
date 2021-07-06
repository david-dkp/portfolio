import "./App.css"
import { useEffect } from "react"
import Navigation from "./ui/navigation/Navigation"
import Home from "./ui/home/Home"
import Apps from "./ui/apps/Apps"
import Contact from "./ui/contact/Contact"
import Aos from "aos"
import { FormspreeProvider } from "@formspree/react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import ScrollToTop from "./ui/common/ScrollToTop"

function App() {
    useEffect(() => {
        Aos.init({
            startEvent: "load",
        })
    }, [])
    return (
        <FormspreeProvider project="1701476863047630380">
            <div className="App">
                <Router>
                    <ScrollToTop />
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/apps/:id" component={Apps} />
                        <Route path="/apps" component={Apps} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Router>
            </div>
        </FormspreeProvider>
    )
}

export default App
