import ogo from "../../Images/ogoluwa.png";
import AppInput from "../../Components/AppInput/appInput";
import AppButton from "../../Components/AppButton/appButton";
import {

    Link
} from "react-router-dom";
import "./signup.scss";

function SignUp() {
    return (
        <div className="flex signUp">
            <div className="relative text-center text-white	hero">
                <img src={ogo} alt="ogo" />
                <h6 className="bottomText">Building exceptional services with Back Office Support and Business Perfomance</h6>
            </div>
            <div className="pl-1 pt-12 pr-20 createAccount">
                <h3>Create Account</h3>
                <p className="mt-4">Build an exceptional business</p>
                <div className="mt-7 formDiv">
                    <form>
                        <div className="flex w-full justify-between">
                            <div className="w-2/5"> <AppInput label="First Name" type="text" arialabel="Firstname" placeholder="Enter your first name" htmlFor="Firstname" /></div>
                            <div className="w-2/5"> <AppInput label="Last Name" type="text" arialabel="Lastname" placeholder="Enter your last name" htmlFor="Lastname" /></div>
                        </div>
                        <AppInput label="Phone Number" type="number" arialabel="Phonenumber" placeholder="Enter your phone number" htmlFor="Phonenumber" />

                        <AppInput label="Email Address" type="text" arialabel="Emailaddress" placeholder="Enter your email address" htmlFor="Emailaddress" />
                        <AppInput label="Password" type="password" arialabel="Password" placeholder="Enter your password" htmlFor="Password" />

                        <div className="flex items-center justify-between mt-10 bottomDiv">
                            <div className="rememberMe">
                                <label className="flex">
                                    <input className="mr-2" type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                            </div>
                            <a className="forgotPassword hover:text-blue-800" href="forgot">
                                Forgot Password?
                            </a>
                        </div>
                        <Link to="/dashboard" className="buttonDiv"> <AppButton title="Sign Up" className="signUp" /> </Link>

                    </form>
                    <div className="mt-10 flex gotAnAccount justify-between w-full">
                        <div className="line" />
                        <p>
                            Got an Account? <a href="signin">Sign In</a>
                        </p>
                        <div className="line" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
