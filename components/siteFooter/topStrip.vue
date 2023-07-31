<script setup lang="ts">
const { t } = useI18n({
  useScope: "global",
  messages: {
    en: {
      stripPara:
        "Trading FOREX/ CFDs involves considerable risk of loss of the entire investment. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Read more</a>",
    },
    it: {
      stripPara:
        "Il trading di FOREX/ CFD comporta un considerevole rischio di perdita dell'intero investimento. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Continua a leggere</a>",
    },
    tr: {
      stripPara:
        "FOREX/ CFD işlemleri, tüm yatırımınızı kaybetme riski içerir. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Daha fazla bilgi için tıklayın</a>",
    },
    ro: {
      stripPara:
        "Tranzacționarea FOREX/ CFD implică un risc considerabil de pierdere a întregului investiției. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Citiți mai mult</a>",
    },
    ar: {
      stripPara:
        "تنطوي تداول الفوركس/ العقود مقابل الفروقات على مخاطر كبيرة تتعلق بفقدان المبلغ بأكمله. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>اقرأ المزيد</a>",
    },
    de: {
      stripPara:
        "Der Handel mit FOREX/ CFDs birgt ein erhebliches Risiko des vollständigen Verlusts der Investition. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Weiterlesen</a>",
    },
    es: {
      stripPara:
        "El comercio de FOREX/ CFD implica un considerable riesgo de pérdida de toda la inversión. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Leer más</a>",
    },
    sv: {
      stripPara:
        "Handel med FOREX/ CFD innebär betydande risk för förlust av hela investeringen. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Läs mer</a>",
    },
    pt: {
      stripPara:
        "A negociação de FOREX/ CFD envolve um risco considerável de perda de todo o investimento. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Leia mais</a>",
    },
    fi: {
      stripPara:
        "FOREX/ CFD-kaupankäynti sisältää merkittävän riskin koko sijoituksen menettämisestä. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Lue lisää</a>",
    },
    pl: {
      stripPara:
        "Handel na rynku FOREX/ CFD wiąże się z znacznym ryzykiem utraty całego kapitału. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Czytaj więcej</a>",
    },
    hu: {
      stripPara:
        "A FOREX/ CFD kereskedés jelentős kockázattal járhat az egész befektetés elvesztésének kockázata miatt. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>További információ</a>",
    },
    th: {
      stripPara:
        "การซื้อขาย FOREX/ CFD นั้นเสนอความเสี่ยงในการสูญเสียที่สูงของทุนลงทุนทั้งหมด <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>อ่านเพิ่มเติม</a>",
    },
    ms: {
      stripPara:
        "Perdagangan FOREX/ CFD melibatkan risiko kerugian yang besar terhadap keseluruhan pelaburan. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Baca lebih lanjut</a>",
    },
    vi: {
      stripPara:
        "Giao dịch FOREX/ CFD liên quan đến rủi ro đáng kể mất toàn bộ khoản đầu tư. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Đọc thêm</a>",
    },
  },
});

const messages = {
  en: {
    stripPara:
      "Trading FOREX/ CFDs involves considerable risk of loss of the entire investment. <a href='https://fxoro.com/wp-content/uploads/Risk_discolure_and_warning_notice.pdf'>Read more</a>",
  },
  it: {
    stripPara: "",
  },
  tr: {
    stripPara: "",
  },
  ro: {
    stripPara: "",
  },
  ar: {
    stripPara: "",
  },
  de: {
    stripPara: "",
  },
  es: {
    stripPara: "",
  },
  sv: {
    stripPara: "",
  },
  pt: {
    stripPara: "",
  },
  fi: {
    stripPara: "",
  },
  pl: {
    stripPara: "",
  },
  hu: {
    stripPara: "",
  },
  th: {
    stripPara: "",
  },
  ms: {
    stripPara: "",
  },
  vi: {
    stripPara: "",
  },
};
</script>

<template>
  <div class="topFooterStrip">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 topFooterStripInner">
          <p v-html="t('stripPara')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.topFooterStrip {
  margin: 2rem 0;
  padding: 1rem 0;

  font-size: 0.8rem;

  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-white);

  .topFooterStripInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  p {
    margin: 0;

    font-size: clamp(1rem, 1rem + 0.1429vw, 1.125rem);
    text-align: center;
  }

  a {
    color: var(--clr-brandSecondaryColor);
  }
}
</style>
