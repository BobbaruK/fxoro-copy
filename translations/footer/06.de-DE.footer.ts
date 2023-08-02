const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_DE() {
  return {
    social: {
      followUsOn: "Folge uns auf",
      getOurApp: "Hole dir unsere App",
      getOurAppFromApple: `Holen Sie sich unsere App aus dem <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Holen Sie sich unsere App aus dem <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Diese Website wird von MCA Intelifunds Ltd betrieben und handelt unter dem Namen ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, handelnd als „${logoText.value}“, ist ein Finanzdienstleistungsunternehmen, das gemäß den Gesetzen der Republik Zypern eingetragen und registriert ist und von der Cyprus Securities and Exchange Commission (CySEC) mit der Lizenznummer 126/10 reguliert wird.`,
      para3: `Adresse: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Zypern.`,
      para4: `Die Gelder der Kunden werden in segregierten Konten verwahrt und durch die Entschädigungsfonds für Kunden versichert, sofern sie die Voraussetzungen erfüllen.`,
      para5: `<u>Risikohinweis</u>`,
      para6: `CFDs sind komplexe Instrumente und bergen ein hohes Risiko, aufgrund der Hebelwirkung schnell Geld zu verlieren. <strong>${footerPercent.value}% der Konten von Privatanlegern verlieren Geld beim Handel mit CFDs bei diesem Anbieter</strong>. Sie sollten überlegen, ob Sie verstehen, wie CFDs funktionieren und ob Sie es sich leisten können, das hohe Risiko einzugehen, Ihr Geld zu verlieren.`,
      para7: `Die Comisión Nacional del Mercado de Valores (CNMV) in Spanien hat festgestellt, dass der Kauf eines solchen Produkts durch Privatkunden aufgrund der Komplexität von CFDs und der damit verbundenen Risiken nicht angemessen/empfehlenswert ist. In diesem Zusammenhang wird gemäß den entsprechenden Anforderungen der CNMV darauf hingewiesen, dass Sie vor dem Kauf eines Produkts, das komplex und schwer verständlich ist, wie Contracts for Differences (CFDs), gewarnt werden. Die CNMV hat festgestellt, dass der Kauf dieses Produkts durch Privatanleger aufgrund seiner Komplexität und der damit verbundenen Risiken nicht angemessen/empfehlenswert ist.`,
      para8: {
        para: `Aufgrund dessen sind CFDs möglicherweise nicht die ideale Anlage für jedermann. Der hohe Hebel, der CFD-Händlern zur Verfügung steht, kann für Sie arbeiten oder gegen Sie wirken. Sie sollten nur Geld investieren, das Sie sich leisten können zu verlieren. CFDs sind komplexe gehebelte Finanzinstrumente. Der Handel mit Forex, Rohstoffen, Indizes und auf Aktien basierenden CFDs oder anderen Instrumenten des Unternehmens birgt ein hohes Risiko und kann zum Verlust Ihrer Investition führen. Bevor Sie sich am Handel beteiligen, sollten Sie Ihre finanziellen Ziele, Ihre Fähigkeiten und die möglichen Risiken im Zusammenhang mit dem Handel mit Produkten des Unternehmens sorgfältig abwägen. Derivate wie CFDs und mögliche Instrumente aus anderen Märkten können eine extreme Volatilität aufweisen. CFDs können sich schnell im Preis ändern und Marktbedingungen widerspiegeln, die auf unvorhersehbare Ereignisse zurückzuführen sind. Weder Sie noch {logoText} können diese Tatsachen manipulieren. Es ist ratsam, einen lizenzierten Finanzberater zu konsultieren. {logoText} bietet seinen Kunden keine Finanzberatung an, und die hier bereitgestellten Informationen dienen ausschließlich zu Marketingzwecken. Die vergangene Performance ist kein Indikator für zukünftige Ergebnisse. Lesen Sie unbedingt die {riskWarningPage}, um sich ein klares Bild von den mit dem Handel mit Produkten des Unternehmens verbundenen Risiken zu machen.`,
        riskWarning: `Risikohinweis`,
      },
      para9: `MCA Intelifunds Limited bietet keine Contracts for Difference für Bewohner bestimmter Gerichtsbarkeiten wie den Vereinigten Staaten von Amerika, der Islamischen Republik Iran und Kanada an.`,
      para10: `Alle Rechte vorbehalten ${
        logoText.value
      } ${new Date().getFullYear()}`,
    },
  };
}

export default footer_DE;
