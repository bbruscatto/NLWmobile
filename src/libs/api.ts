import axios from "axios";

export const api = axios.create({
    baseURL: 'http://189.33.102.65:3333'
})