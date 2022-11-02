import video from "../../assets/video/databrand.mp4";

const Index = () => {
    return (
        <div className="w-full h-screen">
            <video src={video} autoPlay={true} muted={true} loop={true} />
        </div>
    );
}
export default Index;