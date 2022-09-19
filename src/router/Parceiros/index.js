import arrow from "../../assets/svg/arrow-down-circle.svg";

const Index = () => {
    return(
        <div className="w-full h-[700px] flex flex-col items-center">
            <div className="w-full h-[700px] LogoDataBrand10anos"></div>
            <div className="absolute bottom-[-680px] w-[3%] h-[3%] cursor-pointer">
                <img alt="Mais parceiros" src={arrow} />
            </div>
        </div>
    );
}
export default Index;