<script setup lang="ts">
import { MenuItemsT } from "../../types/navMenuTypes";

const localePath = useLocalePath();
const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

const { t, locale } = useI18n({
  useScope: "global",
  messages: {
    en: {
      followUsOn: "Follow us on",
      getOurApp: "Get our app",
      disclaimer: {
        para1: `This website is under the operation of MCA Intelifunds Ltd, trading as  ${logoText.value}.`,
        para2: `MCA INTELIFUNDS LTD, trading as “${logoText.value}”, is a financial services company incorporated and registered under the laws of the Republic of Cyprus, licensed and regulated by the Cyprus Securities and Exchange Commission (CySEC) with license number 126/10.`,
        para3: `Address: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Cyprus.`,
        para4: `Clients funds are held in segregated accounts and insured by the client compensation funds subject to eligibility.`,
        para5: `<u>Risk disclaimer</u>`,
        para6: `CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <strong>${footerPercent.value}% of retail investor accounts lose money when trading CFDs with this provider</strong>. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.`,
        para7: `The National Securities Market commission of Spain (the “CNMV”) has determined that, due to the complexity of CFDs and the risks involved, the purchase of such a product by Retail Clients is not appropriate/suitable. In this respect, pursuant to the relevant requirements introduced by CNMV, you are warned that you are about to purchase a product that is complex and difficult to understand: Contracts for Differences (CFDs). CNMV has determined that, due to its complexity and the risks involved, the purchase of this product by retail investors is not appropriate/suitable.`,
        para8: {
          para: `Because of such, CFDs may not be the ideal investment for everyone. The high rate of leverage that is available to CFD traders can work for or against you. You should only invest money that you can afford to lose. CFDs are intricate leveraged financial assets. Trading Forex, Commodities, Indexes and Shares based CFDs, or any other underlaying instruments of the Company implies a high degree of risk and can lead to the loss of your investment. Before getting involved with trading, consider your financial goals, your skills and gage the possible risks associated with trading Company’s Products. Derivate assets like CFDs and likely instruments from other markets can present extreme volatility. CFDs may shift price rapidly and may depict change in market conditions that result from unforeseeable occurrences. None of these facts can be manipulated by either you or {logoText}. It is best to consult with a licensed financial counselor. {logoText} does not avail its customers with financial advice and the information provided herein is intended for marketing purposes only. Past performance is not an indicator for future results. Make sure to read the {riskWarningPage} to get a clear picture of the risks inherent with trading Company's Products.`,
          riskWarning: "Risk Warning",
        },
        para9: `MCA Intelifunds Limited does not offer Contracts for Difference to residents of certain jurisdictions such as the United States of America, the Islamic Republic of Iran and Canada.`,
        para10: `${new Date().getFullYear()} ${
          logoText.value
        } All rights reserved`,
      },
      getOurAppFromApple: `Get our app from <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Get our app from <span lang="en">Google Play</span>`,
    },
    it: {
      followUsOn: "Seguici online",
      getOurApp: "Scarica la nostra app",
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
      getOurAppFromApple: `Scarica la nostra app da <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Scarica la nostra app da <span lang="en">Google Play</span>`,
    },
    tr: {
      followUsOn: "Bizi takip edin",
      getOurApp: "Uygulamamızı edinin",
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
      getOurAppFromApple: `Uygulamamızı <span lang="en">Apple Store</span>'ndan indirin`,
      getOurAppFromGoogle: `Uygulamamızı <span lang="en">Google Play</span>'den indirin`,
    },
    ro: {
      followUsOn: "Urmărește-ne pe",
      getOurApp: "Descarcă aplicația noastră",
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
      getOurAppFromApple: `Descarcă aplicația noastră de la <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Descarcă aplicația noastră de la <span lang="en">Google Play</span>`,
    },
    ar: {
      followUsOn: "تابعنا على",
      getOurApp: "احصل على تطبيقنا",
      disclaimer: {
        para1: `هذا الموقع الإلكتروني تحت إشراف MCA Intelifunds Ltd ويتم التداول به باسم ${logoText.value}.`,
        para2: `MCA INTELIFUNDS LTD هي شركة خدمات مالية مسجلة ومرخصة بموجب قوانين جمهورية قبرص، وتحت رقم الترخيص 126/10 من قبل لجنة الأوراق المالية والبورصة في قبرص (CySEC).`,
        para3: `العنوان: بيترو تسيرو 82، ميسا جيتونيا، 3076، ليماسول، قبرص.`,
        para4: `يتم حفظ أموال العملاء في حسابات منفصلة ومؤمَّنة من خلال صناديق تعويض العملاء وفقًا للشروط المؤهلة.`,
        para5: `<u>إخلاء المسؤولية بشأن المخاطر</u>`,
        para6: `العقود مقابل الفروقات (CFDs) هي أدوات معقدة وتأتي مع مخاطر عالية للخسارة السريعة بسبب التداول بالرافعة المالية. يخسر حوالي <strong>${footerPercent.value}% من حسابات المستثمرين التجزئة أموالهم عند التداول بالعقود مقابل الفروقات مع هذا المزود</strong>. يجب أن تُنظر في مدى فهمك لكيفية عمل العقود مقابل الفروقات وما إذا كنت تستطيع تحمل مخاطر الخسارة العالية لأموالك.`,
        para7: `قد قررت الهيئة الوطنية لأسواق الأوراق المالية في إسبانيا (CNMV) أن شراء مثل هذا المنتج من قبل العملاء التجزئة غير مناسب/مناسب بسبب تعقيد عقود مقابل الفروقات والمخاطر المرتبطة بها. في هذا الصدد، وبموجب المتطلبات ذات الصلة التي أُدخلتها CNMV، يتم تحذيرك من أنك على وشك شراء منتج معقد وصعب الفهم: عقود مقابل الفروقات (CFDs). قررت CNMV أن شراء هذا المنتج من قبل المستثمرين التجزئة غير مناسب/مناسب بسبب تعقيداته والمخاطر المرتبطة به.`,
        para8: {
          para: `نظرًا لذلك، قد لا تكون عقود مقابل الفروقات استثمارًا مثاليًا للجميع. يمكن أن تكون الرافعة المالية العالية المتاحة للمتداولين في عقود مقابل الفروقات ذات تأثير إيجابي أو سلبي عليك. يجب عليك أن تستثمر فقط المال الذي تستطيع تحمل خسارته. عقود مقابل الفروقات هي أصول مالية معقدة وذات رافعة مالية. تداول الفوركس، السلع، المؤشرات، وأسهم عقود مقابل الفروقات، أو أي أدوات أخرى تتأثر بالشركة، ينطوي على درجة عالية من المخاطر وقد يؤدي إلى خسارة استثمارك. قبل الانخراط في التداول، انظر إلى أهدافك المالية ومهاراتك وقيّم المخاطر المحتملة المرتبطة بتداول منتجات الشركة. يمكن أن تُظهر الأصول المشتقة مثل عقود مقابل الفروقات وأدوات مشابهة من الأسواق الأخرى تقلبًا شديدًا. يمكن أن تتحول عقود مقابل الفروقات إلى أسعار بسرعة وقد تظهر تغييرات في ظروف السوق ناتجة عن حوادث غير متوقعة. لا يمكن تلاعب بهذه الحقائق من قبلك أو {logoText}. من الأفضل استشارة مستشار مالي مرخص. {logoText} لا يُقدم نصائح مالية لعملائه والمعلومات المقدمة هنا هي لأغراض التسويق فقط. الأداء السابق لا يُعد مؤشرًا للنتائج المستقبلية. تأكد من قراءة {riskWarningPage} للحصول على صورة واضحة للمخاطر المترتبة على تداول منتجات الشركة.`,
          riskWarning: `تحذير المخاطر`,
        },
        para9: `MCA Intelifunds Limited لا تقدم عقودًا مقابل الفروقات للمقيمين في بعض الاختصاصات مثل الولايات المتحدة الأمريكية والجمهورية الإسلامية الإيرانية وكندا.`,
        para10: `جميع الحقوق محفوظة ${
          logoText.value
        } ${new Date().getFullYear()}`,
      },
      getOurAppFromApple: `احصل على تطبيقنا من <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `احصل على تطبيقنا من <span lang="en">متجر Google Play</span>`,
    },
    de: {
      followUsOn: "Folge uns auf",
      getOurApp: "Hole dir unsere App",
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
      getOurAppFromApple: `Holen Sie sich unsere App aus dem <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Holen Sie sich unsere App aus dem <span lang="en">Google Play</span>`,
    },
    es: {
      followUsOn: "Síguenos en",
      getOurApp: "Obtén nuestra aplicación",
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
      getOurAppFromApple: `Obtén nuestra aplicación desde <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Obtén nuestra aplicación desde <span lang="en">Google Play</span>`,
    },
    sv: {
      followUsOn: "Följ oss på",
      getOurApp: "Skaffa vår app",
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
      getOurAppFromApple: `Hämta vår app från <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Hämta vår app från <span lang="en">Google Play</span>`,
    },
    pt: {
      followUsOn: "Siga-nos em",
      getOurApp: "Obtenha nosso aplicativo",
      disclaimer: {
        para1: `Este site está sob a operação da MCA Intelifunds Ltd, comercializando como ${logoText.value}.`,
        para2: `MCA INTELIFUNDS LTD, comercializando como "${logoText.value}", é uma empresa de serviços financeiros incorporada e registrada sob as leis da República de Chipre, licenciada e regulamentada pela Comissão de Valores Mobiliários e Câmbio de Chipre (CySEC) com o número de licença 126/10.`,
        para3: `Endereço: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Chipre.`,
        para4: `Os fundos dos clientes são mantidos em contas segregadas e segurados pelos fundos de compensação do cliente, sujeitos a elegibilidade.`,
        para5: `<u>Aviso de risco</u>`,
        para6: `CFDs são instrumentos complexos e têm um alto risco de perder dinheiro rapidamente devido à alavancagem. <strong>${footerPercent.value}% das contas de investidores de varejo perdem dinheiro ao negociar CFDs com esse provedor</strong>. Você deve considerar se compreende como os CFDs funcionam e se pode se dar ao luxo de correr o alto risco de perder seu dinheiro.`,
        para7: `A Comissão Nacional de Mercado de Valores da Espanha (CNMV) determinou que a compra de tal produto por clientes varejistas não é adequada/apropriada devido à complexidade dos CFDs e aos riscos envolvidos. Neste sentido, de acordo com os requisitos relevantes introduzidos pela CNMV, você está sendo alertado de que está prestes a comprar um produto que é complexo e difícil de entender: Contracts for Differences (CFDs). A CNMV determinou que, devido à sua complexidade e aos riscos envolvidos, a compra deste produto por investidores de varejo não é adequada/apropriada.`,
        para8: {
          para: `Portanto, os CFDs podem não ser o investimento ideal para todos. A alta taxa de alavancagem disponível para traders de CFD pode funcionar a favor ou contra você. Você deve investir apenas o dinheiro que pode se dar ao luxo de perder. Os CFDs são ativos financeiros alavancados complexos. Negociar Forex, commodities, índices e ações baseados em CFDs ou qualquer outro instrumento subjacente da Empresa implica um alto grau de risco e pode levar à perda do seu investimento. Antes de se envolver na negociação, considere seus objetivos financeiros, suas habilidades e avalie os possíveis riscos associados aos produtos da Empresa. Ativos derivativos como CFDs e instrumentos prováveis de outros mercados podem apresentar extrema volatilidade. Os CFDs podem mudar de preço rapidamente e podem retratar mudanças nas condições de mercado que resultam de ocorrências imprevisíveis. Nenhum desses fatos pode ser manipulado nem por você nem por {logoText}. É melhor consultar um conselheiro financeiro licenciado. {logoText} não fornece aconselhamento financeiro aos seus clientes e as informações fornecidas aqui têm apenas fins de marketing. O desempenho passado não é um indicador de resultados futuros. Certifique-se de ler a {riskWarningPage} para obter uma imagem clara dos riscos inerentes à negociação dos produtos da Empresa.`,
          riskWarning: `Aviso de Risco`,
        },
        para9: `A MCA Intelifunds Limited não oferece Contratos por Diferença para residentes de certas jurisdições, como Estados Unidos da América, República Islâmica do Irã e Canadá.`,
        para10: `${new Date().getFullYear()} ${
          logoText.value
        } Todos os direitos reservados`,
      },
      getOurAppFromApple: `Obtenha nosso aplicativo na <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Obtenha nosso aplicativo no <span lang="en">Google Play</span>`,
    },
    fi: {
      followUsOn: "Seuraa meitä",
      getOurApp: "Lataa sovelluksemme",
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
      getOurAppFromApple: `Lataa sovellus <span lang="en">Apple Storesta</span>`,
      getOurAppFromGoogle: `Lataa sovellus <span lang="en">Google Playsta</span>`,
    },
    pl: {
      followUsOn: "Śledź nas na",
      getOurApp: "Pobierz naszą aplikację",
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
      getOurAppFromApple: `Pobierz naszą aplikację ze sklepu <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Pobierz naszą aplikację ze sklepu <span lang="en">Google Play</span>`,
    },
    hu: {
      followUsOn: "Kövess minket",
      getOurApp: "Szerezd be az alkalmazásunkat",
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
      getOurAppFromApple: `Szerezd be az alkalmazásunkat az <span lang="en">Apple Store</span>-ból`,
      getOurAppFromGoogle: `Szerezd be az alkalmazásunkat a <span lang="en">Google Play</span>-ből`,
    },
    th: {
      followUsOn: "ติดตามเราที่",
      getOurApp: "รับแอปของเรา",
      disclaimer: {
        para1: `เว็บไซต์นี้อยู่ภายใต้การดำเนินงานของ MCA Intelifunds Ltd ซึ่งเปิดการซื้อขายในนาม ${logoText.value}`,
        para2: `MCA INTELIFUNDS LTD ซึ่งเปิดการซื้อขายในนาม "${logoText.value}" เป็นบริษัทให้บริการทางการเงินที่ได้รับการจดทะเบียนตามกฎหมายของสาธารณรัฐตัวของไซปรัสและได้รับใบอนุญาตและกำกับดูแลโดยกรมคุ้มครองหลักทรัพย์และตลาดแห่งไซปรัส (CySEC) หมายเลขใบอนุญาต 126/10`,
        para3: `ที่อยู่: เลขที่ 82 ถนน Petrou Tsirou, Mesa Geitonia, 3076, Limassol, ไซปรัส`,
        para4: `เงินทุนของลูกค้าถูกเก็บไว้ในบัญชีแยกไว้และมีการประกันโดยกองทุนชดใช้ลูกค้าซึ่งขึ้นอยู่กับความมีสิทธิในการขอรับความเสี่ยง`,
        para5: `<u>คำเตือนเกี่ยวกับความเสี่ยง</u>`,
        para6: `CFD เป็นเครื่องมือที่ซับซ้อนและมีความเสี่ยงสูงในการสูญเสียเงินอย่างรวดเร็วเนื่องจากการใช้ความเสี่ยงของเงินทุน ผู้ลงทุนประเภทส่วนใหญ่ ${footerPercent.value}% สูญเสียเงินเมื่อซื้อขาย CFD กับผู้ให้บริการนี้ คุณควรพิจารณาว่าคุณเข้าใจ CFD อย่างไรและสามารถรับความเสี่ยงที่สูงในการสูญเสียเงินของคุณได้หรือไม่`,
        para7: `คณะกรรมการตลาดหลักทรัพย์แห่งชาติสเปน (CNMV) ได้ตัดสินใจว่า ด้วยความซับซ้อนของ CFD และความเสี่ยงที่เกี่ยวข้องการซื้อขายผลิตภัณฑ์เช่นนี้โดยลูกค้าปลีกไม่เหมาะสม / เหมาะสม ในเชิงนี้ ในที่นี้ ตามความต้องการที่เกี่ยวข้องที่นำเสนอโดย CNMV คุณจะได้รับคำเตือนว่าคุณกำลังจะซื้อผลิตภัณฑ์ที่ซับซ้อนและยากลำบากในการเข้าใจ: สัญญาซื้อขายความแตกต่าง (CFD) CNMV ได้ตัดสินใจว่า ด้วยความซับซ้อนและความเสี่ยงที่เกี่ยวข้องการซื้อผลิตภัณฑ์นี้โดยนักลงทุนปลีกไม่เหมาะสม / เหมาะสม`,
        para8: {
          para: `เนื่องจากสิ่งนี้ CFD อาจไม่ใช่การลงทุนที่เหมาะสมสำหรับทุกคน อัตราการค้าเงินทุนสูงที่มีให้กับนักซื้อขาย CFD อาจทำงานเพื่อคุณหรือกัน คุณควรลงทุนเฉพาะเงินที่คุณสามารถเสียได้ CFD เป็นสินทรัพย์ทางการเงินที่ซับซ้อนและใช้การค้าเงินตัวในอัตราส่วนสูง การซื้อขายฟอเร็กซ์ สินค้า ดัชนี และหุ้นที่เปิดตัวจาก CFD หรือสินทรัพย์ในอื่นๆ ของ บริษัท เป็นอันตรายสูงและอาจ导致ความเสียหายในการลงทุนของคุณ ก่อนที่จะเข้ามาในการซื้อขายคิดที่จะหาวัตถุประสงค์ทางการเงินของคุณทักษะของคุณและคาดการณ์ความเสี่ยงที่เป็นไปได้ที่เกี่ยวข้องกับการซื้อขายผลิตภัณฑ์ของบริษัท สินทรัพย์ซึ่งเป็นส่วนผสมและสินทรัพย์ที่น่าจะเป็นจากตลาดอื่น ๆ อาจมีความผันผวนที่หนัก CFD อาจเปลี่ยนราคาอย่างรวดเร็วและอาจแสดงถึงการเปลี่ยนแปลงในเงื่อนไขตลาดที่เกิดขึ้นจากเหตุการณ์ที่ซึ่งไม่สามารถคาดคะเนได้ ที่สุดท้ายทั้งหมดเหตุการณ์เหล่านี้ไม่สามารถถูกก่อการให้รู้ตัวกันด้วยความเป็นไปไม่ได้ทั้งคุณและ {logoText} ที่ดีที่สุดคือให้คำปรึกษากับที่ปรึกษาทางการเงินที่มีใบอนุญาต {logoText} ไม่ให้คำปรึกษาทางการเงินแก่ลูกค้าของเขาและข้อมูลที่ให้ไว้ที่นี่มีไว้เพื่อวัตถุประสงค์ทางการตลาดเท่านั้น การกระทำในอดีตไม่ใช่ตัวบ่งชี้สำหรับผลลัพธ์ในอนาคต ตรงนี้ต้องอ่าน {riskWarningPage} เพื่อให้มีภาพลักษณ์ชัดเจนเกี่ยวกับความเสี่ยงที่เกี่ยวข้องกับการซื้อขายผลิตภัณฑ์ของบริษัท`,
          riskWarning: `คำเตือนเกี่ยวกับความเสี่ยง`,
        },
        para9: `MCA Intelifunds Limited ไม่ให้บริการสัญญาความแตกต่างให้กับผู้อาศัยในสามัญคณะตั้งแต่อเมริกา รัฐสหรัฐอเมริกา สาธารณรัฐอิสลามแห่งอิหร่าน และแคนาดา`,
        para10: `${new Date().getFullYear()} ${
          logoText.value
        } สงวนลิขสิทธิ์ทั้งหมด`,
      },
      getOurAppFromApple: `รับแอปของเราจาก <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `รับแอปของเราจาก <span lang="en">Google Play</span>`,
    },
    ms: {
      followUsOn: "Ikuti kami di",
      getOurApp: "Dapatkan apl kami",
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
      getOurAppFromApple: `Dapatkan apl kami dari <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Dapatkan apl kami dari <span lang="en">Google Play</span>`,
    },
    vi: {
      followUsOn: "Theo dõi chúng tôi trên",
      getOurApp: "Tải ứng dụng của chúng tôi",
      disclaimer: {
        para1: `Trang web này đang được vận hành bởi MCA Intelifunds Ltd, giao dịch dưới tên ${logoText.value}.`,
        para2: `MCA INTELIFUNDS LTD, giao dịch dưới tên "${logoText.value}", là một công ty dịch vụ tài chính được thành lập và đăng ký theo luật pháp của Cộng hòa Síp, được cấp phép và quản lý bởi Ủy ban Chứng khoán và Trao đổi Síp (CySEC) với số giấy phép 126/10.`,
        para3: `Địa chỉ: Petrou Tsirou 82, Mesa Geitonia, 3076, Limassol, Síp.`,
        para4: `Quỹ của khách hàng được giữ trong các tài khoản riêng biệt và được bảo hiểm bởi quỹ bồi thường khách hàng theo điều kiện hợp lệ.`,
        para5: `<u>Phủ nhận rủi ro</u>`,
        para6: `CFD là các công cụ phức tạp và có rủi ro cao về việc mất tiền nhanh chóng do đòn bẩy. <strong>${footerPercent.value}% tài khoản nhà đầu tư bán lẻ mất tiền khi giao dịch CFD với nhà cung cấp này</strong>. Bạn nên xem xét xem mình có hiểu cách CFD hoạt động và liệu bạn có đủ khả năng để chịu rủi ro cao về việc mất tiền.`,
        para7: `Ủy ban Chứng khoán Quốc gia Tây Ban Nha (CNMV) đã quyết định rằng, do tính phức tạp của CFD và rủi ro liên quan, việc mua sản phẩm như vậy bởi Khách hàng Bán lẻ không phù hợp. Trong bối cảnh này, theo các yêu cầu liên quan được giới thiệu bởi CNMV, bạn được cảnh báo rằng bạn sắp mua một sản phẩm phức tạp và khó hiểu: Hợp đồng chênh lệch (CFD). CNMV đã quyết định rằng, do tính phức tạp và rủi ro liên quan, việc mua sản phẩm này bởi nhà đầu tư bán lẻ không phù hợp.`,
        para8: {
          para: `Do đó, CFD có thể không phải là một khoản đầu tư lý tưởng cho mọi người. Tỷ lệ đòn bẩy cao có sẵn cho các nhà giao dịch CFD có thể hoạt động theo một cách nào đó hoặc đối nghịch với bạn. Bạn chỉ nên đầu tư tiền mà bạn có khả năng để mất. CFD là các tài sản tài chính đòn bẩy phức tạp. Giao dịch Forex, Hàng hóa, Chỉ số và Cổ phiếu dựa trên CFD, hoặc bất kỳ công cụ cơ sở khác của Công ty, ngụ ý mức độ rủi ro cao và có thể dẫn đến mất vốn của bạn. Trước khi tham gia giao dịch, xem xét mục tiêu tài chính của bạn, kỹ năng của bạn và đánh giá các rủi ro có thể đi kèm khi giao dịch Sản phẩm Công ty. Tài sản phái sinh như CFD và các công cụ khác từ các thị trường khác có thể có tính biến động cực đoan. CFD có thể chuyển đổi giá nhanh chóng và có thể miêu tả thay đổi trong điều kiện thị trường do các sự kiện không thể dự đoán. Không một trong những sự thật này có thể bị thao túng bởi bạn hoặc {logoText}. Nên tốt nhất là tham khảo ý kiến ​​tư vấn tài chính có giấy phép. {logoText} không cung cấp lời khuyên tài chính cho khách hàng và thông tin được cung cấp ở đây chỉ dành cho mục đích tiếp thị. Hiệu suất trong quá khứ không phải là một chỉ báo cho kết quả trong tương lai. Hãy chắc chắn đọc {riskWarningPage} để hiểu rõ các rủi ro inherent khi giao dịch Sản phẩm Công ty.`,
          riskWarning: `Cảnh báo rủi ro`,
        },
        para9: `MCA Intelifunds Limited không cung cấp Hợp đồng chênh lệch cho cư dân của một số khu vực như Hoa Kỳ, Cộng hòa Hồi giáo Iran và Canada.`,
        para10: `${new Date().getFullYear()} ${
          logoText.value
        } Đã đăng ký bản quyền`,
      },
      getOurAppFromApple: `Tải ứng dụng của chúng tôi từ <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Tải ứng dụng của chúng tôi từ <span lang="en">Google Play</span>`,
    },
  },
});

