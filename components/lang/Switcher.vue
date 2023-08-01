<script setup lang="ts">
import { gsap } from "gsap";
import { onClickOutside, useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
// import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const mobileOpenTrigger = useMobileOpenTrigger();
const menuBreakpoint = ref<number>(991);

const animationDuration = useAnimationDuration();

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const languageSwitcherEl = ref<null | HTMLElement>(null);
const languageSwitcherButtonEl = ref<null | HTMLElement>(null);
const languageNavigationEl = ref<null | HTMLElement>(null);
const languageItemsEl = ref<HTMLElement[]>([]);

const openCloseTL = gsap.timeline({
  paused: true,
  defaults: {
    ...gsapTimelineDefaults(),
  },
  onComplete: () => {},
});

class LanguageSwitcher {
  localesArray = [...locales.value];
  menuOpened: boolean = false;

  ariaExpanded(ariaExpanded: boolean): void {
    if (languageSwitcherButtonEl.value != null) {
      languageSwitcherButtonEl.value.setAttribute(
        "aria-expanded",
        String(ariaExpanded)
      );
    }
  }

  setLangMenuAnimation(): void {
    gsap.set(languageNavigationEl.value, useDropDownAnimations.set());
    openCloseTL.to(languageNavigationEl.value, useDropDownAnimations.open());
  }

  handleClick(): void {
    if (this.menuOpened === false) {
      this._openLangMenu();
      this.ariaExpanded(true);
    } else {
      this.closeLangMenu();
      this.ariaExpanded(false);
    }

    languageSwitcherEl.value?.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          this.closeLangMenu();
          break;

        case "ArrowDown":
          e.preventDefault();
          break;

        case "ArrowRight":
          e.preventDefault();
          // nextLang();
          break;

        case "ArrowUp":
          e.preventDefault();
          // prevLang();
          break;

        case "ArrowLeft":
          e.preventDefault();
          // prevLang();
          break;

        case "Tab":
          // this.closeLangMenu();
          // nextLang();
          break;

        default:
          break;
      }
    });
  }

  private _openLangMenu(): void {
    this.menuOpened = true;
    openCloseTL.play();
  }

  closeLangMenu(anim: boolean = true): void {
    this.menuOpened = false;
    this.ariaExpanded(false);
    openCloseTL.reverse().duration(anim ? animationDuration : 0);
  }

  returnLocaleName(): string {
    const details = this.localesArray.filter((localeItem) => {
      if (typeof localeItem === "string") return localeItem;

      // console.log(locale);
      if (localeItem.code === locale.value) {
        return localeItem.name;
      }
    });

    return typeof details[0] === "string"
      ? details[0]
      : details[0].name === undefined
      ? ""
      : details[0].name;
  }

  handleClickOnLang() {
    this.closeLangMenu();

    if (width.value > menuBreakpoint.value) return;

    setTimeout(() => {
      mobileOpenTrigger.value++; // trigger the menu to close
    }, animationDuration * 1000);
  }
}

const langSwitch = new LanguageSwitcher();

onMounted(() => {
  langSwitch.setLangMenuAnimation();
});

onClickOutside(languageSwitcherEl, (event) => {
  langSwitch.closeLangMenu();
});

watch(width, () => {
  if (!langSwitch.menuOpened) return;
  langSwitch.closeLangMenu(false);
});

interface LangSwitchLabel {
  [key: string]: string;
}

const langSwitchLabel: LangSwitchLabel = {
  en: "Language Switcher",
  it: "Selettore di lingua",
  tr: "Dil Değiştirici",
  ro: "Comutator de limbă",
  ar: "محول اللغة",
  de: "Sprachumschalter",
  es: "Selector de idioma",
  sv: "Språkväxlare",
  pt: "Troca de idioma",
  fi: "Kielen vaihtaja",
  pl: "Przełącznik języka",
  hu: "Nyelvváltó",
  th: "ตัวเปลี่ยนภาษา",
  ms: "Pemintas Bahasa",
};
</script>

