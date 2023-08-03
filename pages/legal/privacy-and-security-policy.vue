<script setup lang="ts">
// TODO: make a composable
const url = useRequestURL();
const currentUrl = url.href; // https://example.com:3000/hello-world
const protocol = url.protocol; // https:
const host = url.host; // example.com:3000
const hostname = url.hostname; // example.com
const pathname = url.pathname; // /hello-world.

useHead({
  link: [
    { rel: "dns-prefetch", href: `${protocol}//${host}${pathname}` },
    { rel: "preconnect", href: `${protocol}//${host}${pathname}` },
  ],
});
/**
 * translations
 */
const { t } = useI18n();

/**
 * seo
 */
useSeoMeta({
  title: `${t("privacyAndSecurityPolicy.seo.metaTitle")} | FXORO`,
  description: t("privacyAndSecurityPolicy.seo.metaDescription"),
  ogTitle: `${t("privacyAndSecurityPolicy.seo.metaTitle")} | FXORO`,
  ogDescription: t("privacyAndSecurityPolicy.seo.metaDescription"),
  ogUrl: `${protocol}//${host}${pathname}`,
  twitterTitle: `${t("privacyAndSecurityPolicy.seo.metaTitle")} | FXORO`,
  twitterDescription: t("privacyAndSecurityPolicy.seo.metaDescription"),
});
useCheckLang();

/**
 * logic
 */
</script>
<template>
  <section id="section1-privacyAndSecurityPolicy" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1
            v-html="t('privacyAndSecurityPolicy.seo.metaTitle')"
            tabindex="0"
          />
          <div class="privacyAndSecurityPolicy-sectionTop">
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionTop.para1')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionTop.para2')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionTop.para3')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionTop.para4')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionTop.para5')
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionInfoWeCollect">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionInfoWeCollect.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionInfoWeCollect.para1'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionInfoWeCollect.para2'
                )
              "
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 9"
                v-html="
                  t(
                    `privacyAndSecurityPolicy.contentPASP.sectionInfoWeCollect.list.list${nr}`
                  )
                "
                tabindex="0"
              />
            </ul>
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionInfoWeCollect.para3'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionInfoWeCollect.para4'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionProtectPersonalInfo">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionProtectPersonalInfo.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionProtectPersonalInfo.para1'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionProtectPersonalInfo.para2'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionLinks">
            <h2
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionLinks.title')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionLinks.para1')
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionProcessPersonalInfo">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionProcessPersonalInfo.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionProcessPersonalInfo.para1'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionSecurity">
            <h2
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionSecurity.title')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionSecurity.para1')
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionAnonymusStatInfo">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionAnonymusStatInfo.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionAnonymusStatInfo.para1'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionIdentifiableInfo">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionIdentifiableInfo.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionIdentifiableInfo.para1'
                )
              "
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 14"
                v-html="
                  t(
                    `privacyAndSecurityPolicy.contentPASP.sectionIdentifiableInfo.list.list${nr}`
                  )
                "
                tabindex="0"
              />
            </ul>
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionIdentifiableInfo.para2'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionIdentifiableInfo.para3'
                )
              "
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 3"
                v-html="
                  t(
                    `privacyAndSecurityPolicy.contentPASP.sectionIdentifiableInfo.list2.list${nr}`
                  )
                "
                tabindex="0"
              />
            </ul>
          </div>
          <div class="privacyAndSecurityPolicy-sectionOptOut">
            <h2
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionOptOut.title')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionOptOut.para1')
              "
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 4"
                v-html="
                  t(
                    `privacyAndSecurityPolicy.contentPASP.sectionOptOut.list.list${nr}`
                  )
                "
                tabindex="0"
              />
            </ul>
            <i18n-t
              keypath="privacyAndSecurityPolicy.contentPASP.sectionOptOut.para2"
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
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionOptOut.para3')
              "
              tabindex="0"
            />
            <ul>
              <li
                v-for="nr in 3"
                v-html="
                  t(
                    `privacyAndSecurityPolicy.contentPASP.sectionOptOut.list2.list${nr}`
                  )
                "
                tabindex="0"
              />
            </ul>
          </div>
          <div class="privacyAndSecurityPolicy-sectionTransferData">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionTransferData.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionTransferData.para1'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionUpdateInfo">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionUpdateInfo.title'
                )
              "
              tabindex="0"
            />
            <i18n-t
              keypath="privacyAndSecurityPolicy.contentPASP.sectionUpdateInfo.para1"
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
            <h2
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionCookies.title')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionCookies.para1')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionCookies.para2')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionCookies.para3')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionCookies.para4')
              "
              tabindex="0"
            />
            <i18n-t
              keypath="privacyAndSecurityPolicy.contentPASP.sectionCookies.para5"
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
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionRemarketing.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionRemarketing.para1'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionRemarketing.para2'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionRemarketing.para3'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionYourRights">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionYourRights.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionYourRights.para1'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionRightToRequest">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionRightToRequest.title'
                )
              "
              tabindex="0"
            />
            <ol>
              <li
                v-for="nr in 3"
                v-html="
                  t(
                    `privacyAndSecurityPolicy.contentPASP.sectionRightToRequest.list.list${nr}`
                  )
                "
                tabindex="0"
              />
            </ol>
          </div>
          <div class="privacyAndSecurityPolicy-sectionAffiliates">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionAffiliates.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionAffiliates.para1'
                )
              "
              tabindex="0"
            />
            <ol>
              <li
                v-for="nr in 2"
                v-html="
                  t(
                    `privacyAndSecurityPolicy.contentPASP.sectionRightToRequest.list.list${nr}`
                  )
                "
                tabindex="0"
              />
            </ol>
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionAffiliates.para2'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionEnforcement">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionEnforcement.title'
                )
              "
              tabindex="0"
            />
            <i18n-t
              keypath="privacyAndSecurityPolicy.contentPASP.sectionEnforcement.para1"
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
              keypath="privacyAndSecurityPolicy.contentPASP.sectionEnforcement.para2"
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
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionAmendments.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionAmendments.para1'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionGoverningLaw">
            <h2
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionGoverningLaw.title'
                )
              "
              tabindex="0"
            />
            <p
              v-html="
                t(
                  'privacyAndSecurityPolicy.contentPASP.sectionGoverningLaw.para1'
                )
              "
              tabindex="0"
            />
          </div>
          <div class="privacyAndSecurityPolicy-sectionConsent">
            <h2
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionConsent.title')
              "
              tabindex="0"
            />
            <p
              v-html="
                t('privacyAndSecurityPolicy.contentPASP.sectionConsent.para1')
              "
              tabindex="0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