const menuItems = ref<MenuItemsT>({
  cfds: {
    route: "/cfds",
    routeLabel: "cfds",
    children: {
      forex: {
        route: "/cfds/forex",
        routeLabel: "forex",
      },
      shares: {
        route: "/cfds/shares",
        routeLabel: "shares",
      },
      commodities: {
        route: "/cfds/commodities",
        routeLabel: "commodities",
      },
      indices: {
        route: "/cfds/indices",
        routeLabel: "indices",
      },
      cryptocurrencies: {
        route: "/cfds/cryptocurrencies",
        routeLabel: "cryptocurrencies",
      },
      etfs: {
        route: "/cfds/etfs",
        routeLabel: "etfs",
      },
    },
  },
  investing: {
    route: "/investing",
    routeLabel: "investing",
    children: {
      realShares: {
        route: "/investing/real-shares",
        routeLabel: "realShares",
      },
    },
  },
  tradingCenter: {
    route: "/trading-center",
    routeLabel: "tradingCenter",
    children: {
      tradingInfo: {
        route: "/trading-center/trading-info",
        routeLabel: "tradingInfo",
      },
      tradingConditions: {
        route: "/trading-center/trading-conditions",
        routeLabel: "tradingConditions",
      },
      accounts: {
        route: "/trading-center/accounts",
        routeLabel: "accounts",
      },
      professionalAccounts: {
        route: "/trading-center/professional-accounts",
        routeLabel: "professionalAccounts",
      },
      islamicAccounts: {
        route: "/trading-center/islamic-account",
        routeLabel: "islamicAccounts",
      },
      faq: {
        route: "/trading-center/faq",
        routeLabel: "faq",
      },
      basicCourse: {
        route: "/trading-center/basic-course",
        routeLabel: "basicCourse",
      },
      inDepthCourses: {
        route: "/trading-center/in-depth-courses",
        routeLabel: "inDepthCourses",
      },
      eBook: {
        route: "/trading-center/e-book",
        routeLabel: "eBook",
      },
      glossary: {
        route: "/trading-center/glossary",
        routeLabel: "glossary",
      },
      webminars: {
        route: "/trading-center/webminars",
        routeLabel: "webminars",
      },
    },
  },
  tools: {
    route: "/tools",
    routeLabel: "tools",
    children: {
      digitalIdentityVerification: {
        route: "/tools/digital-identity-verification",
        routeLabel: "digitalIdentityVerification",
      },
      mt4: {
        route: "/tools/mt4",
        routeLabel: "mt4",
      },
      tradingCentral: {
        route: "/tools/trading-central",
        routeLabel: "tradingCentral",
      },
      marginCalculatorTool: {
        route: "/tools/margin-calculator-tool",
        routeLabel: "marginCalculatorTool",
      },
      economicCalendar: {
        route: "/tools/economic-calendar",
        routeLabel: "economicCalendar",
      },
      news: {
        route: "/tools/news",
        routeLabel: "news",
      },
      signals: {
        route: "/tools/signals",
        routeLabel: "signals",
      },
    },
  },
  company: {
    route: "/company",
    routeLabel: "company",
    children: {
      aboutUs: {
        route: "/company/about-us",
        routeLabel: "aboutUs",
      },
      whyFxoro: {
        route: "/company/why-fxoro",
        routeLabel: "whyFxoro",
      },
      affiliation: {
        route: "/company/affiliation",
        routeLabel: "affiliation",
      },
      events: {
        route: "/company/events",
        routeLabel: "events",
      },
      contactUs: {
        route: "/company/contact-us",
        routeLabel: "contactUs",
      },
      newsAndUpdates: {
        route: "/company/news-and-updates",
        routeLabel: "newsAndUpdates",
      },
      blog: {
        route: "/company/blog",
        routeLabel: "blog",
      },
    },
  },
  legal: {
    route: "/legal",
    routeLabel: "legal",
    children: {
      privacyAndSecurityPolicy: {
        route: "/legal/privacy-and-security-policy",
        routeLabel: "privacyAndSecurityPolicy",
      },
      termsOfUse: {
        route: "/legal/terms-of-use",
        routeLabel: "termsOfUse",
      },
      riskWarningNotice: {
        route: "/legal/risk-warning-notice",
        routeLabel: "riskWarningNotice",
      },
      regulations: {
        route: "/legal/regulations",
        routeLabel: "regulations",
      },
      termsAndConditions: {
        route: "#",
        routeLabel: "termsAndConditions",
      },
      conflictOfInterest: {
        route: "#",
        routeLabel: "conflictOfInterest",
      },
      supportingDocuments: {
        route: "/legal/supporting-documents",
        routeLabel: "supportingDocuments",
      },
      keyInformationDocumentKid: {
        route: "/legal/key-information-document-kid",
        routeLabel: "keyInformationDocumentKid",
      },
    },
  },
});

