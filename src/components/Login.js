import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";

const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true)

    const [formMessage, setFormMessage] = useState("")

    const toggleForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleForm = ()=>{
        const message = validateForm(email.current.value, password.current.value);
        setFormMessage(message);  
    }

    return (
        <div>
            <Header/>
            <div>
                <img className="absolute " src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="bg-photo"></img>
            </div>
            <form onSubmit={(e)=> e.preventDefault()} className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-90  text-white rounded-md">
                <h1 className=" p-2 my-4 text-3xl font-bold" >{isSignInForm? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm=== true && (<input type="text" placeholder="Name" className="p-4 my-2 w-full rounded-md bg-black bg-opacity-20 border border-gray-500"/>) }
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-2 w-full rounded-md bg-black bg-opacity-20 border border-gray-500"/>
                <input ref={password} type="password" placeholder="Password"className="p-4 my-2 w-full rounded-md bg-black bg-opacity-20 border border-gray-500"/>
                <p className="p-2 text-red-700">{formMessage}</p>
                <h1 className="bg-red-700 text-center p-2 my-2 font-bold w-full rounded-md cursor-pointer" onClick={handleForm}>{isSignInForm? "Sign In" : "Sign Up"}</h1>
                <p className="my-4" >{isSignInForm? "New to Netflix?" : "Already Registered?"} <span className="font-bold cursor-pointer" onClick={toggleForm}> {isSignInForm? "Sign Up Now." : "Sign In Now."} </span> </p>
            </form>
        </div>
    )
}

export default Login;