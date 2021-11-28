import {Doctor} from "./Doctor";

export interface MyDocResponse {
    success: boolean;
    message: string | undefined;
    data: Doctor
}