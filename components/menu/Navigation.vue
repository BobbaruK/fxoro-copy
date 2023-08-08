<script setup lang="ts">
import { useMouse, useWindowSize, watchOnce } from "@vueuse/core";
const { width } = useWindowSize();
const { sourceType } = useMouse();

import { gsap } from "gsap";

const props = defineProps({
  menuItems: {
    type: Object,
    required: true,
  },
  test: {
    type: String,
  },
});

const localePath = useLocalePath();
const { t, locale } = useI18n();

const mobileOpen = ref<boolean>(false);
const menuBreakpoint = ref<number>(991);
const mobileOpenTrigger = useMobileOpenTrigger();

const animationDuration = useAnimationDuration();
const animationEase = useAnimationEase();

const isMobile = ref<boolean>(
  useCheckIfMobile(width.value, menuBreakpoint.value)
);

const navigationWrapper = ref<null | undefined | HTMLElement>(null);
const allChildsAndGrandChildsUL = ref([]);

const gsapTlDefaults = {
  paused: true,
  defaults: {
    ...gsapTimelineDefaults(),
  },
};
const menuAnimations = gsap.timeline(gsapTlDefaults);

watchOnce(navigationWrapper, () => {
  const navInner: gsap.TweenTarget =
    navigationWrapper.value != null || navigationWrapper.value != undefined
      ? navigationWrapper.value.querySelector(".navInner")
      : ".navInner";

  gsap.set(navInner, {
    yPercent: -100,
    opacity: 0,
    pointerEvents: "none",
    visibility: "hidden",
    // ...useDropDownAnimations.set()
  });

  menuAnimations.to(navInner, {
    // is paused
    yPercent: 0,
    opacity: 1,
    pointerEvents: "all",
    visibility: "visible",
    // ...useDropDownAnimations.open()
  });

  siteNav.resetChildrenAndGrandChildren(false);

  navigationWrapper.value?.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (width.value <= menuBreakpoint.value) {
        siteNav.openCloseMenuAction();
        return;
      }
      siteNav.resetChildrenAndGrandChildren();
    }
  });

  if (width.value > menuBreakpoint.value) {
    menuAnimations.duration(0).play();
  }
});

watch(width, () => {
  if (width.value <= menuBreakpoint.value) {
    isMobile.value = true;
    mobileOpen.value = false;

    menuAnimations.duration(0).reverse();
  } else {
    isMobile.value = false;
    mobileOpen.value = true;

    menuAnimations.duration(0).play();
  }

  siteNav.resetChildrenAndGrandChildren();
});

class SiteNavigation {
  openChildMenu(target: HTMLElement) {
    this.resetChildrenAndGrandChildren();

    const parent = target.parentElement as HTMLElement;
    const subMenuEl = parent.nextElementSibling as HTMLElement;

    Array.from(subMenuEl.children).forEach((child: Element) => {
      child.querySelector("a")?.setAttribute("tabindex", "0");
    });

    const subMenuTween: gsap.TweenTarget = parent.nextElementSibling;
    const caret = target.querySelector(".caretWrapper") as HTMLElement;

    target.setAttribute("aria-expanded", "true");

    gsap.to(subMenuTween, {
      ...useDropDownAnimations.open(),
      ...gsapTimelineDefaults(),
    });
    gsap.to(caret, {
      rotate: 180,
      duration: animationDuration,
      ease: animationEase,
    });
  }

  closeChildMenu(target: HTMLElement) {
    const parent = target.parentElement as HTMLElement;
    const subMenuEl = parent.nextElementSibling as HTMLElement;

    Array.from(subMenuEl.children).forEach((child: Element) => {
      child.querySelector("a")?.setAttribute("tabindex", "-1");
    });

    const subMenuTween: gsap.TweenTarget = parent.nextElementSibling;
    const caret = target.querySelector(".caretWrapper") as HTMLElement;

    target.setAttribute("aria-expanded", "false");

    gsap.to(subMenuTween, {
      ...useDropDownAnimations.set(),
      ...gsapTimelineDefaults(),
    });
    gsap.to(caret, {
      rotate: 0,
      duration: animationDuration,
      ease: animationEase,
    });
  }

  openCloseChildrenItems(event: PointerEvent) {
    const target = event.target as HTMLElement;

    if (target.getAttribute("aria-expanded") == "false") {
      this.openChildMenu(target);

      return;
    }

    this.closeChildMenu(target);
  }

  openCloseMenuAction() {
    menuAnimations.duration(animationDuration);

    mobileOpen.value = !mobileOpen.value;

    if (mobileOpen.value) {
      menuAnimations.play();
      return;
    }

    menuAnimations.reverse();
    this.resetChildrenAndGrandChildren();
  }

