import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

type LocaleCodeOrName = string | undefined;

export default (
  locale: string | LocaleObject,
  option?: "code" | "name"
): LocaleCodeOrName => {
  const output = ref<LocaleCodeOrName>("");

  switch (option) {
    case "code":
      output.value = typeof locale === "string" ? locale : locale.code;
      break;

    case "name":
      output.value = typeof locale === "string" ? locale : locale.name;
      break;

    default:
      output.value = typeof locale === "string" ? locale : locale.code;
      break;
  }

  return output.value;
};
