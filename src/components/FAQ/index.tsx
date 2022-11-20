import Accordion from '../Accordion';
import './index.css';
const FAQ = () => {
  return (
    <div className="faq__title">
      <small>FAQ</small>
      <h3>Tire suas dúvidas</h3>
      <Accordion
        question={'Por que a Online Telecom é a opção perfeita para você?'}
        answer={
          'Ofertamos internet de alta qualidade com condições que cabem no seu bolso, suporte técnico especializado e eficiente, atendimento 24h todos os dias… Atualmente, estamos em 4 estados das Regiões Norte e Nordeste, com aproximadamente mais de 100 mil clientes ativos, que utilizam e aprovam os nossos serviços.'
        }
        active={true}
      />
      <Accordion
        question={'Internet fibra óptica: o que é e como funciona?'}
        answer={
          'A fibra óptica é um cabo fino e flexível usado pra transmitir dados na velocidade da luz(muito rápido!). Essa tecnologia permite oferecer uma internet residencial de alta velocidade pros usuários. A Online Fibra é a internet fibra óptica de alta tecnologia da Online Telecom. Com ela, você pode ter uma internet mais rápida, estável e de qualidade, ideal para ver todos os seus filmes e séries e jogar com menos lag! Online Fibra oferece aos usuários diversos planos de internet com velocidades que chegam até 500 Mega. Ao contratar Online fibra pra sua casa, o usuário leva um roteador pra conectar todos os dispositivos, acesso ao tocalivros e ao NordesteFC e outros benefícios que só nossos clientes têm.'
        }
        active={false}
      />
      <Accordion
        question={
          'Quero conhecer os planos Online Telecom, como faço para contratar?'
        }
        answer={
          'Já adianto que temos várias opções para você encontrar de forma simples e rápida o melhor plano pra atender sua necessidade: Opção 01. Você pode acessar nosso site onlinetelecom.com.br Opção 02. Entrar em contato pelo nosso Whatsapp ou nos ligar pelo 0800 088 1111. Opção 03. Reforçamos o convite para você nos visitar na loja mais próxima e ter uma experiência totalmente ON. Será um prazer lhe receber!'
        }
        active={false}
      />
      <Accordion
        question={'Quais as opções de pagamento da minha fatura?'}
        answer={
          'Os pagamentos deverão ser realizados através do boleto disponibilizado, em agências Lotéricas, Bradesco Expresso, ou no aplicativo do seu Banco.'
        }
        active={false}
      />
      <Accordion
        question={'Estou sem acesso à internet, como posso resolver?'}
        answer={
          'Primeiro, verifique se todos os cabos dos seus aparelhos estão conectados. Após isso, desconecte o equipamento da tomada e após 20 segundos, conecte novamente. Aguarde 5 minutos e confira se o sinal retornou. Caso o problema persista fale com um de nossos atendentes através do WhatsApp ou por ligação no 0800 088 1111.'
        }
        active={false}
      />
      <Accordion
        question={'Como renegociar minhas faturas e ficar ON novamente?'}
        answer={
          'Entre em contato com nossa central no 0800 088 1111 ou acesse o aplicativo Minha Online para iniciar um atendimento com um de nossos colaboradores e verificar qual a melhor condição de renegociação de dívida para você.'
        }
        active={false}
      />
      <Accordion
        question={
          'Minha internet foi desativada por falta de pagamento, como proceder?'
        }
        answer={
          'Quando a conexão é desativada por falta de pagamento e você precisa que ela seja reativada, basta apresentar o comprovante de todos os boletos em atraso. Caso os comprovantes de pagamento sejam enviados dentro do horário comercial é possível a reativação da sua conexão no mesmo dia, caso contrário, a sua conexão será reativada no dia seguinte, assim que o pagamento for identificado.'
        }
        active={false}
      />
      <Accordion
        question={'Como alterar a velocidade do meu plano?'}
        answer={
          'Você pode entrar em contato através dos nossos canais de atendimento pelo 0800 088 1111, lá você será encaminhado para o setor especializado onde realizaremos a troca da sua velocidade. Após a solicitação ser realizada, o carnê com o valor atualizado da mensalidade pode ser retirado na nossa loja mais próxima ou pelo aplicativo.'
        }
        active={false}
      />
      <Accordion
        question={'Como realizar o cancelamento do meu Cadastro?'}
        answer={
          'Entre em contato através do nosso canal de atendimento 0800 088 1111, lá você será direcionado ao nosso setor especializado ou visite nossa loja mais próxima para receber orientação. Mas, deixo aqui embaixo duas possíveis soluções com base na sua dúvida: 01. Vou realizar uma mudança de endereço, gostaria de saber se gera alguma cobrança? - Se for sua primeira solicitação não, a cobrança será gerada a partir da segunda solicitação de mudança e o valor cobrado poderá sofrer alterações de acordo com a revenda da sua cidade. 02. Gostaria de realizar uma mudança de titularidade, como devo fazer? - O atual titular, juntamente com o novo titular do contrato, devem comparecer à loja de sua cidade com RG, CPF e comprovante de endereço do novo titular em mãos para realizarmos a troca de titularidade e a emissão do novo carnê.'
        }
        active={false}
      />

      <Accordion
        question={
          'A sua opinião é muito importante para nós! Descubra como deixar uma crítica, elogio e/ou sugestão de melhoria:'
        }
        answer={
          'Entre em contato com a nossa central de atendimento acessando o aplicativo Minha Online ou fale agora pelo WhatsApp com o Teleco, a nossa inteligência artificial. Também podemos atender você por telefone: ligue 0800 088 1111 , em qualquer dia e horário.'
        }
        active={false}
      />
    </div>
  );
};

export default FAQ;
