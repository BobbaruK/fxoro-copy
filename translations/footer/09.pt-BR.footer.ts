const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_PT() {
  return {
    social: {
      followUsOn: "Siga-nos em",
      getOurApp: "Obtenha nosso aplicativo",
      getOurAppFromApple: `Obtenha nosso aplicativo na <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Obtenha nosso aplicativo no <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Este site está sob a operação da MCA Intelifunds Ltd, comercializando como ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, comercializando como "${logoText.value}", é uma empresa de serviços financeiros incorporada e registrada sob as leis da República de Chipre, licenciada e regulamentada pela Comissão de Valores Mobiliários e Câmbio de Chipre (CySEC) com o número de licença 126/10.`,
      para3: `Endereço: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Chipre.`,
      para4: `Os fundos dos clientes são mantidos em contas segregadas e segurados pelos fundos de compensação do cliente, sujeitos a elegibilidade.`,
      para5: `<u>Aviso de risco</u>`,
      para6: `CFDs são instrumentos complexos e têm um alto risco de perder dinheiro rapidamente devido à alavancagem. <strong>${footerPercent.value}% das contas de investidores de varejo perdem dinheiro ao negociar CFDs com esse provedor</strong>. Você deve considerar se compreende como os CFDs funcionam e se pode se dar ao luxo de correr o alto risco de perder seu dinheiro.`,
      para7: `A Comissão Nacional de Mercado de Valores da Espanha (CNMV) determinou que a compra de tal produto por clientes varejistas não é adequada/apropriada devido à complexidade dos CFDs e aos riscos envolvidos. Neste sentido, de acordo com os requisitos relevantes introduzidos pela CNMV, você está sendo alertado de que está prestes a comprar um produto que é complexo e difícil de entender: Contracts for Differences (CFDs). A CNMV determinou que, devido à sua complexidade e aos riscos envolvidos, a compra deste produto por investidores de varejo não é adequada/apropriada.`,
      para8: {
        para: `Portanto, os CFDs podem não ser o investimento ideal para todos. A alta taxa de alavancagem disponível para traders de CFD pode funcionar a favor ou contra você. Você deve investir apenas o dinheiro que pode se dar ao luxo de perder. Os CFDs são ativos financeiros alavancados complexos. Negociar Forex, commodities, índices e ações baseados em CFDs ou qualquer outro instrumento subjacente da Empresa implica um alto grau de risco e pode levar à perda do seu investimento. Antes de se envolver na negociação, considere seus objetivos financeiros, suas habilidades e avalie os possíveis riscos associados aos produtos da Empresa. Ativos derivativos como CFDs e instrumentos prováveis de outros mercados podem apresentar extrema volatilidade. Os CFDs podem mudar de preço rapidamente e podem retratar mudanças nas condições de mercado que resultam de ocorrências imprevisíveis. Nenhum desses fatos pode ser manipulado nem por você nem por {logoText}. É melhor consultar um conselheiro financeiro licenciado. {logoText} não fornece aconselhamento financeiro aos seus clientes e as informações fornecidas aqui têm apenas fins de marketing. O desempenho passado não é um indicador de resultados futuros. Certifique-se de ler a {riskWarningPage} para obter uma imagem clara dos riscos inerentes à negociação dos produtos da Empresa.`,
        riskWarning: `Aviso de Risco`,
      },
      para9: `A MCA Intelifunds Limited não oferece Contratos por Diferença para residentes de certas jurisdições, como Estados Unidos da América, República Islâmica do Irã e Canadá.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Todos os direitos reservados`,
    },
  };
}

export default footer_PT;
