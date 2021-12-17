import tags from "./tags"
import Go4LunchImage from "../assets/projectImages/go4lunch-image.png"
import RealEstateManagerImage from "../assets/projectImages/realestatemanager-image.png"
import WebsiteImage from "../assets/projectImages/website-image.png"
import WeatherAppImage from "../assets/projectImages/weatherapp-image.png"

const apps = [
    {
        id: "weatherapp",
        image: WeatherAppImage,
        appName: "Weather App",
        tags: [tags.web, tags.react, tags.personalProject],
        githubUrl: "https://github.com/david-dkp/WeatherApp",
        websiteUrl: "https://unruffled-fermi-18e89f.netlify.app",
        description:
            "Un site internet qui indique la météo d'aujourd'hui, celles des suivantes, et les points forts de la journée. Géolocalisation et possibilité de rechercher une ville.",
        technologies: ["React", "Redux", "Sass", "JSX", "MetaWeather API"],
    },
    {
        id: "go4lunch",
        image: Go4LunchImage,
        appName: "Go4Lunch",
        tags: [tags.android, tags.studentProject],
        githubUrl: "https://github.com/david-dkp/P7_Go4Lunch",
        description:
            "Une application collaborative qui permet aux employés d'une entreprise de facilement s'organiser lors du déjeuner.",
        technologies: [
            "RxJava",
            "RxAndroid",
            "Retrofit",
            "Dagger Hilt",
            "Datastore",
            "Preferences (Settings)",
            "Work Manager",
            "Glide",
            "View binding",
            "Maps Android SDK",
            "Maps Places API",
            "Facebook Android SDK",
            "Firebase Auth",
            "Firebase Firestore",
        ],
    },
    {
        id: "real-estate-manager",
        image: RealEstateManagerImage,
        appName: "Real Estate Manager",
        tags: [tags.android, tags.studentProject],
        githubUrl: "https://github.com/david-dkp/P9_RealEstateManager",
        description:
            "Un outil pour les agents immobilier. Simple d'utilisation depuis n'importe quel appareil grâce à un design adaptatif.",
        technologies: [
            "Room",
            "Retrofit",
            "Kotlin Coroutines",
            "Flow",
            "Mockito",
            "Data binding",
            "Robolectric",
            "Preferences (Settings)",
            "Koin",
            "Glide",
            "Maps Android SDK",
            "Maps Places SDK",
            "Firebase UI",
            "Firebase Auth",
            "Firebase Firestore",
            "Firebase Storage",
        ],
    },
    {
        id: "my-website",
        image: WebsiteImage,
        appName: "Mon site internet",
        tags: [tags.web, tags.react, tags.personalProject],
        githubUrl: "https://github.com/david-dkp/portfolio",
        description:
            "Un site internet simple et minimaliste pour me présenter et présenter les projets sur lesquels j'ai travaillé.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "React router",
            "Styled components",
            "AOS",
            "Formspree",
        ],
    },
]

export default apps
