import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import {throttle} from "lodash"
import cvpdf from "../../../assets/cv_david_dekeuwer.pdf"
import Header from "../common/Header"
import {Document, Page} from "react-pdf"

function DownloadCv() {
    const [pdfWidth, setPdfWidth] = useState(0)
    const pdfWrapperRef = useRef()

    const resizeThrottleDelay = 1500

    const setPdfSize = () => {
        if (pdfWrapperRef.current) {
            setPdfWidth(pdfWrapperRef.current.getBoundingClientRect().width)
        }
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            throttle(setPdfSize, resizeThrottleDelay)
        )
        setPdfSize()

        return () => {
            window.removeEventListener(
                "resize",
                throttle(setPdfSize, resizeThrottleDelay)
            )
        }
    }, [])

    return (
        <Container>
            <Header title="Mon CV"/>
            <a
                ref={pdfWrapperRef}
                className="cv"
                href={cvpdf}
                target="_blank"
                rel="noreferrer"
            >
                <Document className="doc" file={cvpdf}>
                    <Page
                        className="pdf-page"
                        renderMode="svg"
                        width={pdfWidth}
                        pageNumber={1}
                    />
                </Document>
            </a>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    margin-top: 1em;

    .doc {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cv {
        max-width: 500px;
        width: 80vw;
        margin-top: 40px;
        margin-bottom: 10px;
        transition: all 0.5s ease;

        &:hover {
            transform: scale(1.05);
            transition: all 0.5s ease;
        }
    }
`

export default DownloadCv
