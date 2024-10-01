import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = ()=>{

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector((store)=>store.user);

    const handleSignOut= ()=>{
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error")
          });          
    }
    
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email:email, displayName:displayName}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        //unsubscribe whenever component unmounts.
        return ()=> unsubscribe;
    }, []);

    return (
        <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between" >
            <div>
                <img className=" w-56 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-logo"></img>
            </div>
            { user &&
            <div className="flex">
                <h1 className="my-8 text-2xl">{"Hello, " + user.displayName}</h1>
                <button className="m-8 text-red-700 bg-black font-bold rounded-md p-1" onClick={handleSignOut}>Sign Out</button>
            </div>
            }
        </div>
    )
}

export default Header;