  resetChildrenAndGrandChildren(anim: boolean = true) {
    allChildsAndGrandChildsUL.value.forEach((child: HTMLElement) => {
      const childEl = child as HTMLElement;

      Array.from(childEl.children).forEach((child: Element) => {
        child.querySelector("a")?.setAttribute("tabindex", "-1");
      });

      gsap.to(childEl, {
        // height: 0,
        ...useDropDownAnimations.set(),
        duration: anim ? animationDuration : 0,
      });

      if (childEl.previousElementSibling != null) {
        const caretButton =
          childEl.previousElementSibling.querySelector("button");
        caretButton?.setAttribute("aria-expanded", "false");

        gsap.to(childEl.previousElementSibling.querySelector(".caretWrapper"), {
          rotate: 0,
          duration: anim ? animationDuration : 0,
        });
      }
    });
  }

  mouseEnter(event: PointerEvent) {
    if (sourceType.value === "touch") return;
    if (width.value <= menuBreakpoint.value) return;

    const target = event.target as HTMLElement;

    if (target.querySelector("ul") === null) return;

    const el = target.querySelector(
      "button[aria-expanded=false]"
    ) as HTMLElement;

    this.openChildMenu(el);
  }

  mouseLeave(event: PointerEvent) {
    if (sourceType.value === "touch") return;
    if (width.value <= menuBreakpoint.value) return;

    const target = event.target as HTMLElement;

    if (target === null) return;

    const el = target.querySelector(
      "button[aria-expanded=true]"
    ) as HTMLElement;

    if (el === null) return;
    this.closeChildMenu(el);
  }
}

const siteNav = new SiteNavigation();

onClickOutside(navigationWrapper, (e: PointerEvent) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("menu-burger")) return;

  const caretButton = navigationWrapper.value?.querySelector(
    'button[aria-expanded="true"]'
  ) as HTMLElement;

  if (width.value <= menuBreakpoint.value && mobileOpen.value) {
    siteNav.openCloseMenuAction();
  }

  if (caretButton == null) return;

  siteNav.closeChildMenu(caretButton);
});

watch(mobileOpenTrigger, () => {
  siteNav.openCloseMenuAction();
});

const resetSubMenuAndCloseMenu = () => {
  siteNav.resetChildrenAndGrandChildren();

  if (width.value <= menuBreakpoint.value && mobileOpen.value) {
    siteNav.openCloseMenuAction();
  }
};
</script>

<template>
  <div class="navigation" ref="navigationWrapper">
    <div class="navInner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <ClientOnly>
              <div v-if="isMobile" class="navigation__mobileUserActions">
                <LangSwitcher id="mobileLangSwitcher" />
                <SiteHeaderPhoneNo />
                <SiteLogin />
              </div>
            </ClientOnly>
            <div class="navigation__mainNavigation">
              <nav>
                <ul class="navigation__menu">
                  <li
                    v-for="(item, index) in menuItems"
                    :key="item.routeLabel"
                    @mouseenter="siteNav.mouseEnter"
                    @mouseleave="siteNav.mouseLeave"
                  >
                    <div class="navigation__linkCaretWrapper">
                      <NuxtLink
                        :to="localePath(item.route)"
                        @click="resetSubMenuAndCloseMenu()"
                      >
                        <span v-html="t(item.routeLabel)" />
                      </NuxtLink>
                      <button
                        class="navigation__carret"
                        v-if="'children' in item"
                        @click="siteNav.openCloseChildrenItems"
                        aria-expanded="false"
                        :aria-labelledby="`caretLabel-${index}`"
                        :data-target="item.routeLabel"
                      >
                        <span class="sr-only" :id="`caretLabel-${index}`">
                          {{ t(item.routeLabel) }}
                        </span>
                        <Caret />
                      </button>
                    </div>
                    <ul
                      class="navigation__subMenu"
                      v-if="'children' in item"
                      ref="allChildsAndGrandChildsUL"
                      :data-element="item.routeLabel"
                    >
                      <li
                        v-for="childItem in item.children"
                        :key="childItem.routeLabel"
                        :class="'class' in childItem ? childItem.class : ''"
                      >
                        <span
                          v-if="'divider' in childItem"
                          v-html="t(childItem.routeLabel)"
                        />
                        <NuxtLink
                          v-else
                          :to="localePath(childItem.route)"
                          @click="resetSubMenuAndCloseMenu()"
                          tabindex="-1"
                        >
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
    </div>
  </div>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;
$menuBreakPoint: lg;

