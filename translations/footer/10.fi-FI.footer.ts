const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_FI() {
  return {
    social: {
      followUsOn: "Seuraa meitä",
      getOurApp: "Lataa sovelluksemme",
      getOurAppFromApple: `Lataa sovellus <span lang="en">Apple Storesta</span>`,
      getOurAppFromGoogle: `Lataa sovellus <span lang="en">Google Playsta</span>`,
    },
    disclaimer: {
      para1: `Tämä verkkosivusto toimii MCA Intelifunds Ltd:n toimesta, kaupankäynnin nimellä ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, joka toimii nimellä "${logoText.value}", on finanssipalveluyritys, joka on perustettu ja rekisteröity Kyproksen tasavallan lakien mukaisesti, lisensioitu ja säännelty Kyproksen arvopaperi- ja pörssikomissio (CySEC) lisenssinumerolla 126/10.`,
      para3: `Osoite: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Kypros.`,
      para4: `Asiakkaiden varat pidetään erillisillä tileillä ja vakuutetaan asiakasvakuutusrahaston piiriin kuuluviksi.`,
      para5: `<u>Riskivaroitus</u>`,
      para6: `CFD:t ovat monimutkaisia instrumentteja ja niihin liittyy suuri riski menettää rahaa nopeasti vipuvaikutuksen vuoksi. <strong>${footerPercent.value} % vähittäissijoittajien tileistä menettää rahaa käydessään kauppaa tämän tarjoajan CFD:illä</strong>. Sinun tulee harkita, ymmärrätkö miten CFD:t toimivat ja voitko varaa ottaa korkean riskin menettää rahasi.`,
      para7: `Espanjan kansallinen arvopaperimarkkinakomissio (CNMV) on todennut, että CFD:ien monimutkaisuuden ja liittyvien riskien vuoksi tällaisen tuotteen ostaminen vähittäisasiakkailta ei ole asianmukaista/sopivaa. Tässä suhteessa CNMV:n määrittelemien asiaankuuluvien vaatimusten mukaisesti sinua varoitetaan siitä, että olet ostamassa monimutkaista ja vaikeasti ymmärrettävää tuotetta: erotussopimuksia (CFD). CNMV on todennut, että tuotteen monimutkaisuuden ja liittyvien riskien vuoksi tämän tuotteen ostaminen vähittäissijoittajille ei ole asianmukaista/sopivaa.`,
      para8: {
        para: `Tämän vuoksi CFD:t eivät välttämättä sovi kaikille sijoituskohteeksi. CFD-kaupankäyntiin saatavilla oleva suuri vipuvaikutus voi toimia sinua vastaan tai puolesta. Sinun tulee sijoittaa vain rahaa, jonka voit varaa menettää. CFD:t ovat monimutkaisia vipuvaikutteisia rahoitusvaroja. Forex-, hyödyke-, indeksi- ja osakeperusteisten CFD:ien tai yrityksen muiden kohde-etuutena olevien instrumenttien kaupankäyntiin liittyy suuri riski ja se voi johtaa sijoituksesi menettämiseen. Ennen kaupankäyntiin ryhtymistä harkitse taloudellisia tavoitteitasi, taitojasi ja arvioi kaupankäyntiin liittyvät mahdolliset riskit yrityksen tuotteilla. Johdannaisvarat, kuten CFD:t ja mahdolliset muista markkinoista peräisin olevat instrumentit, voivat aiheuttaa äärimmäistä volatiliteettia. CFD:t voivat muuttaa hintaansa nopeasti ja ne voivat kuvata muutoksia markkinaolosuhteissa, jotka johtuvat ennalta arvaamattomista tapahtumista. Ei sinä eikä {logoText} voi manipuloida näitä tosiasioita. On parasta konsultoida lisensoitua talousneuvojaa. {logoText} ei tarjoa asiakkailleen taloudellista neuvontaa, ja tässä esitetty informaatio on tarkoitettu vain markkinointitarkoituksiin. Aiempi suorituskyky ei ole tulevien tulosten osoitin. Varmista, että luet {riskWarningPage} saadaksesi selkeän kuvan yrityksen tuotteiden kaupankäyntiin liittyvistä riskeistä.`,
        riskWarning: `Riskivaroitus`,
      },
      para9: `MCA Intelifunds Limited ei tarjoa erotussopimuksia asuinpaikassaan Yhdysvaltojen, Iranin islamilaisen tasavallan ja Kanadan kaltaisissa lainkäyttöalueissa asuville henkilöille.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Kaikki oikeudet pidätetään`,
    },
  };
}

export default footer_FI;
