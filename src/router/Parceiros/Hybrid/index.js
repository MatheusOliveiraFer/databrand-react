import { Desktop } from "../../../router/Menu";
import ParceiroHybrid from "../../../components/Parceiro/Hybrid";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    navigate(0);
    const informationOFPage = {
        "title" : "Quem é Enfocus??",
        "description" : "Fundada em 1993 e sediada em Gent, na Bélgica, a Enfocus é um fornecedor global de softwares de validação de PDF e automação de processos, incluindo PitStop, Switch, BoardingPass e Connect. Desde o início, a crença fundamental da Enfocus tem sido que a tecnologia deve seguir o processo e não o contrário. Ao desenvolver soluções que se originam dessa filosofia, a Enfocus permite que seus clientes integrem seus ecossistemas de tecnologia para aumentar a eficiência, precisão e consistência, melhorando o desempenho e a lucratividade. A equipe Enfocus faz parceria com OEMs de software, fornecedores e integradores para conectar sistemas distintos em pré-impressão, impressão e acabamento, bem como gerenciar a qualidade. A Enfocus é uma unidade de negócios da Esko, uma empresa Danaher, e tem instalações de R&D e fabricação na Europa, EUA, China e Índia.",
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
                "paragraph1": "Fundada em 1993 e sediada em Gent, na Bélgica, a Enfocus é um fornecedor global de softwares de validação de PDF e automação de processos, incluindo PitStop, Switch, BoardingPass e Connect.",
                "paragraph2": "Desde o início, a crença fundamental da Enfocus tem sido que a tecnologia deve seguir o processo e não o contrário. Ao desenvolver soluções que se originam dessa filosofia, a Enfocus permite que seus clientes integrem seus ecossistemas de tecnologia para aumentar a eficiência, precisão e consistência, melhorando o desempenho e a lucratividade.",
                "paragraph3": "A equipe Enfocus faz parceria com OEMs de software, fornecedores e integradores para conectar sistemas distintos em pré-impressão, impressão e acabamento, bem como gerenciar a qualidade. A Enfocus é uma unidade de negócios da Esko, uma empresa Danaher, e tem instalações de R&D e fabricação na Europa, EUA, China e Índia."
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
            <ParceiroHybrid item={informationOFPage} />      
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