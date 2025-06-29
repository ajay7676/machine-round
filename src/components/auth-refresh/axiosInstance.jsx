import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
});
 axiosInstance.interceptors.request.use((config) => {
    const {access_token} = localStorage.getItem("auth-ref-token") || [];
     console.log(access_token)
    if(access_token){
        config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config ;
 });
export default axiosInstance