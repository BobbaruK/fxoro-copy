<script setup lang="ts">
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import caretPropValidation from "../Caret/composables/caretPropValidation";

const props = defineProps({
  progress: {
    type: Boolean,
    required: false,
    default: true,
  },
  caret: {
    type: String,
    required: false,
    ...caretPropValidation(),
  },
});

const { t, locale } = useI18n({
  useScope: "global",
  messages: {
    en: {
      backToTop: "Back to top",
    },
    it: {
      backToTop: "Torna su",
    },
    tr: {
      backToTop: "Başa dön",
    },
    ro: {
      backToTop: "Înapoi sus",
    },
    ar: {
      backToTop: "العودة للأعلى",
    },
    de: {
      backToTop: "Zurück nach oben",
    },
    es: {
      backToTop: "Volver arriba",
    },
    sv: {
      backToTop: "Tillbaka till toppen",
    },
    pt: {
      backToTop: "Voltar ao topo",
    },
    fi: {
      backToTop: "Takaisin ylös",
    },
    pl: {
      backToTop: "Wróć na górę",
    },
    hu: {
      backToTop: "Vissza a tetejére",
    },
    th: {
      backToTop: "กลับไปที่ด้านบน",
    },
    ms: {
      backToTop: "Kembali ke atas",
    },
    vi: {
      backToTop: "Quay lại đầu trang",
    },
  },
});

const animationDuration = useAnimationDuration();
const animationEase = useAnimationEase();

// Get the BackToTop button element
const backToTop = ref();

// Scroll to top of the page
const bttFunct = () => {
  const documentTitle = document.querySelector("h1") as HTMLElement;

  gsap.to(window, { scrollTo: "#__nuxt", duration: animationDuration });

  setTimeout(() => {
    backToTop.value.blur();
    documentTitle.focus();
  }, animationDuration * 1000);
};

// Set animation defaults
const bttAnims = gsap.timeline({
  paused: true,
  defaults: {
    duration: animationDuration,
    ease: animationEase,
  },
});

// Calculate scrolling percent
const progressPercent = ref<number>();

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  progressPercent.value = Math.round(scrollPercent * 100);

  if (progressPercent.value > 0) {
    bttAnims.play();
  } else if (progressPercent.value == 0) {
    bttAnims.reverse();
  }
});

watch(backToTop, () => {
  gsap.set(backToTop.value, {
    autoAlpha: 0,
    yPercent: 70,
  });

  // animate opacity and position
  bttAnims.to(backToTop.value, {
    autoAlpha: 1,
    yPercent: 0,
  });
});
</script>

<template>
  <button
    ref="backToTop"
    @click="bttFunct"
    class="backToTop"
    aria-labelledby="backToTopLabel"
  >
    <span class="sr-only" id="backToTopLabel" :lang="locale">
      {{ t("backToTop") }}
    </span>
    <Caret :caret="caret" class="backToTop__caret" />
    <div
      v-if="progress"
      class="backToTop__progress"
      :style="{ height: progressPercent + '%' }"
    ></div>
  </button>
</template>

<style lang="scss">
// @use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

.backToTop {
  align-content: center;
  align-items: center;
  background: var(--clr-brandSecondaryColor);
  border-radius: 0.25rem;
  border: 1px solid var(--clr-brandPrimaryColor);
  box-shadow: 0px 3px 7px -2px hsla(var(--clr-brandPrimaryColor-hue), var(--clr-brandPrimaryColor-saturation), var(--clr-brandPrimaryColor-lightness), 0.75);
  color: var(--clr-brandSecondaryColor);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 20px;
  font-size: clamp(1.875rem, 1.838rem + 0.1852vw, 2rem);
  height: 1.5em;
  inset: auto 1rem 1rem auto;
  justify-content: center;
  opacity: 1;
  overflow: hidden;
  position: fixed;
  transition: all 320ms linear;
  width: 1.5em;
  z-index: 5;
  cursor: pointer;
  @include mxns.mediamin(sm) {
    inset: auto 1.5rem 2rem auto;
  }
  &.nearBottom,
  &:hover,
  &:focus {
    opacity: 1;
  }
  &:hover {
    background: var(--clr-brandPrimaryColor);
    .backToTop__progress {
      background: var(--clr-brandSecondaryColor);
    }
  }
  &__progress {
    background: var(--clr-brandPrimaryColor);
    height: 3px;
    inset: 0 0 auto 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  &__caret {
    transform: rotate(180deg);
    // color: black;
    mix-blend-mode: difference;
  }
}

html[dir="rtl"] {
  .backToTop {
    inset: auto auto 1rem 1rem;
    @include mxns.mediamin(sm) {
      inset: auto auto 2rem 1.5rem;
    }
    .progress {
      inset: auto 0 0 auto;
    }
  }
}
</style>
