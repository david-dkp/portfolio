import tags from "./tags"
import BillSplitterImg from "../assets/projectImages/bill_splitter.jpg"
import MappartImg from "../assets/projectImages/mappart.jpg"
import CryptoWalletAppImg from "../assets/projectImages/crypto_wallet_app.jpg"
import CalculItImg from "../assets/projectImages/calcul_it.jpg"
import ShaRideImg from "../assets/projectImages/ShaRide.jpg"

const apps = [
    {
        image: MappartImg,
        appName: "Mappart",
        tags: [tags.android],
        description: "Une application qui facilite la recherche de logements partout dans le monde. Une relation entre acheteur et vendeur plus forte que jamais."
    },
    {
        image: CryptoWalletAppImg,
        appName: "Crypter Wallet App",
        tags: [tags.android, tags.studentProject],
        description: "Une application de gestion de cryptomonnaire. Effectue, sécurise et encrypte toute vos transactions."
    },
    {
        image: BillSplitterImg,
        appName: "Bill Splitter",
        tags: [tags.web, tags.react, tags.personalProject],
        description: "Une application de gestion de finance pour des projets ou simplement un repas enre ami."
    },
    {
        image: CalculItImg,
        appName: "Calcult It",
        tags: [tags.android, tags.personalProject],
        description: "Une calculatrice digital très complète qui permet de calculer, convertir, mesurer et gerer ses comptes !"
    },
    {
        image: ShaRideImg,
        appName: "ShaRide",
        tags: [tags.android, tags.studentProject],
        description: "Une application de covoiturage qui renforce la relation entre les personnes, favorise la rencontre plutot que l’entraide."
    },
]

export default apps