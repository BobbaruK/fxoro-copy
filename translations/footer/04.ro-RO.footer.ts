const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_RO() {
  return {
    social: {
      followUsOn: "Urmărește-ne pe",
      getOurApp: "Descarcă aplicația noastră",
      getOurAppFromApple: `Descarcă aplicația noastră de la <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Descarcă aplicația noastră de la <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Acest site web este operat de MCA Intelifunds Ltd, care comercializează sub numele de ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, care comercializează sub numele de "${logoText.value}", este o companie de servicii financiare înregistrată și înființată în conformitate cu legile Republicii Cipru, autorizată și reglementată de Cyprus Securities and Exchange Commission (CySEC) cu număr de licență 126/10.`,
      para3: `Adresă: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Cipru.`,
      para4: `Fondurile clienților sunt ținute în conturi segregate și asigurate prin fonduri de compensare a clienților, în conformitate cu eligibilitatea.`,
      para5: `<u>Avertisment privind riscurile</u>`,
      para6: `CFD-urile sunt instrumente complexe și prezintă un mare risc de a pierde rapid bani din cauza efectului de levier. <strong>${footerPercent.value}% din conturile investitorilor de retail înregistrează pierderi atunci când tranzacționează CFD-uri cu acest furnizor</strong>. Ar trebui să luați în considerare dacă înțelegeți cum funcționează CFD-urile și dacă vă puteți permite să vă asumați riscul ridicat de a vă pierde banii.`,
      para7: `Comisia Națională a Piețelor de Valori din Spania (CNMV) a stabilit că, datorită complexității CFD-urilor și a riscurilor implicate, achiziționarea unui astfel de produs de către clienții cu amănuntul nu este adecvată/potrivită. În acest sens, în conformitate cu cerințele relevante introduse de CNMV, vi se aduce la cunoștință că sunteți pe cale să achiziționați un produs complex și dificil de înțeles: Contrate pentru Diferențe (CFD-uri). CNMV a stabilit că achiziționarea acestui produs de către investitorii cu amănuntul nu este adecvată/potrivită, datorită complexității și riscurilor implicate.`,
      para8: {
        para: `Din acest motiv, CFD-urile pot să nu fie investiția ideală pentru toată lumea. Rata ridicată a efectului de levier disponibil pentru traderii de CFD-uri poate lucra în favoarea sau împotriva dvs. Ar trebui să investiți doar banii pe care vă puteți permite să îi pierdeți. CFD-urile sunt active financiare cu levier intricate. Tranzacționarea CFD-urilor bazate pe Forex, mărfuri, indici și acțiuni sau orice alte instrumente subiacente ale Companiei implică un grad ridicat de risc și poate duce la pierderea investiției dvs. Înainte de a vă implica în tranzacționare, luați în considerare obiectivele dvs. financiare, abilitățile dvs. și evaluați riscurile posibile asociate cu tranzacționarea Produselor Companiei. Activele derivate precum CFD-urile și instrumentele similare din alte piețe pot prezenta volatilitate extremă. CFD-urile pot fluctua rapid în preț și pot reflecta schimbări în condițiile de piață care rezultă din evenimente imprevizibile. Nici dvs. și nici {logoText} nu puteți manipula aceste fapte. Cel mai bine este să consultați un consilier financiar autorizat. {logoText} nu oferă clienților săi sfaturi financiare, iar informațiile furnizate aici au scopuri exclusiv de marketing. Performanța anterioară nu reprezintă un indicator pentru rezultatele viitoare. Asigurați-vă că citiți {riskWarningPage} pentru a obține o imagine clară asupra riscurilor asociate tranzacționării Produselor Companiei.`,
        riskWarning: `Avertisment privind riscurile`,
      },
      para9: `MCA Intelifunds Limited nu oferă Contracte pentru Diferență rezidenților din anumite jurisdicții, cum ar fi Statele Unite ale Americii, Republica Islamică Iran și Canada.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Toate drepturile rezervate`,
    },
  };
}

export default footer_RO;
