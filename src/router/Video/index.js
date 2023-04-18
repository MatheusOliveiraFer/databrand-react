import Background from "../../assets/img/background.jpeg";
const Index = () => {
    return (
        <div className="w-full h-screen bg-slate-500">
            {/* <video src="https://res.cloudinary.com/dmkqw4yoc/video/upload/v1667351608/databrand_t8klyu.mp4" autoPlay loop muted /> */}
            <img alt="Gerenciamento de Cores" src={Background} className="w-full h-screen" />
        </div>
    );
}
export default Index;