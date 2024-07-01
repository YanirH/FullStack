import { useForm } from "react-hook-form";
import "./Register.css";
import { UserModel } from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../Services/UserService";

export function Register(): JSX.Element {
   
    const {register, handleSubmit} = useForm<UserModel>()
    const navigate = useNavigate()
    async function send (user: UserModel) {
        try {
            await userService.register(user)
            alert("Registered succesfuly")
            navigate("/home")
        } catch (err: any) {
            alert(err.message)
        }
    }


    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
                <label>First Name: </label>
                <input  placeholder="username..." type="text" {...register('firstName')} required minLength={2} maxLength={100} /> 
                <label>Last Name: </label>
                <input  placeholder="0.." type="text" {...register('lastName')} required minLength={2} maxLength={100}/>
                <label>email: </label>
                <input  placeholder='0..' type="email" {...register('email')} required minLength={2} maxLength={100}/>
                <label>Password: </label>
                <input type="password"  {...register('password')} required minLength={6} maxLength={30}  /> 
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
