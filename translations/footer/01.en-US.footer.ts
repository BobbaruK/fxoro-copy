const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_EN() {
  return {
    social: {
      followUsOn: "Follow us on",
      getOurApp: "Get our app",
      getOurAppFromApple: `Get our app from <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `Get our app from <span lang="en">Google Play</span>`,
    },
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
  };
}

export default footer_EN;
