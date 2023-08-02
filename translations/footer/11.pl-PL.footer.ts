const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_PL() {
  return {
    social: {
      followUsOn: "Śledź nas na",
      getOurApp: "Pobierz naszą aplikację",
      getOurAppFromApple: `Pobierz naszą aplikację ze sklepu <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Pobierz naszą aplikację ze sklepu <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Ta witryna działa na rzecz MCA Intelifunds Ltd, handlującej jako ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, handlująca jako "${logoText.value}", to firma świadcząca usługi finansowe zarejestrowana i zarejestrowana zgodnie z prawem Republiki Cypryjskiej, licencjonowana i regulowana przez Komisję Papierów Wartościowych i Giełd Cypru (CySEC) pod numerem licencji 126/10.`,
      para3: `Adres: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Cypr.`,
      para4: `Środki klientów są przechowywane na oddzielnych kontach i ubezpieczane przez fundusze rekompensat klientów podlegających kwalifikowalności.`,
      para5: `<u>Ostrzeżenie o ryzyku</u>`,
      para6: `Kontrakty CFD to złożone instrumenty i wiążą się z wysokim ryzykiem szybkiej utraty pieniędzy z powodu dźwigni finansowej. <strong>${footerPercent.value}% rachunków inwestorów detalicznych traci pieniądze podczas handlu CFD z tym dostawcą</strong>. Należy rozważyć, czy rozumiesz, jak działają kontrakty CFD i czy możesz pozwolić sobie na wysokie ryzyko utraty swoich pieniędzy.`,
      para7: `Hiszpańska Komisja Rynku Papierów Wartościowych i Giełd (CNMV) stwierdziła, że ze względu na złożoność kontraktów CFD i związane z nimi ryzyko, zakup takiego produktu przez klientów detalicznych nie jest odpowiedni/właściwy. W związku z tym, zgodnie z odpowiednimi wymogami wprowadzonymi przez CNMV, zostajesz poinformowany, że zamierzasz zakupić produkt, który jest złożony i trudny do zrozumienia: kontrakty różnicy kursowej (CFD). CNMV stwierdziła, że ze względu na ich złożoność i ryzyko związane z nimi, zakup tego produktu przez inwestorów detalicznych nie jest odpowiedni/właściwy.`,
      para8: {
        para: `Z tego powodu kontrakty CFD mogą nie być idealnym inwestycją dla każdego. Wysoki poziom dźwigni finansowej dostępny dla handlowców CFD może działać na twoją korzyść lub przeciwko tobie. Powinieneś inwestować tylko pieniądze, których możesz sobie pozwolić na utratę. Kontrakty CFD to złożone złożone instrumenty finansowe. Handel na rynku Forex, towary, indeksy i akcje oparte na kontraktach CFD lub jakichkolwiek innych instrumentach bazowych firmy wiąże się z wysokim ryzykiem i może prowadzić do utraty twoich inwestycji. Przed zaangażowaniem się w handel, rozważ swoje cele finansowe, umiejętności i oceniaj możliwe ryzyko związane z handlem produktami firmy. Aktywa pochodne, takie jak kontrakty CFD i prawdopodobne instrumenty z innych rynków, mogą być charakteryzowane przez ekstremalną zmienność. Kontrakty CFD mogą szybko zmieniać cenę i mogą odzwierciedlać zmiany warunków rynkowych, które wynikają z nieprzewidywalnych zdarzeń. Ani ty, ani {logoText} nie możecie manipulować tymi faktami. Najlepiej skonsultować się z licencjonowanym doradcą finansowym. {logoText} nie udziela swoim klientom porad finansowych, a informacje zawarte tutaj są przeznaczone tylko do celów marketingowych. Przeszłe wyniki nie są wskaźnikiem przyszłych rezultatów. Zapoznaj się z {riskWarningPage}, aby uzyskać jasny obraz związanych z handlem produktami firmy ryzyk.`,
        riskWarning: `Ostrzeżenie o ryzyku`,
      },
      para9: `MCA Intelifunds Limited nie oferuje kontraktów CFD mieszkańcom niektórych jurysdykcji, takich jak Stany Zjednoczone Ameryki, Islamska Republika Iranu i Kanada.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Wszelkie prawa zastrzeżone`,
    },
  };
}

export default footer_PL;
