import { AndroidLogo, WebLogo } from "../ui/common/svgs"

const skills = [
    {
        name: "Android",
        logo: {
            svg: AndroidLogo,
            color: "#3BD37F",
        },
        languages: ["Java", "Kotlin", "XML", "SQL"],
        libraries: [
            "Jetpack",
            "Navigation Component",
            "Retrofit",
            "Dagger Hilt",
            "Room",
            "Material Design",
            "RxJava",
            "Coroutines",
            "Flow",
        ],
        tools: ["Android Studio", "Git", "Figma"],
    },
    {
        name: "Web",
        logo: {
            svg: WebLogo,
            color: "#000",
        },
        languages: ["JavaScript", "HTML", "CSS", "SQL"],
        libraries: [
            "React",
            "Redux",
            "Next",
            "Node",
            "Express",
            "Passport",
            "Sequelize",
            "Material UI",
            "Sass",
            "Styled Components",
        ],
        tools: [
            "Visual Studio Code",
            "WebStorm",
            "Git",
            "Figma",
            "Contentful CMS",
        ],
    },
]

export default skills
