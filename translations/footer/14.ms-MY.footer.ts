const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_MS() {
  return {
    social: {
      followUsOn: "Ikuti kami di",
      getOurApp: "Dapatkan apl kami",
      getOurAppFromApple: `Dapatkan apl kami dari <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Dapatkan apl kami dari <span lang="en">Google Play</span>`,
    },
    disclaimer: {
      para1: `Laman web ini berada di bawah pengendalian MCA Intelifunds Ltd, berdagang sebagai ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD, berdagang sebagai "${logoText.value}", merupakan syarikat perkhidmatan kewangan yang diperbadankan dan didaftarkan di bawah undang-undang Republik Cyprus, berlesen dan diawasi oleh Suruhanjaya Sekuriti dan Bursa Cyprus (CySEC) dengan nombor lesen 126/10.`,
      para3: `Alamat: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Cyprus.`,
      para4: `Dana pelanggan disimpan dalam akaun yang dipisahkan dan dilindungi oleh dana pampasan pelanggan tertakluk kepada kelayakan.`,
      para5: `<u>Penafian Risiko</u>`,
      para6: `CFD adalah instrumen kompleks dan mempunyai risiko tinggi kehilangan wang dengan cepat disebabkan oleh leverage. <strong>${footerPercent.value}% daripada akaun pelabur runcit kehilangan wang semasa berdagang CFD dengan penyedia ini</strong>. Anda perlu mempertimbangkan sama ada anda memahami bagaimana CFD berfungsi dan sama ada anda mampu untuk mengambil risiko tinggi kehilangan wang anda.`,
      para7: `Suruhanjaya Pasaran Sekuriti Kebangsaan Sepanyol (CNMV) telah memutuskan bahawa, disebabkan oleh kepelbagaian CFD dan risiko yang terlibat, pembelian produk sedemikian oleh Klien Runcit tidak sesuai atau sesuai. Dalam hal ini, selaras dengan keperluan yang berkaitan yang diperkenalkan oleh CNMV, anda diingatkan bahawa anda akan membeli produk yang kompleks dan sukar difahami: Perjanjian untuk Perbezaan (CFD). CNMV telah memutuskan bahawa, disebabkan oleh kepelbagaian dan risiko yang terlibat, pembelian produk ini oleh pelabur runcit tidak sesuai atau sesuai.`,
      para8: {
        para: `Oleh itu, CFD mungkin tidak menjadi pelaburan yang ideal untuk semua orang. Kadar leverage yang tinggi yang tersedia kepada pedagang CFD boleh berfungsi untuk atau bertentangan dengan anda. Anda hanya perlu melaburkan wang yang anda mampu untuk kehilangannya. CFD adalah aset kewangan yang rumit dengan leverage. Berdagang Forex, Komoditi, Indeks, dan Saham berdasarkan CFD, atau instrumen yang mendasari lain daripada Syarikat, mengimplikasikan risiko yang tinggi dan boleh menyebabkan kerugian pelaburan anda. Sebelum terlibat dalam perdagangan, pertimbangkan matlamat kewangan anda, kemahiran anda, dan nilai risiko yang mungkin berkaitan dengan perdagangan Produk Syarikat. Aset derivatif seperti CFD dan instrumen lain dari pasaran lain mungkin menunjukkan ketidakstabilan yang ekstrem. CFD mungkin berubah harga dengan cepat dan mungkin menggambarkan perubahan dalam keadaan pasaran yang berlaku akibat kejadian yang tidak dapat diramalkan. Tiada fakta-fakta ini boleh dimanipulasi oleh anda atau {logoText}. Ia adalah lebih baik untuk berunding dengan kaunselor kewangan yang berlesen. {logoText} tidak menyediakan nasihat kewangan kepada pelanggan dan maklumat yang diberikan di sini adalah untuk tujuan pemasaran sahaja. Prestasi masa lalu bukanlah penunjuk untuk hasil masa depan. Pastikan untuk membaca {riskWarningPage} untuk mendapatkan gambaran yang jelas tentang risiko yang melekat dalam berdagang Produk Syarikat.`,
        riskWarning: `Amaran Risiko`,
      },
      para9: `MCA Intelifunds Limited tidak menawarkan Kontrak untuk Perbezaan kepada penduduk kawasan tertentu seperti Amerika Syarikat, Republik Islam Iran, dan Kanada.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Semua hak terpelihara`,
    },
  };
}

export default footer_MS;
