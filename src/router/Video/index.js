import video from "../../assets/video/databrand.mp4";

const Index = () => {
    return (
        <div className="w-full h-screen">
            <video src={video} autoPlay loop muted />
        </div>
    );
}
export default Index;