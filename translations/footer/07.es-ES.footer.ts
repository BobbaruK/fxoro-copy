const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_ES() {
  return {
    social: {
      followUsOn: "Síguenos en",
      getOurApp: "Obtén nuestra aplicación",
      getOurAppFromApple: `Obtén nuestra aplicación desde <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Obtén nuestra aplicación desde <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Este sitio web está bajo la operación de MCA Intelifunds Ltd, operando como ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, operando como “${logoText.value}”, es una empresa de servicios financieros constituida y registrada bajo las leyes de la República de Chipre, con licencia y regulada por la Comisión de Valores y Bolsa de Chipre (CySEC) con el número de licencia 126/10.`,
      para3: `Dirección: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Chipre.`,
      para4: `Los fondos de los clientes se mantienen en cuentas segregadas y están asegurados por el fondo de compensación para clientes, sujeto a la elegibilidad.`,
      para5: `<u>Aviso de riesgo</u>`,
      para6: `Los CFD son instrumentos complejos y conllevan un alto riesgo de perder dinero rápidamente debido al apalancamiento. <strong>El ${footerPercent.value}% de las cuentas de inversores minoristas pierden dinero al operar CFD con este proveedor</strong>. Debe considerar si comprende cómo funcionan los CFD y si puede permitirse correr el alto riesgo de perder su dinero.`,
      para7: `La Comisión Nacional del Mercado de Valores (CNMV) de España ha determinado que, debido a la complejidad de los CFD y los riesgos involucrados, la adquisición de dicho producto por parte de Clientes Minoristas no es apropiada/adecuada. En este sentido, de acuerdo con los requisitos relevantes introducidos por la CNMV, se le advierte que está a punto de adquirir un producto complejo y difícil de comprender: Contratos por Diferencias (CFD). La CNMV ha determinado que, debido a su complejidad y los riesgos involucrados, la adquisición de este producto por parte de inversores minoristas no es apropiada/adecuada.`,
      para8: {
        para: `Por lo tanto, los CFD pueden no ser la inversión ideal para todos. La alta tasa de apalancamiento disponible para los operadores de CFD puede funcionar a favor o en contra de usted. Solo debe invertir dinero que pueda permitirse perder. Los CFD son activos financieros complejos con apalancamiento. El comercio de Forex, productos básicos, índices y acciones basadas en CFD u otros instrumentos subyacentes de la Compañía implica un alto grado de riesgo y puede llevar a la pérdida de su inversión. Antes de involucrarse en el comercio, considere sus objetivos financieros, sus habilidades y evalúe los posibles riesgos asociados con los productos de la Compañía. Los activos derivados como los CFD y los instrumentos similares de otros mercados pueden presentar una volatilidad extrema. Los CFD pueden cambiar de precio rápidamente y pueden reflejar cambios en las condiciones del mercado que resulten de acontecimientos impredecibles. Ninguno de estos hechos puede ser manipulado ni por usted ni por {logoText}. Es mejor consultar con un asesor financiero con licencia. {logoText} no ofrece asesoramiento financiero a sus clientes y la información proporcionada aquí tiene fines de marketing únicamente. El rendimiento pasado no es un indicador de resultados futuros. Asegúrese de leer el {riskWarningPage} para tener una imagen clara de los riesgos inherentes al comercio de los productos de la Compañía.`,
        riskWarning: `Aviso de riesgo`,
      },
      para9: `MCA Intelifunds Limited no ofrece Contratos por Diferencia a residentes de ciertas jurisdicciones como los Estados Unidos de América, la República Islámica de Irán y Canadá.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Todos los derechos reservados`,
    },
  };
}

export default footer_ES;