.navigation {
  position: relative;
  z-index: 9;
  .navInner {
    background: var(--clr-white);
    color: var(--clr-brandPrimaryColor-900);
    box-shadow: 0px 3px 7px -2px hsla(var(--clr-brandPrimaryColor-hue), var(--clr-brandPrimaryColor-saturation), var(--clr-brandPrimaryColor-lightness), 0.75);

    @include mxns.mediamax($menuBreakPoint) {
      inset: auto;
      max-height: min(50vh, 400px);
      overflow-y: auto;
      padding-bottom: 1rem;
      position: absolute;
      visibility: hidden;
      width: 100%;
      z-index: 1;

      opacity: 0;
      pointer-events: none;
    }
    @include mxns.mediamin($menuBreakPoint) {
      padding-block: 0.25rem;
    }
  }
  &__mainNavigation {
    z-index: 30;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
  &__menu {
    align-content: center;
    align-items: stretch;
    border-bottom: 1px solid var(--clr-brandPrimaryColor-300);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @include mxns.mediamin($menuBreakPoint) {
      justify-content: flex-start;
      border: none;
      flex-direction: row;
      flex-grow: 1;
      gap: 0.5rem;
      width: auto;
    }
    li {
      position: relative;
      border-top: 1px solid var(--clr-brandPrimaryColor-300);
      @include mxns.mediamin($menuBreakPoint) {
        border: none;
      }
      a {
        align-content: center;
        align-items: center;
        color: var(--clr-black);
        cursor: pointer;
        display: flex;
        flex-grow: 1;
        gap: 0.45rem;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        text-decoration: none;
        @include mxns.mediamin($menuBreakPoint) {
          border: none;
          padding: 0.5rem;
          flex-grow: 0;
        }
        // TODO: nu sh de ce plm nu se vede stilu asta
        &.router-link-active,
        &.router-link-exact-active {
          font-weight: bold;
        }
        &:hover {
          color: var(--clr-brandSecondaryColor-400);
          background-color: red;
        }
      }
      ul {
        @include mxns.mediamin($menuBreakPoint) {
          background: var(--clr-white);
        }
        li {
          a {
            text-indent: 1rem;
            @include mxns.mediamin($menuBreakPoint) {
              color: var(--clr-black);
              text-indent: 0;
            }
          }
          ul {
            li {
              a {
                text-indent: 2rem;
                @include mxns.mediamin($menuBreakPoint) {
                  text-indent: 0;
                }
              }
            }
          }
        }
        .caretWrapper {
          .caret {
            path {
              @include mxns.mediamin($menuBreakPoint) {
                fill: var(--clr-black);
              }
            }
          }
        }
      }
    }
    > li > .navigation__linkCaretWrapper > a {
      text-transform: uppercase;
    }
  }
  &__linkCaretWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    @include mxns.mediamin($menuBreakPoint) {
      align-items: center;
    }
  }
  &__carret {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    @include mxns.mediamax($menuBreakPoint) {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      position: relative;
      width: 40px;
      margin-block: 0.375rem;

      border-inline-start: 1px solid var(--clr-brandPrimaryColor-300);
    }

    .caretWrapper {
      pointer-events: none;
    }
  }
  &__subMenu {
    transform-origin: top;
    overflow-y: hidden;
    overflow-x: visible;
    height: 0; // so if not flashing when page is loading
    @include mxns.mediamin($menuBreakPoint) {
      box-shadow: 0px 6px 8px -2px hsla(var(--clr-brandPrimaryColor-hue), var(--clr-brandPrimaryColor-saturation), var(--clr-brandPrimaryColor-lightness), 0.75);
      background: var(--clr-white);
      position: absolute;
      width: 250px;
    }
    .divider {
      padding: 0.125rem 1rem;

      background-color: var(--clr-brandPrimaryColor);
      color: var(--clr-brandSecondaryColor);
      font-size: 80%;
      @include mxns.mediamax($menuBreakPoint) {
        text-indent: 1rem;
      }
      @include mxns.mediamin($menuBreakPoint) {
        padding: 0.125rem 0.5rem;
      }
    }
  }
}

.navigation {
  &__mobileUserActions {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem;

    color: var(--clr-brandPrimaryColor-900);

    .userLogin {
      &__userAvatar {
        border: 2px solid var(--clr-brandPrimaryColor-400);
      }
      &__profileLink {
        color: inherit;
      }
      &__loginButton {
        background-color: var(--clr-brandPrimaryColor);
        color: var(--clr-brandSecondaryColor);
      }
    }

    .phoneNumber a {
      color: inherit;
    }

    .scssecoLanguageSwitcher {
      &__activeLang {
        color: inherit;
        padding-inline: 0;
        img {
          border-color: var(--clr-brandPrimaryColor-400);
        }
      }
      &__languages {
        // max-height: 300px;
        // overflow-y: auto;
        @include mxns.mediamax(sm) {
          grid-template-columns: repeat(2, 1fr);
        }
        @include mxns.mediaminmax(sm, md) {
          grid-template-columns: repeat(3, 1fr);
        }
        @include mxns.mediaminmax(md, lg) {
          grid-template-columns: repeat(4, 1fr);
        }
        @include mxns.mediamax($menuBreakPoint) {
          display: grid;
          width: max(230px, 70vw);
        }
      }
    }
  }
}
</style>
