import axios from "axios";
import { token } from "./Tokeservices";

console.log(token)
export const axiosInstance = axios.create({
    baseURL: "http://localhost:8082/api",
    headers: {
        "Content-Type": "application/json",
    },
});
// axiosInstance.interceptors.request.use((config) => {

//     const token = sessionStorage.getItem("token");
//     console.log(token, "token")

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     } else {
//         // console.log("Token not found");
//         window.location.href = userInfo?.Role == "Admin" ? "/admin/login" : "/user/login"
//     }

//     return config;
// });