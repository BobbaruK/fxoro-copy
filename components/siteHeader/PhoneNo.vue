<script setup lang="ts">
// import { watchOnce } from "@vueuse/core";

const { t, locale } = useI18n({
  useScope: "local",
  messages: {
    en: {
      phoneNumberLabel: "Phone Number",
      phoneNumber: "+357 25.20.5555",
    },
    it: {
      phoneNumberLabel: "Numero di telefono",
      phoneNumber: "+39 06.880.60.026",
    },
    tr: {
      phoneNumberLabel: "Telefon Numarası",
      phoneNumber: "+357 25.20.5555",
    },
    ro: {
      phoneNumberLabel: "Număr de telefon",
      phoneNumber: "+40 374-32-7000",
    },
    ar: {
      phoneNumberLabel: "رقم الهاتف",
      phoneNumber: "+357 2520-5551",
    },
    de: {
      phoneNumberLabel: "Telefonnummer",
      phoneNumber: "+357 25.20.5555",
    },
    es: {
      phoneNumberLabel: "Número de teléfono",
      phoneNumber: "+357 25.20.5555",
    },
    sv: {
      phoneNumberLabel: "Telefonnummer",
      phoneNumber: "+46 812-1420-122",
    },
    pt: {
      phoneNumberLabel: "Número de telefone",
      phoneNumber: "+351 211 452 618",
    },
    fi: {
      phoneNumberLabel: "Puhelinnumero",
      phoneNumber: "+358 (94) 272 2262",
    },
    pl: {
      phoneNumberLabel: "Numer telefonu",
      phoneNumber: "+48 12 881 88 84",
    },
    hu: {
      phoneNumberLabel: "Telefonszám",
      phoneNumber: "+357 25.20.5555",
    },
    th: {
      phoneNumberLabel: "หมายเลขโทรศัพท์",
      phoneNumber: "+357 25.20.5555",
    },
    ms: {
      phoneNumberLabel: "Nombor Telefon",
      phoneNumber: "+357 25.20.5555",
    },
    vi: {
      phoneNumberLabel: "Số điện thoại",
      phoneNumber: "+357 25.20.5555",
    },
  },
});

const phoneNumber = ref(null);
const phone = ref<string>(
  t("phoneNumber")
    .replaceAll(".", "")
    .replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "")
);

watch(locale, () => {
  phone.value = t("phoneNumber")
    .replaceAll(".", "")
    .replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "");
});

const phoneIcon = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' %3E%3Cpath fill='currentColor' d='M16.5 11q-.425 0-.713-.288T15.5 10q0-.425.288-.713T16.5 9q.425 0 .713.288T17.5 10q0 .425-.288.713T16.5 11ZM14 8.55L12.95 7.5q.725-.725 1.638-1.112T16.5 6q1 0 1.913.388T20.05 7.5L19 8.55q-.5-.5-1.137-.775T16.5 7.5q-.725 0-1.363.275T14 8.55ZM11.9 6.4l-1.05-1.05q1.125-1.125 2.588-1.737T16.5 3q1.6 0 3.063.613T22.15 5.35L21.1 6.4q-.925-.925-2.113-1.413T16.5 4.5q-1.3 0-2.475.5T11.9 6.4ZM19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3Z' /%3E%3C/svg%3E")`;
</script>

<template>
  <div ref="phoneNumber" class="phoneNumber">
    <a :href="`tel:${phone}`" aria-labelledby="phoneNumberLabel">
      <span class="sr-only" id="phoneNumberLabel" :lang="locale">
        {{ t("phoneNumberLabel") }}
      </span>
      <SVGMask :svg-encoded="phoneIcon" />
      <span dir="ltr">
        {{ t("phoneNumber") }}
      </span>
    </a>
  </div>
</template>

<style lang="scss">
.phoneNumber {
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;

    color: var(--clr-white);
  }
  .svgEncode {
    font-size: 1.8rem;
  }
}
</style>
