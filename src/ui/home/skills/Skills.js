import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Header from "../common/Header"
import skills from "../../../data/skills"
import * as d3 from "d3"

function Skills() {
    const [currentSkills, SetSkills] = useState(
        skills.flatMap((e, i) => e.technologies)
    )

    const containerRef = useRef()

    function getSize(d) {
        var bbox = this.getBBox(),
            cbbox = this.parentNode.getBBox(),
            scale = Math.min(
                cbbox.width / bbox.width,
                cbbox.height / bbox.height
            )
        d.scale = scale
    }

    useEffect(() => {
        const containerElement = containerRef.current
        const width = containerElement.offsetWidth
        const height = containerElement.offsetHeight

        const data = currentSkills

        const canvas = d3
            .select(containerElement)
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        const pack = d3.pack().size([width, height]).padding(5)

        const hierarchy = d3
            .hierarchy({ children: data.sort((a, b) => b.level - a.level) })
            .sum((d) => d.level)

        const root = pack(hierarchy)

        const bubbles = canvas
            .selectAll(".technology")
            .data(root.leaves())
            .enter()
            .append("g")
            .attr("class", "technology")
            .attr("transform", (d) => `translate(${d.x}, ${d.y})`)

        bubbles
            .append("circle")
            .attr("r", (d) => d.r)
            .attr("fill-opacity", 1)
            .attr("fill", "#161b26")

        bubbles
            .append("text")
            .text((d) => d.data.name)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "white")
            .style("font-size", "1px")
            .style("font-size", getSize)
            .style("font-size", (d) => d.scale + "px")

        containerElement.scrollLeft = width / 5
        containerElement.scrollTop = height / 5
    })

    return (
        <Container>
            <Header title="Mes compétences" />
            <div ref={containerRef} className="bubbles-container" />
        </Container>
    )
}

const Container = styled.section`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .bubbles-container {
        width: 80vw;
        height: 80vh;
        max-width: 1200px;
        overflow: scroll;
    }
`

export default Skills
