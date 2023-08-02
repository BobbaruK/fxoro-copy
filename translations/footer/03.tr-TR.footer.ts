const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_TR() {
  return {
    social: {
      followUsOn: "Bizi takip edin",
      getOurApp: "Uygulamamızı edinin",
      getOurAppFromApple: `Uygulamamızı <span lang="en">Apple Store</span>'ndan indirin`,
      getOurAppFromGoogle: `Uygulamamızı <span lang="en">Google Play</span>'den indirin`,
    },
    disclaimer: {
      para1: `Bu web sitesi, ${logoText.value} olarak faaliyet gösteren MCA Intelifunds Ltd. tarafından işletilmektedir.`,
      para2: `MCA INTELIFUNDS LTD, "${logoText.value}" olarak faaliyet gösteren bir finansal hizmetler şirketidir ve Kıbrıs Cumhuriyeti yasaları kapsamında kurulmuş ve tescil edilmiş olup, Kıbrıs Menkul Kıymetler ve Borsa Komisyonu (CySEC) tarafından 126/10 lisans numarasıyla lisanslanmış ve düzenlenmektedir.`,
      para3: `Adres: Petrou Tsirou 82, Mesa Geitonia, 3076, Limasol, Kıbrıs.`,
      para4: `Müşteri fonları ayrı hesaplarda tutulmakta ve müşteri tazminat fonu kapsamında sigortalanmaktadır.`,
      para5: `<u>Risk bildirimi</u>`,
      para6: `CFD'ler karmaşık araçlardır ve kaldıraç nedeniyle hızlı bir şekilde para kaybetme riski taşırlar. Bu sağlayıcı ile CFD ticareti yapan perakende yatırımcı hesaplarının %${footerPercent.value}'i para kaybeder. CFD'lerin nasıl çalıştığını anlayıp anlayamayacağınızı ve paranızı kaybetme yüksek riskini göz önünde bulundurmanız gerekmektedir.`,
      para7: `İspanya Ulusal Menkul Kıymetler Piyasası Komisyonu (CNMV), CFD'lerin karmaşıklığı ve içerdikleri riskler nedeniyle bu ürünün Perakende Müşteriler tarafından satın alınmasının uygun olmadığına karar vermiştir. Bu bağlamda, CNMV tarafından getirilen ilgili gerekliliklere göre, CFD'leri anlaması ve anlaması zor bir ürün olan Fark Sözleşmelerini (CFD'ler) satın almak üzere olduğunuz konusunda uyarılıyorsunuz. CNMV, karmaşıklığı ve içerdikleri riskler nedeniyle bu ürünün perakende yatırımcılar tarafından satın alınmasının uygun olmadığına karar vermiştir.`,
      para8: {
        para: `Bu nedenle, CFD'ler herkes için uygun bir yatırım olmayabilir. CFD tüccarlarına sunulan yüksek kaldıraç oranı sizin lehinize veya aleyhinize işleyebilir. Sadece kaybetmeyi göze alabileceğiniz parayı yatırım yapmalısınız. CFD'ler karmaşık kaldıraçlı finansal varlıklardır. Forex, emtia, endeksler ve hisse tabanlı CFD'ler veya Şirketin diğer temel varlıklarına dayalı CFD'lerin ticareti yüksek bir risk düzeyi taşır ve yatırımınızın kaybına neden olabilir. Ticaretle uğraşmadan önce finansal hedeflerinizi, becerilerinizi göz önünde bulundurmalısınız ve Şirketin Ürünleri ile ilişkili olası riskleri değerlendirmelisiniz. CFD gibi türetilmiş varlıklar ve diğer piyasalardan muhtemel araçlar aşırı oynaklık sergileyebilir. CFD'ler hızlı bir şekilde fiyat değiştirebilir ve tahmin edilemez olaylardan kaynaklanan piyasa koşullarında değişiklikleri yansıtabilir. Siz veya {logoText} tarafından bu gerçekler hiçbir şekilde manipüle edilemez. Lisanslı bir finansal danışmanla danışmanız en iyisi olacaktır. {logoText}, müşterilerine finansal tavsiye sunmamaktadır ve burada sağlanan bilgiler sadece pazarlama amacıyla kullanılmaktadır. Geçmiş performans, gelecekteki sonuçlar için bir gösterge değildir. Şirketin Ürünleri ile ticaretin getirdiği risklerin net bir resmini almak için {riskWarningPage} okuduğunuzdan emin olun.`,
        riskWarning: `Risk Uyarısı`,
      },
      para9: `MCA Intelifunds Limited, Amerika Birleşik Devletleri, İran İslam Cumhuriyeti ve Kanada gibi belirli yargı alanlarının sakinlerine Fark Sözleşmeleri sunmamaktadır.`,
      para10: `${new Date().getFullYear()} ${
        logoText.value
      } Tüm hakları saklıdır`,
    },
  };
}

export default footer_TR;
