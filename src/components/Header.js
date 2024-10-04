import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO, PROFILE } from "../utils/constants";

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
        <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between " >
            <div>
                <img className=" w-56 " src={NETFLIX_LOGO} alt="Netflix-logo"></img>
            </div>
            { user &&
            <div className="flex">
                <button className="my-10 mx-5 text-red-700 bg-white font-bold rounded-md p-1" >GPT Search</button>
                <div>
                    <img className="h-10 my-9 mx-6 " src={PROFILE} alt="profile"></img>
                </div>
                <button className="my-10 mx-5 text-red-700 bg-white font-bold rounded-md p-1" onClick={handleSignOut}>Sign Out</button>
            </div>
            }
        </div>
    )
}

export default Header;