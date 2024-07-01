import { useSelector } from "react-redux";
import "./UserMenu.css";
import { AppState } from "../../../Redux/Store";
import { UserModel } from "../../../Models/UserModel";
import { NavLink } from "react-router-dom";
import { userService } from "../../../Services/UserService";

export function UserMenu(): JSX.Element {
    const user = useSelector<AppState, UserModel>(store => store.user)

   
    return (
        <div className="UserMenu">
			{!user && <> 
                <span>Hello Guest</span>
                <NavLink to='/register'>Register</NavLink>
                <span> | </span>
                <NavLink to='/login'>Login</NavLink>
            </> }

            {user && <> 
                <span>{`Hello ${user.firstName}`} | </span>
                <NavLink to='/home' onClick={userService.logout}>Logout</NavLink>
            </> }
        </div>
    );
}
