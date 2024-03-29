import { Desktop } from "../../../router/Menu";
import Parceiro from "../../../components/Parceiro";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    navigate(0);
    const informationOFPage = {
        "title" : "Quem é EFI",
        "description" : "Todos na EFI estão incansavelmente focados em apenas uma coisa: o crescimento e o sucesso do seu negócio de impressão.",
        "description2" : "É por isso que dezenas de milhões de profissionais de impressão em todo o mundo recorrem à EFI para impulsionar seu sucesso.",
        card1: {
            "title": "Melhores Produtos",
            "description": "A EFI está liderando a transformação mundial de imagens analógicas para digitais. Alimentar essa transformação é nosso compromisso de reinvestir 16% de nossa receita em pesquisa e desenvolvimento todos os anos. Não vemos isso apenas como um investimento em nossa empresa. É um investimento no seu também.",
            hashtag: {
                "hashtag1": "#transformação",
                "hashtag2": "#mundial",
                "hashtag3": "#EFI"   
            }
        },
        card2: {
            "title": "Melhores Oportunidades",
            "description": "Do Fiery ao jato de tinta superwide, do menor custo por etiqueta aos processos de negócios mais automatizados, a EFI desenvolve produtos para oferecer suporte a um fluxo de trabalho completo de ponta a ponta para clientes em todo o mundo – dando aos parceiros uma vantagem competitiva distinta para o sucesso.",
            hashtag: {
                "hashtag1": "#automatizados",
                "hashtag2": "#tinta",
                "hashtag3": "#EFI"   
            }
        },
        card3: {
            "title": "Melhor Suporte",
            "description": "Nossos mais de 3.000 membros de equipe em todo o mundo comprovam nosso compromisso com você todos os dias desenvolvendo tecnologias inovadoras que, por sua vez, podem ajudar a acelerar suas vendas de soluções EFI agora e no futuro.",
            hashtag: {
                "hashtag1": "#compromisso",
                "hashtag2": "#equipe",
                "hashtag3": "#EFI"   
            }
        },
        //Programa de Parceiros
        programaParceiros: {
            title: {
                "paragraph": "O",
                "contents":"Programa de Parceiros Premier"
            },
            contents: {
                "paragraph1": "Todos os revendedores EFI Fiery Display Graphics na América Latina precisam ter pelo menos uma pessoa certificada para atuar como Suporte Técnico de Vendas e também para realizar instalações e treinamento de novos clientes. Os revendedores também devem fornecer suporte de primeiro nível.",
                "paragraph2": "A EFI e a databrand acreditam na base básica que move todos os negócios: o conhecimento.",
                "paragraph3": "O foco é criar uma massa de mão de obra capaz de utilizar todas as funcionalidades do software.",
                "paragraph4":"O software EFI Fiery XF possui mais de 70.000 instalações em todo o mundo. A databrand é responsável, como parceiro premier para LATAM, pela criação da cultura de cores, automação da produção e economia de recursos usando as tecnologias EFI Fiery Display Graphics."
            }
        },
        //EFIFiery Solutions
        efiFierySolutions: {
            title: {
                "paragraph": "EFI",
                "contents":"Fiery Solutions"
            },
            card1: {
                "title": "Fiery XF",
                "resumeText": "Introduzir o Fiery XF 7 em sua empresa de grande ou super-amplo é a maneira mais fácil...",
                "completeText": "Introduzir o Fiery XF 7 em sua empresa de grande ou super-amplo é a maneira mais fácil de obter resultados de cores superiores, obter o máximo de produtividade e lucrar com os insights de negócios."
            },
            card2: {
                "title": "JobFlow",
                "resumeText": "O Fiery JobFlow ™ automatiza as etapas de preparação do trabalho em fluxos...",
                "completeText": "O Fiery JobFlow ™ automatiza as etapas de preparação do trabalho em fluxos de trabalho de pré-impressão para produzir arquivos prontos para impressão. Este software de automação de fluxo de trabalho de impressão fácil de usar aumenta a produtividade e reduz os custos."
            },
            card3: {
                "title": "Prep-it",
                "resumeText": "O Fiery Prep-it ™ é uma solução de software poderosa e fácil de usar para a preparação...",
                "completeText": "O Fiery Prep-it ™ é uma solução de software poderosa e fácil de usar para a preparação, layout e produção automatizada de trabalhos de impressão para corte."
            }
        }
    }
    return (
        <>
            <Desktop  />
            <Parceiro item={informationOFPage} />      
            {/* <!-- Footer --> */}
            <footer class="text-center py-16 bg-gradient-to-r from-[#134780] text-sm mt-10">
                <p class="text-white">
                    Para qualquer dúvida ou contato conosco, clique no símbolo do Whatsapp ou<br />
                    envie e-mail para <span className="underline">contato@databrand.com.br</span>
                </p>
                <p class="mt-20 text-white"><span class="underline text-green-200 cursor-pointer">© databrand</span> todos os direitos reservados.</p>
            </footer>      
        </>
    )
}
export default Index;