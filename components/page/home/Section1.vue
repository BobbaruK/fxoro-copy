<script setup lang="ts">
// https://crowdin.com/blog/2023/01/24/nuxt-js-i18n-tutorial
// https://vue-i18n.intlify.dev/guide/advanced/composition.html
const { t } = useI18n({
  useScope: "local",
  messages: {
    en: {
      title: "Hello <strong>{who}</strong>!",
      para: "Hello <strong>{who}</strong>!",
    },
    it: {
      title: "Ciao <strong>{who}</strong>!",
      para: "Ciao <strong>{who}</strong>!",
    },
    tr: {
      title: "Merhaba <strong>{who}</strong>!",
      para: "Merhaba <strong>{who}</strong>!",
    },
    ro: {
      title: "Salut <strong>{who}</strong>!",
      para: "Salut <strong>{who}</strong>!",
    },
    hu: {
      title: "Helló <strong>{who}</strong>!",
      para: "Helló <strong>{who}</strong>!",
    },
    ar: {
      title: "مرحبا <strong>{who}</strong>!",
      para: "مرحبا <strong>{who}</strong>!",
    },
    de: {
      title: "Hallo <strong>{who}</strong>!",
      para: "Hallo <strong>{who}</strong>!",
    },
    es: {
      title: "¡Hola <strong>{who}</strong>!",
      para: "¡Hola <strong>{who}</strong>!",
    },
    sv: {
      title: "Hej <strong>{who}</strong>!",
      para: "Hej <strong>{who}</strong>!",
    },
    pt: {
      title: "Olá <strong>{who}</strong>!",
      para: "Olá <strong>{who}</strong>!",
    },
    fi: {
      title: "Hei <strong>{who}</strong>!",
      para: "Hei <strong>{who}</strong>!",
    },
    pl: {
      title: "Cześć <strong>{who}</strong>!",
      para: "Cześć <strong>{who}</strong>!",
    },
  },
});

const user = useSupabaseUser();
</script>
<template>
  <section id="section1-home" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1
            v-html="
              t('title', {
                who: user ? user.user_metadata.user_name : 'John Doe',
              })
            "
          />
          <p
            v-html="
              t('para', {
                who: user ? user.user_metadata.user_name : 'John Doe',
              })
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
