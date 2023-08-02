const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_SV() {
  return {
    social: {
      followUsOn: "Följ oss på",
      getOurApp: "Skaffa vår app",
      getOurAppFromApple: `Hämta vår app från <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Hämta vår app från <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Denna webbplats är under drift av MCA Intelifunds Ltd, handel som  ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, handel som "${logoText.value}", är ett finansiellt tjänsteföretag som är inkorporerat och registrerat enligt lagarna i Republiken Cypern, licensierat och reglerat av Cyperns värdepappers- och börs-kommission (CySEC) med licensnummer 126/10.`,
      para3: `Adress: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Cypern.`,
      para4: `Kunders medel hålls på separata konton och är försäkrade av klienters kompensationsfonder, föremål för berättigande.`,
      para5: `<u>Riskfriskrivning</u>`,
      para6: `CFD:er är komplexa instrument och medför en hög risk att snabbt förlora pengar på grund av hävstångseffekt. <strong>${footerPercent.value}% av detaljhandelsinvesterare förlorar pengar vid handel med CFD:er med denna leverantör</strong>. Du bör överväga om du förstår hur CFD:er fungerar och om du har råd att ta den höga risken att förlora dina pengar.`,
      para7: `Den spanska nationella värdepappersmarknadskommissionen (CNMV) har konstaterat att köp av sådana produkter av detaljhandelskunder på grund av komplexiteten med CFD:er och de involverade riskerna inte är lämpligt. I detta avseende varnas du för att du är på väg att köpa en produkt som är komplex och svår att förstå: Contracts for Differences (CFD:er). CNMV har konstaterat att köp av denna produkt av privata investerare på grund av dess komplexitet och risker inte är lämpligt.`,
      para8: {
        para: `Därför kanske CFD:er inte är den ideala investeringen för alla. Den höga hävstångseffekten som är tillgänglig för CFD-handlare kan fungera för eller emot dig. Du bör bara investera pengar som du har råd att förlora. CFD:er är invecklade finansiella instrument med hävstång. Handel med Forex, råvaror, index och aktier baserade på CFD:er eller några andra underliggande instrument från företaget innebär en hög grad av risk och kan leda till förlust av din investering. Innan du involverar dig i handel, överväg dina ekonomiska mål, dina färdigheter och bedöm de möjliga riskerna som är förknippade med handel med företagets produkter. Derivatinstrument som CFD:er och sannolika instrument från andra marknader kan visa extrem volatilitet. CFD:er kan ändra pris snabbt och kan avbilda förändringar i marknadsförhållanden som orsakas av oförutsedda händelser. Ingen av dessa fakta kan manipuleras vare sig av dig eller {logoText}. Det är bäst att rådfråga en licensierad finansiell rådgivare. {logoText} tillhandahåller inte finansiell rådgivning till sina kunder och informationen som tillhandahålls här är endast avsedd för marknadsföringsändamål. Tidigare resultat är ingen indikator på framtida resultat. Se till att läsa {riskWarningPage} för att få en klar bild av de risker som är förknippade med handel med företagets produkter.`,
        riskWarning: `Riskvarning`,
      },
      para9: `MCA Intelifunds Limited erbjuder inte kontrakt för skillnad till invånare i vissa jurisdiktioner, såsom USA, Islamiska republiken Iran och Kanada.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Alla rättigheter förbehållna`,
    },
  };
}

export default footer_SV;
