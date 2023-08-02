const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_HU() {
  return {
    social: {
      followUsOn: "Kövess minket",
      getOurApp: "Szerezd be az alkalmazásunkat",
      getOurAppFromApple: `Szerezd be az alkalmazásunkat az <span lang="en">Apple Store</span>-ból`,
      getOurAppFromGoogle: `Szerezd be az alkalmazásunkat a <span lang="en">Google Play</span>-ből`,
    },
    disclaimer: {
      para1: `Ez a weboldal a MCA Intelifunds Ltd üzemeltetése alá tartozik, amely kereskedik a(z) ${logoText.value} nevű vállalkozással.`,
      para2: `A MCA INTELIFUNDS LTD, amely kereskedik mint a "${logoText.value}", egy pénzügyi szolgáltató vállalat, amelyet a Ciprusi Köztársaság törvényei alapján alapítottak és jegyeztek be, licencszámmal 126/10 engedélyezett és szabályozott a Ciprusi Értékpapír- és Tőzsdefelügyelet (CySEC) hatósága által.`,
      para3: `Cím: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Ciprus.`,
      para4: `Az ügyfelek pénzei elkülönített számlákon vannak elhelyezve és biztosították az ügyfél-kártalanítási alapok által, amennyiben jogosultak.`,
      para5: `<u>Rizikóelhárítási nyilatkozat</u>`,
      para6: `A CFD-k összetett eszközök, és magukban hordozzák a gyors pénzvesztés magas kockázatát a tőkeáttétel miatt. <strong>A kiskereskedelmi befektetői számlák ${footerPercent.value}%-a veszteséget szenved el a CFD-k ezen szolgáltatóval történő kereskedésekor</strong>. Fontolja meg, hogy érti-e, hogyan működnek a CFD-k, és megengedheti-e magának a magas kockázatot a tőkevesztésre.`,
      para7: `Spanyolország Nemzeti Értékpapírpiaci Bizottsága (CNMV) megállapította, hogy a CFD-k bonyolultsága és a velük járó kockázatok miatt a kiskereskedelmi ügyfelek számára nem megfelelő/alkalmas ilyen termék vásárlása. Ezzel összefüggésben a CNMV által bevezetett vonatkozó követelmények szerint figyelmeztetjük, hogy egy olyan terméket vásárol, amely bonyolult és nehezen érthető: különbségek (CFD-k) szerződéseit. A CNMV megállapította, hogy a bonyolultsága és a vele járó kockázatok miatt a kiskereskedelmi befektetők számára nem megfelelő/alkalmas ezen termék vásárlása.`,
      para8: {
        para: `Emiatt a CFD-k nem feltétlenül ideális befektetés mindenki számára. A CFD kereskedők számára elérhető magas tőkeáttétel előnyére vagy hátrányára válhat. Csak olyan pénzt kell befektetnie, amelyet megengedhet magának elveszíteni. A CFD-k összetett tőkeáttételes pénzügyi eszközök. A devizára, árucikkekre, indexekre és részvényekre alapuló CFD-kkel történő kereskedés vagy a vállalat egyéb alul fekvő eszközeivel való kereskedés magas kockázattal járhat és vezethet befektetése vesztéséhez. Kereskedés előtt fontolja meg pénzügyi céljait, képességeit és értékelje a vállalat termékeivel való kereskedésre vonatkozó lehetséges kockázatokat. A CFD-khez hasonló derivatív eszközök és más piacokon valószínűsíthető eszközök extrém volatilitást mutathatnak. A CFD-k gyorsan változhatnak az árak és képet adhatnak a piaci körülmények változásairól, amelyek előre nem látható eseményekből erednek. Ezen tényeket sem Ön, sem {logoText} nem tudja manipulálni. A legjobb, ha licencelt pénzügyi tanácsadóval konzultál. {logoText} nem nyújt ügyfeleinek pénzügyi tanácsokat, és a jelen tájékoztatást kizárólag marketing céljából nyújtja. A múltbeli teljesítmény nem jelzi a jövőbeli eredményeket. A cég termékeivel való kereskedésre vonatkozó kockázatokról kérjük, olvassa el a {riskWarningPage}-t.`,
        riskWarning: `Rizikóelhárítási figyelmeztetés`,
      },
      para9: `A MCA Intelifunds Limited nem kínál Különbség-szerződéseket az Amerikai Egyesült Államok, Irán Iszlám Köztársaság és Kanada bizonyos joghatóságainak lakosai részére.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Minden jog fenntartva`,
    },
  };
}

export default footer_HU;
