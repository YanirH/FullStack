import { useForm } from "react-hook-form";
import "./Login.css";
import { UserModel } from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../Services/UserService";
import { CredentialsModel } from "../../../Models/CredentialsModel";

export function Login(): JSX.Element {
    const {register, handleSubmit} = useForm<CredentialsModel>()
    const navigate = useNavigate()
    async function send (credentials: CredentialsModel) {
        try {
            await userService.login(credentials)
            alert("Login succesfuly")
            navigate("/home")
        } catch (err: any) {
            alert(err.message)
        }
    }
    return (
        <div className="Login">
			<form onSubmit={handleSubmit(send)}>
                <label>email: </label>
                <input type="email" {...register('email')} required minLength={2} maxLength={100} />
                <label>password: </label>
                <input type="password" {...register('password')} required minLength={6} maxLength={30} />
                <button>login</button>
            </form>
        </div>
    );
}
