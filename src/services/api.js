import axios from "axios";

const api = axios.create({
    baseURL:'https://api.openweathermap.org/'
});

//key= 0dc5bf0b8331f0f9f9857e4c83867910

export default api;