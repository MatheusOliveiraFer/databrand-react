import LogoUltimate from "../../../assets/img/LogoUltimate.png";
import UltimateCertifield from "../../../assets/img/LogoUltimateCertificado.png";
import demo from "../../../assets/img/demo.png";


import BoardingPass from "../../../assets/img/boardingPass.png";
import PitStopServer from "../../../assets/img/PitStopServer.png";
import connect from "../../../assets/img/connect.png";

import PitStopPro from "../../../assets/img/PitStopPro.png"
import Switch from "../../../assets/img/Switch.png";

import Swal from 'sweetalert2';

const index = ({ item }) => {
    const Card1 = () => {
        Swal.fire({
            title: 'BoardingPass',
            text: 'O BoardingPass da Enfocus permite que o pessoal de atendimento ao cliente valide instantaneamente os arquivos em PDF para impressão. Integrado com um cliente de e-mail, o BoardingPass identifica erros que exigem o reenvio de um arquivo e automaticamente redige um e-mail de resposta. Os agentes de atendimento ao cliente ganham o poder de fornecer feedback rápido e compreensível do trabalho. Não é necessária Pré-impressão',
            imageUrl: BoardingPass,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card2 = () => {
        Swal.fire({
            title: 'PitStop Pro',
            text: 'O PitStop Pro é o padrão para validação de PDF do setor. É a única ferramenta que fornece poder de pré-impressão sobre PDF. O PitStop soluciona o processo de provas de pré-impressão, edição, reparo e relatório para qualquer desafio de PDF que sua equipe possa enfrentar.',
            imageUrl: PitStopPro,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card3 = () => {
        Swal.fire({
            title: 'PitStop Server',
            text: 'O PitStop Server traz recursos poderosos de controle de qualidade e automação para o seu processo de produção de PDF através de: •	Monitoramento de vários pontos de envio de arquivo, como servidores FTP, e-mail e pastas ativas de rede, •	Encaminhamento dos seus arquivos de forma inteligente para prova de pré-impressão de PDF e correção, •	Automação total da entrega e arquivamento dos arquivos de produção. O PitStop Server automatiza a integração, as provas de pré-impressão e o reparo de arquivos PDF, fornecendo simultaneamente o acesso a funcionalidades que ampliam sua abordagem para automação do fluxo de trabalho',
            imageUrl: PitStopServer,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card4 = () => {
        Swal.fire({
            title: 'Switch',
            text: 'O caminho para a automação é construído sobre conexões. A integração começa com a conexão de sistemas empresariais em um único fluxo de trabalho automatizado. Conectar tudo com tudo. Switch é a única verdadeira plataforma de automação de fluxo de trabalho que conecta: ERP, Web2Print, Imposição, Prova On-line, Gerenciamento de Cores, Fechamento de arquivo e muito mais. Switch é a única plataforma que automatiza seus processos, independentemente de suas aplicações ou dispositivos de impressão.',
            imageUrl: Switch,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card5 = () => {
        Swal.fire({
            title: 'Connect',
            text: 'O Enfocus Connect cria aplicativos e drivers de impressão personalizados em que você controla as configurações de: Especificações de Trabalho, Criação de PDFs, Preflight, Entrega de arquivos em praticamente qualquer lugar, Baseago na tecnologia PitStop',
            imageUrl: connect,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    return (
        <>
            <div className="w-full h-[230px] mt-[80px] bg-ultimate  z-40"></div>
            {/* Quem é Enfocus? */}
            <div className="w-full flex">
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Quem é Ultimate TechnoGraphics ?</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">A Ultimate TechnoGraphics inventou a imposição digital com o primeiro lançamento do Ultimate Impostrip® em 1989 e continua a desempenhar um papel de liderança no mercado desde então, fornecendo os produtos de imposição mais inovadores e progressivos. </div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">A automação gera resultados na impressão. Esta é a base de todo o nosso desenvolvimento de software e, hoje, os provedores de serviços de impressão em todo o mundo se beneficiam do aumento da produtividade em um ambiente digital e híbrido. </div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">Hoje, a Ultimate é líder em soluções de software de automação de imposição e acabamento. A empresa tem um rico histórico de fornecimento e integração de tecnologias de imposição em soluções de fluxo de trabalho de hardware e software para líderes da indústria de impressão.</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={UltimateCertifield} /></div>
                </div>
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Ultimate Impostrip® Certified Expert</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify ">A databrand e a primeira empresa na América do Sul a obter a credencial de Ultimate Impostrip® Certified Expert, a obtenção da credencial foi depois de um longo processo em que comprovamos toda expertise com os produtos da Ultimate Impostrip além dos serviços técnicos especializado em automação de produção de impressão. Seja para treinamento de software, suporte de implementação, consultoria de fluxo de trabalho de imposição ou suporte técnico, tudo isso com foco no atendimento ao cliente.</div>
                    </div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Automação Verdadeiramente Confiável </b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">Automação de imposição de páginas significa mãos livres, luzes apagadas, automação verdadeiramente confiável. Se você está considerando um ambiente de impressão digital, web2print, aumento na lucratividade ou simplesmente deseja fazer mais com os mesmos recursos, a automação é a resposta. Com a crescente demanda por tiragens mais curtas e tempos de entrega mais rápidos, você precisa pensar de maneira diferente sobre imposição e acabamento, pois automação gera resultados. Escolha qual versão do Ultimate Impostrip e para seu negócio.</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Ultimate Impostrip MUST</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify ">Na realidade de hoje, todos devem ter uma ferramenta de layout, não há mais razão para arrastar e soltar layouts no InDesign! Ultimate Impostrip® Must é a ferramenta de layout e imposição mais fácil de usar e abrangente, e você também não precisa mais de um plug-in! A solução independente Ultimate Impostrip® Must está disponível para MacOS ou Windows e fornece simplicidade absoluta na criação de booklets, step and repeat, cutting & stacking, e muito mais.</div>
                    </div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Ultimate Impostrip PRO</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">Independentemente se você é um profissional de pré-impressão ou está apenas começando na impressão, o Ultimate Impostrip® Pro leva ao mundo da imposição otimizada para impressão digital. Ele fornece os recursos profissionais para gerenciar um fluxo de trabalho de imposição, para aproveitar todos os recursos do seu equipamento de impressão. Obtenha controle total sobre a posição da página, sangrias, propagação da página, dimensionamento da página, marcas e margens para melhor qualidade.</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Ultimate Impostrip PRO OFFSET</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify ">Independentemente se você é um profissional de pré-impressão ou está apenas começando na impressão, o Ultimate Impostrip® Pro Offset o leva ao mundo da imposição otimizada para impressão offset ou híbrida. Ele fornece os recursos profissionais para gerenciar um fluxo de trabalho de imposição, para aproveitar todos os recursos do seu equipamento de impressão. Obtenha controle total sobre, posição da página, sangrias, distribuição da página, dimensionamento da página e margens para obter a melhor qualidade.</div>
                    </div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Ultimate Impostrip PRO NESTING</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">Independentemente se você é um profissional de pré-impressão ou está apenas começando na impressão, o Ultimate Impostrip® Pro Nesting o leva ao mundo da imposição otimizada para impressão de grande formato. Ele fornece os recursos profissionais para gerenciar um fluxo de trabalho de imposição, para aproveitar todos os recursos do seu equipamento de impressão. Obtenha controle total sobre a colocação de formas irregulares, marcas de registro e outras marcas, sangrias e margens para melhor qualidade.</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Ultimate Impostrip AUTOMATION	</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify ">Projetado com a produtividade em mente, o Ultimate Impostrip® Automation otimiza todos os aspectos do seu fluxo de trabalho de imposição de pré-impressão com ferramentas fáceis de usar, mas extremamente versáteis. Em muito pouco tempo, você pode configurar um link para seu MIS, seu sistema de edição de fotos on-line ou sistema de pedidos na web. Perfeito para entregas muito curtas em campanhas de marketing, transações e tiragens curtas de livros.</div>
                    </div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Ultimate Impostrip SCALABLE</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">Ultimate Impostrip® Scalable oferece potência, velocidade e flexibilidade incomparáveis para automatizar perfeitamente a criação de imposições complexas para produção de impressão de alto volume. Ele foi projetado para resolver o crescente gargalo na imposição devido ao aumento do tamanho dos trabalhos e ao crescente número de pequenas tiragens que devem ser impressas em um tempo de execução muito rápido. Os requisitos de fluxo de trabalho que buscam velocidade sempre apontarão para o Ultimate Impostrip® Scalable.</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={LogoUltimate} /></div>
                </div>
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Agende uma demonstração</b></div>
                    <div className="">
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify ">
                            Um de nossos especialistas em automação de imposição e acabamento entrará em contato com você em breve para um atendimento personalizado <br />
                            <b>Trial</b> <br />
                            Por favor preencha este breve formulário. Um de nossos especialistas em automação de imposição e acabamento entrará em contato com você em breve.
                        </div>
                        <img alt="" src={demo} className="pl-[93px]" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default index;