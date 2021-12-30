import {File} from "./File";
import {Employee} from "./Employee";

export interface Doctor {
    id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    salutation: string;
    title?: string | undefined;
    www?: string | null;
    company: string;
    street?: string | undefined;
    zipcode?: number | undefined;
    city?: string | undefined;
    county?: string | undefined;
    state?: string | null;
    country: string;
    File?: File[];
    Employees?: Employee[];
    address_supplement: string | undefined;
    gender?: string | null;
    lat?: string | null;
    lng?: string | null;
    is_confirmed: boolean;
    is_visible: boolean;
    icon?: string | undefined;

}