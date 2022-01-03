import "./App.css"
import {useEffect} from "react"
import Navigation from "./ui/navigation/Navigation"
import Home from "./ui/home/Home"
import Aos from "aos"
import {FormspreeProvider} from "@formspree/react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

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
                    <Navigation/>
                    <Switch>
                        <Route exact path={["/", "/apps", "/contact",]} component={Home}/>
                    </Switch>
                </Router>
            </div>
        </FormspreeProvider>
    )
}

export default App
