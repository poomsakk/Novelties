import axios from "axios";

export const api = axios.create({
    baseURL: 'https://noveltiesbackend.poomsakk.com/'
});

// 'http://localhost:5000'
// 'http://raspberrypi.local:8010'