//   ro: {},
//   ar: {},
//   de: {},
//   es: {},
//   sv: {},
//   pt: {},
//   fi: {},
//   pl: {},
//   hu: {},
//   th: {},
//   ms: {},
//   vi: {},

const fbSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z'/%3E%3C/svg%3E")`;
const instagramSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z'/%3E%3C/svg%3E")`;
const twitterSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z'/%3E%3C/svg%3E")`;
const linkedInSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z'/%3E%3C/svg%3E")`;
const telegramSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z' fill='currentColor'/%3E%3C/svg%3E")`;
</script>

<template>
  <BackToTop />
  <SiteFooterTopStrip />
  <footer id="footer" class="siteFooter">
    <div class="siteFooter__navigation">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <nav>
              <ul class="siteFooter__navigationMenu">
                <li v-for="item in menuItems" :key="item.routeLabel">
                  <NuxtLink :to="localePath(item.route)">
                    <span v-html="t(item.routeLabel)" />
                  </NuxtLink>
                  <ul v-if="'children' in item">
                    <li
                      v-for="childItem in item.children"
                      :key="childItem.routeLabel"
                    >
                      <NuxtLink :to="localePath(childItem.route)">
                        <span v-html="t(childItem.routeLabel)" />
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__divider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__social">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 siteFooter__socialInner">
            <p v-html="t('followUsOn')" />
            <div class="siteFooter__socials">
              <NuxtLink
                class="facebook"
                to="https://www.facebook.com/fxoro.official/"
                target="_blank"
                aria-labelledby="siteFooter__facebookLabel"
              >
                <span id="siteFooter__facebookLabel" class="sr-only">
                  Facebook
                </span>
                <SVGMask :svg-encoded="fbSVG" />
              </NuxtLink>
              <NuxtLink
                class="instagram"
                to="https://www.instagram.com/fxoroofficialpage/"
                target="_blank"
                aria-labelledby="siteFooter__instagramLabel"
              >
                <span id="siteFooter__instagramLabel" class="sr-only">
                  Instagram
                </span>
                <SVGMask :svg-encoded="instagramSVG" />
              </NuxtLink>
              <NuxtLink
                class="twitter"
                to="https://twitter.com/FXORO1"
                target="_blank"
                aria-labelledby="siteFooter__twitterLabel"
              >
                <span id="siteFooter__twitterLabel" class="sr-only">
                  Twitter
                </span>
                <SVGMask :svg-encoded="twitterSVG" />
              </NuxtLink>
              <NuxtLink
                class="linkedIn"
                to="https://www.linkedin.com/company/fxoro"
                target="_blank"
                aria-labelledby="siteFooter__linkedinLabel"
              >
                <span id="siteFooter__linkedinLabel" class="sr-only">
                  LinkedIn
                </span>
                <SVGMask :svg-encoded="linkedInSVG" />
              </NuxtLink>
              <NuxtLink
                class="telegram"
                to="https://t.me/fxoro_official"
                target="_blank"
                aria-labelledby="siteFooter__telegramLabel"
              >
                <span id="siteFooter__telegramLabel" class="sr-only">
                  Telegram
                </span>
                <SVGMask :svg-encoded="telegramSVG" />
              </NuxtLink>
            </div>
            <p v-html="t('getOurApp')" />
            <div class="siteFooter__theApps">
              <div class="qr">
                <img
                  alt="QR"
                  width="93"
                  height="93"
                  src="https://i.ibb.co/fScYL8Z/qr-code.png"
                />
              </div>
              <div class="google">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fxoro.app"
                  aria-labelledby="siteFooter__googlePlayLabel"
                >
                  <span
                    id="siteFooter__googlePlayLabel"
                    class="sr-only"
                    :lang="locale"
                    v-html="t('getOurAppFromGoogle')"
                  />
                  <img
                    alt="Google Play"
                    width="120"
                    height="36"
                    src="https://i.ibb.co/gTwB0ND/google-play.png"
                  />
                </a>
              </div>
              <div class="apple">
                <a
                  href="https://apps.apple.com/th/app/fxoro/id1579042568"
                  aria-labelledby="siteFooter__appleStoreLabel"
                >
                  <span
                    id="siteFooter__appleStoreLabel"
                    class="sr-only"
                    :lang="locale"
                    v-html="t('getOurAppFromApple')"
                  />
                  <img
                    alt="Apple Store"
                    width="120"
                    height="36"
                    src="https://i.ibb.co/MGxqZhY/apple-icon-1.png"
                  />
                </a>
              </div>
            </div>
            <img
              class="asRoma"
              alt="AS Roma Logo"
              width="213"
              height="140"
              src="https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/logodiffrfrumos.png"
            />
            <img
              class="investing"
              alt="investing"
              style="max-width: 200px"
              src="https://i.ibb.co/0jDv1H2/negativ-investing.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__divider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__brands">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 siteFooter__brandsInner">
            <img
              alt="Bita"
              style="height: fit-content"
              height="30"
              width="83"
              src="https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/footer/bita.png"
            />
            <img
              alt="REFINITIV"
              style="height: fit-content"
              height="30"
              width="83"
              src="https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/footer/refinitiv.png"
            />
            <img
              alt="LSEG"
              style="height: fit-content"
              height="30"
              width="114"
              src="https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/footer/lseg.png"
            />
            <img
              alt="Cboe"
              style="height: fit-content"
              height="30"
              width="79"
              src="https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/footer/cboe2.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__divider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__disclaimer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <p v-html="t('disclaimer.para1')" tabindex="0" />
            <p v-html="t('disclaimer.para2')" tabindex="0" />
            <p v-html="t('disclaimer.para3')" tabindex="0" />
            <p v-html="t('disclaimer.para4')" tabindex="0" />
            <p v-html="t('disclaimer.para5')" tabindex="0" />
            <p v-html="t('disclaimer.para6')" tabindex="0" />
            <p v-html="t('disclaimer.para7')" tabindex="0" />
            <i18n-t
              keypath="disclaimer.para8.para"
              tag="p"
              scope="global"
              tabindex="0"
            >
              <template #logoText>
                <span v-html="logoText" />
              </template>
              <template #riskWarningPage>
                <NuxtLink :to="localePath('/legal/risk-warning-notice')">{{
                  t("disclaimer.para8.riskWarning")
                }}</NuxtLink>
              </template>
            </i18n-t>
            <p v-html="t('disclaimer.para9')" tabindex="0" />
            <p v-html="t('disclaimer.para10')" tabindex="0" />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__credits">
      <SiteFooterCredits />
    </div>
  </footer>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

