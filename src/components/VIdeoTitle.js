import { KnowMoreIcon, PlayIcon } from "../utils/icons";

const VideoTitle = ({title, overview})=>{
    return (
        <div className="w-screen h-screen pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <h1 className="text-lg w-1/3 pt-4">{overview}</h1>
            <div className="pt-5 flex">
                <button className="p-4 px-12 text-lg m-2 bg-white text-black rounded-md flex hover:bg-opacity-80" ><PlayIcon/> &nbsp; Play</button>
                <button className="p-4 px-12 text-lg m-2 bg-gray-400 text-white rounded-md flex hover:bg-opacity-80"><KnowMoreIcon/> &nbsp; More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;