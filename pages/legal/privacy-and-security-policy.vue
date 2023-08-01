<script setup lang="ts">
const logoText = useLogoFXORO();
/**
 * translations
 */
const { t, locale } = useI18n({
  useScope: "global",
  messages: {
    en: {
      seo: {
        metaTitle: "Privacy and Security Policy",
        metaDescription:
          "Privacy policy and security criteria. FXORO, the online trading broker through which everything is possible.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (hereinafter the company) trading as “FXORO”, is an investment firm regulated by the Cyprus Securities and Exchange Commission under license no. 126/10 and operates according to the Cyprus Investment Services and Activities and Regulated Markets Law of 2017 (Law 87(I)/2017)(hereinafter the “Law”).`,
          para2: `FXORO is committed to protect the privacy of all personal data which is obtained from you, including the data we obtain during your visits to the FXORO websites. FXORO handles, retains and processes your data only insofar as this is in accordance with the applicable legal requirements and only to the extent it is necessary for the achievement of the purposes set out herein.`,
          para3: `Please view the following Privacy Policy Statement which clearly indicates how we use your personal data, how it is collected, how it is stored &amp; how it is processed. It also explains your rights under the law relating to your personal data.`,
          para4: `References in this document to “personal data” are references to personal data and sensitive personal data as defined in Processing of Personal Data (Protection of Individuals) Law 138(1) of 2001 as amended from time to time, as well as the General Data Protection Regulation (GDPR) (EU 2016/679) and to the extend applicable, the data protection or privacy of laws of any other country.`,
          para5: `FXORO, our associates, any members, agents and/or sub-contractors which we engage or work through for the purpose of collecting, storing and processing Personal Data and any third parties acting on our behalf, may collect, process, use and store Personal Data provided by you for the purposes of carrying out transactions, and/or other services, operational support and development of our or their business.`,
        },
        sectionInfoWeCollect: {
          title: `What information do we collect from you?`,
          para1: `In order for FXORO to provide its clients with the investment services, FXORO is required to collect, process and retain personal data of its clients in accordance with the mandatory legal requirements. This includes, among others, your name, date of birth, residential address, passport number, email address, telephone number, profession, payment information and information concerning your financial status.`,
          para2: `In order to provide our products and services, we may collect your information through several different sources, including but not limited to:`,
          list: {
            list1: `Website and forms`,
            list2: `Website Live Chat`,
            list3: `CRM system`,
            list4: `Via Phone`,
            list5: `Via Email`,
            list6: `Other Third Party Processors`,
            list7: `Third Party Service Providers`,
            list8: `Existing Clients`,
            list9: `Partners, Employees`,
          },
          para3: `FXORO also collects and processes personal information about you, which is necessary in order to provide you with its services, as listed below in the section “How do we use and share your personally identifiable information?” This includes information about you when you complete an online application or another type of form and when you access and trade through your FXORO account. Additionally, we may also obtain personal information as a result of authentication or identity checks, including checks with credit reference agencies (who may keep a record of the information) to prevent fraud.`,
          para4: `FXORO may also derive information from your use of the FXORO websites and software client and may store this information with your personal profile. This information may include site areas visited, pages viewed, frequency and duration of visits, Internet Protocol (IP) address, computer identification parameters, types of transactions conducted, documents downloaded, mouse clicks, mouse movements, scrolling activity as well as text you type in this website and which website referred you to ours or to which websites you link.`,
        },
        sectionProtectPersonalInfo: {
          title: `How we protect your personal information`,
          para1: `At FXORO, we are committed in respecting, protecting and maintaining your privacy and thus, we have a lot of measures in place`,
          para2: `Among a lot of measures, we use computer safeguards such as firewalls and data encryption. We also enforce physical access controls to our buildings and files to keep this data safe. We only authorize access to employees who need it in order to perform their responsibilities.`,
        },
        sectionLinks: {
          title: `Links`,
          para1: `When you use the FXORO websites, you may be able to link to other websites. This Privacy & Security Policy does not apply to those other sites which you may choose to link from FXORO's website and we are not responsible for any personal information collected by third parties via those other sites`,
        },
        sectionProcessPersonalInfo: {
          title: `Processing of personal information`,
          para1: `Access to personal information is restricted to those employees, partners, contractors and affiliates of FXORO (including without limitations, parent, sister and subsidiary companies) who need to access such information for the purposes described in this policy. Those with access to personal information are obligated to comply with strict standards of confidentiality when managing personal and other data.`,
        },
        sectionSecurity: {
          title: `Security`,
          para1: `FXORO makes efforts to maintain the appropriate safeguards in order to ensure that the security, integrity and privacy of the data and personal information that you have provided is not misused. Such measures and safeguards include encryption during data transmission, strong authentication mechanisms and the separation of machines and data to provide secure areas. While such systems and procedures reduce the risk of security breaches, they do not provide absolute security. Therefore FXORO cannot guarantee that our service will be immune from any wrongdoings, malfunctions, unlawful interceptions or unauthorized access to the information stored therein and to other information security risks, or that your private communications on or through our service will remain private.`,
        },
        sectionAnonymusStatInfo: {
          title: `How do we use and share anonymous statistical information?`,
          para1: `FXORO collects anonymous statistical information in order to ensure that it meets the needs of its clients. By collecting such data, FXORO is able to monitor and improve the services which it offers to its existing and potential clients. We may share such anonymized information with third parties.`,
        },
        sectionIdentifiableInfo: {
          title: `How do we use and share your personally identifiable information?`,
          para1: `FXORO may use your personal information and share it with partners contractors, service providers, advisors, transaction processors and affiliates of FXORO (including parent, sister and subsidiary companies) (the “Partners”) for the following purposes only, and upon your explicit consent:`,
          list: {
            list1: `to provide you the services that you have requested including processing transactions`,
            list2: `to confirm your identity`,
            list3: `to assess your suitability`,
            list4: `to the products and services we provide`,
            list5: `to maintain your personal profile`,
            list6: `to manage your account`,
            list7: `to contact you when necessary or appropriate in relation to the services being provided to you, including via a third party mailing platform`,
            list8: `to keep you updated while you are a client in relation to matters such as contracts you have traded and activities of FXORO`,
            list9: `to manage and administer the products and services provided to you`,
            list10: `for marketing purposes, including, but not limited to providing you with information regarding the products and services offered by FXORO and its Partners`,
            list11: `to develop an understanding of the products and services that you may be interested in obtaining from FXORO and to tailor the website to your needs and interests`,
            list12: `to create impersonalized statistical data`,
            list13: `to conduct surveys and questionnaires`,
            list14: `to enforce the governing terms and conditions`,
          },
          para2: `If FXORO believes that you have breached the governing terms and conditions, or abused your rights to use the services, or performed any act or omission that FXORO believes to be violating any applicable law, rules, or regulations, then FXORO may share your information with law enforcement agencies and other competent authorities as well as with other third parties, as may be required;`,
          para3: `If FXORO is required, or believes that it is required by law to share or disclose your information to financial authorities or to any other third party;`,
          list2: {
            list1: `In any case of dispute, or legal proceeding of any kind between you and FXORO, or between you and other clients or third parties with respect to, or in relation with the services FXORO provides`,
            list2: `In any case where FXORO believes that sharing information is necessary to prevent imminent physical harm or damage to property`,
            list3: `If FXORO organizes the operation of its services within a different framework, or through another legal structure or entity, or if FXORO is acquired by, or merged with another entity, provided however, that those entities agree to be bound by the provisions of this policy as well as confidential agreements`,
          },
        },
        sectionOptOut: {
          title: `Choice and opt-out`,
          para1: `In the registration process with FXORO as a client, you will be given the option to opt-out of subscribing to the following additional services:`,
          list: {
            list1: `Marketing services, which provides you with information regarding the products and services offered by FXORO or its partners; and opportunities that we believe may be relevant to you; Client orders, liaise with FXORO`,
            list2: `Newsletters`,
            list3: `SMS (text) messages`,
            list4: `Other electronic communications`,
          },
          para2: `If you no longer wish to receive the above mentioned communications, you may opt-out of receiving them by sending an email at {complianceMail} or at {removalMail}.`,
          para3: `The email needs to contain the following:`,
          list2: {
            list1: `Name and surname`,
            list2: `Account Number (if any)`,
            list3: `The email used in the registration process`,
          },
        },
        sectionTransferData: {
          title: `Transfer of data to third countries`,
          para1: `Personal data may be transferred by FXORO to third parties in European Economic Area Member States as well as to non-European Economic Area Member States for the purposes described in this policy. You give your express and unambiguous consent to such transfer, provided that such transfer will always happen under the regulations for data protection governing our operations.`,
        },
        sectionUpdateInfo: {
          title: `Updating your information`,
          para1: `You may inform {logoText} at any time that your personal details have been changed by emailing us at {fxoroMail}. We will change or delete your personal information in accordance with your instructions, except to the extent that we are required to hold your personal information for regulatory or legal purposes, to provide you with the services you have requested or to maintain adequate business records, in which case your personal information will be deleted on the expiration of such mandatory period. In any case, {logoText} may keep any aggregated or anonymized information for the purposes described in this Privacy and Security Policy, indefinitely.`,
        },
        sectionCookies: {
          title: `Cookies`,
          para1: `Cookies are small files of information, which often include a unique identification number or value, which are stored on your computer's hard drive as a result of your use of the FXORO trading software and/or access of the FXORO websites.`,
          para2: `We use both session ID cookies and persistent cookies. A session ID cookie expires when you close your browser. A persistent cookie remains on your hard drive for an extended period of time.`,
          para3: `We set a persistent cookie for statistical purposes. Persistent cookies also enable us to track and target the location and the interests of our users and to enhance the experience of our services on our site.`,
          para4: `You can remove persistent cookies by following directions provided in your Internet browser's “help” file. If you do not wish to receive cookies altogether, you may be able to change the settings of your browser to refuse all cookies or to have your computer notify you each time a cookie is sent to it, and thereby give yourself the choice whether to accept it or not. However, this may impair the quality of the services that we provide to you in relation to your account. Some persistent cookies, such as Flash cookies, cannot be removed and cannot be blocked by changing your browser's settings.`,
          para5: `Some persistent cookies will not be removed or blocked by your internet browser. If you wish to disable all cookies, please send a request to {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Remarketing with Google Analytics`,
          para1: `We may use the information we collect to assist us in delivering relevant ads to you (Remarketing). Remarketing is a way for us to connect with our websites and ads visitors, based upon their past interactions with our website and ads. Third-party marketing vendors may be hired by FXORO to perform such remarketing services. As a result, third-party vendors, including Google, may show FXORO's ads on internet sites. Such third-party vendors, including Google, may also use their cookies, third party cookies and similar technologies to serve ads based on a visitor's prior visits to FXORO's website.`,
          para2: `You may opt out of Google Analytics for Display Advertisers and opt out of customized Google Display Network ads by visiting Google's Ads Preferences Manager. You are also encouraged to visit Google Analytics Opt-out Browser Add-on.`,
          para3: `For further information you can also visit Google's privacy center.`,
        },
        sectionYourRights: {
          title: `What are your rights?`,
          para1: `You do not have to provide us with any of the personal data requested by FXORO. However, without providing the information requested in the application form, FXORO may not be able to open an account for you, or to provide you with any other services, information or assistance you have sought or evaluate the appropriateness of the service you are requesting.`,
        },
        sectionRightToRequest: {
          title: `You have the right to request and be provided with the following:`,
          list: {
            list1: `Information regarding all your Personal Data which we hold and which has been subject to processing as well as information as to how such data was obtained, the purpose for which the data is processed, the recipients, the categories of data processed or to be processed, the processing which has taken place since the data subject was last updated regarding the processing and the rationale behind the automated processing system`,
            list2: `Any correction and deletion of your Personal Data which has not been processed in accordance with the applicable requirements due to lack of information or discrepancies`,
            list3: `Any notification made to any third party as to any amendments made in accordance with (2) above, unless this would be disproportionally burdensome for us`,
          },
        },
        sectionAffiliates: {
          title: `Affiliates and Partners`,
          para1: `FXORO may share information with partners, Associates and Third Parties in the event such information is reasonably required by such Associates and Third Parties in order to:`,
          list: {
            list1: `Offer additional similar products and services that meet your needs and which are delivered in a manner that is useful and relevant (only where you have authorized us to do so); and/or`,
            list2: `Service customer accounts.`,
          },
          para2: `FXORO does not sell, license, lease or otherwise disclose personal information to third parties, except as described in this Privacy Statement.`,
        },
        sectionEnforcement: {
          title: `Enforcement`,
          para1: `{logoText} is doing its utmost to comply with this Privacy and Security Policy. If you have any questions, concerns or complaints regarding this Privacy and Security Policy and the enforcement thereof, please refer them to: {complaintsMail}. After receiving your complaint, {logoText} may contact you to better understand your concerns and will make all efforts to promptly answer your question, or resolve your complaint to your full satisfaction.`,
          para2: `{logoText} has appointed a data protection officer (DPO), who is responsible for overseeing the data protection strategy and implementation, in order to ensure compliance with the General Data Protection Regulation (GDPR). If you have any questions, concerns or complaints regarding our data protection strategy and implementation, please refer them to: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Amendments to policy`,
          para1: `FXORO may change and update the terms of this Privacy and Security Policy from time to time. All changes will take effect seven (7) days after their initial posting on the Website, unless FXORO amends the Privacy and Security Policy to comply with legal or regulatory requirements. In the latter cases the amendments will become effective as required, or ordered.`,
        },
        sectionGoverningLaw: {
          title: `Governing Law`,
          para1: `In respect of issues not addressed in the present Privacy and Security Policy, the law of Cyprus will apply.`,
        },
        sectionConsent: {
          title: `Consent`,
          para1: `By continuing to use our website or other services offered, you are agreeing to the collection, processing and use of your personal data by FXORO.`,
        },
      },
    },
    it: {
      seo: {
        metaTitle: "Politica sulla Privacy e Sicurezza",
        metaDescription:
          "Politica sulla privacy e criteri di sicurezza. FXORO, il broker di trading online attraverso cui tutto è possibile.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (di seguito la società) che opera come “FXORO”, è una società di investimento regolamentata dalla Cyprus Securities and Exchange Commission con licenza numero 126/10 e opera in conformità alla Cyprus Investment Services and Activities and Regulated Markets Law del 2017 (Legge 87(I)/2017) (di seguito la “Legge”).`,
          para2: `FXORO si impegna a proteggere la privacy di tutti i dati personali ottenuti da te, compresi i dati ottenuti durante le visite ai siti web di FXORO. FXORO gestisce, conserva e tratta i tuoi dati solo in conformità con le normative applicabili e solo nella misura in cui ciò è necessario per il raggiungimento degli scopi stabiliti nel presente documento.`,
          para3: `Ti invitiamo a consultare la seguente Informativa sulla privacy che indica chiaramente come utilizziamo i tuoi dati personali, come vengono raccolti, come vengono archiviati e come vengono trattati. Spiega anche i tuoi diritti ai sensi della legge relativa ai tuoi dati personali.`,
          para4: `I riferimenti nel presente documento a "dati personali" si intendono riferiti a dati personali e dati personali sensibili come definiti nella legge Processing of Personal Data (Protection of Individuals) Law 138(1) del 2001, come modificata di volta in volta, nonché nel Regolamento generale sulla protezione dei dati (GDPR) (UE 2016/679) e, ove applicabile, alle leggi sulla protezione dei dati o sulla privacy di qualsiasi altro paese.`,
          para5: `FXORO, i nostri collaboratori, eventuali membri, agenti e/o subappaltatori con cui collaboriamo per la raccolta, conservazione e elaborazione di dati personali e terze parti che agiscono per nostro conto possono raccogliere, elaborare, utilizzare e conservare i dati personali forniti da te per scopi legati alla conduzione di transazioni e/o altri servizi, supporto operativo e sviluppo della nostra o della loro attività.`,
        },
        sectionInfoWeCollect: {
          title: `Quali informazioni raccogliamo da te?`,
          para1: `Per fornire i suoi servizi di investimento ai clienti, FXORO è tenuta a raccogliere, elaborare e conservare i dati personali dei propri clienti in conformità con i requisiti legali obbligatori. Ciò include, tra l'altro, il tuo nome, la data di nascita, l'indirizzo di residenza, il numero del passaporto, l'indirizzo email, il numero di telefono, la professione, le informazioni di pagamento e le informazioni relative alla tua situazione finanziaria.`,
          para2: `Per fornire i nostri prodotti e servizi, potremmo raccogliere le tue informazioni da diverse fonti, incluse ma non limitate a:`,
          list: {
            list1: `Siti web e moduli`,
            list2: `Chat dal vivo sul sito web`,
            list3: `Sistema CRM`,
            list4: `Tramite telefono`,
            list5: `Tramite email`,
            list6: `Altri processori terzi`,
            list7: `Fornitori di servizi di terze parti`,
            list8: `Clienti esistenti`,
            list9: `Partner, dipendenti`,
          },
          para3: `FXORO raccoglie e elabora anche informazioni personali necessarie per fornirti i suoi servizi, come elencato di seguito nella sezione "Come utilizziamo e condividiamo le tue informazioni personali identificabili?" Questo include informazioni su di te quando completi un'applicazione online o un altro tipo di modulo e quando accedi e fai trading attraverso il tuo account FXORO. Inoltre, potremmo ottenere informazioni personali come risultato di controlli di autenticazione o identità, compresi controlli presso agenzie di riferimento creditizio (che potrebbero conservare un registro delle informazioni) per prevenire frodi.`,
          para4: `FXORO potrebbe ottenere informazioni dall'utilizzo dei siti web e del software client di FXORO e potrebbe memorizzare queste informazioni nel tuo profilo personale. Queste informazioni possono includere aree del sito visitate, pagine visualizzate, frequenza e durata delle visite, indirizzo Protocollo Internet (IP), parametri di identificazione del computer, tipi di transazioni effettuate, documenti scaricati, clic del mouse, movimenti del mouse, attività di scorrimento e testo digitato nel sito web e il sito web da cui sei stato reindirizzato al nostro o a cui hai collegato il nostro sito.`,
        },
        sectionProtectPersonalInfo: {
          title: `Come proteggiamo le tue informazioni personali`,
          para1: `Presso FXORO, ci impegniamo a rispettare, proteggere e mantenere la tua privacy e, a tal fine, abbiamo implementato numerose misure`,
          para2: `Tra le varie misure, utilizziamo protezioni informatiche come firewall e crittografia dei dati. Applichiamo anche controlli di accesso fisico ai nostri edifici e file per mantenere al sicuro questi dati. Autorizziamo l'accesso solo ai dipendenti che ne hanno bisogno per svolgere le proprie responsabilità.`,
        },
        sectionLinks: {
          title: `Collegamenti`,
          para1: `Quando utilizzi i siti web di FXORO, potresti essere in grado di collegarti ad altri siti web. Questa Informativa sulla Privacy e Sicurezza non si applica a quei siti web esterni ai quali potresti decidere di accedere tramite il sito web di FXORO, e non siamo responsabili per le informazioni personali raccolte da terze parti tramite quei siti esterni.`,
        },
        sectionProcessPersonalInfo: {
          title: `Elaborazione delle informazioni personali`,
          para1: `L'accesso alle informazioni personali è limitato ai dipendenti, partner, collaboratori e affiliati di FXORO (compresi, a titolo esemplificativo, le società madri, collegate e controllate) che necessitano di accedere a tali informazioni per gli scopi descritti in questa politica. Coloro che hanno accesso alle informazioni personali sono obbligati a rispettare rigorosi standard di riservatezza nella gestione di dati personali e altre informazioni.`,
        },
        sectionSecurity: {
          title: `Sicurezza`,
          para1: `FXORO fa sforzi per mantenere adeguate misure di sicurezza al fine di garantire che i dati e le informazioni personali che hai fornito non siano utilizzati impropriamente. Tali misure di sicurezza includono la crittografia durante la trasmissione dei dati, meccanismi di autenticazione robusti e la separazione di macchine e dati per fornire aree sicure. Sebbene tali sistemi e procedure riducano il rischio di violazioni della sicurezza, non possono garantire una sicurezza assoluta. Pertanto, FXORO non può garantire che il nostro servizio sarà immune da eventuali atti illeciti, malfunzionamenti, intercettazioni illecite o accessi non autorizzati alle informazioni memorizzate e ad altri rischi per la sicurezza delle informazioni, né che le tue comunicazioni private sul nostro servizio rimarranno private.`,
        },
        sectionAnonymusStatInfo: {
          title: `Come utilizziamo e condividiamo informazioni statistiche anonime?`,
          para1: `FXORO raccoglie informazioni statistiche anonime al fine di garantire di soddisfare le esigenze dei suoi clienti. Raccogliendo tali dati, FXORO è in grado di monitorare e migliorare i servizi che offre ai suoi clienti attuali e potenziali. Possiamo condividere tali informazioni anonime con terze parti.`,
        },
        sectionIdentifiableInfo: {
          title: `Come utilizziamo e condividiamo le tue informazioni personalmente identificabili?`,
          para1: `FXORO potrebbe utilizzare le tue informazioni personali e condividerle con partner, collaboratori, fornitori di servizi, consulenti, processori di transazioni e affiliati di FXORO (compresi le società madri, collegate e controllate) ("i Partner") solo per i seguenti scopi e previo tuo esplicito consenso:`,
          list: {
            list1: `fornirti i servizi che hai richiesto, inclusa l'elaborazione delle transazioni`,
            list2: `confermare la tua identità`,
            list3: `valutare la tua idoneità`,
            list4: `fornirti i prodotti e servizi che offriamo`,
            list5: `mantenere il tuo profilo personale`,
            list6: `gestire il tuo account`,
            list7: `contattarti quando necessario o opportuno in relazione ai servizi forniti, incluso tramite una piattaforma di terze parti per l'invio di comunicazioni`,
            list8: `mantenerti aggiornato mentre sei cliente riguardo a questioni come i contratti che hai stipulato e le attività di FXORO`,
            list9: `gestire e amministrare i prodotti e servizi forniti a te`,
            list10: `a fini di marketing, incluso, ma non solo, fornirti informazioni sui prodotti e servizi offerti da FXORO e dai suoi Partner`,
            list11: `sviluppare una comprensione dei prodotti e servizi che potresti essere interessato a ottenere da FXORO e personalizzare il sito web in base alle tue esigenze e interessi`,
            list12: `creare dati statistici anonimi`,
            list13: `condurre sondaggi e questionari`,
            list14: `far rispettare i termini e le condizioni applicabili`,
          },
          para2: `Se FXORO ritiene che tu abbia violato i termini e le condizioni applicabili, o abbia abusato dei tuoi diritti per utilizzare i servizi, o abbia compiuto qualsiasi atto o omissione che FXORO ritiene violi qualsiasi legge, norma o regolamento applicabile, allora FXORO potrebbe condividere le tue informazioni con agenzie di applicazione della legge e altre autorità competenti, nonché con altre terze parti, come richiesto;`,
          para3: `Se FXORO è tenuta o ritiene di essere tenuta per legge a condividere o divulgare le tue informazioni alle autorità finanziarie o a qualsiasi altra terza parte;`,
          list2: {
            list1: `In caso di controversia o procedura legale di qualsiasi tipo tra te e FXORO, o tra te e altri clienti o terze parti in relazione con i servizi forniti da FXORO`,
            list2: `In caso in cui FXORO ritenga che la condivisione di informazioni sia necessaria per prevenire danni fisici imminenti o danni a proprietà`,
            list3: `Se FXORO organizza il funzionamento dei suoi servizi all'interno di un diverso quadro o attraverso un'altra struttura o entità giuridica, o se FXORO viene acquisita o si fonde con un'altra entità, a condizione tuttavia che tali entità accettino di essere vincolate dalle disposizioni di questa politica e da accordi confidenziali`,
          },
        },
        sectionOptOut: {
          title: `Scelta e opt-out`,
          para1: `Nel processo di registrazione con FXORO come cliente, ti verrà data la possibilità di optare per non iscriverti ai seguenti servizi aggiuntivi:`,
          list: {
            list1: `Servizi di marketing, che forniscono informazioni sui prodotti e servizi offerti da FXORO o dai suoi partner; e opportunità che riteniamo possano essere rilevanti per te; Ordini dei clienti, contatto con FXORO`,
            list2: `Newsletter`,
            list3: `Messaggi SMS (testuali)`,
            list4: `Altre comunicazioni elettroniche`,
          },
          para2: `Se non desideri più ricevere le comunicazioni sopra menzionate, puoi scegliere di non riceverle inviando un'e-mail a {complianceMail} o a {removalMail}.`,
          para3: `L'email deve contenere quanto segue:`,
          list2: {
            list1: `Nome e cognome`,
            list2: `Numero di account (se presente)`,
            list3: `L'email utilizzata nel processo di registrazione`,
          },
        },
        sectionTransferData: {
          title: `Trasferimento dei dati verso paesi terzi`,
          para1: `I dati personali possono essere trasferiti da FXORO a terzi sia negli Stati membri dell'Area Economica Europea che in paesi non appartenenti all'Area Economica Europea per gli scopi descritti in questa politica. Dai il tuo esplicito e inequivocabile consenso a tale trasferimento, a condizione che tale trasferimento avvenga sempre nel rispetto delle normative per la protezione dei dati che disciplinano le nostre operazioni.`,
        },
        sectionUpdateInfo: {
          title: `Aggiornamento delle tue informazioni`,
          para1: `Puoi informare {logoText} in qualsiasi momento che i tuoi dati personali sono stati modificati inviandoci un'email a {fxoroMail}. Modificheremo o elimineremo le tue informazioni personali in conformità alle tue istruzioni, tranne nei casi in cui siamo obbligati a conservare le tue informazioni personali per scopi regolatori o legali, per fornirti i servizi che hai richiesto o per mantenere adeguati registri aziendali, in tal caso le tue informazioni personali saranno eliminate alla scadenza di tale periodo obbligatorio. In ogni caso, {logoText} potrebbe conservare qualsiasi informazione aggregata o anonimizzata per gli scopi descritti in questa Informativa sulla Privacy e Sicurezza, a tempo indeterminato.`,
        },
        sectionCookies: {
          title: `Cookie`,
          para1: `I cookie sono piccoli file di informazioni, che includono spesso un numero o valore di identificazione univoco, che vengono memorizzati sull'hard disk del tuo computer a seguito dell'utilizzo del software di trading di FXORO e/o dell'accesso ai siti web di FXORO.`,
          para2: `Utilizziamo sia cookie di sessione che cookie persistenti. Un cookie di sessione scade quando chiudi il tuo browser. Un cookie persistente rimane sull'hard disk per un periodo di tempo prolungato.`,
          para3: `Impostiamo un cookie persistente per scopi statistici. I cookie persistenti ci consentono anche di tracciare e individuare la posizione e gli interessi dei nostri utenti e di migliorare l'esperienza dei nostri servizi sul nostro sito.`,
          para4: `Puoi rimuovere i cookie persistenti seguendo le istruzioni fornite nel file "help" del tuo browser Internet. Se non desideri ricevere affatto i cookie, potresti essere in grado di modificare le impostazioni del tuo browser per rifiutare tutti i cookie o per farti notificare ogni volta che ti viene inviato un cookie e quindi decidere se accettarlo o meno. Tuttavia, ciò potrebbe compromettere la qualità dei servizi che ti forniamo relativamente al tuo account. Alcuni cookie persistenti, come i cookie Flash, non possono essere rimossi e non possono essere bloccati modificando le impostazioni del tuo browser.`,
          para5: `Alcuni cookie persistenti non verranno rimossi o bloccati dal tuo browser Internet. Se desideri disabilitare tutti i cookie, ti preghiamo di inviare una richiesta a {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Remarketing con Google Analytics`,
          para1: `Potremmo utilizzare le informazioni che raccogliamo per aiutarci a fornirti annunci pertinenti (Remarketing). Il Remarketing è un modo per noi di connetterci con i visitatori dei nostri siti web e annunci, basato sulle loro interazioni passate con il nostro sito web e gli annunci. Potremmo avvalerci di fornitori di marketing terzi, inclusi Google, per svolgere tali servizi di Remarketing. Di conseguenza, i fornitori di terze parti, inclusi Google, potrebbero mostrare annunci di FXORO su altri siti internet. Tali fornitori di terze parti, inclusi Google, potrebbero anche utilizzare i loro cookie, cookie di terze parti e tecnologie simili per fornire annunci basati sulle visite precedenti al sito web di FXORO.`,
          para2: `Puoi decidere di escluderti da Google Analytics per gli inserzionisti e scegliere di non ricevere annunci personalizzati dalla rete di display di Google visitando il Gestore delle preferenze annunci di Google. Ti incoraggiamo anche a visitare il Componente aggiuntivo del browser per la disattivazione di Google Analytics.`,
          para3: `Per ulteriori informazioni, puoi visitare anche il centro sulla privacy di Google.`,
        },
        sectionYourRights: {
          title: `Quali sono i tuoi diritti?`,
          para1: `Non sei obbligato a fornirci nessun dato personale richiesto da FXORO. Tuttavia, senza fornire le informazioni richieste nel modulo di registrazione, FXORO potrebbe non essere in grado di aprire un account per te o fornirti altri servizi, informazioni o assistenza richiesti o valutare l'adeguatezza del servizio che stai richiedendo.`,
        },
        sectionRightToRequest: {
          title: `Hai il diritto di richiedere e ottenere quanto segue:`,
          list: {
            list1: `Informazioni riguardanti tutti i tuoi dati personali che possediamo e che sono stati oggetto di trattamento, nonché informazioni su come tali dati sono stati ottenuti, lo scopo per cui i dati sono trattati, i destinatari, le categorie di dati trattati o da trattare, il trattamento effettuato da quando il soggetto interessato è stato aggiornato per l'ultima volta in merito al trattamento e la logica alla base del sistema di trattamento automatizzato`,
            list2: `Eventuali correzioni e cancellazioni dei tuoi dati personali che non sono stati trattati in conformità con i requisiti applicabili a causa di mancanza di informazioni o discrepanze`,
            list3: `Eventuali notifiche fatte a terzi in merito a eventuali modifiche apportate in conformità a quanto indicato al punto (2) sopra, a meno che ciò sia sproporzionatamente oneroso per noi`,
          },
        },
        sectionAffiliates: {
          title: `Affiliati e Partner`,
          para1: `FXORO può condividere informazioni con partner, associati e terze parti nel caso in cui tali informazioni siano ragionevolmente richieste da tali associati e terze parti al fine di:`,
          list: {
            list1: `Offrire ulteriori prodotti e servizi simili che soddisfino le tue esigenze e che siano forniti in modo utile e pertinente (solo se ci hai autorizzato a farlo); e/o`,
            list2: `Gestire gli account dei clienti.`,
          },
          para2: `FXORO non vende, concede in licenza, affitta o divulga in altro modo informazioni personali a terze parti, eccetto come descritto in questa Informativa sulla Privacy.`,
        },
        sectionEnforcement: {
          title: `Applicazione`,
          para1: `{logoText} sta facendo il massimo sforzo per conformarsi a questa Informativa sulla Privacy e Sicurezza. Se hai domande, preoccupazioni o reclami riguardanti questa Informativa sulla Privacy e Sicurezza e la sua applicazione, ti preghiamo di inviarli a: {complaintsMail}. Dopo aver ricevuto il tuo reclamo, {logoText} potrebbe contattarti per comprendere meglio le tue preoccupazioni e farà tutti gli sforzi per rispondere prontamente alla tua domanda o risolvere il tuo reclamo per la tua completa soddisfazione.`,
          para2: `{logoText} ha nominato un responsabile della protezione dei dati (DPO), responsabile della supervisione della strategia e dell'attuazione della protezione dei dati, al fine di garantire la conformità al Regolamento generale sulla protezione dei dati (GDPR). Se hai domande, preoccupazioni o reclami riguardanti la nostra strategia e attuazione della protezione dei dati, ti preghiamo di inviarli a: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Modifiche alla politica`,
          para1: `FXORO potrebbe modificare e aggiornare i termini di questa Informativa sulla Privacy e Sicurezza di volta in volta. Tutte le modifiche avranno effetto sette (7) giorni dopo la loro pubblicazione iniziale sul sito web, a meno che FXORO non modifichi l'Informativa sulla Privacy e Sicurezza per conformarsi a requisiti legali o normativi. In quest'ultimo caso, le modifiche diventeranno effettive come richiesto o ordinato.`,
        },
        sectionGoverningLaw: {
          title: `Legge applicabile`,
          para1: `Per le questioni non trattate nella presente Informativa sulla Privacy e Sicurezza, si applicherà la legge di Cipro.`,
        },
        sectionConsent: {
          title: `Consenso`,
          para1: `Continuando a utilizzare il nostro sito web o altri servizi offerti, acconsenti alla raccolta, al trattamento e all'uso dei tuoi dati personali da parte di FXORO.`,
        },
      },
    },
    tr: {
      seo: {
        metaTitle: "Gizlilik ve Güvenlik Politikası",
        metaDescription:
          "Gizlilik politikası ve güvenlik kriterleri. Her şeyin mümkün olduğu çevrim içi işlem brokerı FXORO.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (bundan sonra "şirket" olarak anılacaktır) " FXORO " adıyla işlem yaparak, Kıbrıs Menkul Kıymetler ve Borsa Komisyonu tarafından 126/10 lisans numarasıyla düzenlenen bir yatırım şirketidir ve 2017 Kıbrıs Yatırım Hizmetleri ve Faaliyetleri ve Düzenlenmiş Piyasalar Yasası (Yasa 87(I)/2017) uyarınca çalışır (bundan sonra "Yasa" olarak anılacaktır).`,
          para2: `FXORO, FXORO web sitelerini ziyaretleriniz sırasında elde edilen tüm kişisel verilerin gizliliğini korumaya taahhüt eder. FXORO, verilerinizi yalnızca uygulanabilir yasal gerekliliklere uygun olarak ve burada belirtilen amaçların gerçekleştirilmesi için gerekli olduğu ölçüde işler, saklar ve işler.`,
          para3: `Lütfen kişisel verilerinizi nasıl kullandığımızı, nasıl toplandığını, nasıl depolandığını ve işlendiğini açıkça belirten aşağıdaki Gizlilik Politikası Bildirimini inceleyin. Aynı zamanda kişisel verilerinize ilişkin yasaya göre haklarınızı da açıklar.`,
          para4: `Bu belgedeki "kişisel veriler" ifadesi, zaman zaman değiştirilen 2001 tarihli Kişisel Verilerin İşlenmesi (Bireylerin Korunması) Yasası'nın 138(1) numaralı maddesinde tanımlanan kişisel veriler ve hassas kişisel veriler anlamına gelir, ayrıca Genel Veri Koruma Tüzüğü (GDPR) (AB 2016/679) ve gerekli olduğu ölçüde diğer ülkelerin veri koruma veya gizlilik yasaları anlamına gelir.`,
          para5: `FXORO, ortaklarımız, herhangi bir üye, temsilcimiz ve/veya alt yüklenicilerimiz kişisel verilerin toplanması, saklanması ve işlenmesi amacıyla çalıştığımız veya birlikte çalıştığımız üçüncü taraflar olarak hareket edebilir ve tarafımız adına işlem yapabilir. İşlemlerin gerçekleştirilmesi, diğer hizmetler, operasyonel destek ve işletmelerinin geliştirilmesi amacıyla tarafınızdan sağlanan Kişisel Verileri toplayabilir, işleyebilir, kullanabilir ve saklayabilir.`,
        },
        sectionInfoWeCollect: {
          title: `Sizden hangi bilgileri topluyoruz?`,
          para1: `FXORO'ın müşterilerine yatırım hizmetleri sağlaması için FXORO, müşterilerinin kişisel verilerini zorunlu yasal gerekliliklere uygun olarak toplamak, işlemek ve saklamak zorundadır. Bunlar arasında adınız, doğum tarihiniz, ikamet adresiniz, pasaport numaranız, e-posta adresiniz, telefon numaranız, mesleğiniz, ödeme bilgileriniz ve mali durumunuza ilişkin bilgiler bulunur.`,
          para2: `Ürün ve hizmetlerimizi sağlamak için, web sitesi dahil olmak üzere çeşitli kaynaklardan bilgi toplayabiliriz. Bunlar arasında şunlar bulunur (ancak bunlarla sınırlı değildir):`,
          list: {
            list1: `Web sitesi ve formlar`,
            list2: `Web sitesi Canlı Sohbet`,
            list3: `CRM sistemi`,
            list4: `Telefon üzerinden`,
            list5: `E-posta yoluyla`,
            list6: `Diğer Üçüncü Taraf İşlemciler`,
            list7: `Üçüncü Taraf Hizmet Sağlayıcıları`,
            list8: `Mevcut Müşteriler`,
            list9: `Ortaklar, Çalışanlar`,
          },
          para3: `FXORO, size hizmetlerini sağlamak için gerekli olan kişisel bilgilerinizi aşağıda listelenen "Kişisel Olarak Tanımlanabilir Bilgilerinizi Nasıl Kullanıyoruz ve Paylaşıyoruz?" bölümünde belirtilen şekilde toplar ve işler. Bu, çevrim içi başvuru veya diğer tür formları doldururken ve FXORO hesabınıza erişim ve işlem yaparken sizinle ilgili bilgileri içerir. Ayrıca sahtekarlığı önlemek için kimlik doğrulama veya kimlik kontrolü sonucunda kişisel bilgileri de elde edebiliriz.`,
          para4: `FXORO, FXORO web sitelerinin ve yazılım müşterisinin kullanımından elde edilen bilgileri de alabilir ve bu bilgileri kişisel profilinizle birlikte saklayabilir. Bu bilgiler, ziyaret edilen site alanlarını, görüntülenen sayfaları, ziyaretlerin sıklığını ve süresini, İnternet Protokolü (IP) adresini, bilgisayar tanımlama parametrelerini, gerçekleştirilen işlem türlerini, indirilen belgeleri, fare tıklamalarını, fare hareketlerini, kaydırma etkinliğini ve bu web sitesine yazdığınız metni içerebilir ve sizi web sitemize yönlendiren web sitesini ve hangi web sitelerine bağlandığınızı belirlemek amacıyla bu bilgileri depolayabiliriz.`,
        },
        sectionProtectPersonalInfo: {
          title: `Kişisel bilgilerinizi nasıl koruyoruz`,
          para1: `FXORO, gizliliğinizi saygı göstermek, korumak ve sürdürmek için birçok önlem alır`,
          para2: `Birçok önlem arasında, güvenlik duvarları ve veri şifreleme gibi bilgisayar güvenliği önlemleri kullanırız. Aynı zamanda bu verileri güvende tutmak için binalarımıza ve dosyalara fiziksel erişim kontrolleri uygularız. Yalnızca sorumluluklarını yerine getirmek için ihtiyacı olan çalışanların erişimine izin veririz.`,
        },
        sectionLinks: {
          title: `Bağlantılar`,
          para1: `FXORO web sitelerini kullandığınızda, başka web sitelerine bağlantı kurabilirsiniz. Bu Gizlilik ve Güvenlik Politikası, FXORO web sitesinden bağlantı kurduğunuz diğer siteler için geçerli değildir ve üçüncü taraflar tarafından bu diğer siteler aracılığıyla toplanan kişisel bilgilerden sorumlu değiliz.`,
        },
        sectionProcessPersonalInfo: {
          title: `Kişisel bilgi işleme`,
          para1: `Kişisel bilgiye erişim, bu politikada belirtilen amaçlar doğrultusunda böyle bir bilgiye erişmeleri gereken FXORO (sınırlamalar olmaksızın, ana, kız ve bağlı şirketler de dahil olmak üzere) çalışanlarına, ortaklarına, yüklenicilerine ve bağlı şirketlerine sınırlandırılmıştır. Kişisel bilgiye erişimi olanlar, kişisel ve diğer verileri yönetirken katı gizlilik standartlarına uymakla yükümlüdür.`,
        },
        sectionSecurity: {
          title: `Güvenlik`,
          para1: `FXORO, sizin tarafınızdan sağlanan verilerin ve kişisel bilgilerin güvenliğinin, bütünlüğünün ve gizliliğinin kötüye kullanılmadığından emin olmak için uygun önlemleri sürdürme çabasındadır. Bu gibi önlemler ve güvenlik önlemleri, veri iletimi sırasında şifreleme, güçlü kimlik doğrulama mekanizmaları ve güvenli alanlar sağlamak için makine ve verilerin ayrılmasını içerir. Bu tür sistemler ve prosedürler güvenlik ihlalleri riskini azaltırken, mutlak güvenlik sağlamaz. Bu nedenle FXORO, hizmetimizin yanlışlık, işlev bozukluğu, yasadışı dinlemeler veya yetkisiz erişim veya diğer bilgi güvenliği risklerinden etkilenmeyeceğini veya özel iletişimlerinizin hizmetimizdeki ya da hizmetimiz aracılığıyla korunmaya devam edeceğini garanti edemez.`,
        },
        sectionAnonymusStatInfo: {
          title: `Anonim istatistik bilgilerini nasıl kullanıyor ve paylaşıyoruz?`,
          para1: `FXORO, müşterilerinin ihtiyaçlarını karşılamak için anonim istatistik bilgileri toplar. Bu tür verileri toplayarak, FXORO mevcut ve potansiyel müşterilere sunduğu hizmetleri izleyebilir ve iyileştirebilir. Böyle anonimleştirilmiş bilgileri üçüncü taraflarla paylaşabiliriz.`,
        },
        sectionIdentifiableInfo: {
          title: `Kişisel olarak tanımlanabilir bilgilerinizi nasıl kullanıyor ve paylaşıyoruz?`,
          para1: `FXORO, kişisel bilgilerinizi kullanabilir ve size hizmet sağlamak için bu bilgileri ortaklar, yükleniciler, hizmet sağlayıcılar, danışmanlar, işlem süreç sağlayıcıları ve FXORO (ana, kız ve bağlı şirketler de dahil olmak üzere) ile paylaşabilir ("Ortaklar") sadece ve sizin açık onayınızla:`,
          list: {
            list1: `işlemleri işlemek de dahil olmak üzere size sunduğumuz hizmetleri sağlamak için`,
            list2: `kimliğinizi doğrulamak için`,
            list3: `uygunluğunuzu değerlendirmek için`,
            list4: `sunduğumuz ürün ve hizmetlere ilişkin`,
            list5: `kişisel profilinizi korumak için`,
            list6: `hesabınızı yönetmek için`,
            list7: `size hizmet verilen hizmetlerle ilgili olarak size gerektiğinde veya uygun olduğunda, üçüncü taraf bir posta platformu aracılığıyla`,
            list8: `FXORO müşterisi olduğunuz süre boyunca size sözleşmeler veya FXORO'ın faaliyetleri gibi konularda güncel kalmak için`,
            list9: `size sağlanan ürün ve hizmetleri yönetmek ve yönetmek için`,
            list10: `pazarlama amaçları için, ancak bunlarla sınırlı olmamak üzere FXORO ve Ortakları tarafından sunulan ürün ve hizmetlerle ilgili bilgiler sağlamak için`,
            list11: `FXORO'dan edinebileceğiniz ürün ve hizmetlere ilgi duyduğunuz anlayışını geliştirmek ve web sitesini ihtiyaçlarınıza ve ilgi alanlarınıza göre uyarlamak için`,
            list12: `kişisel olmayan istatistiksel veri oluşturmak için`,
            list13: `anketler ve anketler düzenlemek için`,
            list14: `geçerli koşulları uygulamak için`,
          },
          para2: `FXORO, sizin tarafınızdan sağlanan kişisel bilgileri, yönetmeliklere aykırı hareket ettiğinize veya hizmetleri kullanma hakkınızı kötüye kullandığınıza veya ihlal ettiğinize inanıyorsa, veya FXORO tarafından uygun bir yasayla talep edilirse veya finansal otoritelere veya başka bir üçüncü tarafa bilgiyi paylaşma yükümlülüğü olduğuna inanıyorsa bu bilgileri kanun uygulama kurumları ve diğer yetkili mercilerle ve gerekli olabilecek diğer üçüncü taraflarla paylaşabilir.`,
          para3: `Eğer FXORO, hizmetlerini farklı bir çerçevede veya başka bir yasal yapı veya kuruluş aracılığıyla organize ederse veya FXORO başka bir kuruluş tarafından devralınır veya birleştirilirse, ancak bu kuruluşların bu politikanın hükümlerine ve gizli anlaşmalara uymayı kabul ettiği durumlarda bilgilerinizi paylaşabilir.`,
          list2: {
            list1: `Sizinle ve FXORO ile ilgili, FXORO'in sağladığı hizmetlerle ilgili herhangi bir anlaşmazlık durumunda veya yasal bir işlemde`,
            list2: `FXORO, bilgi paylaşımının, yakın fiziksel zarara veya mala zarar verme tehlikesini önlemek için gerekli olduğuna inandığı herhangi bir durumda`,
            list3: `FXORO, hizmetlerinin işlemi için farklı bir yapı veya yasal yapı veya kuruluş aracılığıyla çalıştırırsa veya FXORO, başka bir kuruluş tarafından devralınır veya birleştirilirse; ancak bu durumda, bu kuruluşların bu politikanın hükümlerine ve gizli anlaşmalara uyduğundan emin olmalıdır`,
          },
        },
        sectionOptOut: {
          title: `Tercih ve iptal`,
          para1: `FXORO müşterisi olarak kayıt sürecinde, aşağıdaki ek hizmetlere abone olma seçeneği sunulacaktır:`,
          list: {
            list1: `Pazarlama hizmetleri, size FXORO veya ortaklarının sunduğu ürün ve hizmetlerle ilgili bilgileri ve sizin için uygun olduğuna inandığımız fırsatları sağlar; Müşteri siparişleri, FXORO ile iletişim`,
            list2: `Bültenler`,
            list3: `SMS (metin) mesajları`,
            list4: `Diğer elektronik iletişimler`,
          },
          para2: `Yukarıda bahsedilen iletişimleri almak istemiyorsanız, bunlardan çıkış yapabilirsiniz. Bunun için {complianceMail} veya {removalMail} adresine bir e-posta göndermeniz yeterlidir.`,
          para3: `E-posta, aşağıdakileri içermelidir:`,
          list2: {
            list1: `Ad ve soyad`,
            list2: `Hesap Numarası (varsa)`,
            list3: `Kayıt işlemi sırasında kullanılan e-posta`,
          },
        },
        sectionTransferData: {
          title: `Verilerin üçüncü ülkelere transferi`,
          para1: `Kişisel veriler, bu politikada açıklanan amaçlar doğrultusunda FXORO tarafından Avrupa Ekonomik Alanı Üye Devletlerine ve Avrupa Ekonomik Alanı Üye Devletleri dışındaki üçüncü ülkelere transfer edilebilir. Böyle bir transfer, her zaman işlemlerimizi düzenleyen veri koruma düzenlemeleri kapsamında gerçekleşecektir ve siz bu transferlere açık ve tereddütsüz bir şekilde onay verirsiniz.`,
        },
        sectionUpdateInfo: {
          title: `Bilgilerinizi güncelleme`,
          para1: `Kişisel bilgilerinizde herhangi bir değişiklik olduğunda {logoText} tarafından bilgilendirilebilirsiniz. Bunu yapmak için {fxoroMail} adresine e-posta göndermeniz yeterlidir. Talimatlarınıza uygun olarak kişisel bilgilerinizi değiştireceğiz veya sileceğiz, ancak düzenleyici veya yasal amaçlarla kişisel bilgilerinizi saklama yükümlülüğümüz olduğu durumlarda veya sizden talep ettiğiniz hizmetleri sağlamak veya uygun işletme kayıtlarını tutmak için kişisel bilgilerinizi saklamak zorunda olduğumuz durumlarda kişisel bilgilerinizin silinmesi süreci uygulanmaz. Her durumda, {logoText} bu Gizlilik ve Güvenlik Politikasında açıklanan amaçlar doğrultusunda toplanan herhangi bir toplu veya anonimleştirilmiş bilgiyi süresiz olarak saklayabilir.`,
        },
        sectionCookies: {
          title: `Çerezler (Cookies)`,
          para1: `Çerezler, genellikle benzersiz bir tanımlama numarası veya değeri içeren, FXORO ticaret yazılımınızın kullanımı veya FXORO web sitelerine erişiminiz sonucunda bilgisayarınızın sabit diskinde depolanan küçük bilgi dosyalarıdır.`,
          para2: `Oturum kimliği çerezleri ve kalıcı çerezler kullanıyoruz. Oturum kimliği çerezi, tarayıcınızı kapattığınızda sona erer. Kalıcı çerez, sabit diskinizde uzun bir süre kalır.`,
          para3: `İstatistiksel amaçlarla kalıcı bir çerez ayarlarız. Kalıcı çerezler, kullanıcılarımızın konumunu ve ilgi alanlarını izlememizi ve hizmetlerimizin sitemizdeki deneyimini geliştirmemizi sağlar.`,
          para4: `Kalıcı çerezleri, internet tarayıcınızın "yardım" dosyasında verilen talimatları takip ederek kaldırabilirsiniz. Çerezleri hiç almak istemiyorsanız, tarayıcınızın ayarlarını değiştirerek tüm çerezleri reddetmeyi veya bilgisayarınıza bir çerez gönderildiğinde size bildirim göndermesini sağlamayı seçebilirsiniz. Ancak bu, hesabınızla ilgili olarak size sunduğumuz hizmetlerin kalitesini etkileyebilir. Flash çerezleri gibi bazı kalıcı çerezler kaldırılamaz ve tarayıcınızın ayarlarını değiştirerek engellenemez.`,
          para5: `Bazı kalıcı çerezler, internet tarayıcınız tarafından kaldırılmaz veya engellenmez. Tüm çerezleri devre dışı bırakmak istiyorsanız, lütfen bir istek göndererek {fxoroMail} adresine başvurun.`,
        },
        sectionRemarketing: {
          title: `Google Analytics ile Yeniden Hedefleme`,
          para1: `Topladığımız bilgileri, size ilgili reklamlar sunmak için kullanabiliriz (Yeniden Hedefleme). Yeniden Hedefleme, web sitemiz ve reklamlarımız ziyaretçileriyle geçmiş etkileşimlerine dayanarak bağlantı kurmamıza yardımcı olur. FXORO, üçüncü taraf pazarlama sağlayıcılarını, Google da dahil olmak üzere, böyle bir yeniden hedefleme hizmeti sunmak için kiralayabilir. Sonuç olarak, üçüncü taraf sağlayıcılar, Google da dahil olmak üzere, FXORO'in reklamlarını internet sitelerinde gösterebilir. Bu üçüncü taraf sağlayıcılar, Google da dahil olmak üzere, ziyaretçinin FXORO'in web sitesini önceden ziyaretlerine dayanarak reklam göstermek için kendi çerezlerini ve üçüncü taraf çerezlerini ve benzer teknolojilerini kullanabilir.`,
          para2: `Google Analytics'ten Hedefleyiciler için Çıkış yapabilir ve özelleştirilmiş Google Display Network reklamlarından çıkış yapabilirsiniz, bunun için Google'ın Reklam Tercihleri Yöneticisini ziyaret etmenizi öneririz. Ayrıca, Google Analytics Opt-out Tarayıcı Eklentisini ziyaret etmenizi tavsiye ederiz.`,
          para3: `Daha fazla bilgi için Google'ın gizlilik merkezini ziyaret edebilirsiniz.`,
        },
        sectionYourRights: {
          title: `Haklarınız nelerdir?`,
          para1: `Size tarafımızdan istenen kişisel verileri sağlamak zorunda değilsiniz. Ancak, başvuru formunda istenen bilgileri sağlamazsanız, FXORO sizin için bir hesap açamayabilir veya diğer hizmetleri, bilgileri veya yardımı sağlayamayabilir veya talep ettiğiniz hizmetin uygunluğunu değerlendiremeyebilir.`,
        },
        sectionRightToRequest: {
          title: `Aşağıdakileri talep etme hakkınız vardır:`,
          list: {
            list1: `Sahip olduğumuz ve işlem görmüş olan tüm Kişisel Verilerinizle ilgili bilgiler ve böyle verilerin nasıl elde edildiği, verilerin işlenme amacı, alıcılar, işlenen veya işlenecek veri kategorileri, veri konusu, son işleme tarihinden bu yana yapılan işleme ve otomatik işleme sisteminin arkasındaki mantık hakkında bilgi`,
            list2: `Bilgi eksikliği veya uyumsuzluktan dolayı işlenmeyen Kişisel Verilerinizin düzeltilmesi ve silinmesi`,
            list3: `(2) numaralı madde uyarınca yapılan değişikliklere ilişkin herhangi bir üçüncü tarafa yapılan bildirim, bu durum bize orantısız bir yük getirmezse`,
          },
        },
        sectionAffiliates: {
          title: `Ortaklar ve İş Ortakları`,
          para1: `FXORO, ortaklar, iş ortakları ve Üçüncü Taraf Şirketlerle bilgi paylaşabilir, bu tür bilginin bu iş ortakları ve üçüncü taraf şirketler tarafından makul şekilde gerektiği durumlarda:`,
          list: {
            list1: `Sizin tarafınızdan yetkilendirilmiş olduğumuz durumlarda size uygun olan ek benzer ürün ve hizmetler sunma; ve/veya`,
            list2: `Müşteri hesaplarına hizmet sağlama.`,
          },
          para2: `FXORO, kişisel bilgilerinizi üçüncü taraflara satmaz, lisanslamaz, kiralamaz veya başka şekilde ifşa etmez, yalnızca bu Gizlilik Bildirimi'nde açıklandığı gibi.`,
        },
        sectionEnforcement: {
          title: `Uygulama ve Denetim`,
          para1: `{logoText}, bu Gizlilik ve Güvenlik Politikasına uygun hareket etmek için elinden geleni yapmaktadır. Bu Gizlilik ve Güvenlik Politikası ve uygulanmasına ilişkin herhangi bir sorunuz, endişeniz veya şikayetiniz varsa, lütfen bunları {complaintsMail} adresine bildirin. Şikayetinizi aldıktan sonra, {logoText} sizin endişelerinizi daha iyi anlamak için sizinle iletişime geçebilir ve sorunuzu hızlı bir şekilde cevaplamak veya şikayetinizi tam olarak memnuniyetinizle çözmek için tüm çabaları sarf edecektir.`,
          para2: `{logoText}, Avrupa Genel Veri Koruma Yönetmeliği (GDPR) ile uyum sağlamak amacıyla, veri koruma sorumlusu (DPO) atamıştır. Veri koruma stratejisini ve uygulamasını denetlemekten sorumlu olan DPO'ya yönelik sorularınız, endişeleriniz veya şikayetleriniz için bunları {dpoMail} adresine bildirin.`,
        },
        sectionAmendments: {
          title: `Politika Değişiklikleri`,
          para1: `FXORO, bu Gizlilik ve Güvenlik Politikasının şartlarını zaman zaman değiştirebilir ve güncelleyebilir. Tüm değişiklikler, FXORO tarafından Web Sitesi'nde ilk olarak yayınlandıktan yedi (7) gün sonra yürürlüğe girecektir, ancak FXORO, yasal veya düzenleyici gerekliliklere uygun olmak amacıyla Gizlilik ve Güvenlik Politikasını değiştirirse, bu durumda değişiklikler gerektiği şekilde veya emredildiği gibi yürürlüğe girecektir.`,
        },
        sectionGoverningLaw: {
          title: `Yürürlükteki Hukuk`,
          para1: `Bu Gizlilik ve Güvenlik Politikasında ele alınmayan konularda, Kıbrıs yasaları uygulanacaktır.`,
        },
        sectionConsent: {
          title: `Onay`,
          para1: `Web sitemizi veya diğer sunduğumuz hizmetleri kullanmaya devam ederek, kişisel verilerinizin FXORO tarafından toplanmasını, işlenmesini ve kullanılmasını kabul etmiş olursunuz.`,
        },
      },
    },
    ro: {
      seo: {
        metaTitle: "Politica de confidențialitate și securitate",
        metaDescription:
          "Politica de confidențialitate și criterii de securitate. FXORO, brokerul de tranzacționare online prin intermediul căruia totul este posibil.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (în continuare compania) cunoscută sub denumirea de „FXORO”, este o firmă de investiții reglementată de Comisia de Valori Mobiliare și Bursă din Cipru sub licența nr. 126/10 și operează conform Legii privind serviciile și activitățile de investiții și piețele reglementate din Cipru din 2017 (Legea 87(I)/2017)(în continuare „Legea”).`,
          para2: `FXORO se angajează să protejeze confidențialitatea tuturor datelor personale obținute de la dumneavoastră, inclusiv datele pe care le obținem în timpul vizitelor dumneavoastră pe site-urile FXORO. FXORO procesează, păstrează și utilizează datele dumneavoastră doar în măsura în care acest lucru este în conformitate cu cerințele legale aplicabile și numai în măsura în care este necesar pentru atingerea scopurilor prezentate în acest document.`,
          para3: `Vă rugăm să consultați următoarea Declarație de confidențialitate care indică în mod clar modul în care utilizăm datele dumneavoastră personale, cum sunt colectate, stocate și procesate. De asemenea, explică drepturile dumneavoastră în conformitate cu legea referitoare la datele dumneavoastră personale.`,
          para4: `Referințele din acest document la „date personale” sunt referințe la date personale și date personale sensibile, așa cum sunt definite în Legea privind prelucrarea datelor cu caracter personal (protecția persoanelor fizice) 138(1) din 2001, așa cum a fost modificată din când în când, precum și Regulamentul general privind protecția datelor (GDPR) (UE 2016/679) și în măsura în care este aplicabil, legile privind protecția datelor sau confidențialitatea din orice altă țară.`,
          para5: `FXORO, asociații noștri, orice membri, agenți și/sau subcontractanți cu care colaborăm în scopul colectării, stocării și prelucrării datelor cu caracter personal și orice terțe părți care acționează în numele nostru, pot colecta, prelucra, utiliza și stoca date cu caracter personal furnizate de dumneavoastră în scopul efectuării tranzacțiilor și/sau a altor servicii, suport operațional și dezvoltarea afacerii noastre sau a lor.`,
        },
        sectionInfoWeCollect: {
          title: `Ce informații colectăm de la dumneavoastră?`,
          para1: `Pentru ca FXORO să furnizeze servicii de investiții clienților săi, FXORO este obligată să colecteze, să prelucreze și să rețină datele cu caracter personal ale clienților săi în conformitate cu cerințele legale obligatorii. Acestea includ, printre altele, numele, data de naștere, adresa de domiciliu, numărul pașaportului, adresa de e-mail, numărul de telefon, profesia, informațiile de plată și informațiile privind situația dumneavoastră financiară.`,
          para2: `Pentru a furniza produsele și serviciile noastre, putem colecta informațiile dumneavoastră din mai multe surse, inclusiv, dar fără a se limita la:`,
          list: {
            list1: `Site-ul web și formularele`,
            list2: `Chat live pe site-ul web`,
            list3: `Sistemul CRM`,
            list4: `Prin telefon`,
            list5: `Prin e-mail`,
            list6: `Alți procesatori terți`,
            list7: `Furnizori terți de servicii`,
            list8: `Clienții existenți`,
            list9: `Parteneri, angajați`,
          },
          para3: `FXORO colectează și procesează, de asemenea, informații personale despre dumneavoastră, care sunt necesare pentru a vă furniza serviciile noastre, așa cum sunt enumerate mai jos în secțiunea „Cum folosim și partajăm informațiile dumneavoastră cu caracter personal?”. Aceasta include informații despre dumneavoastră atunci când completați o cerere online sau alt tip de formular și atunci când aveți acces și efectuați tranzacții prin contul dumneavoastră FXORO. În plus, putem obține, de asemenea, informații personale ca rezultat al verificărilor de autentificare sau identitate, inclusiv verificări cu agenții de referință de credit (care pot ține o evidență a informațiilor) pentru prevenirea fraudei.`,
          para4: `FXORO poate obține, de asemenea, informații din utilizarea site-urilor web și a software-ului FXORO și poate stoca aceste informații în profilul dumneavoastră personal. Aceste informații pot include zonele vizitate pe site, paginile vizualizate, frecvența și durata vizitelor, adresa Protocolului Internet (IP), parametrii de identificare a calculatorului, tipurile de tranzacții efectuate, documentele descărcate, clicurile mouse-ului, mișcările mouse-ului, activitatea de derulare, precum și textul introdus de dumneavoastră pe acest site și site-ul de pe care ne-ați ajuns la noi sau către care link-uri externe.`,
        },
        sectionProtectPersonalInfo: {
          title: `Cum protejăm informațiile dumneavoastră personale`,
          para1: `La FXORO, ne respectăm, protejăm și menținem confidențialitatea datelor dumneavoastră și, în consecință, avem o multitudine de măsuri în loc`,
          para2: `Printre multitudinea de măsuri, utilizăm măsuri de protecție a calculatorului, cum ar fi firewall-urile și criptarea datelor. De asemenea, impunem controale de acces fizic pentru clădirile și fișierele noastre pentru a menține datele în siguranță. Aprobăm doar accesul pentru angajații care au nevoie de el pentru a-și îndeplini responsabilitățile.`,
        },
        sectionLinks: {
          title: `Link-uri`,
          para1: `Atunci când utilizați site-urile web FXORO, puteți fi capabil să vă conectați la alte site-uri web. Această Politică de confidențialitate și securitate nu se aplică acelor alte site-uri pe care ați putea alege să le vizitați de pe site-ul FXORO și nu suntem responsabili pentru orice informații personale colectate de terțe părți prin intermediul acestor alte site-uri`,
        },
        sectionProcessPersonalInfo: {
          title: `Prelucrarea informațiilor personale`,
          para1: `Accesul la informațiile personale este restricționat doar angajaților, partenerilor, contractanților și afiliaților FXORO (inclusiv, fără limitări, companiile-mamă, surorile și filialele) care au nevoie de acces la aceste informații în conformitate cu scopurile descrise în această politică. Cei care au acces la informațiile personale sunt obligați să respecte standarde stricte de confidențialitate în gestionarea datelor personale și a altor date.`,
        },
        sectionSecurity: {
          title: `Securitate`,
          para1: `FXORO depune eforturi pentru menținerea măsurilor adecvate de securitate pentru a asigura că datele și informațiile personale pe care le-ați furnizat nu sunt utilizate în mod necorespunzător. Aceste măsuri de protecție includ criptarea în timpul transmiterii datelor, mecanisme puternice de autentificare și separarea mașinilor și datelor pentru a oferi zone securizate. Cu toate acestea, astfel de sisteme și proceduri nu oferă o securitate absolută. Prin urmare, FXORO nu poate garanta că serviciile noastre vor fi imune la orice fapte rele, defecțiuni, interceptări ilegale sau acces neautorizat la informațiile stocate și la alte riscuri de securitate ale informațiilor, sau că comunicările dvs. private prin intermediul serviciului nostru vor rămâne private.`,
        },
        sectionAnonymusStatInfo: {
          title: `Cum folosim și partajăm informațiile statistice anonime?`,
          para1: `FXORO colectează informații statistice anonime pentru a asigura că satisfac nevoile clienților noștri. Prin colectarea acestor date, FXORO poate monitoriza și îmbunătăți serviciile pe care le oferă clienților existenți și potențiali. Putem partaja aceste informații anonimizate cu terțe părți.`,
        },
        sectionIdentifiableInfo: {
          title: `Cum folosim și partajăm informațiile dvs. personale identificabile?`,
          para1: `FXORO poate folosi informațiile dvs. personale și le poate partaja cu parteneri, contractanți, furnizori de servicii, consilieri, procesatori de tranzacții și afiliați ai FXORO (inclusiv companiile-mamă, surorile și filialele) (denumite "Partenerii") numai în următoarele scopuri, și numai cu consimțământul dvs. explicit:`,
          list: {
            list1: `pentru a vă oferi serviciile pe care le-ați solicitat, inclusiv procesarea tranzacțiilor`,
            list2: `pentru a confirma identitatea dvs.`,
            list3: `pentru a evalua adecvarea serviciilor noastre`,
            list4: `pentru a vă furniza produsele și serviciile noastre`,
            list5: `pentru a vă menține profilul personal`,
            list6: `pentru a gestiona contul dvs.`,
            list7: `pentru a vă contacta atunci când este necesar sau adecvat în legătură cu serviciile furnizate, inclusiv prin intermediul unei platforme terțe de trimitere de mesaje`,
            list8: `pentru a vă ține la curent pe parcursul perioadei în care sunteți client în legătură cu aspecte precum contractele pe care le-ați încheiat și activitățile FXORO`,
            list9: `pentru a gestiona și administra produsele și serviciile furnizate dvs.`,
            list10: `în scopuri de marketing, inclusiv, dar fără a se limita la furnizarea de informații despre produsele și serviciile oferite de FXORO și de Partenerii săi`,
            list11: `pentru a înțelege produsele și serviciile care v-ar putea interesa și pentru a personaliza site-ul nostru în funcție de nevoile și interesele dvs.`,
            list12: `pentru a crea date statistice impersonale`,
            list13: `pentru a efectua sondaje și chestionare`,
            list14: `pentru a impune termenii și condițiile contractuale`,
          },
          para2: `Dacă FXORO consideră că ați încălcat termenii și condițiile contractuale, sau v-ați abuzat de drepturile de a utiliza serviciile, sau ați săvârșit orice faptă sau omisiune pe care FXORO consideră că încalcă orice lege, reguli sau reglementări aplicabile, atunci FXORO poate partaja informațiile dvs. cu agenții de aplicare a legii și alte autorități competente, precum și cu alte terțe părți, așa cum poate fi necesar;`,
          para3: `Dacă FXORO este obligată, sau consideră că este obligată în conformitate cu legea să partajeze sau să dezvăluie informațiile dvs. autorităților financiare sau altor terțe părți;`,
          list2: {
            list1: `În orice caz de litigiu sau procedură legală de orice fel între dvs. și FXORO, sau între dvs. și alți clienți sau terțe părți în legătură cu serviciile pe care le oferă FXORO`,
            list2: `În orice caz în care FXORO consideră că partajarea informațiilor este necesară pentru a preveni vătămări fizice iminente sau daune materiale`,
            list3: `Dacă FXORO își organizează serviciile într-un cadru diferit, sau printr-o altă structură legală sau entitate, sau dacă FXORO este achiziționată sau fuzionează cu o altă entitate, cu condiția ca aceste entități să fie de acord să fie obligate de prevederile acestei politici, precum și de acordurile de confidențialitate`,
          },
        },
        sectionOptOut: {
          title: `Alegere și renunțare`,
          para1: `În procesul de înregistrare cu FXORO ca client, vi se va oferi opțiunea de a renunța la abonarea la următoarele servicii suplimentare:`,
          list: {
            list1: `Servicii de marketing, care vă oferă informații despre produsele și serviciile oferite de FXORO sau partenerii săi; și oportunități pe care credem că ar putea fi relevante pentru dumneavoastră; Comenzi de client, corespondență cu FXORO`,
            list2: `Buletine informative`,
            list3: `Mesaje SMS`,
            list4: `Alte comunicări electronice`,
          },
          para2: `Dacă nu mai doriți să primiți comunicările menționate mai sus, puteți renunța la primirea acestora trimitând un e-mail la {complianceMail} sau la {removalMail}.`,
          para3: `E-mailul trebuie să conțină următoarele:`,
          list2: {
            list1: `Nume și prenume`,
            list2: `Numărul de cont (dacă există)`,
            list3: `Adresa de e-mail utilizată în procesul de înregistrare`,
          },
        },
        sectionTransferData: {
          title: `Transferul datelor către țări terțe`,
          para1: `Datele personale pot fi transferate de FXORO către terțe părți din statele membre ale Spațiului Economic European, precum și către state non-membre ale Spațiului Economic European, în scopurile descrise în această politică. Acordați consimțământul expres și neechivoc pentru un astfel de transfer, cu condiția ca acesta să se realizeze întotdeauna în conformitate cu reglementările privind protecția datelor care guvernează activitățile noastre.`,
        },
        sectionUpdateInfo: {
          title: `Actualizarea informațiilor dvs.`,
          para1: `Puteți informa {logoText} oricând că detaliile dvs. personale au fost modificate, trimitându-ne un e-mail la {fxoroMail}. Vom actualiza sau șterge informațiile dvs. personale în conformitate cu instrucțiunile dvs., cu excepția cazului în care suntem obligați să păstrăm informațiile dvs. personale din motive reglementare sau legale, pentru a vă furniza serviciile pe care le-ați solicitat sau pentru a menține înregistrări de afaceri adecvate, caz în care informațiile dvs. personale vor fi șterse la expirarea acestui termen obligatoriu. În orice caz, {logoText} poate păstra orice informație agregată sau anonimizată în scopurile descrise în această politică de confidențialitate și securitate, pe termen nedeterminat.`,
        },
        sectionCookies: {
          title: `Cookie-uri`,
          para1: `Cookie-urile sunt fișiere mici de informații, care includ adesea un număr sau o valoare de identificare unică, stocate pe hard disk-ul computerului dvs. ca rezultat al utilizării software-ului de tranzacționare FXORO și/sau accesului la site-urile FXORO.`,
          para2: `Folosim atât cookie-uri de sesiune, cât și cookie-uri persistente. Un cookie de sesiune expiră când închideți browser-ul. Un cookie persistent rămâne pe hard disk-ul dvs. pentru o perioadă extinsă de timp.`,
          para3: `Setăm un cookie persistent în scopuri statistice. Cookie-urile persistente ne permit, de asemenea, să urmărim și să vizăm locația și interesele utilizatorilor noștri și să îmbunătățim experiența serviciilor noastre pe site-ul nostru.`,
          para4: `Puteți elimina cookie-urile persistente urmând instrucțiunile din fișierul "Ajutor" al browser-ului dvs. de internet. Dacă nu doriți să primiți cookie-uri deloc, puteți schimba setările browser-ului dvs. pentru a refuza toate cookie-urile sau pentru a vă notifica de fiecare dată când vi se trimite un cookie și astfel puteți decide dacă să-l acceptați sau nu. Cu toate acestea, aceasta poate afecta calitatea serviciilor pe care vi le oferim în legătură cu contul dvs. Unele cookie-uri persistente, cum ar fi cookie-urile Flash, nu pot fi eliminate și nu pot fi blocate prin modificarea setărilor browser-ului dvs.`,
          para5: `Unele cookie-uri persistente nu vor fi eliminate sau blocate de browser-ul dvs. de internet. Dacă doriți să dezactivați toate cookie-urile, vă rugăm să trimiteți o solicitare la {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Remarketing cu Google Analytics`,
          para1: `Putem folosi informațiile pe care le colectăm pentru a ne ajuta să livrăm anunțuri relevante către dumneavoastră (Remarketing). Remarketing-ul reprezintă o modalitate pentru noi de a ne conecta cu vizitatorii website-urilor noastre și cu utilizatorii anunțurilor noastre, pe baza interacțiunilor lor anterioare cu website-ul și anunțurile noastre. Furnizorii terți de marketing pot fi angajați de FXORO pentru a oferi astfel de servicii de remarketing. Ca rezultat, furnizorii terți, inclusiv Google, pot afișa anunțurile FXORO pe site-urile internet. Acești furnizori terți, inclusiv Google, pot folosi, de asemenea, cookie-uri proprii și tehnologii similare pentru a afișa anunțuri pe baza vizitelor anterioare ale unui vizitator pe website-ul FXORO.`,
          para2: `Puteți renunța la Google Analytics pentru Anunțuri pentru Vizualizatorii și la anunțurile personalizate de pe Google Display Network vizitând Managerul de preferințe pentru anunțuri Google. Sunteți încurajați, de asemenea, să vizitați Complementul de dezactivare Google Analytics.`,
          para3: `Pentru informații suplimentare, puteți vizita și centrul de confidențialitate Google.`,
        },
        sectionYourRights: {
          title: `Ce drepturi aveți?`,
          para1: `Nu sunteți obligat să ne furnizați nicio dintre datele personale solicitate de FXORO. Cu toate acestea, fără a furniza informațiile solicitate în formularul de aplicare, FXORO poate să nu poată deschide un cont pentru dumneavoastră sau să vă ofere orice alt serviciu, informație sau asistență pe care ați căutat-o sau să evalueze adecvarea serviciului pe care îl solicitați.`,
        },
        sectionRightToRequest: {
          title: `Aveți dreptul să solicitați și să vi se furnizeze următoarele:`,
          list: {
            list1: `Informații referitoare la toate Datele Personale pe care le deținem și care au fost supuse prelucrării, precum și informații referitoare la modul în care au fost obținute aceste date, scopul în care sunt prelucrate datele, destinatarii, categoriile de date prelucrate sau de prelucrat, prelucrarea care a avut loc de la ultima actualizare a datelor referitoare la prelucrare și raționalul din spatele sistemului de prelucrare automată`,
            list2: `Orice corecție și ștergere a Datelor Personale care nu au fost prelucrate în conformitate cu cerințele aplicabile din cauza lipsei de informații sau discrepanțelor`,
            list3: `Orice notificare făcută către orice terță parte cu privire la orice modificări efectuate în conformitate cu (2) de mai sus, cu excepția cazului în care aceasta ar fi disproporționat de dificil pentru noi`,
          },
        },
        sectionAffiliates: {
          title: `Afiliați și Parteneri`,
          para1: `FXORO poate partaja informații cu parteneri, Asociații și Tere Părți în cazul în care aceste informații sunt rezonabil necesare de către acești Asociați și Tere Părți pentru următoarele scopuri:`,
          list: {
            list1: `A oferi produse și servicii suplimentare similare care să răspundă nevoilor dumneavoastră și care să fie furnizate într-un mod util și relevant (doar dacă ne-ați autorizat să facem acest lucru); și/sau`,
            list2: `Gestionarea conturilor clienților.`,
          },
          para2: `FXORO nu vinde, nu licențiază, nu închiriază și nu dezvăluie altfel informații personale către terțe părți, cu excepția cazului descris în această Declarație de Confidențialitate.`,
        },
        sectionEnforcement: {
          title: `Aplicarea Politicii`,
          para1: `{logoText} depune toate eforturile pentru a respecta această Politică de Confidențialitate și Securitate. Dacă aveți întrebări, preocupări sau reclamații legate de această Politică de Confidențialitate și Securitate și aplicarea sa, vă rugăm să le adresați la: {complaintsMail}. După primirea reclamației dumneavoastră, {logoText} vă poate contacta pentru a înțelege mai bine preocupările dumneavoastră și va depune toate eforturile pentru a răspunde prompt la întrebările dumneavoastră sau pentru a soluționa reclamația în întregime în conformitate cu cerințele dumneavoastră.`,
          para2: `{logoText} a numit un ofițer de protecție a datelor (DPO), responsabil cu supravegherea strategiei și implementării de protecție a datelor, în scopul asigurării conformității cu Regulamentul General privind Protecția Datelor (GDPR). Dacă aveți întrebări, preocupări sau reclamații legate de strategia noastră de protecție a datelor și implementarea sa, vă rugăm să le adresați la: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Modificări ale politicii`,
          para1: `FXORO poate schimba și actualiza termenii acestei Politici de Confidențialitate și Securitate din când în când. Toate schimbările vor intra în vigoare la șapte (7) zile după publicarea inițială pe site-ul web, cu excepția cazului în care FXORO modifică Politica de Confidențialitate și Securitate pentru a se conforma cerințelor legale sau reglementare. În acest din urmă caz, modificările vor deveni efective în funcție de cerințe sau dispoziții.`,
        },
        sectionGoverningLaw: {
          title: `Legea aplicabilă`,
          para1: `În ceea ce privește aspectele neabordate în prezenta Politică de Confidențialitate și Securitate, se va aplica legea Ciprului.`,
        },
        sectionConsent: {
          title: `Consimțământ`,
          para1: `Continuând să utilizați site-ul nostru web sau alte servicii oferite, sunteți de acord cu colectarea, prelucrarea și utilizarea datelor dumneavoastră personale de către FXORO.`,
        },
      },
    },
    ar: {
      seo: {
        metaTitle: "سياسة الخصوصية والأمان",
        metaDescription:
          "سياسة الخصوصية ومعايير الأمان. FXORO، وسيط التداول عبر الإنترنت الذي يمكن من خلاله تحقيق كل شيء.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD، (فيما بعد الشركة) التداول بإسم "FXORO"، هي شركة استثمار تخضع للتنظيم من قبل هيئة قبرص للأوراق المالية والبورصة بترخيص رقم 126/10 وتعمل وفقًا لقانون خدمات وأنشطة الاستثمار والأسواق المنظمة في قبرص لعام 2017 (القانون رقم 87(I)/2017) (فيما بعد "القانون").`,
          para2: `FXORO ملتزمة بحماية خصوصية جميع البيانات الشخصية التي تتم الحصول عليها منك، بما في ذلك البيانات التي نحصل عليها أثناء زياراتك لمواقع FXORO. تقوم FXORO بالتعامل مع بياناتك، والاحتفاظ بها، ومعالجتها فقط بما يتوافق مع المتطلبات القانونية السارية وفقًا للحد الذي يكون ذلك ضروريًا لتحقيق الأغراض المبينة فيما يلي.`,
          para3: `يرجى الاطلاع على بيان سياسة الخصوصية التالي الذي يوضح بوضوح كيفية استخدامنا لبياناتك الشخصية وكيفية جمعها وتخزينها ومعالجتها. يشرح أيضًا حقوقك بموجب القانون المتعلق ببياناتك الشخصية.`,
          para4: `يشير هذا المستند إلى "البيانات الشخصية" إلى البيانات الشخصية والبيانات الشخصية الحساسة كما هو محدد في قانون معالجة البيانات الشخصية (حماية الأفراد) رقم 138(1) لعام 2001 المعدل من وقت لآخر، بالإضافة إلى لائحة حماية البيانات العامة (GDPR) (EU 2016/679) وبقدر ما ينطبق ذلك، لوائح حماية البيانات أو الخصوصية للقوانين في أي بلد آخر.`,
          para5: `FXORO، وشركاؤنا، وأعضاء أي جهة، ووكلاء و/أو المقاولين الذين نتعامل معهم من خلال جمع البيانات، وتخزينها، ومعالجتها، وأي طرف ثالث يتصرف نيابة عنا، قد يجمعون، ويعالجون، ويستخدمون ويخزنون البيانات الشخصية التي قدمتها لأغراض إجراء المعاملات، و/أو تقديم خدمات أخرى، ودعم العمليات وتطوير أعمالنا أو أعمالهم.`,
        },
        sectionInfoWeCollect: {
          title: `ما هي المعلومات التي نجمعها منك؟`,
          para1: `لكي تقدم FXORO خدماتها لعملائها في مجال الاستثمار، يجب على FXORO جمع ومعالجة واحتفاظ بالبيانات الشخصية لعملائها وفقًا للمتطلبات القانونية الإلزامية. يتضمن ذلك، على سبيل المثال لا الحصر، اسمك، تاريخ ميلادك، عنوان إقامتك، رقم جواز السفر، عنوان البريد الإلكتروني، رقم الهاتف، المهنة، معلومات الدفع، ومعلومات حول حالتك المالية.`,
          para2: `لتقديم منتجاتنا وخدماتنا، قد نقوم بجمع معلوماتك من خلال عدة مصادر مختلفة، بما في ذلك ولكن لا يقتصر على:`,
          list: {
            list1: `الموقع الإلكتروني والنماذج`,
            list2: `المحادثة المباشرة على الموقع الإلكتروني`,
            list3: `نظام إدارة علاقات العملاء (CRM)`,
            list4: `عبر الهاتف`,
            list5: `عبر البريد الإلكتروني`,
            list6: `معالجين طرف ثالث آخرين`,
            list7: `مزودي خدمات طرف ثالث`,
            list8: `العملاء الحاليين`,
            list9: `الشركاء والموظفين`,
          },
          para3: `تقوم FXORO أيضًا بجمع ومعالجة المعلومات الشخصية المتعلقة بك، والتي تكون ضرورية لتقديم الخدمات لك، كما هو مذكور أدناه في قسم "كيف نستخدم ونشارك معلوماتك المحددة التي يمكن تحديدها شخصيًا؟" يشمل ذلك معلومات حولك عندما تكمل طلبًا عبر الإنترنت أو نموذجًا آخر من الأنواع المختلفة وعند الوصول إلى حسابك في FXORO وتداوله عبره. بالإضافة إلى ذلك، قد نحصل أيضًا على معلومات شخصية نتيجة لعمليات التوثيق أو فحوص الهوية، بما في ذلك فحوص وكالات مراجعة الائتمان (التي قد تحتفظ بسجل للمعلومات) لمنع الاحتيال.`,
          para4: `قد يكون لـ FXORO أيضًا معلومات مستمدة من استخدامك لمواقع FXORO وبرنامج العميل وقد يقوم بتخزين هذه المعلومات مع ملفك الشخصي. قد تشمل هذه المعلومات المناطق التي تمت زيارتها على الموقع، والصفحات المعروضة، وتكرار ومدة الزيارات، وعنوان بروتوكول الإنترنت (IP)، ومعلمات تحديد الكمبيوتر، وأنواع المعاملات التي تم إجراؤها، والمستندات المُحمّلة، ونقرات الماوس، وحركات الماوس، وأنشطة التمرير، فضلاً عن النص الذي تكتبه على هذا الموقع والذي يحيلك إلى موقعنا أو المواقع التي تربطك بها.`,
        },
        sectionProtectPersonalInfo: {
          title: `كيف نحمي معلوماتك الشخصية`,
          para1: `نحن في FXORO ملتزمون بالاحترام والحفاظ على خصوصيتك، ولذلك، لدينا العديد من التدابير المتخذة`,
          para2: `من بين العديد من التدابير، نستخدم وسائل حماية الحاسوب مثل جدران الحماية وتشفير البيانات. نفرض أيضًا ضوابط الوصول البدني لمبانينا وملفاتنا للحفاظ على سلامة هذه البيانات. نوفّر الوصول إلى الموظفين الذين يحتاجونه لأداء مسؤولياتهم فقط.`,
        },
        sectionLinks: {
          title: `الروابط`,
          para1: `عند استخدام مواقع FXORO، قد تكون قادرًا على الربط بمواقع أخرى. لا ينطبق سياسة الخصوصية والأمان هذه على تلك المواقع الأخرى التي قد تختار الربط منها إلى موقع FXORO، ونحن لسنا مسؤولين عن أي معلومات شخصية يتم جمعها بواسطة أطراف ثالثة عبر تلك المواقع الأخرى`,
        },
        sectionProcessPersonalInfo: {
          title: `معالجة المعلومات الشخصية`,
          para1: `يتم تقييد الوصول إلى المعلومات الشخصية للموظفين والشركاء والمقاولين والشركات التابعة لـ FXORO (بما في ذلك ولكن لا يقتصر على الشركات الأم والشقيقة والفرعية) الذين يحتاجون إلى الوصول إلى هذه المعلومات للأغراض المذكورة في هذه السياسة. يلتزم أولئك الذين لديهم وصول إلى المعلومات الشخصية بالامتثال لمعايير صارمة للسرية عند إدارة المعلومات الشخصية وغيرها من البيانات.`,
        },
        sectionSecurity: {
          title: `الأمان`,
          para1: `تبذل FXORO جهودًا للحفاظ على التدابير اللازمة لضمان عدم سوء استخدام البيانات والمعلومات الشخصية التي قدمتها. تشمل هذه التدابير والحماية تشفير البيانات أثناء النقل وآليات المصادقة القوية وفصل الأجهزة والبيانات لتوفير مناطق آمنة. على الرغم من أن مثل هذه الأنظمة والإجراءات تقلل من مخاطر انتهاكات الأمان، إلا أنها لا توفر أمانًا مطلقًا. لذلك لا يمكن لـ FXORO أن تضمن أن خدماتنا ستكون محصنة ضد أي أفعال غير قانونية أو أعطال أو اختراقات غير مشروعة للمعلومات المخزنة فيها ولمخاطر أمان المعلومات الأخرى، أو أن التواصل الخاص بك على خدمتنا سيظل سريًا.`,
        },
        sectionAnonymusStatInfo: {
          title: `كيف نستخدم ونشارك المعلومات الإحصائية المجهولة؟`,
          para1: `تقوم FXORO بجمع المعلومات الإحصائية المجهولة من أجل التأكد من تلبية احتياجات عملائها. من خلال جمع مثل هذه البيانات، يمكن لـ FXORO مراقبة وتحسين الخدمات التي تقدمها لعملائها الحاليين والمحتملين. قد نشارك هذه المعلومات المجهولة مع أطراف ثالثة.`,
        },
        sectionIdentifiableInfo: {
          title: `كيف نستخدم ونشارك معلوماتك الشخصية المعرفة؟`,
          para1: `قد يستخدم FXORO معلوماتك الشخصية ويشاركها مع الشركاء والمقاولين ومقدمي الخدمات والمستشارين ومعالجي المعاملات والشركات التابعة لـ FXORO (بما في ذلك الشركات الأم والشقيقة والفرعية) (الشركاء) للأغراض التالية فقط، وبناءً على موافقتك الصريحة:`,
          list: {
            list1: `تزويدك بالخدمات التي طلبتها بما في ذلك معالجة المعاملات`,
            list2: `تأكيد هويتك`,
            list3: `تقييم ملاءمتك`,
            list4: `تقديم المنتجات والخدمات التي نقدمها`,
            list5: `الحفاظ على ملفك الشخصي`,
            list6: `إدارة حسابك`,
            list7: `التواصل معك عند الضرورة أو الاقتضاء فيما يتعلق بالخدمات التي تُقدم لك، بما في ذلك عبر منصة إرسال بريد من طرف ثالث`,
            list8: `البقاء على اطلاع حالة عملك كعميل فيما يتعلق بعقودك التي قمت بتداولها وأنشطة FXORO`,
            list9: `إدارة وتسيير المنتجات والخدمات المقدمة لك`,
            list10: `لأغراض التسويق، بما في ذلك على سبيل المثال لا الحصر تزويدك بمعلومات بخصوص المنتجات والخدمات التي تقدمها FXORO وشركاؤها`,
            list11: `تطوير فهم حول المنتجات والخدمات التي قد تهمك وتخصص الموقع الإلكتروني حسب احتياجاتك واهتماماتك`,
            list12: `إنشاء بيانات إحصائية غير شخصية`,
            list13: `إجراء استطلاعات الرأي والاستبيانات`,
            list14: `فرض شروط الاستخدام السارية`,
          },
          para2: `إذا اعتقدت FXORO أنك قد خرقت شروط الاستخدام السارية أو تسببت في إساءة استخدام الخدمات أو قامت بأي فعل أو إغفال يعتبره FXORO مخالفًا لأي قانون أو قاعدة أو لائحة، فقد تشارك FXORO معلوماتك مع جهات إنفاذ القانون والسلطات المختصة وكذلك مع أطراف ثالثة، حسب الاقتضاء؛`,
          para3: `إذا كان يلزم FXORO أو يعتقد أنه ملزم بموجب القانون بمشاركة أو الكشف عن معلوماتك للسلطات المالية أو أي جهة ثالثة أخرى؛`,
          list2: {
            list1: `في أي حالة نزاع أو إجراء قانوني من أي نوع بينك وبين FXORO، أو بينك وبين عملاء آخرين أو أطراف ثالثة فيما يتعلق بالخدمات التي يقدمها FXORO`,
            list2: `في أي حالة يعتقد فيها FXORO أن مشاركة المعلومات ضرورية لمنع الأذى الجسيم الوشيك أو الضرر للممتلكات`,
            list3: `إذا نظمت FXORO عملية خدماتها ضمن إطار قانوني مختلف، أو من خلال هيكل قانوني آخر أو كيان، أو إذا اندمجت FXORO مع كيان آخر، طالما أن تلك الكيانات توافق على الالتزام بأحكام هذه السياسة واتفاقيات السرية أيضًا`,
          },
        },
        sectionOptOut: {
          title: `الاختيار وإلغاء الاشتراك`,
          para1: `في عملية التسجيل مع FXORO كعميل، سيتم منحك خيار إلغاء الاشتراك في الاشتراك في الخدمات الإضافية التالية:`,
          list: {
            list1: `خدمات التسويق، التي توفر لك معلومات بخصوص المنتجات والخدمات التي يقدمها FXORO أو شركاؤها؛ والفرص التي نعتقد أنها قد تكون ذات صلة بك؛ أوامر العملاء، والتواصل مع FXORO`,
            list2: `النشرات الإخبارية`,
            list3: `رسائل SMS (نصية)`,
            list4: `غيرها من الاتصالات الإلكترونية`,
          },
          para2: `إذا كنت لا ترغب بعد الآن في تلقي الاتصالات المذكورة أعلاه، يمكنك إلغاء الاشتراك من استلامها عن طريق إرسال بريد إلكتروني إلى {complianceMail} أو على {removalMail}.`,
          para3: `يجب أن يحتوي البريد الإلكتروني على ما يلي:`,
          list2: {
            list1: `الاسم واللقب`,
            list2: `رقم الحساب (إن وجد)`,
            list3: `البريد الإلكتروني المستخدم في عملية التسجيل`,
          },
        },
        sectionTransferData: {
          title: `نقل البيانات إلى دول ثالثة`,
          para1: `يمكن أن تتم نقل البيانات الشخصية من قبل FXORO إلى أطراف ثالثة في دول أعضاء المنطقة الاقتصادية الأوروبية وكذلك إلى دول غير أعضاء المنطقة الاقتصادية الأوروبية للأغراض المذكورة في هذه السياسة. تعطي موافقتك الصريحة والواضحة لمثل هذا النقل، بشرط أن يتم هذا النقل دائمًا وفقًا للوائح المتعلقة بحماية البيانات التي تحكم عملياتنا.`,
        },
        sectionUpdateInfo: {
          title: `تحديث معلوماتك`,
          para1: `يمكنك إبلاغ {logoText} في أي وقت بتغيير تفاصيلك الشخصية عن طريق إرسال بريد إلكتروني إلينا على {fxoroMail}. سنقوم بتغيير أو حذف معلوماتك الشخصية وفقًا لتعليماتك، باستثناء ما يتعين علينا الاحتفاظ بمعلوماتك الشخصية لأغراض تنظيمية أو قانونية، أو لتزويدك بالخدمات التي طلبتها أو للحفاظ على سجلات الأعمال المناسبة، وفي هذه الحالة ستتم حذف معلوماتك الشخصية عند انتهاء هذه الفترة الإلزامية. على أي حال، قد تحتفظ {logoText} بأي معلومات مجمعة أو مجهولة الهوية للأغراض المذكورة في سياسة الخصوصية والأمان هذه، إلى أجل غير مسمى.`,
        },
        sectionCookies: {
          title: `ملفات تعريف الارتباط (كوكيز)`,
          para1: `ملفات تعريف الارتباط (كوكيز) هي ملفات صغيرة من المعلومات، تشمل غالبًا رقم تعريف فريد أو قيمة فريدة، والتي يتم تخزينها على قرص الكمبيوتر الصلب الخاص بك نتيجة لاستخدامك لبرنامج التداول FXORO و/أو دخولك إلى مواقع FXORO.`,
          para2: `نستخدم كل من ملفات تعريف الجلسة (Session ID) وملفات تعريف الارتباط الدائمة (Persistent cookies). تنتهي مدة صلاحية ملف تعريف الجلسة (Session ID) عند إغلاق متصفحك. يظل ملف تعريف الارتباط الدائمة على قرص الكمبيوتر الخاص بك لفترة زمنية ممتدة.`,
          para3: `نضع ملف تعريف الارتباط الدائمة لأغراض إحصائية. تمكننا ملفات تعريف الارتباط الدائمة أيضًا من تتبع واستهداف موقع واهتمامات مستخدمينا وتعزيز تجربة خدماتنا على موقعنا.`,
          para4: `يمكنك إزالة ملفات تعريف الارتباط الدائمة عن طريق اتباع التعليمات المقدمة في ملف "مساعدة" متصفح الإنترنت الخاص بك. إذا لم تكن ترغب في تلقي ملفات تعريف الارتباط على الإطلاق، فقد تكون قادرًا على تغيير إعدادات متصفحك لرفض جميع ملفات تعريف الارتباط أو أن يطلب منك جهاز الكمبيوتر الخاص بك أن يخبرك في كل مرة يتم إرسال ملف تعريف الارتباط إليه، وبالتالي تتيح لك الاختيار فيما إذا كنت تقبله أم لا. ومع ذلك، قد يؤدي ذلك إلى تأثير جودة الخدمات التي نقدمها لك فيما يتعلق بحسابك. بعض ملفات تعريف الارتباط الدائمة، مثل ملفات تعريف الارتباط الفلاشية، لا يمكن إزالتها ولا يمكن حظرها عن طريق تغيير إعدادات متصفحك.`,
          para5: `قد لا تتم إزالة بعض ملفات تعريف الارتباط الدائمة أو حظرها من قبل متصفح الإنترنت الخاص بك. إذا كنت ترغب في تعطيل جميع ملفات تعريف الارتباط، يرجى إرسال طلب إلى {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `إعادة التسويق باستخدام Google Analytics`,
          para1: `قد نستخدم المعلومات التي نجمعها لمساعدتنا في تقديم إعلانات ذات صلة لك (إعادة التسويق). إعادة التسويق هي طريقة لنا للتواصل مع زائري مواقعنا والإعلانات، استنادًا إلى تفاعلاتهم السابقة مع موقعنا والإعلانات. قد يتم تعيين متسوقي تسويق الطرف الثالث من قبل FXORO لتقديم خدمات إعادة التسويق مثل هذه. وبالتالي، قد يعرض متسوقو الطرف الثالث، بما في ذلك Google، إعلانات FXORO على مواقع الإنترنت. قد يستخدم متسوقو الطرف الثالث، بما في ذلك Google، أيضًا ملفات تعريف الارتباط الخاصة بهم وملفات تعريف الارتباط الخاصة بطرف ثالث والتقنيات المماثلة لعرض الإعلانات استنادًا إلى زيارات الزائر السابقة إلى موقع FXORO.`,
          para2: `يمكنك إلغاء استخدام Google Analytics من قبل معلني العرض وإلغاء استخدام الإعلانات المخصصة في شبكة عرض Google عن طريق زيارة مدير تفضيلات الإعلانات التابع لشركة Google. نشجعك أيضًا على زيارة إضافة المتصفح لإلغاء استخدام Google Analytics.`,
          para3: `لمزيد من المعلومات، يمكنك أيضًا زيارة مركز خصوصية Google.`,
        },
        sectionYourRights: {
          title: `ما هي حقوقك؟`,
          para1: `لا يلزم عليك تقديم أي من البيانات الشخصية المطلوبة من قبل FXORO. ومع ذلك، بدون تقديم المعلومات المطلوبة في نموذج الطلب، قد لا يكون بإمكان FXORO فتح حساب لك، أو تقديم أي خدمات أخرى، أو تقديم المعلومات أو المساعدة التي طلبتها، أو تقييم ملاءمة الخدمة التي تطلبها.`,
        },
        sectionRightToRequest: {
          title: `لديك الحق في طلب وتلقي ما يلي:`,
          list: {
            list1: `معلومات حول جميع البيانات الشخصية التي نملكها والتي تمت معالجتها ومعلومات حول كيفية الحصول على هذه البيانات والغرض من معالجة البيانات والجهات المستلمة وفئات البيانات التي تمت معالجتها أو ستتم معالجتها والمعالجة التي تمت منذ آخر تحديث للموضوع المعالجة والمنطق وراء نظام المعالجة التلقائي`,
            list2: `أي تصحيح وحذف لبياناتك الشخصية التي لم يتم معالجتها وفقًا للمتطلبات المعمول بها بسبب عدم وجود معلومات أو تضاربات`,
            list3: `أي إخطار يتم إجراؤه لأي طرف ثالث بأي تعديلات تمت وفقًا للبند (2) أعلاه، ما لم يكن ذلك سيكون عبئًا غير متناسب علينا`,
          },
        },
        sectionAffiliates: {
          title: `شركاء وشركاء تجاريون`,
          para1: `قد تشارك FXORO المعلومات مع الشركاء والشركاء التجاريين في حالة الحاجة المعقولة لهؤلاء الشركاء والشركاء التجاريين لذلك، بهدف:`,
          list: {
            list1: `تقديم منتجات وخدمات مماثلة إضافية تلبي احتياجاتك ويتم تقديمها بطريقة مفيدة وملائمة (فقط عندما تكون قد وافقت على ذلك)؛ و/أو`,
            list2: `خدمة حسابات العملاء.`,
          },
          para2: `لا تبيع FXORO أو ترخص أو تؤجر أو تكشف معلومات شخصية للأطراف الثالثة، إلا كما هو موضح في بيان الخصوصية هذا.`,
        },
        sectionEnforcement: {
          title: `التنفيذ`,
          para1: `تبذل {logoText} قصارى جهدها للامتثال لسياسة الخصوصية والأمان هذه. إذا كان لديك أي أسئلة أو مخاوف أو شكاوى بخصوص سياسة الخصوصية والأمان هذه وتنفيذها، يرجى إحالتها إلى: {complaintsMail}. بعد استلام شكواك، قد يتصل بك {logoText} لفهم مخاوفك بشكل أفضل وسيبذل كل الجهود للرد على سؤالك أو حل شكواك بالكامل برضاك التام.`,
          para2: `لقد عينت {logoText} مسؤولًا عن حماية البيانات (DPO)، الذي يتولى مهمة مراقبة استراتيجية حماية البيانات وتنفيذها، لضمان الامتثال للائحة العامة لحماية البيانات (GDPR). إذا كان لديك أي أسئلة أو مخاوف أو شكاوى بخصوص استراتيجيتنا لحماية البيانات وتنفيذها، يرجى إحالتها إلى: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `تعديلات على السياسة`,
          para1: `قد تقوم FXORO بتغيير وتحديث شروط سياسة الخصوصية والأمان من وقت لآخر. ستكون جميع التغييرات سارية اعتبارًا من سبعة (7) أيام بعد نشرها الأولي على الموقع الإلكتروني، ما لم يقم FXORO بتعديل سياسة الخصوصية والأمان للامتثال لمتطلبات قانونية أو تنظيمية. في هذه الحالات، ستصبح التعديلات سارية المفعول حسب الاقتضاء، أو حسب التوجيهات الصادرة.`,
        },
        sectionGoverningLaw: {
          title: `القانون الساري`,
          para1: `بخصوص المسائل التي لم يتم التعامل معها في سياسة الخصوصية والأمان الحالية، سيكون القانون القبرصي هو الساري.`,
        },
        sectionConsent: {
          title: `الموافقة`,
          para1: `من خلال الاستمرار في استخدام موقعنا الإلكتروني أو الخدمات الأخرى المقدمة، فإنك توافق على جمع ومعالجة واستخدام بياناتك الشخصية من قبل FXORO.`,
        },
      },
    },
    de: {
      seo: {
        metaTitle: "Datenschutzrichtlinie und Sicherheitsrichtlinie",
        metaDescription:
          "Datenschutzrichtlinie und Sicherheitskriterien. FXORO, der Online-Handelsmakler, bei dem alles möglich ist.",
      },
      contentPASP: {
        sectionTop: {
          para1: `Die MCA INTELIFUNDS LTD (im Folgenden das Unternehmen), das als „FXORO“ handelt, ist ein von der Cyprus Securities and Exchange Commission gemäß Lizenz Nr. 126/10 reguliertes Investmentunternehmen und handelt gemäß dem Gesetz über Wertpapierdienstleistungen und -aktivitäten sowie geregelte Märkte von 2017 (Gesetz 87(I)/2017) (im Folgenden das „Gesetz“).`,
          para2: `FXORO verpflichtet sich, die Privatsphäre aller personenbezogenen Daten zu schützen, die von Ihnen erfasst werden, einschließlich der Daten, die wir während Ihres Besuchs auf den FXORO-Websites erhalten. FXORO verarbeitet, speichert und verarbeitet Ihre Daten nur in dem Umfang, in dem dies den geltenden gesetzlichen Anforderungen entspricht und nur in dem Umfang, der für die Erreichung der hier festgelegten Zwecke erforderlich ist.`,
          para3: `Bitte beachten Sie die folgende Datenschutzerklärung, in der deutlich angegeben wird, wie wir Ihre personenbezogenen Daten verwenden, wie sie gesammelt, gespeichert und verarbeitet werden. Es erklärt auch Ihre Rechte im Rahmen des Gesetzes in Bezug auf Ihre personenbezogenen Daten.`,
          para4: `Verweise in diesem Dokument auf "personenbezogene Daten" beziehen sich auf personenbezogene Daten und sensible personenbezogene Daten im Sinne des Gesetzes über die Verarbeitung personenbezogener Daten (Schutz natürlicher Personen) Gesetz 138(1) von 2001 in der jeweils gültigen Fassung, sowie der Allgemeinen Datenschutzverordnung (DSGVO) (EU 2016/679) und soweit anwendbar, der Datenschutzgesetze oder Datenschutzgesetze anderer Länder.`,
          para5: `FXORO, unsere Partner, alle Mitglieder, Beauftragten und/oder Subunternehmer, mit denen wir zur Erfassung, Speicherung und Verarbeitung personenbezogener Daten zusammenarbeiten, sowie Dritte, die in unserem Auftrag handeln, können personenbezogene Daten, die Sie zur Durchführung von Transaktionen und/oder anderen Dienstleistungen, operativer Unterstützung und Entwicklung unseres oder ihres Geschäfts bereitstellen, erfassen, verarbeiten, verwenden und speichern.`,
        },
        sectionInfoWeCollect: {
          title: `Welche Informationen erfassen wir von Ihnen?`,
          para1: `Um FXORO seinen Kunden die Anlage-Dienstleistungen anzubieten, ist FXORO gemäß den gesetzlichen Bestimmungen verpflichtet, personenbezogene Daten seiner Kunden zu erfassen, zu verarbeiten und zu speichern. Dazu gehören unter anderem Ihr Name, Geburtsdatum, Wohnadresse, Passnummer, E-Mail-Adresse, Telefonnummer, Beruf, Zahlungsinformationen und Informationen über Ihren finanziellen Status.`,
          para2: `Um unsere Produkte und Dienstleistungen anzubieten, können wir Ihre Informationen aus verschiedenen Quellen erfassen, einschließlich, aber nicht beschränkt auf:`,
          list: {
            list1: `Website und Formulare`,
            list2: `Website Live-Chat`,
            list3: `CRM-System`,
            list4: `Telefonisch`,
            list5: `Per E-Mail`,
            list6: `Andere Drittanbieter`,
            list7: `Drittanbieter-Dienstleister`,
            list8: `Bestehende Kunden`,
            list9: `Partner, Mitarbeiter`,
          },
          para3: `FXORO erfasst und verarbeitet auch personenbezogene Informationen über Sie, die erforderlich sind, um Ihnen die unten im Abschnitt „Wie verwenden und teilen wir Ihre personenbezogenen Daten?“ aufgeführten Dienstleistungen zu erbringen. Dazu gehört auch die Information über Sie, wenn Sie eine Online-Anwendung oder eine andere Art von Formular ausfüllen und wenn Sie über Ihr FXORO-Konto darauf zugreifen und handeln. Darüber hinaus können wir auch personenbezogene Informationen als Ergebnis von Authentifizierungs- oder Identitätsprüfungen erhalten, einschließlich Überprüfungen bei Auskunfteien (die möglicherweise eine Aufzeichnung der Informationen führen), um Betrug zu verhindern.`,
          para4: `FXORO kann auch Informationen aus Ihrer Nutzung der FXORO-Websites und der Software des Clients ableiten und diese Informationen in Ihrem persönlichen Profil speichern. Diese Informationen können die besuchten Website-Bereiche, angesehene Seiten, Häufigkeit und Dauer der Besuche, Internetprotokoll (IP)-Adresse, Computeridentifikationsparameter, Arten von durchgeführten Transaktionen, heruntergeladene Dokumente, Mausklicks, Mausbewegungen, Scroll-Aktivitäten sowie den von Ihnen auf dieser Website eingegebenen Text und von welcher Website Sie auf unsere oder auf welche Websites Sie verlinken, umfassen.`,
        },
        sectionProtectPersonalInfo: {
          title: `Wie schützen wir Ihre persönlichen Informationen?`,
          para1: `Bei FXORO verpflichten wir uns, Ihre Privatsphäre zu respektieren, zu schützen und zu wahren, und deshalb haben wir viele Maßnahmen ergriffen`,
          para2: `Unter vielen Maßnahmen verwenden wir Computerschutzmaßnahmen wie Firewalls und Datenverschlüsselung. Wir setzen auch physische Zugangskontrollen zu unseren Gebäuden und Dateien ein, um diese Daten sicher aufzubewahren. Den Zugriff gewähren wir nur Mitarbeitern, die ihn zur Erfüllung ihrer Aufgaben benötigen.`,
        },
        sectionLinks: {
          title: `Links`,
          para1: `Wenn Sie die FXORO-Websites nutzen, können Sie auf andere Websites verlinken. Diese Datenschutz- und Sicherheitsrichtlinie gilt nicht für diese anderen Websites, von denen Sie sich möglicherweise von der Website von FXORO aus verlinken, und wir sind nicht verantwortlich für personenbezogene Daten, die von Dritten über diese anderen Websites gesammelt werden.`,
        },
        sectionProcessPersonalInfo: {
          title: `Verarbeitung personenbezogener Informationen`,
          para1: `Der Zugriff auf personenbezogene Informationen ist beschränkt auf diejenigen Mitarbeiter, Partner, Auftragnehmer und verbundene Unternehmen von FXORO (einschließlich, aber nicht beschränkt auf Mutter-, Schwestern- und Tochtergesellschaften), die solche Informationen für die in dieser Richtlinie beschriebenen Zwecke benötigen. Personen mit Zugriff auf personenbezogene Informationen sind verpflichtet, strenge Vertraulichkeitsstandards einzuhalten, wenn sie personenbezogene und andere Daten verwalten.`,
        },
        sectionSecurity: {
          title: `Sicherheit`,
          para1: `FXORO unternimmt Anstrengungen, um angemessene Sicherheitsvorkehrungen zu treffen, um sicherzustellen, dass die Sicherheit, Integrität und Privatsphäre der von Ihnen bereitgestellten Daten und persönlichen Informationen nicht missbraucht wird. Zu solchen Maßnahmen und Sicherheitsvorkehrungen gehören die Verschlüsselung während der Datenübertragung, starke Authentifizierungsmechanismen und die Trennung von Maschinen und Daten, um sichere Bereiche zu schaffen. Obwohl solche Systeme und Verfahren das Risiko von Sicherheitsverstößen reduzieren, bieten sie keine absolute Sicherheit. Daher kann FXORO nicht garantieren, dass unser Service gegenüber jeglichem Fehlverhalten, Fehlfunktionen, rechtswidrigen Abfangen oder unbefugtem Zugriff auf die darin gespeicherten Informationen und anderen informationssicherheitsbezogenen Risiken immun sein wird, oder dass Ihre privaten Kommunikationen über unseren Service privat bleiben.`,
        },
        sectionAnonymusStatInfo: {
          title: `Wie verwenden und teilen wir anonyme statistische Informationen?`,
          para1: `FXORO erfasst anonyme statistische Informationen, um sicherzustellen, dass es den Bedürfnissen seiner Kunden gerecht wird. Durch die Erfassung solcher Daten ist FXORO in der Lage, die angebotenen Dienstleistungen für seine bestehenden und potenziellen Kunden zu überwachen und zu verbessern. Wir können solche anonymisierten Informationen mit Dritten teilen.`,
        },
        sectionIdentifiableInfo: {
          title: `Wie verwenden und teilen wir Ihre persönlich identifizierbaren Informationen?`,
          para1: `FXORO kann Ihre persönlichen Informationen nutzen und sie mit Partnern, Auftragnehmern, Dienstleistern, Beratern, Transaktionsverarbeitern und verbundenen Unternehmen von FXORO (einschließlich Mutter-, Schwestern- und Tochtergesellschaften) (die „Partner“) nur für die folgenden Zwecke und nur mit Ihrer ausdrücklichen Zustimmung teilen:`,
          list: {
            list1: `um Ihnen die von Ihnen angeforderten Dienstleistungen einschließlich der Bearbeitung von Transaktionen zur Verfügung zu stellen`,
            list2: `um Ihre Identität zu bestätigen`,
            list3: `um Ihre Eignung zu bewerten`,
            list4: `um die von uns angebotenen Produkte und Dienstleistungen bereitzustellen`,
            list5: `um Ihr persönliches Profil zu pflegen`,
            list6: `um Ihr Konto zu verwalten`,
            list7: `um Sie bei Bedarf oder angemessenerweise im Zusammenhang mit den von Ihnen in Anspruch genommenen Dienstleistungen zu kontaktieren, einschließlich über eine Mailing-Plattform eines Dritten`,
            list8: `um Sie als Kunden über Angelegenheiten wie von Ihnen gehandelte Verträge und Aktivitäten von FXORO auf dem Laufenden zu halten`,
            list9: `um die von Ihnen erhaltenen Produkte und Dienstleistungen zu verwalten und zu verwalten`,
            list10: `zu Marketingzwecken, einschließlich, aber nicht beschränkt auf die Bereitstellung von Informationen über die von FXORO und seinen Partnern angebotenen Produkte und Dienstleistungen`,
            list11: `um ein Verständnis für die Produkte und Dienstleistungen zu entwickeln, an denen Sie interessiert sein könnten und um die Website an Ihre Bedürfnisse und Interessen anzupassen`,
            list12: `um nicht personalisierte statistische Daten zu erstellen`,
            list13: `um Umfragen und Fragebögen durchzuführen`,
            list14: `um die geltenden Geschäftsbedingungen durchzusetzen`,
          },
          para2: `Wenn FXORO der Ansicht ist, dass Sie gegen die geltenden Geschäftsbedingungen verstoßen haben, Ihre Rechte zur Nutzung der Dienste missbraucht haben oder eine Handlung oder Unterlassung ausgeführt haben, von der FXORO glaubt, dass sie gegen geltendes Recht, Vorschriften oder Bestimmungen verstößt, kann FXORO Ihre Informationen mit Strafverfolgungsbehörden und anderen zuständigen Stellen sowie mit anderen Dritten teilen, wie dies erforderlich sein kann;`,
          para3: `Wenn FXORO gesetzlich dazu verpflichtet ist oder der Ansicht ist, dass es gesetzlich verpflichtet ist, Ihre Informationen an Finanzbehörden oder an andere Dritte weiterzugeben;`,
          list2: {
            list1: `In jedem Fall von Streitigkeiten oder Rechtsstreitigkeiten jeglicher Art zwischen Ihnen und FXORO oder zwischen Ihnen und anderen Kunden oder Dritten im Zusammenhang mit den von FXORO erbrachten Dienstleistungen`,
            list2: `In jedem Fall, in dem FXORO der Ansicht ist, dass die Weitergabe von Informationen notwendig ist, um unmittelbaren körperlichen Schaden oder Sachschäden zu verhindern`,
            list3: `Wenn FXORO den Betrieb seiner Dienstleistungen in einem anderen Rahmen oder durch eine andere rechtliche Struktur oder Einheit organisiert oder wenn FXORO von einer anderen Einheit übernommen oder mit einer anderen Einheit verschmolzen wird, vorausgesetzt jedoch, dass diese Einheiten sich verpflichten, an die Bestimmungen dieser Richtlinie sowie an vertrauliche Vereinbarungen gebunden zu sein`,
          },
        },
        sectionOptOut: {
          title: `Auswahlmöglichkeiten und Abbestellen`,
          para1: `Im Registrierungsprozess bei FXORO als Kunde haben Sie die Möglichkeit, sich von der Anmeldung für die folgenden zusätzlichen Dienste abzumelden:`,
          list: {
            list1: `Marketingdienste, die Ihnen Informationen über die von FXORO oder seinen Partnern angebotenen Produkte und Dienstleistungen sowie Möglichkeiten, die wir für relevant halten, bereitstellen; Kundenaufträge, Zusammenarbeit mit FXORO`,
            list2: `Newsletter`,
            list3: `SMS-Nachrichten`,
            list4: `Andere elektronische Kommunikationen`,
          },
          para2: `Wenn Sie keine weiteren Mitteilungen wie oben genannt erhalten möchten, können Sie sich davon abmelden, indem Sie eine E-Mail an {complianceMail} oder an {removalMail} senden.`,
          para3: `Die E-Mail muss folgendes enthalten:`,
          list2: {
            list1: `Vor- und Nachname`,
            list2: `Kontonummer (falls vorhanden)`,
            list3: `Die bei der Registrierung verwendete E-Mail-Adresse`,
          },
        },
        sectionTransferData: {
          title: `Datenübermittlung in Drittländer`,
          para1: `Personenbezogene Daten können von FXORO an Dritte in Mitgliedstaaten des Europäischen Wirtschaftsraums sowie an Nicht-EU-Länder für die in dieser Richtlinie beschriebenen Zwecke übermittelt werden. Sie stimmen derartigen Übermittlungen ausdrücklich und eindeutig zu, vorausgesetzt, dass solche Übermittlungen stets den Datenschutzbestimmungen entsprechen, die unsere Geschäftstätigkeit regeln.`,
        },
        sectionUpdateInfo: {
          title: `Aktualisierung Ihrer Informationen`,
          para1: `Sie können {logoText} jederzeit per E-Mail an {fxoroMail} darüber informieren, dass sich Ihre persönlichen Daten geändert haben. Wir werden Ihre persönlichen Informationen entsprechend Ihren Anweisungen ändern oder löschen, es sei denn, wir sind gesetzlich verpflichtet, Ihre persönlichen Informationen für regulatorische oder rechtliche Zwecke aufzubewahren, Ihnen die von Ihnen angeforderten Dienstleistungen bereitzustellen oder angemessene Geschäftsunterlagen aufrechtzuerhalten, in welchem Fall Ihre persönlichen Informationen nach Ablauf dieser Pflicht gelöscht werden. In jedem Fall kann {logoText} aggregierte oder anonymisierte Informationen für die in dieser Datenschutz- und Sicherheitsrichtlinie beschriebenen Zwecke auf unbestimmte Zeit aufbewahren.`,
        },
        sectionCookies: {
          title: `Cookies`,
          para1: `Cookies sind kleine Informationsdateien, die häufig eine eindeutige Identifikationsnummer oder einen Wert enthalten und auf der Festplatte Ihres Computers gespeichert werden, wenn Sie die FXORO Handelssoftware verwenden und/oder auf die FXORO Websites zugreifen.`,
          para2: `Wir verwenden sowohl Sitzungscookies mit ID als auch dauerhafte Cookies. Ein Sitzungscookie mit ID läuft ab, wenn Sie Ihren Browser schließen. Ein dauerhaftes Cookie bleibt für einen längeren Zeitraum auf Ihrer Festplatte gespeichert.`,
          para3: `Wir setzen ein dauerhaftes Cookie zu statistischen Zwecken. Dauerhafte Cookies ermöglichen es uns auch, den Standort und die Interessen unserer Benutzer zu verfolgen und das Nutzungserlebnis unserer Dienste auf unserer Website zu verbessern.`,
          para4: `Sie können dauerhafte Cookies entfernen, indem Sie den Anweisungen in der "Hilfe"-Datei Ihres Internetbrowsers folgen. Wenn Sie keine Cookies erhalten möchten, können Sie möglicherweise die Einstellungen Ihres Browsers ändern, um alle Cookies abzulehnen oder sich jedes Mal benachrichtigen zu lassen, wenn ein Cookie an Ihren Computer gesendet wird, und sich so die Möglichkeit geben, es anzunehmen oder abzulehnen. Dies kann jedoch die Qualität der von uns in Bezug auf Ihr Konto bereitgestellten Dienste beeinträchtigen. Einige dauerhafte Cookies wie Flash-Cookies können nicht entfernt und durch Ändern der Browsereinstellungen nicht blockiert werden.`,
          para5: `Einige dauerhafte Cookies werden von Ihrem Internetbrowser nicht entfernt oder blockiert. Wenn Sie alle Cookies deaktivieren möchten, senden Sie bitte eine Anfrage an {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Remarketing mit Google Analytics`,
          para1: `Wir können die von uns gesammelten Informationen nutzen, um uns bei der Bereitstellung relevanter Anzeigen für Sie zu unterstützen (Remarketing). Remarketing ist eine Möglichkeit, um mit Besuchern unserer Websites und Anzeigen in Verbindung zu treten, basierend auf ihren vergangenen Interaktionen mit unserer Website und unseren Anzeigen. Drittanbieter-Marketingdienstleister können von FXORO beauftragt werden, solche Remarketing-Dienste durchzuführen. Als Ergebnis können Drittanbieter, einschließlich Google, Anzeigen von FXORO auf Internetseiten anzeigen. Solche Drittanbieter, einschließlich Google, können auch ihre Cookies, Cookies von Drittanbietern und ähnliche Technologien verwenden, um Anzeigen basierend auf den vorherigen Besuchen von FXORO's Website zu schalten.`,
          para2: `Sie können sich von Google Analytics für Display-Werbetreibende abmelden und personalisierte Google Display Network-Anzeigen deaktivieren, indem Sie das Ads Preferences Manager von Google besuchen. Sie sind außerdem eingeladen, das Google Analytics Opt-out Browser Add-on zu nutzen.`,
          para3: `Weitere Informationen finden Sie auch im Datenschutzcenter von Google.`,
        },
        sectionYourRights: {
          title: `Was sind Ihre Rechte?`,
          para1: `Sie sind nicht verpflichtet, uns die von FXORO angeforderten personenbezogenen Daten zur Verfügung zu stellen. Wenn Sie jedoch die Informationen, die im Antragsformular angefordert werden, nicht bereitstellen, kann FXORO möglicherweise kein Konto für Sie eröffnen oder Ihnen andere Dienstleistungen, Informationen oder Unterstützung anbieten, die Sie gesucht haben, oder die Angemessenheit des von Ihnen angeforderten Dienstes überprüfen.`,
        },
        sectionRightToRequest: {
          title: `Sie haben das Recht, folgendes zu beantragen und zur Verfügung gestellt zu bekommen:`,
          list: {
            list1: `Informationen zu all Ihren personenbezogenen Daten, die wir halten und die einer Verarbeitung unterzogen wurden, sowie Informationen darüber, wie diese Daten erhalten wurden, den Zweck, für den die Daten verarbeitet werden, die Empfänger, die Kategorien der verarbeiteten oder zu verarbeitenden Daten, die Verarbeitung, die seit der letzten Aktualisierung der Daten durch die betroffene Person stattgefunden hat, und die Gründe für das automatisierte Verarbeitungssystem`,
            list2: `Jede Korrektur und Löschung Ihrer personenbezogenen Daten, die nicht gemäß den geltenden Anforderungen aufgrund von Informationen oder Unstimmigkeiten verarbeitet wurden`,
            list3: `Jede Benachrichtigung an Dritte über Änderungen gemäß (2) oben, es sei denn, dies wäre für uns unverhältnismäßig belastend`,
          },
        },
        sectionAffiliates: {
          title: `Partner und Partnerunternehmen`,
          para1: `FXORO kann Informationen mit Partnern, Assoziierten und Dritten teilen, wenn diese Informationen vernünftigerweise von solchen Partnern und Dritten benötigt werden, um Folgendes zu erreichen:`,
          list: {
            list1: `Zusätzliche ähnliche Produkte und Dienstleistungen anbieten, die Ihren Bedürfnissen entsprechen und in einer nützlichen und relevanten Weise bereitgestellt werden (nur wenn Sie uns dazu autorisiert haben); und/oder`,
            list2: `Kundenservice-Konten verwalten.`,
          },
          para2: `FXORO verkauft, lizenziert, vermietet oder gibt personenbezogene Daten nicht an Dritte weiter, außer wie in dieser Datenschutzerklärung beschrieben.`,
        },
        sectionEnforcement: {
          title: `Durchsetzung`,
          para1: `{logoText} unternimmt alles Mögliche, um diese Datenschutz- und Sicherheitsrichtlinie einzuhalten. Wenn Sie Fragen, Bedenken oder Beschwerden bezüglich dieser Datenschutz- und Sicherheitsrichtlinie und deren Durchsetzung haben, wenden Sie sich bitte an: {complaintsMail}. Nach Erhalt Ihrer Beschwerde kann {logoText} Sie kontaktieren, um Ihre Anliegen besser zu verstehen, und wird alle Anstrengungen unternehmen, um Ihre Frage umgehend zu beantworten oder Ihre Beschwerde zu Ihrer vollsten Zufriedenheit zu lösen.`,
          para2: `{logoText} hat einen Datenschutzbeauftragten (DPO) ernannt, der für die Überwachung der Datenschutzstrategie und -umsetzung verantwortlich ist, um die Einhaltung der Datenschutz-Grundverordnung (DSGVO) sicherzustellen. Wenn Sie Fragen, Bedenken oder Beschwerden bezüglich unserer Datenschutzstrategie und -umsetzung haben, wenden Sie sich bitte an: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Änderungen der Richtlinie`,
          para1: `FXORO kann die Bedingungen dieser Datenschutz- und Sicherheitsrichtlinie von Zeit zu Zeit ändern und aktualisieren. Alle Änderungen treten sieben (7) Tage nach ihrer ersten Veröffentlichung auf der Website in Kraft, es sei denn, FXORO ändert die Datenschutz- und Sicherheitsrichtlinie, um rechtlichen oder behördlichen Anforderungen zu entsprechen. In letzterem Fall werden die Änderungen wie vorgeschrieben oder angeordnet wirksam.`,
        },
        sectionGoverningLaw: {
          title: `Anwendbares Recht`,
          para1: `Für Fragen, die in der vorliegenden Datenschutz- und Sicherheitsrichtlinie nicht behandelt werden, gilt das Recht von Zypern.`,
        },
        sectionConsent: {
          title: `Einwilligung`,
          para1: `Durch die weitere Nutzung unserer Website oder anderer angebotener Dienste stimmen Sie der Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten durch FXORO zu.`,
        },
      },
    },
    es: {
      seo: {
        metaTitle: "Política de Privacidad y Seguridad",
        metaDescription:
          "Política de privacidad y criterios de seguridad. FXORO, el bróker de comercio en línea a través del cual todo es posible.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (en adelante la empresa) que opera como "FXORO", es una firma de inversión regulada por la Comisión de Bolsa y Valores de Chipre con licencia n.º 126/10 y opera de acuerdo con la Ley de Servicios e Actividades y Mercados Regulados de Chipre de 2017 (Ley 87 (I) / 2017) (en adelante la "Ley").`,
          para2: `FXORO se compromete a proteger la privacidad de todos los datos personales que se obtienen de usted, incluidos los datos que obtenemos durante sus visitas a los sitios web de FXORO. FXORO maneja, retiene y procesa sus datos solo en la medida en que esto cumpla con los requisitos legales aplicables y solo en la medida en que sea necesario para lograr los fines establecidos aquí.`,
          para3: `Consulte la siguiente Declaración de Política de Privacidad que indica claramente cómo usamos sus datos personales, cómo se recopilan, cómo se almacenan y cómo se procesan. También explica sus derechos en virtud de la ley relacionada con sus datos personales.`,
          para4: `Las referencias en este documento a "datos personales" son referencias a datos personales y datos personales sensibles según lo definido en la Ley de Procesamiento de Datos Personales (Protección de Individuos) 138(1) de 2001, según enmendada de vez en cuando, así como el Reglamento General de Protección de Datos (RGPD) (UE 2016/679) y en la medida que sea aplicable, las leyes de protección de datos o privacidad de cualquier otro país.`,
          para5: `FXORO, nuestras asociadas, cualquier miembro, agente y/o subcontratista con los que contratemos o trabajemos para recopilar, almacenar y procesar datos personales, así como cualquier tercero que actúe en nuestro nombre, pueden recopilar, procesar, usar y almacenar datos personales proporcionados por usted con el fin de llevar a cabo transacciones y/o otros servicios, apoyo operativo y desarrollo de nuestro o su negocio.`,
        },
        sectionInfoWeCollect: {
          title: `¿Qué información recopilamos de usted?`,
          para1: `Para que FXORO proporcione servicios de inversión a sus clientes, FXORO debe recopilar, procesar y retener datos personales de sus clientes de acuerdo con los requisitos legales obligatorios. Esto incluye, entre otros, su nombre, fecha de nacimiento, dirección residencial, número de pasaporte, dirección de correo electrónico, número de teléfono, profesión, información de pago e información sobre su situación financiera.`,
          para2: `Para proporcionar nuestros productos y servicios, podemos recopilar su información a través de varias fuentes diferentes, que incluyen, entre otras:`,
          list: {
            list1: `Sitio web y formularios`,
            list2: `Chat en vivo del sitio web`,
            list3: `Sistema CRM`,
            list4: `Por teléfono`,
            list5: `Por correo electrónico`,
            list6: `Otros Procesadores de Terceros`,
            list7: `Proveedores de Servicios de Terceros`,
            list8: `Clientes Existentes`,
            list9: `Socios, Empleados`,
          },
          para3: `FXORO también recopila y procesa información personal sobre usted, que es necesaria para proporcionarle sus servicios, según se describe a continuación en la sección "¿Cómo usamos y compartimos su información de identificación personal?" Esto incluye información sobre usted cuando completa una solicitud en línea u otro tipo de formulario y cuando accede y opera a través de su cuenta de FXORO. Además, también podemos obtener información personal como resultado de verificaciones de autenticación o identidad, incluidas verificaciones con agencias de referencia crediticia (que pueden mantener un registro de la información) para prevenir fraudes.`,
          para4: `FXORO también puede obtener información de su uso de los sitios web y el cliente de software de FXORO y puede almacenar esta información junto con su perfil personal. Esta información puede incluir áreas del sitio visitadas, páginas vistas, frecuencia y duración de las visitas, dirección de Protocolo de Internet (IP), parámetros de identificación de la computadora, tipos de transacciones realizadas, documentos descargados, clics de mouse, movimientos de mouse, actividad de desplazamiento, así como el texto que escribe en este sitio web y qué sitio web lo remitió a nosotros o a qué sitios web enlazó.`,
        },
        sectionProtectPersonalInfo: {
          title: `Cómo protegemos su información personal`,
          para1: `En FXORO, nos comprometemos a respetar, proteger y mantener su privacidad, por lo que tenemos muchas medidas en vigor.`,
          para2: `Entre muchas medidas, utilizamos salvaguardas informáticas como firewalls y cifrado de datos. También aplicamos controles de acceso físico a nuestros edificios y archivos para mantener seguros estos datos. Solo autorizamos el acceso a empleados que lo necesiten para realizar sus responsabilidades.`,
        },
        sectionLinks: {
          title: `Enlaces`,
          para1: `Cuando utiliza los sitios web de FXORO, es posible que pueda vincularse a otros sitios web. Esta Política de Privacidad y Seguridad no se aplica a esos otros sitios que usted pueda elegir vincular desde el sitio web de FXORO y no somos responsables de la información personal recopilada por terceros a través de esos otros sitios.`,
        },
        sectionProcessPersonalInfo: {
          title: `Procesamiento de información personal`,
          para1: `El acceso a la información personal está restringido a aquellos empleados, socios, contratistas y afiliados de FXORO (incluyendo, sin limitaciones, empresas matrices, filiales y subsidiarias) que necesiten acceder a dicha información para los fines descritos en esta política. Aquellos con acceso a información personal están obligados a cumplir con estrictas normas de confidencialidad al gestionar datos personales y otros datos.`,
        },
        sectionSecurity: {
          title: `Seguridad`,
          para1: `FXORO hace esfuerzos para mantener las salvaguardias adecuadas para garantizar que la seguridad, integridad y privacidad de los datos e información personal que usted ha proporcionado no sean mal utilizados. Estas medidas y salvaguardias incluyen el cifrado durante la transmisión de datos, mecanismos de autenticación sólidos y la separación de máquinas y datos para proporcionar áreas seguras. Si bien estos sistemas y procedimientos reducen el riesgo de violaciones de seguridad, no brindan seguridad absoluta. Por lo tanto, FXORO no puede garantizar que nuestro servicio esté inmune a cualquier acto indebido, malfuncionamiento, interceptación ilegal o acceso no autorizado a la información almacenada o a otros riesgos de seguridad de la información, ni que sus comunicaciones privadas a través de nuestro servicio se mantendrán privadas.`,
        },
        sectionAnonymusStatInfo: {
          title: `¿Cómo utilizamos y compartimos información estadística anónima?`,
          para1: `FXORO recopila información estadística anónima para asegurarse de que cumpla con las necesidades de sus clientes. Al recopilar dichos datos, FXORO puede monitorear y mejorar los servicios que ofrece a sus clientes actuales y potenciales. Podemos compartir esta información anonimizada con terceros.`,
        },
        sectionIdentifiableInfo: {
          title: `¿Cómo utilizamos y compartimos su información de identificación personal?`,
          para1: `FXORO puede utilizar su información personal y compartirla con socios, contratistas, proveedores de servicios, asesores, procesadores de transacciones y afiliados de FXORO (incluyendo empresas matrices, filiales y subsidiarias) (los "Socios") únicamente para los siguientes fines, y previa su consentimiento explícito:`,
          list: {
            list1: `proporcionarle los servicios que ha solicitado, incluido el procesamiento de transacciones`,
            list2: `confirmar su identidad`,
            list3: `evaluar su idoneidad`,
            list4: `para los productos y servicios que proporcionamos`,
            list5: `mantener su perfil personal`,
            list6: `administrar su cuenta`,
            list7: `contactarlo cuando sea necesario o apropiado en relación con los servicios que se le están brindando, incluida una plataforma de envío de correos de terceros`,
            list8: `mantenerlo informado mientras es cliente sobre asuntos como contratos que ha negociado y actividades de FXORO`,
            list9: `administrar y brindar los productos y servicios que se le proporcionan`,
            list10: `con fines de marketing, incluida, entre otras, la provisión de información sobre los productos y servicios ofrecidos por FXORO y sus Socios`,
            list11: `desarrollar una comprensión de los productos y servicios que pueda estar interesado en obtener de FXORO y adaptar el sitio web a sus necesidades e intereses`,
            list12: `crear datos estadísticos impersonalizados`,
            list13: `realizar encuestas y cuestionarios`,
            list14: `aplicar los términos y condiciones establecidos`,
          },
          para2: `Si FXORO considera que ha violado los términos y condiciones, o ha abusado de sus derechos para utilizar los servicios, o ha realizado algún acto u omisión que FXORO considere que viola cualquier ley, norma o regulación aplicable, entonces FXORO puede compartir su información con agencias de aplicación de la ley y otras autoridades competentes, así como con otros terceros, según sea necesario;`,
          para3: `Si FXORO está obligado, o considera que está obligado por ley a compartir o divulgar su información a autoridades financieras o a cualquier otro tercero;`,
          list2: {
            list1: `En cualquier caso de disputa o procedimiento legal de cualquier tipo entre usted y FXORO, o entre usted y otros clientes o terceros con respecto a los servicios que FXORO proporciona`,
            list2: `En cualquier caso en el que FXORO considere que compartir información es necesario para evitar daños físicos inminentes o daños a la propiedad`,
            list3: `Si FXORO organiza la operación de sus servicios dentro de un marco diferente, o a través de otra estructura legal o entidad, o si FXORO es adquirido o fusionado con otra entidad, siempre que esas entidades acuerden estar sujetas a las disposiciones de esta política, así como a acuerdos de confidencialidad`,
          },
        },
        sectionOptOut: {
          title: `Elección y exclusión`,
          para1: `En el proceso de registro con FXORO como cliente, se le dará la opción de excluirse de la suscripción a los siguientes servicios adicionales:`,
          list: {
            list1: `Servicios de marketing, que le proporcionan información sobre los productos y servicios ofrecidos por FXORO o sus socios; y oportunidades que creemos pueden ser relevantes para usted; Órdenes de clientes, comunicación con FXORO`,
            list2: `Boletines informativos`,
            list3: `Mensajes de SMS (texto)`,
            list4: `Otras comunicaciones electrónicas`,
          },
          para2: `Si ya no desea recibir las comunicaciones mencionadas anteriormente, puede optar por no recibirlas enviando un correo electrónico a {complianceMail} o a {removalMail}.`,
          para3: `El correo electrónico debe contener lo siguiente:`,
          list2: {
            list1: `Nombre y apellido`,
            list2: `Número de cuenta (si corresponde)`,
            list3: `El correo electrónico utilizado en el proceso de registro`,
          },
        },
        sectionTransferData: {
          title: `Transferencia de datos a terceros países`,
          para1: `Los datos personales pueden ser transferidos por FXORO a terceros países miembros del Espacio Económico Europeo, así como a países no pertenecientes al Espacio Económico Europeo, con los fines descritos en esta política. Usted otorga su consentimiento expreso e inequívoco para dicha transferencia, siempre que dicha transferencia se realice de acuerdo con las regulaciones de protección de datos que rigen nuestras operaciones.`,
        },
        sectionUpdateInfo: {
          title: `Actualización de su información`,
          para1: `Puede informar a {logoText} en cualquier momento que sus datos personales han cambiado enviándonos un correo electrónico a {fxoroMail}. Cambiaremos o eliminaremos su información personal de acuerdo con sus instrucciones, excepto en la medida en que estemos obligados a mantener su información personal por razones regulatorias o legales, para proporcionarle los servicios que ha solicitado o para mantener registros comerciales adecuados, en cuyo caso su información personal será eliminada al vencimiento de dicho período obligatorio. En cualquier caso, {logoText} puede mantener cualquier información agregada o anonimizada con fines descritos en esta Política de Privacidad y Seguridad, indefinidamente.`,
        },
        sectionCookies: {
          title: `Cookies`,
          para1: `Las cookies son pequeños archivos de información que a menudo incluyen un número o valor de identificación único, que se almacenan en el disco duro de su computadora como resultado de su uso del software de negociación de FXORO y/o acceso a los sitios web de FXORO.`,
          para2: `Utilizamos tanto cookies de identificación de sesión como cookies persistentes. Una cookie de identificación de sesión expira cuando cierra su navegador. Una cookie persistente permanece en su disco duro durante un período de tiempo prolongado.`,
          para3: `Establecemos una cookie persistente con fines estadísticos. Las cookies persistentes también nos permiten rastrear y dirigir la ubicación y los intereses de nuestros usuarios y mejorar la experiencia de nuestros servicios en nuestro sitio.`,
          para4: `Puede eliminar las cookies persistentes siguiendo las instrucciones proporcionadas en el archivo de "ayuda" de su navegador de Internet. Si no desea recibir cookies en absoluto, es posible que pueda cambiar la configuración de su navegador para rechazar todas las cookies o para que su computadora le notifique cada vez que se le envía una cookie, lo que le dará la opción de aceptarla o no. Sin embargo, esto puede afectar la calidad de los servicios que le brindamos en relación con su cuenta. Algunas cookies persistentes, como las cookies Flash, no se pueden eliminar ni bloquear cambiando la configuración de su navegador.`,
          para5: `Algunas cookies persistentes no se eliminarán ni bloquearán mediante su navegador de Internet. Si desea deshabilitar todas las cookies, envíe una solicitud a {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Remarketing con Google Analytics`,
          para1: `Podemos utilizar la información que recopilamos para ayudarnos a ofrecerte anuncios relevantes (Remarketing). El remarketing es una forma en la que nos conectamos con los visitantes de nuestros sitios web y anuncios, basándonos en sus interacciones anteriores con nuestro sitio web y anuncios. Es posible que contratemos proveedores de marketing de terceros, incluido Google, para realizar estos servicios de remarketing. Como resultado, estos proveedores de terceros, incluido Google, pueden mostrar anuncios de FXORO en sitios web de Internet. Dichos proveedores de terceros, incluido Google, también pueden utilizar sus cookies, cookies de terceros y tecnologías similares para ofrecer anuncios basados en visitas anteriores de los visitantes al sitio web de FXORO.`,
          para2: `Puedes optar por excluirte de Google Analytics para anunciantes de Display y de los anuncios personalizados de la Red de Display de Google visitando el Administrador de preferencias de anuncios de Google. También te recomendamos visitar el complemento de exclusión de Google Analytics.`,
          para3: `Para obtener más información, también puedes visitar el centro de privacidad de Google.`,
        },
        sectionYourRights: {
          title: `¿Cuáles son tus derechos?`,
          para1: `No estás obligado/a a proporcionarnos ninguno de los datos personales solicitados por FXORO. Sin embargo, si no proporcionas la información solicitada en el formulario de solicitud, es posible que FXORO no pueda abrir una cuenta para ti, ni proporcionarte otros servicios, información o asistencia que hayas solicitado o evaluar la idoneidad del servicio que estás solicitando.`,
        },
        sectionRightToRequest: {
          title: `Tienes derecho a solicitar y recibir lo siguiente:`,
          list: {
            list1: `Información sobre todos tus Datos Personales que tenemos y que han sido objeto de procesamiento, así como información sobre cómo se obtuvieron los datos, el propósito para el cual se procesan los datos, los destinatarios, las categorías de datos procesados o por procesar, el procesamiento que ha tenido lugar desde que el sujeto de los datos fue actualizado por última vez con respecto al procesamiento y los fundamentos del sistema de procesamiento automatizado.`,
            list2: `Cualquier corrección y eliminación de tus Datos Personales que no se haya realizado de acuerdo con los requisitos aplicables debido a la falta de información o discrepancias.`,
            list3: `Cualquier notificación realizada a terceros sobre las enmiendas realizadas de acuerdo con lo establecido en (2) anterior, a menos que esto suponga una carga desproporcionada para nosotros.`,
          },
        },
        sectionAffiliates: {
          title: `Afiliados y Socios`,
          para1: `FXORO puede compartir información con socios, asociados y terceros en caso de que esta información sea razonablemente requerida por tales socios y terceros para:`,
          list: {
            list1: `Ofrecer productos y servicios adicionales similares que satisfagan tus necesidades y que se ofrezcan de manera útil y relevante (solo cuando nos hayas autorizado a hacerlo); y/o`,
            list2: `Atender cuentas de clientes.`,
          },
          para2: `FXORO no vende, otorga licencias, arrienda ni divulga de otra manera información personal a terceros, excepto según lo descrito en esta Declaración de Privacidad.`,
        },
        sectionEnforcement: {
          title: `Cumplimiento`,
          para1: `{logoText} está haciendo todo lo posible para cumplir con esta Política de Privacidad y Seguridad. Si tienes alguna pregunta, inquietud o queja con respecto a esta Política de Privacidad y Seguridad y su cumplimiento, por favor envíalas a: {complaintsMail}. Después de recibir tu queja, {logoText} puede ponerse en contacto contigo para comprender mejor tus inquietudes y hará todos los esfuerzos para responder a tu pregunta o resolver tu queja satisfactoriamente.`,
          para2: `{logoText} ha designado a un oficial de protección de datos (DPO), quien es responsable de supervisar la estrategia e implementación de protección de datos, con el fin de garantizar el cumplimiento del Reglamento General de Protección de Datos (GDPR). Si tienes alguna pregunta, inquietud o queja con respecto a nuestra estrategia e implementación de protección de datos, por favor envíalas a: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Modificaciones de la política`,
          para1: `FXORO puede cambiar y actualizar los términos de esta Política de Privacidad y Seguridad de vez en cuando. Todos los cambios entrarán en vigor siete (7) días después de su publicación inicial en el sitio web, a menos que FXORO modifique la Política de Privacidad y Seguridad para cumplir con requisitos legales o regulatorios. En este último caso, las enmiendas entrarán en vigor según sea necesario o requerido.`,
        },
        sectionGoverningLaw: {
          title: `Ley aplicable`,
          para1: `En lo que respecta a cuestiones no abordadas en la presente Política de Privacidad y Seguridad, se aplicará la ley de Chipre.`,
        },
        sectionConsent: {
          title: `Consentimiento`,
          para1: `Al continuar utilizando nuestro sitio web u otros servicios ofrecidos, estás aceptando la recopilación, procesamiento y uso de tus datos personales por parte de FXORO.`,
        },
      },
    },
    sv: {
      seo: {
        metaTitle: "Integritets- och säkerhetspolicy",
        metaDescription:
          "Integritetspolicy och säkerhetskriterier. FXORO, den online-handelsmäklaren genom vilken allt är möjligt.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (nedan kallat företaget) som handlar under namnet “FXORO”, är ett investeringsföretag som regleras av Cyperns värdepappers- och börsmyndighet med licensnummer 126/10 och verkar enligt Cyperns lag om investeringstjänster och verksamheter och reglerade marknader från 2017 (Lag 87(I)/2017) (nedan kallad "Lagen").`,
          para2: `FXORO åtar sig att skydda integriteten för alla personuppgifter som erhålls från dig, inklusive data som vi erhåller under dina besök på FXOROs webbplatser. FXORO hanterar, behåller och behandlar dina data endast i enlighet med gällande lagkrav och endast i den utsträckning det är nödvändigt för att uppnå de ändamål som anges här.`,
          para3: `Vänligen se den följande integritetspolicyn som tydligt anger hur vi använder dina personuppgifter, hur det samlas in, hur det lagras och hur det bearbetas. Den förklarar också dina rättigheter enligt lagstiftningen om dina personuppgifter.`,
          para4: `Hänvisningar i detta dokument till "personuppgifter" avser personuppgifter och känsliga personuppgifter enligt lagen om behandling av personuppgifter (skydd av enskilda) Lag 138(1) av 2001 ändrat från tid till annan, liksom allmänna dataskyddsförordningen (GDPR) (EU 2016/679) och i den utsträckning som är tillämplig, dataskydds- eller integritetslagar i något annat land.`,
          para5: `FXORO, våra samarbetspartners, medlemmar, agenter och/eller underleverantörer som vi engagerar eller arbetar genom för att samla in, lagra och behandla personuppgifter och eventuella tredje parter som agerar på våra vägnar, kan samla in, behandla, använda och lagra personuppgifter som du tillhandahåller för ändamålen att genomföra transaktioner och/eller andra tjänster, operativt stöd och utveckling av vår eller deras verksamhet.`,
        },
        sectionInfoWeCollect: {
          title: `Vilken information samlar vi in från dig?`,
          para1: `För att FXORO ska kunna erbjuda sina kunder investeringstjänster måste FXORO samla in, behandla och lagra personuppgifter om sina kunder i enlighet med obligatoriska lagkrav. Detta inkluderar bland annat ditt namn, födelsedatum, bostadsadress, passnummer, e-postadress, telefonnummer, yrke, betalningsinformation och information om din ekonomiska ställning.`,
          para2: `För att kunna erbjuda våra produkter och tjänster kan vi samla in din information genom flera olika källor, inklusive men inte begränsat till:`,
          list: {
            list1: `Webbplats och formulär`,
            list2: `Webbplats Live Chat`,
            list3: `CRM-system`,
            list4: `Via telefon`,
            list5: `Via e-post`,
            list6: `Andra tredjepartsleverantörer`,
            list7: `Tredjeparts tjänsteleverantörer`,
            list8: `Befintliga kunder`,
            list9: `Samarbetspartners, anställda`,
          },
          para3: `FXORO samlar också in och behandlar personlig information om dig, vilket är nödvändigt för att kunna erbjuda dig dess tjänster, som anges nedan i avsnittet "Hur använder och delar vi din personligt identifierbara information?" Detta inkluderar information om dig när du fyller i en onlineansökan eller en annan typ av formulär och när du har tillgång till och handlar genom ditt FXORO-konto. Dessutom kan vi också få personlig information som ett resultat av autentisering eller identitetskontroller, inklusive kontroller med kreditupplysningsföretag (som kan behålla en register över informationen) för att förhindra bedrägeri.`,
          para4: `FXORO kan också härleda information från ditt användande av FXOROs webbplatser och programvara och kan lagra denna information med din personliga profil. Denna information kan inkludera besökta områden på webbplatsen, visade sidor, frekvens och varaktighet av besök, Internetprotokoll (IP) -adress, datoridentifieringsparametrar, typer av genomförda transaktioner, nedladdade dokument, musklick, musrörelser, rullningsaktivitet samt text du skriver på denna webbplats och vilken webbplats som hänvisade dig till vår webbplats eller vilka webbplatser du länkar till.`,
        },
        sectionProtectPersonalInfo: {
          title: `Hur skyddar vi dina personuppgifter`,
          para1: `På FXORO är vi engagerade i att respektera, skydda och upprätthålla din integritet och därför har vi många åtgärder på plats.`,
          para2: `Bland många åtgärder använder vi datorskydd som brandväggar och datakryptering. Vi genomdriver också fysiska åtkomstkontroller till våra byggnader och filer för att hålla dessa data säkra. Vi auktoriserar endast åtkomst för anställda som behöver det för att utföra sina ansvar.`,
        },
        sectionLinks: {
          title: `Länkar`,
          para1: `När du använder FXOROs webbplatser kan du kunna länka till andra webbplatser. Denna integritets- och säkerhetspolicy gäller inte för de andra webbplatser som du kan välja att länka från FXOROs webbplats, och vi ansvarar inte för någon personlig information som samlas in av tredje parter via dessa andra webbplatser.`,
        },
        sectionProcessPersonalInfo: {
          title: `Behandling av personlig information`,
          para1: `Åtkomst till personlig information är begränsad till de anställda, partners, entreprenörer och samarbetspartners till FXORO (inklusive utan begränsning, förälder-, syster- och dotterbolag) som behöver åtkomst till sådan information för de ändamål som beskrivs i denna policy. De som har åtkomst till personlig information är skyldiga att följa strikta sekretessstandarder när de hanterar personlig och annan data.`,
        },
        sectionSecurity: {
          title: `Säkerhet`,
          para1: `FXORO vidtar åtgärder för att upprätthålla lämpliga skyddsåtgärder för att säkerställa att den data och personlig information som du har tillhandahållit inte missbrukas. Sådana åtgärder och skyddsåtgärder inkluderar kryptering under överföring av data, starka autentiseringsmekanismer och separation av maskiner och data för att tillhandahålla säkra områden. Trots att sådana system och procedurer minskar risken för säkerhetsintrång, garanterar de inte absolut säkerhet. Därför kan FXORO inte garantera att vår tjänst kommer att vara immuna mot eventuella felaktigheter, funktionsfel, olagliga avlyssningar eller obehörig åtkomst till den lagrade informationen och andra risker för informationssäkerhet, eller att dina privata kommunikationer på eller genom vår tjänst kommer att förbli privata.`,
        },
        sectionAnonymusStatInfo: {
          title: `Hur använder och delar vi anonym statistisk information?`,
          para1: `FXORO samlar anonym statistisk information för att säkerställa att det uppfyller behoven hos sina kunder. Genom att samla in sådana data kan FXORO övervaka och förbättra de tjänster som det erbjuder till sina befintliga och potentiella kunder. Vi kan dela sådan anonymiserad information med tredje parter.`,
        },
        sectionIdentifiableInfo: {
          title: `Hur använder och delar vi din personligt identifierbara information?`,
          para1: `FXORO kan använda din personliga information och dela den med partners, entreprenörer, tjänsteleverantörer, rådgivare, transaktionsbehandlare och samarbetspartners till FXORO (inklusive moder-, syster- och dotterbolag) ("Partner") endast för följande ändamål, och efter ditt uttryckliga samtycke:`,
          list: {
            list1: `för att tillhandahålla de tjänster som du har begärt, inklusive hantering av transaktioner`,
            list2: `för att bekräfta din identitet`,
            list3: `för att utvärdera din lämplighet`,
            list4: `för de produkter och tjänster vi tillhandahåller`,
            list5: `för att upprätthålla din personliga profil`,
            list6: `för att hantera ditt konto`,
            list7: `för att kontakta dig när det är nödvändigt eller lämpligt i relation till de tjänster som tillhandahålls till dig, inklusive via en tredjeparts mailingplattform`,
            list8: `för att hålla dig uppdaterad medan du är kund i förhållande till frågor som avtal som du har handlat och aktiviteter från FXORO`,
            list9: `för att hantera och administrera de produkter och tjänster som tillhandahålls till dig`,
            list10: `för marknadsföringssyften, inklusive, men inte begränsat till att tillhandahålla information om de produkter och tjänster som erbjuds av FXORO och dess partners`,
            list11: `för att utveckla en förståelse för de produkter och tjänster som du kan vara intresserad av att få från FXORO och för att anpassa webbplatsen efter dina behov och intressen`,
            list12: `för att skapa icke-personlig statistisk data`,
            list13: `för att genomföra undersökningar och frågeformulär`,
            list14: `för att genomdriva de styrande villkoren`,
          },
          para2: `Om FXORO anser att du har brutit mot de styrande villkoren eller missbrukat dina rättigheter att använda tjänsterna eller har begått någon handling eller underlåtenhet som FXORO anser bryter mot gällande lagar, regler eller bestämmelser, kan FXORO dela din information med rättsliga myndigheter och andra behöriga myndigheter samt med andra tredje parter som kan krävas;`,
          para3: `Om FXORO är skyldigt eller anser att det är skyldigt enligt lag att dela eller lämna ut din information till finansiella myndigheter eller till någon annan tredje part;`,
          list2: {
            list1: `I vilket fall som helst i tvist, eller rättsligt förfarande av något slag mellan dig och FXORO, eller mellan dig och andra kunder eller tredje parter i förhållande till, eller i samband med de tjänster som FXORO tillhandahåller`,
            list2: `I vilket fall som helst där FXORO anser att delning av information är nödvändigt för att förhindra omedelbar fysisk skada eller skada på egendom`,
            list3: `Om FXORO organiserar driften av sina tjänster inom en annan ram eller genom en annan juridisk struktur eller enhet, eller om FXORO förvärvas av eller slås samman med en annan enhet, under förutsättning att dessa enheter samtycker till att vara bundna av bestämmelserna i denna policy samt konfidentiella avtal`,
          },
        },
        sectionOptOut: {
          title: `Val och avregistrering`,
          para1: `I registreringsprocessen med FXORO som klient kommer du att få möjlighet att avregistrera dig från prenumeration på följande ytterligare tjänster:`,
          list: {
            list1: `Marknadsföringstjänster, som ger dig information om produkter och tjänster som erbjuds av FXORO eller dess samarbetspartners; samt möjligheter som vi tror kan vara relevanta för dig; Kundorder, samverka med FXORO`,
            list2: `Nyhetsbrev`,
            list3: `SMS (textmeddelanden)`,
            list4: `Andra elektroniska kommunikationer`,
          },
          para2: `Om du inte längre vill ta emot ovan nämnda kommunikationer kan du avregistrera dig genom att skicka ett e-postmeddelande till {complianceMail} eller till {removalMail}.`,
          para3: `E-postmeddelandet måste innehålla följande:`,
          list2: {
            list1: `Förnamn och efternamn`,
            list2: `Kontonummer (om något)`,
            list3: `E-postadressen som användes i registreringsprocessen`,
          },
        },
        sectionTransferData: {
          title: `Överföring av data till tredjeländer`,
          para1: `Personuppgifter kan överföras av FXORO till tredje parter i Europeiska ekonomiska samarbetsområdet och till länder utanför Europeiska ekonomiska samarbetsområdet för de ändamål som beskrivs i denna policy. Du ger ditt uttryckliga och otvetydiga samtycke till sådana överföringar, förutsatt att sådana överföringar alltid sker i enlighet med reglerna för dataskydd som styr våra verksamheter.`,
        },
        sectionUpdateInfo: {
          title: `Uppdatera din information`,
          para1: `Du kan informera {logoText} när som helst om att dina personuppgifter har ändrats genom att skicka ett e-postmeddelande till oss på {fxoroMail}. Vi kommer att ändra eller radera dina personuppgifter i enlighet med dina anvisningar, förutom i den utsträckning som vi är skyldiga att behålla dina personuppgifter enligt regler eller lagkrav, för att tillhandahålla dig de tjänster du har begärt eller för att behålla tillräckliga affärsregister, i vilket fall dina personuppgifter kommer att raderas efter utgången av en sådan obligatorisk period. I alla fall kan {logoText} behålla all sammanställd eller anonymiserad information för de ändamål som beskrivs i denna sekretess- och säkerhetspolicy, på obestämd tid.`,
        },
        sectionCookies: {
          title: `Cookies`,
          para1: `Cookies är små informationsfiler som ofta inkluderar ett unikt identifieringsnummer eller värde och lagras på din dators hårddisk som ett resultat av din användning av FXOROs handelsprogramvara och/eller åtkomst till FXOROs webbplatser.`,
          para2: `Vi använder både sessionscookies och permanenta cookies. En sessionscookie upphör när du stänger din webbläsare. En permanent cookie förblir på din hårddisk under en förlängd period.`,
          para3: `Vi använder en permanent cookie för statistiska ändamål. Permanent cookies gör det också möjligt för oss att spåra och rikta in oss på våra användares plats och intressen samt förbättra upplevelsen av våra tjänster på vår webbplats.`,
          para4: `Du kan ta bort permanenta cookies genom att följa anvisningar som tillhandahålls i din webbläsares "hjälp"-fil. Om du inte vill ta emot cookies alls kan du kanske ändra inställningarna i din webbläsare för att neka alla cookies eller för att få din dator meddela dig varje gång en cookie skickas till den, och därmed ge dig valet att acceptera det eller inte. Detta kan dock påverka kvaliteten på de tjänster vi tillhandahåller till dig i relation till ditt konto. Vissa permanenta cookies, som Flash-cookies, kan inte tas bort och kan inte blockeras genom att ändra inställningarna i din webbläsare.`,
          para5: `Vissa permanenta cookies tas inte bort eller blockeras av din webbläsare. Om du vill inaktivera alla cookies kan du skicka en förfrågan till {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Återmarknadsföring med Google Analytics`,
          para1: `Vi kan använda den information vi samlar in för att hjälpa oss leverera relevanta annonser till dig (återmarknadsföring). Återmarknadsföring är ett sätt för oss att koppla ihop med besökare på våra webbplatser och annonser baserat på deras tidigare interaktioner med vår webbplats och annonser. Tredjeparts marknadsföringsleverantörer kan anlitas av FXORO för att utföra sådana återmarknadsföringstjänster. Som ett resultat kan tredjepartsleverantörer, inklusive Google, visa FXOROs annonser på internetplatser. Sådana tredjepartsleverantörer, inklusive Google, kan också använda sina cookies, tredjepartscookies och liknande tekniker för att visa annonser baserade på en besökares tidigare besök på FXOROs webbplats.`,
          para2: `Du kan välja att inte delta i Google Analytics för Display-annonsörer och välja bort anpassade annonser från Google Display-nätverket genom att besöka Googles Annonser Preferenshanterare. Du uppmuntras också att besöka Googles webbläsartillägg för att välja bort Google Analytics.`,
          para3: `För ytterligare information kan du även besöka Googles sekretesscenter.`,
        },
        sectionYourRights: {
          title: `Vilka är dina rättigheter?`,
          para1: `Du behöver inte ge oss några av de personuppgifter som begärs av FXORO. Men om du inte lämnar den begärda informationen i ansökningsformuläret kan FXORO kanske inte öppna ett konto för dig, eller tillhandahålla andra tjänster, information eller hjälp som du har sökt eller utvärdera lämpligheten av den tjänst du begär.`,
        },
        sectionRightToRequest: {
          title: `Du har rätt att begära och få följande:`,
          list: {
            list1: `Information om alla dina personuppgifter som vi har och som har varit föremål för behandling samt information om hur sådana data erhölls, ändamålet med behandlingen av datan, mottagarna, de kategorier av data som har behandlats eller ska behandlas, behandlingen som har ägt rum sedan den registrerade senast uppdaterades om behandlingen och motivering bakom det automatiserade behandlingssystemet`,
            list2: `Korrigering och radering av dina personuppgifter som inte har behandlats i enlighet med tillämpliga krav på grund av brist på information eller avvikelser`,
            list3: `Meddelande till någon tredje part om några ändringar som gjorts i enlighet med (2) ovan, om detta skulle vara orimligt betungande för oss`,
          },
        },
        sectionAffiliates: {
          title: `Affiliates och Partners`,
          para1: `FXORO kan dela information med partners, Associates och tredje parter om sådan information är rimligen nödvändig för sådana Associates och tredje parter för att:`,
          list: {
            list1: `Erbjuda ytterligare liknande produkter och tjänster som uppfyller dina behov och som levereras på ett användbart och relevant sätt (endast om du har gett oss tillstånd att göra det); och/eller`,
            list2: `Tjäna kundkonton.`,
          },
          para2: `FXORO säljer inte, licensierar, hyr ut eller på annat sätt lämnar ut personlig information till tredje parter, förutom som beskrivs i detta integritetsmeddelande.`,
        },
        sectionEnforcement: {
          title: `Efterlevnad`,
          para1: `{logoText} gör sitt yttersta för att följa denna Integritets- och Säkerhetspolicy. Om du har några frågor, farhågor eller klagomål angående denna Integritets- och Säkerhetspolicy och dess efterlevnad, vänligen hänvisa dem till: {complaintsMail}. Efter att ha mottagit ditt klagomål kan {logoText} kontakta dig för att bättre förstå dina farhågor och kommer att göra allt för att snabbt besvara din fråga eller lösa ditt klagomål till din fulla belåtenhet.`,
          para2: `{logoText} har utsett en dataskyddsombud (DPO), som ansvarar för att övervaka dataskyddsstrategin och genomförandet, för att säkerställa efterlevnad av allmänna dataskyddsförordningen (GDPR). Om du har några frågor, farhågor eller klagomål angående vår dataskyddsstrategi och genomförande, vänligen hänvisa dem till: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Ändringar i policyn`,
          para1: `FXORO kan ändra och uppdatera villkoren i denna Integritets- och Säkerhetspolicy från tid till annan. Alla ändringar träder i kraft sju (7) dagar efter att de har publicerats på webbplatsen, om inte FXORO ändrar Integritets- och Säkerhetspolicyn för att följa lagstiftning eller regleringskrav. I sådana fall träder ändringarna i kraft som krävs eller beordras.`,
        },
        sectionGoverningLaw: {
          title: `Tillämplig lag`,
          para1: `För frågor som inte behandlas i denna Integritets- och Säkerhetspolicy gäller lagarna i Cypern.`,
        },
        sectionConsent: {
          title: `Samtycke`,
          para1: `Genom att fortsätta använda vår webbplats eller andra erbjudna tjänster samtycker du till insamling, behandling och användning av dina personuppgifter av FXORO.`,
        },
      },
    },
    pt: {
      seo: {
        metaTitle: "Política de Privacidade e Segurança",
        metaDescription:
          "Política de privacidade e critérios de segurança. FXORO, a corretora de negociação online onde tudo é possível.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (a seguir denominada como a empresa) comércio como "FXORO", é uma empresa de investimento regulada pela Comissão de Valores Mobiliários e Câmbio do Chipre sob a licença nº 126/10 e opera de acordo com a Lei de Serviços e Atividades de Investimento e Mercados Regulamentados do Chipre de 2017 (Lei 87(I)/2017) (a seguir denominada como a "Lei").`,
          para2: `FXORO está comprometida em proteger a privacidade de todos os dados pessoais obtidos de você, incluindo os dados que obtemos durante suas visitas aos sites do FXORO. FXORO manipula, retém e processa seus dados somente conforme o exigido pelas leis aplicáveis e apenas na medida em que seja necessário para alcançar os objetivos estabelecidos aqui.`,
          para3: `Por favor, veja a seguinte Declaração de Política de Privacidade que indica claramente como usamos seus dados pessoais, como são coletados, armazenados e processados. Ele também explica seus direitos de acordo com a lei relacionada aos seus dados pessoais.`,
          para4: `Referências neste documento a "dados pessoais" são referências a dados pessoais e dados pessoais sensíveis conforme definido na Lei de Processamento de Dados Pessoais (Proteção de Indivíduos) 138(1) de 2001, conforme alterada de tempos em tempos, bem como o Regulamento Geral de Proteção de Dados (GDPR) (UE 2016/679) e, na medida aplicável, as leis de proteção de dados ou privacidade de qualquer outro país.`,
          para5: `FXORO, nossos associados, quaisquer membros, agentes e/ou subcontratados com os quais nos envolvemos ou trabalhamos para fins de coleta, armazenamento e processamento de Dados Pessoais, e quaisquer terceiros atuando em nosso nome, podem coletar, processar, usar e armazenar Dados Pessoais fornecidos por você para fins de realização de transações e/ou outros serviços, suporte operacional e desenvolvimento de nossos ou seus negócios.`,
        },
        sectionInfoWeCollect: {
          title: `Quais informações coletamos de você?`,
          para1: `Para que o FXORO forneça serviços de investimento a seus clientes, o FXORO é obrigado a coletar, processar e reter dados pessoais de seus clientes, de acordo com os requisitos legais obrigatórios. Isso inclui, entre outros, seu nome, data de nascimento, endereço residencial, número do passaporte, endereço de e-mail, número de telefone, profissão, informações de pagamento e informações sobre sua situação financeira.`,
          para2: `Para fornecer nossos produtos e serviços, podemos coletar suas informações através de várias fontes diferentes, incluindo, mas não se limitando a:`,
          list: {
            list1: `Website e formulários`,
            list2: `Chat ao vivo no site`,
            list3: `Sistema CRM`,
            list4: `Via telefone`,
            list5: `Via e-mail`,
            list6: `Outros processadores de terceiros`,
            list7: `Provedores de serviços de terceiros`,
            list8: `Clientes existentes`,
            list9: `Parceiros, funcionários`,
          },
          para3: `O FXORO também coleta e processa informações pessoais sobre você, que são necessárias para fornecer seus serviços, conforme listado na seção "Como usamos e compartilhamos suas informações pessoalmente identificáveis?" Isso inclui informações sobre você quando você preenche um formulário de inscrição online ou outro tipo de formulário e quando você acessa e negocia através de sua conta no FXORO. Além disso, também podemos obter informações pessoais como resultado de autenticação ou verificações de identidade, incluindo verificações com agências de referência de crédito (que podem manter um registro das informações) para evitar fraudes.`,
          para4: `O FXORO também pode obter informações do uso dos sites e do software do cliente do FXORO e pode armazenar essas informações em seu perfil pessoal. Essas informações podem incluir áreas do site visitadas, páginas visualizadas, frequência e duração das visitas, endereço de Protocolo de Internet (IP), parâmetros de identificação do computador, tipos de transações realizadas, documentos baixados, cliques do mouse, movimentos do mouse, atividades de rolagem, bem como o texto que você digita neste site e qual site o referenciou para o nosso ou para quais sites você se vinculou.`,
        },
        sectionProtectPersonalInfo: {
          title: `Como protegemos suas informações pessoais`,
          para1: `No FXORO, estamos comprometidos em respeitar, proteger e manter sua privacidade e, portanto, temos muitas medidas em vigor`,
          para2: `Entre várias medidas, utilizamos salvaguardas de computador, como firewalls e criptografia de dados. Também aplicamos controles de acesso físico a nossos prédios e arquivos para manter esses dados seguros. Autorizamos o acesso apenas a funcionários que precisam para desempenhar suas responsabilidades.`,
        },
        sectionLinks: {
          title: `Links`,
          para1: `Quando você usa os sites do FXORO, pode ser possível vincular-se a outros sites. Esta Política de Privacidade e Segurança não se aplica a esses outros sites que você pode escolher vincular-se a partir do site do FXORO, e não somos responsáveis por qualquer informação pessoal coletada por terceiros através desses outros sites.`,
        },
        sectionProcessPersonalInfo: {
          title: `Processamento de informações pessoais`,
          para1: `O acesso às informações pessoais é restrito aos funcionários, parceiros, contratados e afiliados da FXORO (incluindo, sem limitações, empresas-mãe, empresas-irmãs e subsidiárias) que precisam acessar tais informações para os fins descritos nesta política. Aqueles com acesso a informações pessoais são obrigados a cumprir padrões estritos de confidencialidade ao gerenciar dados pessoais e outros.`,
        },
        sectionSecurity: {
          title: `Segurança`,
          para1: `FXORO faz esforços para manter as salvaguardas apropriadas para garantir que a segurança, integridade e privacidade dos dados e informações pessoais que você forneceu não sejam mal utilizados. Essas medidas incluem criptografia durante a transmissão de dados, mecanismos de autenticação seguros e a separação de máquinas e dados para fornecer áreas seguras. Embora tais sistemas e procedimentos reduzam o risco de violações de segurança, eles não fornecem segurança absoluta. Portanto, FXORO não pode garantir que nosso serviço estará imune a quaisquer atos ilícitos, mau funcionamento, interceptações ilegais ou acesso não autorizado às informações armazenadas, bem como a outros riscos de segurança de informações, ou que suas comunicações privadas em ou por meio de nosso serviço permanecerão privadas.`,
        },
        sectionAnonymusStatInfo: {
          title: `Como usamos e compartilhamos informações estatísticas anônimas?`,
          para1: `FXORO coleta informações estatísticas anônimas para garantir que atenda às necessidades de seus clientes. Ao coletar esses dados, FXORO é capaz de monitorar e melhorar os serviços que oferece a seus clientes existentes e potenciais. Podemos compartilhar tais informações anonimizadas com terceiros.`,
        },
        sectionIdentifiableInfo: {
          title: `Como usamos e compartilhamos suas informações pessoalmente identificáveis?`,
          para1: `FXORO pode usar suas informações pessoais e compartilhá-las com parceiros, contratados, prestadores de serviços, consultores, processadores de transações e afiliados da FXORO (incluindo empresas-mãe, empresas-irmãs e subsidiárias) (os "Parceiros") apenas para os seguintes fins e mediante seu consentimento explícito:`,
          list: {
            list1: `Fornecer os serviços que você solicitou, incluindo o processamento de transações`,
            list2: `Confirmar sua identidade`,
            list3: `Avaliar sua adequação`,
            list4: `Aos produtos e serviços que oferecemos`,
            list5: `Manter seu perfil pessoal`,
            list6: `Gerenciar sua conta`,
            list7: `Entrar em contato com você quando necessário ou apropriado em relação aos serviços prestados a você, inclusive por meio de uma plataforma de envio de terceiros`,
            list8: `Mantê-lo atualizado enquanto você é um cliente em relação a assuntos como contratos que você negociou e atividades da FXORO`,
            list9: `Gerenciar e administrar os produtos e serviços fornecidos a você`,
            list10: `Para fins de marketing, incluindo, mas não se limitando a, fornecer informações sobre os produtos e serviços oferecidos pela FXORO e seus Parceiros`,
            list11: `Desenvolver uma compreensão dos produtos e serviços que você pode estar interessado em obter da FXORO e personalizar o site de acordo com suas necessidades e interesses`,
            list12: `Criar dados estatísticos impessoais`,
            list13: `Realizar pesquisas e questionários`,
            list14: `Aplicar os termos e condições reguladores`,
          },
          para2: `Se a FXORO acreditar que você violou os termos e condições reguladores, abusou de seus direitos de usar os serviços ou praticou qualquer ato ou omissão que a FXORO acredita estar violando qualquer lei, regra ou regulamento aplicável, a FXORO pode compartilhar suas informações com agências policiais e outras autoridades competentes, bem como com outros terceiros, conforme necessário;`,
          para3: `Se a FXORO for obrigada, ou acreditar que é obrigada por lei a compartilhar ou divulgar suas informações a autoridades financeiras ou a qualquer outro terceiro;`,
          list2: {
            list1: `Em qualquer caso de disputa ou processo judicial de qualquer tipo entre você e a FXORO, ou entre você e outros clientes ou terceiros em relação aos serviços que a FXORO oferece`,
            list2: `Em qualquer caso em que a FXORO acredita que o compartilhamento de informações é necessário para evitar danos físicos iminentes ou danos à propriedade`,
            list3: `Se a FXORO organizar a operação de seus serviços em uma estrutura diferente, ou através de outra estrutura jurídica ou entidade, ou se a FXORO for adquirida ou fundida com outra entidade, desde que essas entidades concordem em cumprir as disposições desta política, bem como acordos confidenciais`,
          },
        },
        sectionOptOut: {
          title: `Escolha e cancelamento`,
          para1: `No processo de registro com FXORO como cliente, você terá a opção de cancelar a assinatura dos seguintes serviços adicionais:`,
          list: {
            list1: `Serviços de marketing, que fornecem informações sobre os produtos e serviços oferecidos por FXORO ou seus parceiros; e oportunidades que acreditamos serem relevantes para você; Pedidos de clientes, interação com FXORO`,
            list2: `Boletins informativos`,
            list3: `Mensagens SMS (texto)`,
            list4: `Outras comunicações eletrônicas`,
          },
          para2: `Se você não deseja mais receber as comunicações mencionadas acima, você pode cancelar o recebimento delas enviando um e-mail para {complianceMail} ou para {removalMail}.`,
          para3: `O e-mail precisa conter o seguinte:`,
          list2: {
            list1: `Nome e sobrenome`,
            list2: `Número da conta (se houver)`,
            list3: `O e-mail usado no processo de registro`,
          },
        },
        sectionTransferData: {
          title: `Transferência de dados para países terceiros`,
          para1: `Os dados pessoais podem ser transferidos pela FXORO para terceiros em Estados-Membros da Área Econômica Europeia, bem como para Estados-Membros da Área Econômica Europeia não pertencentes à União Europeia, para os fins descritos nesta política. Você dá seu consentimento expresso e inequívoco para tal transferência, desde que tal transferência sempre ocorra de acordo com as regulamentações de proteção de dados que regem nossas operações.`,
        },
        sectionUpdateInfo: {
          title: `Atualização de suas informações`,
          para1: `Você pode informar {logoText} a qualquer momento que seus detalhes pessoais foram alterados, enviando um e-mail para {fxoroMail}. Vamos alterar ou excluir suas informações pessoais de acordo com suas instruções, exceto na medida em que somos obrigados a manter suas informações pessoais por razões regulatórias ou legais, para fornecer os serviços que você solicitou ou para manter registros comerciais adequados, caso em que suas informações pessoais serão excluídas ao expirar esse período obrigatório. De qualquer forma, {logoText} pode manter quaisquer informações agregadas ou anonimizadas para os fins descritos nesta Política de Privacidade e Segurança, por prazo indeterminado.`,
        },
        sectionCookies: {
          title: `Cookies`,
          para1: `Cookies são pequenos arquivos de informação, que frequentemente incluem um número ou valor de identificação exclusivo, que são armazenados no disco rígido do seu computador como resultado do uso do software de negociação FXORO e/ou acesso aos sites FXORO.`,
          para2: `Usamos cookies de ID de sessão e cookies persistentes. Um cookie de ID de sessão expira quando você fecha o navegador. Um cookie persistente permanece no disco rígido por um período estendido.`,
          para3: `Definimos um cookie persistente para fins estatísticos. Cookies persistentes também nos permitem rastrear e segmentar a localização e os interesses de nossos usuários e melhorar a experiência de nossos serviços em nosso site.`,
          para4: `Você pode remover cookies persistentes seguindo as instruções fornecidas no arquivo "ajuda" do seu navegador de internet. Se você não deseja receber cookies, talvez seja possível alterar as configurações do seu navegador para recusar todos os cookies ou para receber notificações sempre que um cookie for enviado, permitindo assim que você escolha se o aceita ou não. No entanto, isso pode afetar a qualidade dos serviços que oferecemos a você em relação à sua conta. Alguns cookies persistentes, como cookies Flash, não podem ser removidos e não podem ser bloqueados alterando as configurações do seu navegador.`,
          para5: `Alguns cookies persistentes não serão removidos ou bloqueados pelo seu navegador de internet. Se você deseja desabilitar todos os cookies, por favor envie uma solicitação para {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Remarketing com o Google Analytics`,
          para1: `Podemos usar as informações que coletamos para nos ajudar a exibir anúncios relevantes para você (Remarketing). O Remarketing é uma forma de nos conectarmos com os visitantes de nossos sites e anúncios, com base em suas interações anteriores com nosso site e anúncios. Podemos contratar fornecedores de marketing de terceiros, incluindo o Google, para realizar esses serviços de Remarketing. Como resultado, esses fornecedores de terceiros, incluindo o Google, podem exibir anúncios da FXORO em sites da internet. Esses fornecedores de terceiros, incluindo o Google, também podem usar seus próprios cookies e tecnologias similares para exibir anúncios com base em visitas anteriores de um visitante ao site da FXORO.`,
          para2: `Você pode optar por não participar do Google Analytics para Anunciantes da Rede de Display e optar por não receber anúncios personalizados da Rede de Display do Google, visitando o Gerenciador de Preferências de Anúncios do Google. Você também é incentivado a visitar o Complemento de Desativação do Google Analytics.`,
          para3: `Para mais informações, você também pode visitar o centro de privacidade do Google.`,
        },
        sectionYourRights: {
          title: `Quais são os seus direitos?`,
          para1: `Você não é obrigado a nos fornecer nenhum dos dados pessoais solicitados pela FXORO. No entanto, sem fornecer as informações solicitadas no formulário de inscrição, a FXORO pode não ser capaz de abrir uma conta para você ou fornecer outros serviços, informações ou assistência que você procurou ou avaliar a adequação do serviço que você está solicitando.`,
        },
        sectionRightToRequest: {
          title: `Você tem o direito de solicitar e receber o seguinte:`,
          list: {
            list1: `Informações sobre todos os seus Dados Pessoais que possuímos e que foram objeto de processamento, bem como informações sobre como esses dados foram obtidos, a finalidade para a qual os dados são processados, os destinatários, as categorias de dados processados ou a serem processados, o processamento que ocorreu desde a última atualização do titular dos dados em relação ao processamento e a lógica por trás do sistema de processamento automatizado`,
            list2: `Qualquer correção e exclusão de seus Dados Pessoais que não tenha sido processada de acordo com os requisitos aplicáveis ​​devido a falta de informações ou discrepâncias`,
            list3: `Qualquer notificação feita a qualquer terceiro sobre quaisquer alterações feitas de acordo com (2) acima, a menos que isso seja desproporcionalmente oneroso para nós`,
          },
        },
        sectionAffiliates: {
          title: `Afiliados e Parceiros`,
          para1: `FXORO pode compartilhar informações com parceiros, Associados e Terceiros caso tais informações sejam razoavelmente necessárias por tais Associados e Terceiros para:`,
          list: {
            list1: `Oferecer produtos e serviços adicionais semelhantes que atendam às suas necessidades e que sejam entregues de maneira útil e relevante (somente quando você nos autorizar a fazê-lo); e/ou`,
            list2: `Atender contas de clientes.`,
          },
          para2: `FXORO não vende, licencia, aluga ou divulga informações pessoais para terceiros, exceto conforme descrito nesta Declaração de Privacidade.`,
        },
        sectionEnforcement: {
          title: `Cumprimento`,
          para1: `{logoText} está fazendo o máximo para cumprir esta Política de Privacidade e Segurança. Se você tiver alguma dúvida, preocupação ou reclamação sobre esta Política de Privacidade e Segurança e seu cumprimento, por favor encaminhe-os para: {complaintsMail}. Após receber sua reclamação, {logoText} poderá entrar em contato com você para entender melhor suas preocupações e fará todos os esforços para responder prontamente a sua pergunta ou resolver sua reclamação de forma satisfatória.`,
          para2: `{logoText} designou um encarregado de proteção de dados (DPO), que é responsável por supervisionar a estratégia e implementação de proteção de dados, para garantir o cumprimento do Regulamento Geral de Proteção de Dados (GDPR). Se você tiver alguma dúvida, preocupação ou reclamação sobre nossa estratégia e implementação de proteção de dados, por favor encaminhe-os para: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Alterações na política`,
          para1: `FXORO poderá alterar e atualizar os termos desta Política de Privacidade e Segurança de tempos em tempos. Todas as alterações entrarão em vigor sete (7) dias após sua publicação inicial no site, a menos que FXORO altere a Política de Privacidade e Segurança para cumprir requisitos legais ou regulamentares. Nesses casos, as alterações entrarão em vigor conforme exigido ou ordenado.`,
        },
        sectionGoverningLaw: {
          title: `Lei aplicável`,
          para1: `Em relação a questões não tratadas nesta Política de Privacidade e Segurança, a lei de Chipre se aplicará.`,
        },
        sectionConsent: {
          title: `Consentimento`,
          para1: `Ao continuar a usar nosso site ou outros serviços oferecidos, você concorda com a coleta, processamento e uso de seus dados pessoais por FXORO.`,
        },
      },
    },
    fi: {},
    pl: {},
    hu: {},
    th: {},
    ms: {},
    vi: {
      seo: {
        metaTitle: "Chính sách Bảo mật và An ninh",
        metaDescription:
          "Chính sách bảo mật và tiêu chí an ninh. FXORO, nhà môi giới giao dịch trực tuyến thông qua đó mọi thứ đều có thể thực hiện.",
      },
      contentPASP: {
        sectionTop: {
          para1: `MCA INTELIFUNDS LTD, (sau đây gọi là công ty) kinh doanh dưới tên gọi “FXORO”, là một công ty đầu tư được quy định bởi Ủy ban Chứng khoán và Trao đổi Síp dưới giấy phép số 126/10 và hoạt động theo Đạo luật Dịch vụ và Hoạt động Đầu tư và Thị trường Síp năm 2017 (Đạo luật 87(I)/2017)(sau đây gọi là "Đạo luật").`,
          para2: `FXORO cam kết bảo vệ quyền riêng tư của tất cả dữ liệu cá nhân thu thập từ bạn, bao gồm dữ liệu chúng tôi thu thập trong lúc bạn truy cập vào trang web của FXORO. FXORO xử lý, lưu giữ và xử lý dữ liệu của bạn chỉ trong phạm vi phù hợp với các yêu cầu pháp lý hiện hành và chỉ khi cần thiết để đạt được các mục đích đã nêu trong tài liệu này.`,
          para3: `Vui lòng xem Bản Tuyên bố Chính sách Bảo mật dưới đây để hiểu rõ cách chúng tôi sử dụng dữ liệu cá nhân của bạn, cách thu thập, lưu trữ và xử lý dữ liệu. Bản tuyên bố cũng giải thích quyền của bạn liên quan đến dữ liệu cá nhân theo luật pháp.`,
          para4: `Các tham chiếu trong tài liệu này đến "dữ liệu cá nhân" đề cập đến dữ liệu cá nhân và dữ liệu cá nhân nhạy cảm theo định nghĩa trong Đạo luật Xử lý Dữ liệu Cá nhân (Bảo vệ Cá nhân) Síp số 138(1) năm 2001 đã được sửa đổi từ thời điểm này đến thời điểm khác, cũng như Nghị định Bảo vệ Dữ liệu Chung (GDPR) (EU 2016/679) và các luật bảo vệ dữ liệu hoặc quy định riêng tư áp dụng tại bất kỳ quốc gia nào khác.`,
          para5: `FXORO, các đối tác của chúng tôi, bất kỳ thành viên, đại lý và/hoặc nhà thầu phụ mà chúng tôi hợp tác hoặc làm việc thông qua mục đích thu thập, lưu trữ và xử lý Dữ liệu Cá nhân và bất kỳ bên thứ ba nào hành động thay mặt chúng tôi, có thể thu thập, xử lý, sử dụng và lưu trữ Dữ liệu Cá nhân mà bạn cung cấp cho mục đích thực hiện các giao dịch và/hoặc các dịch vụ khác, hỗ trợ vận hành và phát triển kinh doanh của chúng tôi hoặc của họ.`,
        },
        sectionInfoWeCollect: {
          title: `Chúng tôi thu thập thông tin gì từ bạn?`,
          para1: `Để cung cấp dịch vụ đầu tư cho khách hàng của FXORO, FXORO cần thu thập, xử lý và lưu giữ dữ liệu cá nhân của khách hàng theo các yêu cầu pháp lý bắt buộc. Điều này bao gồm, trong số những điều khác, tên của bạn, ngày sinh, địa chỉ cư trú, số hộ chiếu, địa chỉ email, số điện thoại, nghề nghiệp, thông tin thanh toán và thông tin về tình trạng tài chính của bạn.`,
          para2: `Để cung cấp các sản phẩm và dịch vụ của chúng tôi, chúng tôi có thể thu thập thông tin của bạn thông qua nhiều nguồn khác nhau, bao gồm nhưng không giới hạn vào:`,
          list: {
            list1: `Trang web và biểu mẫu`,
            list2: `Trò chuyện trực tiếp trên trang web`,
            list3: `Hệ thống CRM`,
            list4: `Thông qua điện thoại`,
            list5: `Thông qua email`,
            list6: `Các bộ xử lý của bên thứ ba khác`,
            list7: `Nhà cung cấp dịch vụ của bên thứ ba`,
            list8: `Khách hàng hiện tại`,
            list9: `Đối tác, Nhân viên`,
          },
          para3: `FXORO cũng thu thập và xử lý thông tin cá nhân về bạn, điều này là cần thiết để cung cấp dịch vụ cho bạn, như đã liệt kê dưới đây trong phần "Chúng tôi sử dụng và chia sẻ thông tin cá nhân có thể nhận dạng được của bạn như thế nào?" Điều này bao gồm thông tin về bạn khi bạn hoàn thành đơn đăng ký trực tuyến hoặc một loại biểu mẫu khác và khi bạn truy cập và thực hiện giao dịch thông qua tài khoản của FXORO. Ngoài ra, chúng tôi cũng có thể thu thập thông tin cá nhân như kết quả của việc xác thực hoặc kiểm tra danh tính, bao gồm việc kiểm tra với các cơ quan tham chiếu tín dụng (có thể lưu trữ thông tin) để ngăn chặn gian lận.`,
          para4: `FXORO cũng có thể thu thập thông tin từ việc sử dụng trang web và phần mềm khách hàng của FXORO và có thể lưu trữ thông tin này kèm với hồ sơ cá nhân của bạn. Thông tin này có thể bao gồm các khu vực trang web đã truy cập, các trang đã xem, tần suất và thời gian kéo dài của các lần truy cập, địa chỉ Giao thức Internet (IP), các thông số nhận dạng máy tính, loại giao dịch thực hiện, tài liệu đã tải xuống, các lần nhấp chuột, các chuyển động chuột, hoạt động cuộn trang cũng như văn bản mà bạn gõ vào trang web này và trang web nào đã giới thiệu bạn đến trang web của chúng tôi hoặc trang web bạn liên kết đến.`,
        },
        sectionProtectPersonalInfo: {
          title: `Chúng tôi bảo vệ thông tin cá nhân của bạn như thế nào`,
          para1: `Tại FXORO, chúng tôi cam kết tôn trọng, bảo vệ và duy trì quyền riêng tư của bạn và do đó, chúng tôi đã thiết lập nhiều biện pháp`,
          para2: `Trong số rất nhiều biện pháp, chúng tôi sử dụng các biện pháp bảo vệ máy tính như tường lửa và mã hóa dữ liệu. Chúng tôi cũng áp dụng các biện pháp kiểm soát truy cập vật lý cho tòa nhà và tệp của chúng tôi để bảo vệ dữ liệu này. Chúng tôi chỉ ủy quyền truy cập cho nhân viên cần thiết để thực hiện trách nhiệm của họ.`,
        },
        sectionLinks: {
          title: `Liên kết`,
          para1: `Khi bạn sử dụng trang web của FXORO, bạn có thể liên kết đến các trang web khác. Chính sách Bảo mật & An ninh này không áp dụng cho những trang web khác mà bạn có thể chọn liên kết từ trang web của FXORO, và chúng tôi không chịu trách nhiệm đối với bất kỳ thông tin cá nhân nào được thu thập bởi bên thứ ba thông qua những trang web khác đó.`,
        },
        sectionProcessPersonalInfo: {
          title: `Xử lý thông tin cá nhân`,
          para1: `Quyền truy cập vào thông tin cá nhân bị hạn chế chỉ cho những nhân viên, đối tác, nhà thầu và liên kết của FXORO (bao gồm mà không giới hạn, các công ty mẹ, công ty chị em và công ty con) cần truy cập vào thông tin đó cho các mục đích đã mô tả trong chính sách này. Những người có quyền truy cập vào thông tin cá nhân phải tuân thủ các tiêu chuẩn nghiêm ngặt về bảo mật khi quản lý thông tin cá nhân và thông tin khác.`,
        },
        sectionSecurity: {
          title: `Bảo mật`,
          para1: `FXORO nỗ lực duy trì các biện pháp bảo vệ phù hợp nhằm đảm bảo an toàn, tính toàn vẹn và quyền riêng tư của dữ liệu và thông tin cá nhân mà bạn đã cung cấp không bị lạm dụng. Những biện pháp và cơ chế bảo vệ bao gồm mã hóa trong quá trình truyền dữ liệu, cơ chế xác thực mạnh mẽ và việc tách máy và dữ liệu để tạo ra các khu vực an toàn. Mặc dù các hệ thống và thủ tục này giúp giảm nguy cơ xâm nhập an ninh, nhưng chúng không đảm bảo an toàn tuyệt đối. Do đó, FXORO không thể đảm bảo rằng dịch vụ của chúng tôi sẽ không bị tác động xấu, hỏng hóc, đánh cắp trái phép hoặc truy cập trái phép vào thông tin được lưu trữ trong đó và vào các rủi ro an ninh thông tin khác, hoặc rằng các cuộc trò chuyện riêng tư của bạn trên dịch vụ của chúng tôi sẽ duy trì tính riêng tư.`,
        },
        sectionAnonymusStatInfo: {
          title: `Cách chúng tôi sử dụng và chia sẻ thông tin thống kê vô danh`,
          para1: `FXORO thu thập thông tin thống kê vô danh để đảm bảo rằng nó đáp ứng nhu cầu của khách hàng. Bằng cách thu thập dữ liệu như vậy, FXORO có thể giám sát và cải thiện các dịch vụ mà nó cung cấp cho khách hàng hiện tại và tiềm năng. Chúng tôi có thể chia sẻ thông tin vô danh này với bên thứ ba.`,
        },
        sectionIdentifiableInfo: {
          title: `Cách chúng tôi sử dụng và chia sẻ thông tin cá nhân có thể xác định của bạn`,
          para1: `FXORO có thể sử dụng thông tin cá nhân của bạn và chia sẻ nó với đối tác, nhà thầu, nhà cung cấp dịch vụ, cố vấn, nhà xử lý giao dịch và liên kết của FXORO (bao gồm các công ty mẹ, công ty chị em và công ty con) (gọi chung là "Đối tác") chỉ cho các mục đích sau đây và sau khi bạn đã đồng ý rõ ràng:`,
          list: {
            list1: `cung cấp cho bạn các dịch vụ mà bạn đã yêu cầu bao gồm xử lý các giao dịch`,
            list2: `xác nhận danh tính của bạn`,
            list3: `đánh giá tính phù hợp của bạn`,
            list4: `đối với các sản phẩm và dịch vụ mà chúng tôi cung cấp`,
            list5: `duy trì hồ sơ cá nhân của bạn`,
            list6: `quản lý tài khoản của bạn`,
            list7: `liên hệ với bạn khi cần thiết hoặc thích hợp liên quan đến các dịch vụ được cung cấp cho bạn, bao gồm thông qua một nền tảng gửi thư của bên thứ ba`,
            list8: `cập nhật cho bạn trong thời gian bạn là khách hàng liên quan đến các vấn đề như các hợp đồng mà bạn đã giao dịch và các hoạt động của FXORO`,
            list9: `quản lý và điều hành các sản phẩm và dịch vụ được cung cấp cho bạn`,
            list10: `cho mục đích marketing, bao gồm, nhưng không giới hạn, cung cấp thông tin về các sản phẩm và dịch vụ được cung cấp bởi FXORO và Đối tác của nó`,
            list11: `phát triển hiểu biết về các sản phẩm và dịch vụ mà bạn có thể quan tâm đến từ FXORO và tùy chỉnh trang web theo nhu cầu và sở thích của bạn`,
            list12: `tạo dữ liệu thống kê không rõ danh`,
            list13: `tiến hành cuộc thăm dò và bảng câu hỏi`,
            list14: `thực thi các điều khoản và điều kiện quản lý`,
          },
          para2: `Nếu FXORO tin rằng bạn đã vi phạm các điều khoản và điều kiện quản lý hoặc lạm dụng quyền sử dụng dịch vụ, hoặc thực hiện bất kỳ hành động hoặc bất cứ điều gì mà FXORO cho rằng vi phạm bất kỳ luật, quy tắc hoặc quy định pháp lý hiện hành, thì FXORO có thể chia sẻ thông tin của bạn với các cơ quan thực thi pháp luật và các cơ quan có thẩm quyền khác cũng như với bên thứ ba khác, nếu cần;`,
          para3: `Nếu FXORO được yêu cầu, hoặc tin rằng nó được yêu cầu theo luật pháp để chia sẻ hoặc tiết lộ thông tin của bạn cho các cơ quan tài chính hoặc bất kỳ bên thứ ba nào khác;`,
          list2: {
            list1: `Trong bất kỳ trường hợp tranh chấp hoặc thủ tục pháp lý nào giữa bạn và FXORO, hoặc giữa bạn và các khách hàng khác hoặc bên thứ ba liên quan đến, hoặc liên quan đến các dịch vụ mà FXORO cung cấp`,
            list2: `Trong bất kỳ trường hợp nào mà FXORO tin rằng việc chia sẻ thông tin là cần thiết để ngăn ngừa thiệt hại vật chất sắp xảy ra hoặc gây thiệt hại cho tài sản`,
            list3: `Nếu FXORO tổ chức hoạt động của dịch vụ trong một cơ cấu khung khác, hoặc thông qua một cơ cấu hình pháp lý hoặc thực thể khác, hoặc nếu FXORO được mua lại hoặc sáp nhập với một thực thể khác, tuy nhiên, các thực thể này đồng ý tuân thủ các điều khoản của chính sách này cũng như các thỏa thuận bảo mật`,
          },
        },
        sectionOptOut: {
          title: `Lựa chọn và hủy đăng ký`,
          para1: `Trong quá trình đăng ký với FXORO như một khách hàng, bạn sẽ được cung cấp tùy chọn để hủy đăng ký các dịch vụ bổ sung sau đây:`,
          list: {
            list1: `Dịch vụ tiếp thị, cung cấp thông tin về các sản phẩm và dịch vụ được cung cấp bởi FXORO hoặc các đối tác của nó; và cơ hội mà chúng tôi tin rằng có thể phù hợp với bạn; Đơn hàng của khách hàng, liên hệ với FXORO`,
            list2: `Bản tin`,
            list3: `Tin nhắn SMS (văn bản)`,
            list4: `Các cuộc liên lạc điện tử khác`,
          },
          para2: `Nếu bạn không muốn nhận các thông tin liên quan trên, bạn có thể hủy đăng ký nhận chúng bằng cách gửi email đến địa chỉ {complianceMail} hoặc {removalMail}.`,
          para3: `Email cần chứa các thông tin sau:`,
          list2: {
            list1: `Tên và họ`,
            list2: `Số tài khoản (nếu có)`,
            list3: `Địa chỉ email được sử dụng trong quá trình đăng ký`,
          },
        },
        sectionTransferData: {
          title: `Chuyển dữ liệu đến các quốc gia thứ ba`,
          para1: `Dữ liệu cá nhân có thể được chuyển bởi FXORO cho bên thứ ba ở các quốc gia thành viên Khu vực Kinh tế châu Âu cũng như các quốc gia không thuộc Khu vực Kinh tế châu Âu cho các mục đích mô tả trong chính sách này. Bằng cách đồng ý và không gian giữ việc chuyển, áp dụng luôn cho việc chuyển dữ liệu này các quy định về bảo vệ dữ liệu điều hành hoạt động của chúng tôi.`,
        },
        sectionUpdateInfo: {
          title: `Cập nhật thông tin của bạn`,
          para1: `Bạn có thể thông báo cho {logoText} bất kỳ lúc nào nếu thông tin cá nhân của bạn đã thay đổi bằng cách gửi email cho chúng tôi tại {fxoroMail}. Chúng tôi sẽ thay đổi hoặc xóa thông tin cá nhân của bạn theo hướng dẫn của bạn, trừ trường hợp chúng tôi được yêu cầu giữ thông tin cá nhân của bạn cho mục đích quy định hoặc pháp lý, cung cấp cho bạn các dịch vụ mà bạn đã yêu cầu hoặc duy trì hồ sơ kinh doanh đủ, trong trường hợp đó thông tin cá nhân của bạn sẽ bị xóa sau khi hết thời gian bắt buộc như vậy. Trong bất kỳ trường hợp nào, {logoText} có thể giữ lại bất kỳ thông tin được tổng hợp hoặc ẩn danh nào cho các mục đích mô tả trong Chính sách Bảo mật và Bảo mật này, mãi mãi.`,
        },
        sectionCookies: {
          title: `Cookies`,
          para1: `Cookies là các tệp tin nhỏ chứa thông tin, thường bao gồm một số nhận dạng duy nhất hoặc giá trị, được lưu trữ trên ổ cứng máy tính của bạn sau khi bạn sử dụng phần mềm giao dịch FXORO và/hoặc truy cập vào các trang web của FXORO.`,
          para2: `Chúng tôi sử dụng cả cookie ID phiên và cookie cố định. Cookie ID phiên hết hạn khi bạn đóng trình duyệt của mình. Cookie cố định vẫn tồn tại trên ổ cứng của bạn trong một khoảng thời gian kéo dài.`,
          para3: `Chúng tôi thiết lập một cookie cố định cho mục đích thống kê. Cookie cố định cũng cho phép chúng tôi theo dõi và nhắm mục tiêu địa điểm và sở thích của người dùng và cải thiện trải nghiệm dịch vụ trên trang web của chúng tôi.`,
          para4: `Bạn có thể xóa cookie cố định bằng cách làm theo hướng dẫn được cung cấp trong "trợ giúp" của trình duyệt Internet. Nếu bạn không muốn nhận cookies hoàn toàn, bạn có thể thay đổi cài đặt của trình duyệt để từ chối tất cả cookies hoặc để cho máy tính thông báo cho bạn mỗi lần có một cookie được gửi đến, và từ đó cho bạn lựa chọn xem liệu có chấp nhận nó hay không. Tuy nhiên, điều này có thể làm giảm chất lượng các dịch vụ mà chúng tôi cung cấp cho bạn liên quan đến tài khoản của bạn. Một số cookie cố định, chẳng hạn như cookie Flash, không thể được xóa và không thể bị chặn bằng cách thay đổi cài đặt trình duyệt của bạn.`,
          para5: `Một số cookie cố định sẽ không được xóa hoặc chặn bởi trình duyệt Internet của bạn. Nếu bạn muốn tắt tất cả cookie, hãy gửi yêu cầu đến {fxoroMail}.`,
        },
        sectionRemarketing: {
          title: `Remarketing với Google Analytics`,
          para1: `Chúng tôi có thể sử dụng thông tin mà chúng tôi thu thập để giúp chúng tôi cung cấp quảng cáo phù hợp cho bạn (Remarketing). Remarketing là một cách để chúng tôi kết nối với khách truy cập vào trang web và quảng cáo của chúng tôi, dựa trên các tương tác trước đó của họ với trang web và quảng cáo của chúng tôi. Các nhà cung cấp tiếp thị bên thứ ba có thể được thuê bởi FXORO để thực hiện các dịch vụ remarketing như vậy. Do đó, các nhà cung cấp bên thứ ba, bao gồm Google, có thể hiển thị quảng cáo của FXORO trên các trang web internet. Các nhà cung cấp bên thứ ba, bao gồm Google, cũng có thể sử dụng cookie của họ, cookie bên thứ ba và các công nghệ tương tự để phục vụ quảng cáo dựa trên các lần truy cập trước đó của người dùng đến trang web của FXORO.`,
          para2: `Bạn có thể chọn không tham gia Google Analytics cho Nhà quảng cáo Hiển thị và không tham gia quảng cáo Mạng Hiển thị Google tùy chỉnh bằng cách truy cập Trình quản lý Ưu tiên quảng cáo của Google. Bạn cũng được khuyến khích truy cập Tiện ích Bổ trợ Trình duyệt Tắt Google Analytics.`,
          para3: `Để biết thêm thông tin, bạn cũng có thể truy cập Trung tâm quyền riêng tư của Google.`,
        },
        sectionYourRights: {
          title: `Quyền của bạn là gì?`,
          para1: `Bạn không bắt buộc phải cung cấp cho chúng tôi bất kỳ thông tin cá nhân nào được yêu cầu bởi FXORO. Tuy nhiên, nếu không cung cấp thông tin yêu cầu trong biểu mẫu đăng ký, FXORO có thể không thể mở tài khoản cho bạn hoặc cung cấp cho bạn bất kỳ dịch vụ, thông tin hoặc hỗ trợ nào mà bạn đã yêu cầu hoặc đánh giá tính thích hợp của dịch vụ bạn đang yêu cầu.`,
        },
        sectionRightToRequest: {
          title: `Bạn có quyền yêu cầu và được cung cấp những thông tin sau đây:`,
          list: {
            list1: `Thông tin về tất cả Dữ liệu Cá nhân của bạn mà chúng tôi giữ và đã được xử lý cũng như thông tin về cách mà dữ liệu đó được thu thập, mục đích cho việc xử lý dữ liệu, người nhận, các danh mục dữ liệu đã được xử lý hoặc sẽ được xử lý, quá trình xử lý đã diễn ra kể từ khi chủ thể dữ liệu được cập nhật cuối cùng liên quan đến việc xử lý và cơ sở hợp lý đằng sau hệ thống xử lý tự động`,
            list2: `Bất kỳ sửa chữa và xóa Dữ liệu Cá nhân của bạn mà chưa được xử lý theo yêu cầu áp dụng do thiếu thông tin hoặc không khớp`,
            list3: `Bất kỳ thông báo nào được thực hiện cho bất kỳ bên thứ ba nào về bất kỳ sửa đổi nào được thực hiện theo (2) trên, trừ khi điều này gây gánh nặng không cân xứng cho chúng tôi`,
          },
        },
        sectionAffiliates: {
          title: `Đối tác và Đối tác liên kết`,
          para1: `FXORO có thể chia sẻ thông tin với các đối tác, Cộng sự và Bên thứ ba trong trường hợp thông tin đó được yêu cầu hợp lý bởi các đối tác và bên thứ ba đó để:`,
          list: {
            list1: `Cung cấp thêm các sản phẩm và dịch vụ tương tự phù hợp với nhu cầu của bạn và được cung cấp một cách hữu ích và liên quan (chỉ khi bạn đã cho phép chúng tôi làm như vậy); và/hoặc`,
            list2: `Phục vụ tài khoản khách hàng.`,
          },
          para2: `FXORO không bán, cấp phép, cho thuê hoặc tiết lộ thông tin cá nhân cho bên thứ ba, trừ khi được mô tả trong Tuyên bố Bảo mật này.`,
        },
        sectionEnforcement: {
          title: `Thực thi`,
          para1: `{logoText} đang nỗ lực tối đa để tuân thủ Chính sách Bảo mật và Bảo mật này. Nếu bạn có bất kỳ câu hỏi, quan ngại hoặc khiếu nại liên quan đến Chính sách Bảo mật và Bảo mật này và việc thực thi chúng, xin vui lòng gửi chúng đến: {complaintsMail}. Sau khi nhận được khiếu nại của bạn, {logoText} có thể liên hệ bạn để hiểu rõ hơn về mối quan ngại của bạn và sẽ nỗ lực trả lời câu hỏi của bạn hoặc giải quyết khiếu nại của bạn đến đầy đủ sự hài lòng.`,
          para2: `{logoText} đã bổ nhiệm một ủy viên bảo vệ dữ liệu (DPO), người chịu trách nhiệm giám sát chiến lược và triển khai bảo vệ dữ liệu, nhằm đảm bảo tuân thủ Quy định chung về bảo vệ dữ liệu (GDPR). Nếu bạn có bất kỳ câu hỏi, quan ngại hoặc khiếu nại liên quan đến chiến lược và triển khai bảo vệ dữ liệu của chúng tôi, xin vui lòng gửi chúng đến: {dpoMail}.`,
        },
        sectionAmendments: {
          title: `Các sửa đổi về chính sách`,
          para1: `FXORO có thể thay đổi và cập nhật các điều khoản trong Chính sách Bảo mật và Bảo mật này từ thời gian này. Tất cả các thay đổi sẽ có hiệu lực sau bảy (7) ngày kể từ khi được đăng lên Trang web, trừ khi FXORO sửa đổi Chính sách Bảo mật và Bảo mật để tuân thủ yêu cầu pháp lý hoặc quy định. Trong trường hợp này, các sửa đổi sẽ có hiệu lực theo yêu cầu hoặc quy định.`,
        },
        sectionGoverningLaw: {
          title: `Luật điều hành`,
          para1: `Đối với các vấn đề không được đề cập trong Chính sách Bảo mật và Bảo mật hiện tại, luật của Cộng hòa Síp sẽ áp dụng.`,
        },
        sectionConsent: {
          title: `Sự đồng ý`,
          para1: `Bằng cách tiếp tục sử dụng trang web hoặc các dịch vụ khác được cung cấp, bạn đồng ý với việc thu thập, xử lý và sử dụng dữ liệu cá nhân của bạn bởi FXORO.`,
        },
      },
    },
  },
});