footer#footer {
  background-color: var(--clr-gray-900);
  color: var(--clr-white);
  z-index: 0;
}
.siteFooter {


  // Divider
  &__divider {
  }

  // Navigation
  &__navigation,
  &__social,
  &__brandsInner,
  &__disclaimer,
  &__credits {
    padding-block: calc(var(--spacing) / 2);
    a {
      color: var(--clr-brandSecondaryColor);
    }
  }
  &__navigation {
    padding-block-start: 0;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      a {
        color: var(--clr-white);
      }
    }
  }
  &__navigationMenu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    gap: 2rem;
    justify-content: space-between;
    > li > a {
      text-transform: uppercase;
    }
    ul {
      margin-block-start: 1rem;
      li {
        margin-block-end: 0.5rem;
        max-width: 25ch;
      }
    }
    a {
      &.router-link-active,
      &.router-link-exact-active {
        font-weight: bold;
      }
    }
  }

  // Social
  &__social {
  }
  &__socialInner {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 2rem;
    @include mxns.mediamin(md) {
      grid-template-columns: repeat(4, 1fr);
    }

    p {
      margin: 0;
      text-transform: uppercase;
      font-weight: bold;
    }

    img.asRoma,
    img.investing {
      grid-column-start: 1;
      grid-column-end: 3;
      align-self: center;
      justify-self: center;
    }

    img.asRoma {
      @include mxns.mediamin(sm) {
        grid-column-start: 1;
        grid-column-end: 2;
      }
      @include mxns.mediamin(md) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
      }
      @include mxns.mediamin(lg) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
      }
    }
    img.investing {
      @include mxns.mediamin(sm) {
        grid-column-start: 2;
        grid-column-end: 3;
      }
      @include mxns.mediamin(md) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 2;
      }
      @include mxns.mediamin(lg) {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 1;
      }
    }
  }
  &__socials {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: flex-start;
    a {
      color: var(--clr-white);
      font-size: 32px;
      &:hover {
        &.facebook {
          color: #3b5998;
        }
        &.instagram {
          color: #e1306c;
        }
        &.twitter {
          color: #55acee;
        }
        &.linkedIn {
          color: #0077b5;
        }
        &.telegram {
          color: #2fa6de;
        }
      }
    }
  }
  &__theApps {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    max-width: 240px;
    .qr {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }

  // Brands
  &__brands {
  }
  &__brandsInner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    gap: 2rem;
    max-width: none;
  }

  // Disclaimer
  &__disclaimer {
    --clr-brandPrimaryColor: var(--clr-white)

    padding-block-end: 0;
  }

  // Credits
  &__credits {
    font-size: 80%;
  }
}
</style>
