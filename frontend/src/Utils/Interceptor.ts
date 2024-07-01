import axios from "axios";

class Interceptor {
	public create() {

        axios.interceptors.request.use(req => {
            const token = localStorage.getItem("token")
            if(!token) return
            req.headers.Authorization = "Bearer " + token;
            return req
        })
    
    }
}

export const interceptor = new Interceptor();
