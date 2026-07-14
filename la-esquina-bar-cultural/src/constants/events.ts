import poster1 from "../assets/images/posters/poster1.jpg";
import poster2 from "../assets/images/posters/poster2.jpg";
import poster3 from "../assets/images/posters/poster3.jpg";
import poster4 from "../assets/images/posters/poster4.jpg";

export interface EventData {
    id: number;
    title: string;
    description: string;
    date: string;
    hour: string;
    category: string;
    image: string;
    bands: string[];
    price: string;
}

export const events: EventData[] = [
    {
        id: 1,
        title: "Jazz Night",
        description:
            "Uma noite dedicada ao jazz contemporâneo e clássico.",
        date: "18 Julho",
        hour: "20:00",
        category: "Jazz",
        image: poster1,
        bands: [
            "Blue Quartet",
            "Lucas Martins Trio"
        ],
        price: "R$ 30"
    },
    {
        id: 2,
        title: "Rock na Esquina",
        description:
            "As melhores bandas independentes da região.",
        date: "19 Julho",
        hour: "21:30",
        category: "Rock",
        image: poster2,
        bands: [
            "Black River",
            "Rust Machine"
        ],
        price: "R$ 35"
    },
    {
        id: 3,
        title: "Samba Cultural",
        description:
            "Roda de samba com músicos convidados.",
        date: "20 Julho",
        hour: "18:00",
        category: "Samba",
        image: poster3,
        bands: [
            "Samba do Largo"
        ],
        price: "Entrada Gratuita"
    },
    {
        id: 4,
        title: "Blues Session",
        description:
            "Noite especial de Blues.",
        date: "26 Julho",
        hour: "20:30",
        category: "Blues",
        image: poster4,
        bands: [
            "Old Street Blues"
        ],
        price: "R$ 25"
    }
];