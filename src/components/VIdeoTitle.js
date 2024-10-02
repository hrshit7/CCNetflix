const VideoTitle = ({title, overview})=>{
    return (
        <div className="pt-40 px-10 ">
            <h1 className="text-6xl font-bold">{title}</h1>
            <h1 className="text-lg w-1/3 pt-4">{overview}</h1>
            <div className="pt-5">
                <button className="p-4 px-12 text-lg m-2 bg-gray-400 rounded-md">▶️Play</button>
                <button className="p-4 px-12 text-lg m-2 bg-gray-400 text-white rounded-md">🤏More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;