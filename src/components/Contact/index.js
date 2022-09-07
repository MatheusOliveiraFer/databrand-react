import whatsappIcon from "../../assets/svg/wpp.svg";

const Index = () => {
    return (
        <div class="contact">
            <a 
                target="_blank" 
                rel="noreferrer" 
                className="fixed bottom-[102px] right-[66px]"
                href="https://api.whatsapp.com/send?phone=553136651162&text=Digite sua mensagem aqui...">
                <img alt="Icone Whatsapp" src={whatsappIcon} />
            </a>
        </div>
    );
}
export default Index;