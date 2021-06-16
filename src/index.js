import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "aos/dist/aos.css"
import styled from "styled-components"

const isProductionMode = process.env.NODE_ENV === "production"

const ProdContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(180.29deg, #20293f 0.25%, #0a0d14 162.58%);
`

ReactDOM.render(
    <React.StrictMode>
        {isProductionMode ? (
            <ProdContainer>
                <h1>Portfolio en construction...</h1>
            </ProdContainer>
        ) : (
            <App />
        )}
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
