import { NETFLIX_LOGO } from "../utils/constants";

const Error = ()=>{
    return (
        <div className="my-40 flex items-center">
            <img className="h-40 w-70 mx-40" src={NETFLIX_LOGO} alt="Netflix-logo"></img>
            <h1>❤️Ooops... Something Wrong Happens🖤</h1>
        </div>
    )
}

export default Error;