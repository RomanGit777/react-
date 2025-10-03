import type {geoItem} from "./Geo.ts";

export interface addressItem {
    zipcode: string;
    geo: geoItem;
    suite: string;
    city: string;
    street: string;
}