// TODO: make a composable
const url = useRequestURL();
const currentUrl = url.href; // https://example.com:3000/hello-world
const protocol = url.protocol; // https:
const host = url.host; // example.com:3000
const hostname = url.hostname; // example.com
const pathname = url.pathname; // /hello-world.

/**
 * seo
 */
useSeoMeta({
  title: `${t("seo.metaTitle")} | FXORO`,
  description: t("seo.metaDescription"),
  ogTitle: `${t("seo.metaTitle")} | FXORO`,
  ogDescription: t("seo.metaDescription"),
  twitterTitle: `${t("seo.metaTitle")} | FXORO`,
  twitterDescription: t("seo.metaDescription"),
});
useCheckLang();

useHead({
  link: [
    { rel: "preconnect", href: `${protocol}//${host}${pathname}` },
    { rel: "dns-prefetch", href: `${protocol}//${host}${pathname}` },
  ],
});

/**
 * logic
 */
</script>
<template>
  <section id="section1-privacyAndSecurityPolicy" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 v-html="t('seo.metaTitle')" tabindex="0" />
          <div class="privacyAndSecurityPolicy-sectionTop">
            <p v-html="t('contentPASP.sectionTop.para1')" tabindex="0" />
            <p v-html="t('contentPASP.sectionTop.para2')" tabindex="0" />
            <p v-html="t('contentPASP.sectionTop.para3')" tabindex="0" />
            <p v-html="t('contentPASP.sectionTop.para4')" tabindex="0" />
            <p v-html="t('contentPASP.sectionTop.para5')" tabindex="0" />
          </div>
          <div class="privacyAndSecurityPolicy-sectionInfoWeCollect">
            <h2
              v-html="t('contentPASP.sectionInfoWeCollect.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionInfoWeCollect.para1')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionInfoWeCollect.para2')"
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 9"
                v-html="t(`contentPASP.sectionInfoWeCollect.list.list${nr}`)"
                tabindex="0"
              />
            </ul>
            <p
              v-html="t('contentPASP.sectionInfoWeCollect.para3')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionInfoWeCollect.para4')"
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionProtectPersonalInfo">
            <h2
              v-html="t('contentPASP.sectionProtectPersonalInfo.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionProtectPersonalInfo.para1')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionProtectPersonalInfo.para2')"
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionLinks">
            <h2 v-html="t('contentPASP.sectionLinks.title')" tabindex="0" />
            <p v-html="t('contentPASP.sectionLinks.para1')" tabindex="0" />
          </div>
          <div class="privacyAndSecurityPolicy-sectionProcessPersonalInfo">
            <h2
              v-html="t('contentPASP.sectionProcessPersonalInfo.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionProcessPersonalInfo.para1')"
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionSecurity">
            <h2 v-html="t('contentPASP.sectionSecurity.title')" tabindex="0" />
            <p v-html="t('contentPASP.sectionSecurity.para1')" tabindex="0" />
          </div>
          <div class="privacyAndSecurityPolicy-sectionAnonymusStatInfo">
            <h2
              v-html="t('contentPASP.sectionAnonymusStatInfo.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionAnonymusStatInfo.para1')"
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionIdentifiableInfo">
            <h2
              v-html="t('contentPASP.sectionIdentifiableInfo.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionIdentifiableInfo.para1')"
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 14"
                v-html="t(`contentPASP.sectionIdentifiableInfo.list.list${nr}`)"
                tabindex="0"
              />
            </ul>
            <p
              v-html="t('contentPASP.sectionIdentifiableInfo.para2')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionIdentifiableInfo.para3')"
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 3"
                v-html="
                  t(`contentPASP.sectionIdentifiableInfo.list2.list${nr}`)
                "
                tabindex="0"
              />
            </ul>
          </div>
          <div class="privacyAndSecurityPolicy-sectionOptOut">
            <h2 v-html="t('contentPASP.sectionOptOut.title')" tabindex="0" />
            <p v-html="t('contentPASP.sectionOptOut.para1')" tabindex="0" />
            <ul>
              <li
                v-for="nr in 4"
                v-html="t(`contentPASP.sectionOptOut.list.list${nr}`)"
                tabindex="0"
              />
            </ul>
            <i18n-t
              keypath="contentPASP.sectionOptOut.para2"
              tag="p"
              scope="global"
              tabindex="0"
            >
              <template #complianceMail>
                <NuxtLink to="mailto:compliance@fxoro.com"
                  >compliance@fxoro.com</NuxtLink
                >
              </template>
              <template #removalMail>
                <NuxtLink to="mailto:removal@fxoro.com"
                  >removal@fxoro.com</NuxtLink
                >
              </template>
            </i18n-t>
            <p v-html="t('contentPASP.sectionOptOut.para3')" tabindex="0" />
            <ul>
              <li
                v-for="nr in 3"
                v-html="t(`contentPASP.sectionOptOut.list2.list${nr}`)"
                tabindex="0"
              />
            </ul>
          </div>
          <div class="privacyAndSecurityPolicy-sectionTransferData">
            <h2
              v-html="t('contentPASP.sectionTransferData.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionTransferData.para1')"
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionUpdateInfo">
            <h2
              v-html="t('contentPASP.sectionUpdateInfo.title')"
              tabindex="0"
            />
            <i18n-t
              keypath="contentPASP.sectionUpdateInfo.para1"
              tag="p"
              scope="global"
              tabindex="0"
            >
              <template #fxoroMail>
                <NuxtLink to="mailto:cs@fxoro.com">cs@fxoro.com</NuxtLink>
              </template>
              <template #logoText> FXORO </template>
            </i18n-t>
          </div>
          <div class="privacyAndSecurityPolicy-sectionCookies">
            <h2 v-html="t('contentPASP.sectionCookies.title')" tabindex="0" />
            <p v-html="t('contentPASP.sectionCookies.para1')" tabindex="0" />
            <p v-html="t('contentPASP.sectionCookies.para2')" tabindex="0" />
            <p v-html="t('contentPASP.sectionCookies.para3')" tabindex="0" />
            <p v-html="t('contentPASP.sectionCookies.para4')" tabindex="0" />
            <i18n-t
              keypath="contentPASP.sectionCookies.para5"
              tag="p"
              scope="global"
              tabindex="0"
            >
              <template #fxoroMail>
                <NuxtLink to="mailto:cs@fxoro.com">cs@fxoro.com</NuxtLink>
              </template>
            </i18n-t>
          </div>
          <div class="privacyAndSecurityPolicy-sectionRemarketing">
            <h2
              v-html="t('contentPASP.sectionRemarketing.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionRemarketing.para1')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionRemarketing.para2')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionRemarketing.para3')"
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionYourRights">
            <h2
              v-html="t('contentPASP.sectionYourRights.title')"
              tabindex="0"
            />
            <p v-html="t('contentPASP.sectionYourRights.para1')" tabindex="0" />
          </div>
          <div class="privacyAndSecurityPolicy-sectionRightToRequest">
            <h2
              v-html="t('contentPASP.sectionRightToRequest.title')"
              tabindex="0"
            />
            <ol>
              <li
                v-for="nr in 3"
                v-html="t(`contentPASP.sectionRightToRequest.list.list${nr}`)"
                tabindex="0"
              />
            </ol>
          </div>
          <div class="privacyAndSecurityPolicy-sectionAffiliates">
            <h2
              v-html="t('contentPASP.sectionAffiliates.title')"
              tabindex="0"
            />
            <p v-html="t('contentPASP.sectionAffiliates.para1')" tabindex="0" />
            <ol>
              <li
                v-for="nr in 2"
                v-html="t(`contentPASP.sectionRightToRequest.list.list${nr}`)"
                tabindex="0"
              />
            </ol>
            <p v-html="t('contentPASP.sectionAffiliates.para2')" tabindex="0" />
          </div>
          <div class="privacyAndSecurityPolicy-sectionEnforcement">
            <h2
              v-html="t('contentPASP.sectionEnforcement.title')"
              tabindex="0"
            />
            <i18n-t
              keypath="contentPASP.sectionEnforcement.para1"
              tag="p"
              scope="global"
              tabindex="0"
            >
              <template #complaintsMail>
                <NuxtLink to="mailto:complaints@fxoro.com"
                  >complaints@fxoro.com</NuxtLink
                >
              </template>
              <template #logoText> FXORO </template>
            </i18n-t>
            <i18n-t
              keypath="contentPASP.sectionEnforcement.para2"
              tag="p"
              scope="global"
              tabindex="0"
            >
              <template #dpoMail>
                <NuxtLink to="mailto:dpo@fxoro.com">dpo@fxoro.com</NuxtLink>
              </template>
              <template #logoText> FXORO </template>
            </i18n-t>
          </div>
          <div class="privacyAndSecurityPolicy-sectionAmendments">
            <h2
              v-html="t('contentPASP.sectionAmendments.title')"
              tabindex="0"
            />
            <p v-html="t('contentPASP.sectionAmendments.para1')" tabindex="0" />
          </div>
          <div class="privacyAndSecurityPolicy-sectionGoverningLaw">
            <h2
              v-html="t('contentPASP.sectionGoverningLaw.title')"
              tabindex="0"
            />
            <p
              v-html="t('contentPASP.sectionGoverningLaw.para1')"
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionConsent">
            <h2 v-html="t('contentPASP.sectionConsent.title')" tabindex="0" />
            <p v-html="t('contentPASP.sectionConsent.para1')" tabindex="0" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
