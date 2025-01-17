import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { store, userAction } from "../Redux/Store";
import { jwtDecode } from "jwt-decode";
import { CredentialsModel } from "../Models/CredentialsModel";

class UserService {

     public constructor () {
          const token = localStorage.getItem("token")
          if(!token) return
          const container = jwtDecode<{user: UserModel}>(token)
          const dbUser = container.user
          const action = userAction.initUser(dbUser)
          store.dispatch(action)
     }
	
    public async register(user: UserModel) {
         const response = await axios.post<string>(appConfig.registertUrl, user)                    
         const token = response.data
         localStorage.setItem("token", token)
         const container = jwtDecode<{user: UserModel}>(token)
         const dbUser = container.user
         const action = userAction.initUser(dbUser)
         store.dispatch(action)

    }

    public async login(credentials: CredentialsModel) {
        const response = await axios.post<string>(appConfig.logintUrl, credentials)                    
        const token = response.data
        localStorage.setItem("token", token)
        const container = jwtDecode<{user: UserModel}>(token)
        const dbUser = container.user
        const action = userAction.initUser(dbUser)
        store.dispatch(action)

   }
   
   public logout() {
     localStorage.removeItem("logout")
     const action = userAction.logoutUser()
     store.dispatch(action)
   }


}

export const userService = new UserService();
