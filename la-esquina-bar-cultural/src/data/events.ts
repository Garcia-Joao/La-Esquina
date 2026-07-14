import poster1 from "../assets/images/posters/poster1.jpg";
import poster2 from "../assets/images/posters/poster2.jpg";
import poster3 from "../assets/images/posters/poster3.jpg";
import type { EventData } from "../types/event";

export const events: EventData[] = [

{
    id:1,
    title:"Inauguração La Esquina",
    description:
    "A primeira noite da La Esquina. Um encontro de música, cultura e sabores para inaugurar nossa esquina.",
    date:"04 Setembro",
    hour:"17:00",
    category:"Inauguração",
    image:poster1,
    price:"Entrada gratuita",
    artists:[
        {
            id:1,
            name:"Elis e Eles",
            description:"Show ao vivo",
            instagram:"https://www.instagram.com/eliseelesoficial"
        }
    ]
},

{
    id:2,
    title:"Noite La Esquina",
    description:
    "Uma noite especial com música, cerveja artesanal e encontros.",
    date:"10 Outubro",
    hour:"17:00",
    category:"Música",
    image:poster2,
    price:"Entrada gratuita",
    artists:[
        {
            id:1,
            name:"DJ Nuts",
            description:"DJ Set",
            instagram:"https://www.instagram.com/djnuts"
        }
    ]
},

{
    id:3,
    title:"Halloween La Esquina",
    description:
    "Uma noite temática com música, fantasias e experiências especiais.",
    date:"31 Outubro",
    hour:"17:00",
    category:"Evento Especial",
    image:poster3,
    price:"Consultar",
    artists:[
        {
            id:1,
            name:"Nedu Lopes",
            description:"Show ao vivo",
            instagram:"https://www.instagram.com/nedulopes"
        }
    ]
}

];