<template>
  <nav class="scssecoLanguageSwitcher" ref="languageSwitcherEl" :id="id">
    <button
      ref="languageSwitcherButtonEl"
      @click.native="langSwitch.handleClick()"
      class="scssecoLanguageSwitcher__activeLang"
      :aria-labelledby="`${id}-scssecoLanguageSwitcherLabel`"
      aria-controls="languageNavigation"
      :aria-expanded="langSwitch.menuOpened"
    >
      <span
        class="sr-only"
        :id="`${id}-scssecoLanguageSwitcherLabel`"
        :lang="locale"
      >
        {{ langSwitchLabel[locale] }}
      </span>
      <nuxt-img
        :src="`/images/flags/${locale}.svg`"
        class="scssecoLanguageSwitcher__languageFlag"
        width="32"
        height="32"
        aria-hidden="true"
      />
      {{ langSwitch.returnLocaleName() }}
    </button>
    <ul
      ref="languageNavigationEl"
      class="scssecoLanguageSwitcher__languages"
      :id="`${id}-languageNavigation`"
    >
      <li
        v-for="(lcle, index) in locales"
        :key="useReturnLocalCodeOrName(lcle)"
        class="scssecoLanguageSwitcher__language"
        ref="languageItemsEl"
        :data-position="index + 1"
      >
        <!-- :external="true" -->
        <NuxtLink
          :to="switchLocalePath(useReturnLocalCodeOrName(lcle))"
          class="scssecoLanguageSwitcher__languageLink"
          role="button"
          :lang="useReturnLocalCodeOrName(lcle)"
          @click="langSwitch.handleClickOnLang()"
        >
          <nuxt-img
            :src="`/images/flags/${useReturnLocalCodeOrName(lcle)}.svg`"
            class="scssecoLanguageSwitcher__languageFlag"
            width="32"
            height="32"
            aria-hidden="true"
            :alt="useReturnLocalCodeOrName(lcle, 'name')"
          />
          <span :lang="useReturnLocalCodeOrName(lcle)">
            {{ useReturnLocalCodeOrName(lcle, "name") }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@layer components {
  .scssecoLanguageSwitcher {
    position: relative;
    &__activeLang,
    &__language a {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
      justify-content: flex-start;
    }
    &__activeLang {
      background: transparent;
      border: 0;
      padding-inline: 0.5rem 0;
      padding-block: 0.5rem;
      color: var(--clr-white);

      cursor: pointer;
      img {
        border-color: var(--clr-white);
      }
    }
    &__languages {
      transform-origin: top;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 0.5rem;
      margin: 1rem 0 0 0;
      // overflow-x: hidden;
      // overflow-y: auto;
      overflow: hidden;
      padding: 0.5rem;
      position: absolute;
      top: 80%;
      width: 180px;
      z-index: 1;

      background-color: var(--clr-white);
      // border-radius: 0.3rem;
      border: 1px solid var(--clr-black);
      box-shadow: 0px 3px 7px -2px hsla(var(--clr-brandPrimaryColor-hue), var(--clr-brandPrimaryColor-saturation), var(--clr-brandPrimaryColor-lightness), 0.75);
      list-style: none;
    }
    &__language {
      &.active {
      }
    }
    &__languageLink {
      align-content: center;
      align-items: center;
      color: var(--clr-black);
      flex-direction: row;
      display: flex;
      gap: 0.5rem;
      justify-content: flex-start;
      &.router-link-active,
      &.router-link-exact-active {
        font-weight: bold;
      }
      &:hover {
        color: var(--clr-black);
      }
    }
    &__languageFlag {
      border-radius: 50%;
      border: 2px solid var(--clr-brandPrimaryColor);
      height: 27px;
      object-fit: cover;
      width: 27px;
    }
  }
}
</style>
