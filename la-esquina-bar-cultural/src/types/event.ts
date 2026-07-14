import type { Artist } from "./artist";

export interface EventData {

    id:number;

    title:string;

    category:string;

    description:string;

    image:string;

    date:string;

    hour:string;

    price:string;

    artists: Artist[];

}