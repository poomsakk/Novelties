import axios from "axios";

export const api = axios.create({
    baseURL: 'http://raspberrypi.local:8010'
});

// 'http://localhost:5000'
// 'http://raspberrypi.local:8010'