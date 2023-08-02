const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_IT() {
  return {
    social: {
      followUsOn: "Seguici online",
      getOurApp: "Scarica la nostra app",
      getOurAppFromApple: `Scarica la nostra app da <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Scarica la nostra app da <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Questo sito web è gestito da MCA Intelifunds Ltd, che opera come ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, che opera come "${logoText.value}", è una società di servizi finanziari incorporata e registrata secondo le leggi della Repubblica di Cipro, autorizzata e regolamentata dalla Cyprus Securities and Exchange Commission (CySEC) con numero di licenza 126/10.`,
      para3: `Indirizzo: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Cipro.`,
      para4: `I fondi dei clienti sono mantenuti in conti segregati e assicurati dai fondi di compensazione per i clienti, soggetti a determinate condizioni.`,
      para5: `<u>Avviso di rischio</u>`,
      para6: `I CFD sono strumenti complessi e comportano un elevato rischio di perdita di denaro rapidamente a causa della leva finanziaria. <strong>Il ${footerPercent.value}% degli investitori al dettaglio perde denaro quando negozia CFD con questo fornitore</strong>. Dovresti considerare se comprendi il funzionamento dei CFD e se puoi permetterti di correre l'alto rischio di perdere i tuoi soldi.`,
      para7: `La Commissione Nazionale per i Mercati e la Borsa (CNMV) della Spagna ha stabilito che, a causa della complessità dei CFD e dei rischi coinvolti, l'acquisto di tale prodotto da parte dei Clienti al Dettaglio non è appropriato/adatto. A tal proposito, in conformità con i requisiti pertinenti introdotti dalla CNMV, ti viene segnalato che stai per acquistare un prodotto complesso e di difficile comprensione: Contratti per Differenza (CFD). La CNMV ha stabilito che, a causa della sua complessità e dei rischi coinvolti, l'acquisto di questo prodotto da parte di investitori al dettaglio non è appropriato/adatto.`,
      para8: {
        para: `Per questo motivo, i CFD potrebbero non essere l'investimento ideale per tutti. L'elevato livello di leva finanziaria disponibile per i trader di CFD può giocare a favore o contro di te. Dovresti investire solo denaro che puoi permetterti di perdere. I CFD sono strumenti finanziari complessi con leva. Il trading di CFD basati su Forex, materie prime, indici e azioni, o su qualsiasi altro strumento sottostante dell'azienda, implica un elevato grado di rischio e può comportare la perdita del tuo investimento. Prima di intraprendere attività di trading, considera i tuoi obiettivi finanziari, le tue competenze e valuta i possibili rischi associati alla negoziazione dei Prodotti dell'Azienda. Gli asset derivati come i CFD e strumenti simili di altri mercati possono presentare un'elevata volatilità. I CFD possono cambiare rapidamente di prezzo e possono rappresentare cambiamenti nelle condizioni di mercato derivanti da eventi imprevedibili. Né tu né {logoText} potete manipolare questi fatti. È meglio consultarsi con un consulente finanziario autorizzato. {logoText} non fornisce ai propri clienti consulenza finanziaria e le informazioni fornite qui sono destinate solo a scopi di marketing. Le performance passate non sono indicative dei risultati futuri. Assicurati di leggere il {riskWarningPage} per avere un'idea chiara dei rischi connessi alla negoziazione dei Prodotti dell'Azienda.`,
        riskWarning: `Avviso di rischio`,
      },
      para9: `MCA Intelifunds Limited non offre Contratti per Differenza ai residenti di determinate giurisdizioni, come gli Stati Uniti d'America, la Repubblica Islamica dell'Iran e il Canada.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Tutti i diritti riservati`,
    },
  };
}

export default footer_IT;
