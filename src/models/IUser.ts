import type {addressItem} from "./Address.ts";
import type { companyItem } from "./Company.ts";

export interface IUser {
	website: string;
	address: addressItem;
	phone: string;
	name: string;
	company: companyItem;
	id: number;
	email: string;
	username: string;
}

