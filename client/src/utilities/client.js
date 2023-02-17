import axios from "axios";

const config = require("./config");
const token = localStorage.getItem("jwt_token");

const Axios = axios.create({
    baseURL: config.api_dev_url,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
});

export default Axios;
