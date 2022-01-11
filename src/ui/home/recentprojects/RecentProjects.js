import React, {useEffect, useState} from "react"
import styled from "styled-components"
import Header from "../common/Header"
import AppProject from "../../common/AppProject"
import {getProjects} from "../../../apis/projectsApi";

function RecentProjects() {
    const [loading, setLoading] = useState(true)
    const [currentProjects, setCurrentProjects] = useState([])

    const toApps = (projects) => {

        return projects.map(project => {
            return {
                appName: project.fields.name,
                description: project.fields.description,
                tags: project.fields.tags.map(i => ({label: i.fields.name, color: i.fields.color})),
                githubUrl: project.fields.githubUrl,
                technologies: project.fields.technologies,
                websiteUrl: project.fields.websiteUrl,
                image: project.fields.imageUrl.fields.file.url
            }
        })
    }

    const sortByCompletionDate = (a, b) => {
        const dateA = new Date(a.fields.completedAt)
        const dateB = new Date(b.fields.completedAt)

        return dateB.getTime() - dateA.getTime()
    }

    useEffect(() => {
        getProjects().then(data => {
            setCurrentProjects(toApps(data.sort(sortByCompletionDate)))
            setLoading(false)
        })
    }, [])

    return (
        <Container id="projects-section">
            <Header title="Mes projets récents"/>
            {loading ? <div className={"progressBar"}><div className={"line"} /> </div> :
                (<div className="projects-container">
                    {currentProjects.map((project, i) => <AppProject key={i} app={project}/>)}
                </div>)}
        </Container>
    )
}

const Container = styled.section`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  
  .progressBar {
    
    @keyframes loadingBarAnim {
      0% {
        margin-left: -20%;
      }
      
      100% {
        margin-left: 120%;
      }
    }
    
    position: relative;
    border-radius: 999px;
    width: 100%;
    margin-inline: 20px;
    max-width: 400px;
    background-color: white;
    height: 10px;
    margin-block: 100px;
    padding: 1px;
    overflow: hidden;
    
    .line {
      width: 20%;
      height: 100%;
      animation: loadingBarAnim 1s running 0s;
      animation-iteration-count: infinite;
      background-color: black;
      border-radius: 999px;
      transform: translateX(-50%);
    }
  }
  
  .projects-container {
    margin-top: 50px;
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-inline: 15px;
    justify-content: center;
  }

  .see-more-container {
    text-decoration: none;
    overflow: hidden;
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid white;
    box-shadow: 0px 0px 2px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    font-size: 3rem;
    color: white;
    transition: all 0.5s ease;

    * {
      z-index: 1;
    }

    .see-more-background {
      position: absolute;
      border-radius: 999px;
      width: 0%;
      height: 0%;
      bottom: 0px;
      left: 0px;
      transform: translate(-50%, 50%);
      background-color: white;
      z-index: 0;
      transition: all 0.2s linear;
    }

    .logo {
      position: relative;
      width: 100px;
      height: 100px;

      * {
        transition: all 0.5s ease;
        position: absolute;
      }

      .first {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 6px;
        width: 100px;
        background-color: white;
      }

      .second {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100px;
        width: 6px;
        background-color: white;
      }
    }

    .text {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    }
  }

  .see-more-container:hover {
    color: black;

    .see-more-background {
      width: 300%;
      height: 300%;
    }

    .logo div {
      background-color: black;
    }
  }
`

export default RecentProjects
