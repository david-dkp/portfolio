import tags from "./tags"
import BillSplitterImg from "../assets/projectImages/bill_splitter.jpg"
import MappartImg from "../assets/projectImages/mappart.jpg"
import CryptoWalletAppImg from "../assets/projectImages/crypto_wallet_app.jpg"
import CalculItImg from "../assets/projectImages/calcul_it.jpg"
import ShaRideImg from "../assets/projectImages/ShaRide.jpg"

const apps = [
    {
        id: "mappart",
        image: MappartImg,
        appName: "Mappart",
        tags: [tags.android],
        githubUrl: "https://github.com/david-dkp/P7_Go4Lunch",
        description:
            "Une application qui facilite la recherche de logements partout dans le monde. Une relation entre acheteur et vendeur plus forte que jamais.",
        technologies: [
            "MVVM",
            "Material Design",
            "RxJava",
            "Maps SDK",
            "Retrofit",
            "Room",
            "Firebase Auth",
            "Firebase Firestore",
            "Places API",
            "Dagger Hilt",
            "Glide",
            "MVVM",
            "Material Design",
            "RxJava",
            "Maps SDK",
            "Retrofit",
            "Room",
            "Firebase Auth",
            "Firebase Firestore",
            "Places API",
            "Dagger Hilt",
            "Glide",
            "MVVM",
            "Material Design",
            "RxJava",
            "Maps SDK",
            "Retrofit",
            "Room",
            "Firebase Auth",
            "Firebase Firestore",
            "Places API",
            "Dagger Hilt",
            "Glide",
        ],
    },
    {
        id: "crypter-wallet-app",
        image: CryptoWalletAppImg,
        appName: "Crypter Wallet App",
        tags: [tags.android, tags.studentProject],
        description:
            "Une application de gestion de cryptomonnaire. Effectue, sécurise et encrypte toute vos transactions.",
        technologies: [
            "Firebase Auth",
            "Firebase Firestore",
            "Firebase Storage",
            "Coroutines",
            "DataBinding",
            "Kotlin Flows",
            "Koin",
            "Maps SDK",
            "Room",
        ],
    },
    {
        id: "bill-splitter",
        image: BillSplitterImg,
        appName: "Bill Splitter",
        tags: [tags.web, tags.react, tags.personalProject],
        description:
            "Une application de gestion de finance pour des projets ou simplement un repas enre ami.",
        technologies: [
            "DataBinding",
            "Kotlin Flows",
            "Koin",
            "Maps SDK",
            "Room",
        ],
    },
    {
        id: "calculit",
        image: CalculItImg,
        appName: "Calcult It",
        tags: [tags.android, tags.personalProject],
        description:
            "Une calculatrice digital très complète qui permet de calculer, convertir, mesurer et gerer ses comptes !",
        technologies: [
            "DataBinding",
            "Kotlin Flows",
            "Koin",
            "Maps SDK",
            "Room",
            "Glide",
        ],
    },
    {
        id: "sharide",
        image: ShaRideImg,
        appName: "ShaRide",
        tags: [tags.android, tags.studentProject],
        description:
            "Une application de covoiturage qui renforce la relation entre les personnes, favorise la rencontre plutot que l’entraide.",
        technologies: [
            "DataBinding",
            "Kotlin Flows",
            "Koin",
            "Maps SDK",
            "Room",
            "Glide",
        ],
    },
]

export default apps
