import video from "../../assets/video/databrand.mp4";

export const Index = () => {
    return (
        <div className="w-full h-screen">
            <video src={video} autoPlay loop muted />
        </div>
    );
}